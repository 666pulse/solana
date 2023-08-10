---
sidebar_position: 103
sidebar_label: 🔀 使用交换板随机分配战利品
sidebar_class_name: green
---

# 🔀 使用交换板随机分配战利品

现在我们将介绍简单战利品箱实现的解决方案。我们将创建一个新程序，用于创建战利品箱，并从中获取物品。

我们将要审查的解决方案代码是`Anchor NFT Staking`存储库中的`solution-naive-loot-boxes`分支之一。

我再次建议你自己尝试做，而不是复制粘贴解决方案代码。

在 programs 目录中，您可以使用 `anchor new <program-name>` 来创建一个新的程序，我们称之为 `lootbox-program` 。

如果你看一下， `Anchor.toml` 文件中`nft-staking`程序的ID已经改变了，我们还添加了一个loot box程序的ID。你需要在你的端更新这两个ID。

首先，让我们回顾一下我们对[原始质押计划](https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/programs/anchor-nft-staking/src/lib.rs?utm_source=buildspace.so&utm_medium=buildspace_project)所做的更改。

如果您向下滚动到 UserStakeInfo 对象，我们添加了 total_earned 字段。基本上，它会跟踪用户的质押旅程，随着时间的推移，他们会赚取更多的奖励，并且当他们达到新的里程碑时，将会获得更多的战利品盒子物品。

相关的，看一下 redeem_amount 。

首先，您会注意到有一些被注释掉的注释，这只是为了我们有足够的令牌来进行测试。确保在测试时正确地注释/取消注释代码。

往下滚动一点，你会看到这一行新添加的内容。

```rust
ctx.accounts.stake_state.total_earned += redeem_amount as u64;
```

这是一种追踪总收入的方式，从0开始。然后您添加已兑换的金额，这将成为新的总收入。

在下面的解除质押功能中，您还会看到测试说明和赎回金额都会发生变化。

最后，在这个文件中还有一个最后的更改。如果你的程序和我的完全相同，当我们运行它时，由于添加了这个新字段，我们会在堆栈中耗尽空间。我选择了一个随机的账户，并在其周围放置了一个盒子，以确保它被分配到堆中，而不是栈中，以解决这个空间问题。你可以在用户的stake ATA上进行操作，或者选择任何其他账户。

```rust
pub user_stake_ata: Box<Account<'info, TokenAccount>>,
```

好的，让我们进入新的战利品箱计划的文件。

在 Cargo.toml 中，您会注意到我们为我们原始的锚定NFT质押程序添加了一个新的依赖项。

```toml
[dependencies]
anchor-lang = { version="0.25.0", features=["init-if-needed"] }
anchor-spl = "0.25.0"
anchor-nft-staking = { path = "../anchor-nft-staking", features = ["cpi"] }
```

现在让我们进入主要的[战利品箱程序文件](https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/programs/lootbox-program/src/lib.rs?utm_source=buildspace.so&utm_medium=buildspace_project)。

在使用语句中，你会注意到我们现在导入了锚定 NFT 抵押，这样我们就可以检查总收益字段。

```rust
use anchor_lang::prelude::*;
use anchor_nft_staking::UserStakeInfo;
use anchor_spl::token;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{Burn, Mint, MintTo, Token, TokenAccount},
};
```

在这里，我们只有两个指令， open_lootbox 和 retrieve_item_from_lootbox 。之所以有两个指令，是因为当你说“给我一个随机的战利品”，而程序正在决定要铸造和给予的所有可能物品时，客户端必须传入所有可能的铸造账户。这会使程序变得不太灵活，并增加检查一堆不同账户以确保有选项的开销，对客户端来说也非常烦人。因此，我们创建了一个用于打开战利品箱的指令，基本上是确保在所有可能的铸造选项中，给我一个。我们还选择了这个地方作为支付的地方，这是我们将烧毁BLD代币的地方。至于第二个指令，在这一点上，客户端知道他们将获得哪个铸造物品，并可以传入该信息，然后我们可以从中铸造。

首先，让我们来打开战利品箱，这是我们需要的账号。

```rust
#[derive(Accounts)]
pub struct OpenLootbox<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        init_if_needed,
        payer = user,
        space = std::mem::size_of::<LootboxPointer>() + 8,
        seeds=["lootbox".as_bytes(), user.key().as_ref()],
        bump
    )]
    pub lootbox_pointer: Account<'info, LootboxPointer>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    // Swap the next two lines out between prod/testing
    // #[account(mut)]
    #[account(
        mut,
        address="6YR1nuLqkk8VC1v42xJaPKvE9X9pnuqVAvthFUSDsMUL".parse::<Pubkey>().unwrap()
    )]
    pub stake_mint: Account<'info, Mint>,
    #[account(
        mut,
        associated_token::mint=stake_mint,
        associated_token::authority=user
    )]
    pub stake_mint_ata: Account<'info, TokenAccount>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    #[account(
        constraint=stake_state.user_pubkey==user.key(),
    )]
    pub stake_state: Account<'info, UserStakeInfo>,
}
```

你会注意到一个新的叫做 lootbox_pointer 的东西，它是一种新类型。它有一个薄荷，一个布尔值表示是否已经被认领，以及is_initialized。

这是一个与用户相关联的PDA，因此“战利品箱”和 user 是它的种子。这样做的好处是，当我们选择一个薄荷时，我们不能将数据返回给客户端，而是将其存储在某个账户中。因此，这是一个用户可以查看以检索物品的PDA。

另外需要注意的是，有一行以“Swap”开头的注释行，为了使测试正常工作，请取消注释这些行，并将其他包含心智地址的 stake_mint 属性行注释掉。


```rust
#[account]
pub struct LootboxPointer {
    mint: Pubkey,
    claimed: bool,
    is_initialized: bool,
}
```

让我们来看一下说明书，首先我们要检查一下它是否是一个有效的战利品箱。

他们传入一个盒子号码，指令运行一个无限循环，每次迭代中，如果BLD令牌的数量太低，我们会出错。另外两条路径是：要么将loot_box号码加倍，要么（中间选项）如果我们在loot_box号码和box_number上匹配，我们要求stake_state PDA的总收益大于或等于传入的box_number -- 你必须赚得比盒子号码更多。

```rust
pub fn open_lootbox(ctx: Context<OpenLootbox>, box_number: u64) -> Result<()> {
    let mut loot_box = 10;
    loop {
        if loot_box > box_number {
            return err!(LootboxError::InvalidLootbox);
        }

        if loot_box == box_number {
            require!(
                ctx.accounts.stake_state.total_earned >= box_number,
                LootboxError::InvalidLootbox
            );
            break;
        } else {
            loot_box = loot_box * 2;
        }
    }

    require!(
        !ctx.accounts.lootbox_pointer.is_initialized || ctx.accounts.lootbox_pointer.claimed,
        LootboxError::InvalidLootbox
    );

```

然后我们继续进行代币销毁，销毁与盒子编号所需数量相对应的代币。

```rust
token::burn(
    CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        Burn {
            mint: ctx.accounts.stake_mint.to_account_info(),
            from: ctx.accounts.stake_mint_ata.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        },
    ),
    box_number * u64::pow(10, 2),
)?;
```

接下来我们说，这是可用的装备。目前这是硬编码的，这是客户端代码中 cache.json 文件中的数据。有更多动态的方法来做这个。



```rust
let available_gear: Vec<Pubkey> = vec![
        "DQmrQJkErmfe6a1fD2hPwdLSnawzkdyrKfSUmd6vkC89"
            .parse::<Pubkey>()
            .unwrap(),
        "A26dg2NBfGgU6gpFPfsiLpxwsV13ZKiD58zgjeQvuad"
            .parse::<Pubkey>()
            .unwrap(),
        "GxR5UVvQDRwB19bCsB1wJh6RtLRZUbEAigtgeAsm6J7N"
            .parse::<Pubkey>()
            .unwrap(),
        "3rL2p6LsGyHVn3iwQQYV9bBmchxMHYPice6ntp7Qw8Pa"
            .parse::<Pubkey>()
            .unwrap(),
        "73JnegAtAWHmBYL7pipcSTpQkkAx77pqCQaEys2Qmrb2"
            .parse::<Pubkey>()
            .unwrap(),
    ];
```
然后还有这个伪随机的东西，绝对不安全。我们获取当前时间（以秒为单位），然后对5取模，以确定我们应该获取这5个物品中的哪一个。一旦获取到，我们将其分配给战利品盒指针。

```rust
let clock = Clock::get()?;
    let i: usize = (clock.unix_timestamp % 5).try_into().unwrap();
    // Add in randomness later for selecting mint
    let mint = available_gear[i];
    ctx.accounts.lootbox_pointer.mint = mint;
    ctx.accounts.lootbox_pointer.claimed = false;
    ctx.accounts.lootbox_pointer.is_initialized = true;

    Ok(())
}

```

我们稍后会处理真正的随机性，但现在这已经足够了。我们稍后会添加一个检查，以确保他们不能一次又一次地打开战利品箱，以获取他们喜欢的物品。现在，一旦他们打开了战利品箱，他们就可以看到物品是什么。我们可以检查战利品箱指针是否已初始化，如果没有，那么我们就没问题，可以继续进行。虽然他们每次尝试都需要付费，但是否将其作为一个功能由您决定。

好的，让我们转到检索指示并查看所需的账户。

```rust
#[derive(Accounts)]
pub struct RetrieveItem<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        seeds=["lootbox".as_bytes(), user.key().as_ref()],
        bump,
        constraint=lootbox_pointer.is_initialized
    )]
    pub lootbox_pointer: Account<'info, LootboxPointer>,
    #[account(
        mut,
        constraint=lootbox_pointer.mint==mint.key()
    )]
    pub mint: Account<'info, Mint>,
    #[account(
        init_if_needed,
        payer=user,
        associated_token::mint=mint,
        associated_token::authority=user
    )]
    pub user_gear_ata: Account<'info, TokenAccount>,
    /// CHECK: Mint authority - not used as account
    #[account(
        seeds=["mint".as_bytes()],
        bump
    )]
    pub mint_authority: UncheckedAccount<'info>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}
```

有几件需要注意的事情。"mint account" 是指他们要求的装备。"mint authority" 是我们在客户端脚本中分配的薄荷PDA。

关于这一逻辑。首先，我们要求战利品箱指针尚未被认领。

```rust
pub fn retrieve_item_from_lootbox(ctx: Context<RetrieveItem>) -> Result<()> {
    require!(
        !ctx.accounts.lootbox_pointer.claimed,
        LootboxError::AlreadyClaimed
    );
```

我们随后将其铸造给您。

```rust
token::mint_to(
       CpiContext::new_with_signer(
           ctx.accounts.token_program.to_account_info(),
           MintTo {
               mint: ctx.accounts.mint.to_account_info(),
               to: ctx.accounts.user_gear_ata.to_account_info(),
               authority: ctx.accounts.mint_authority.to_account_info(),
           },
           &[&[
               b"mint".as_ref(),
               &[*ctx.bumps.get("mint_authority").unwrap()],
           ]],
       ),
       1,
   )?;
```

最后，我们将声明设置为真。

```rust
    ctx.accounts.lootbox_pointer.claimed = true;

   Ok(())
}
```

请确保您不要错过我们在文件底部创建的自定义错误代码。

```rust
#[error_code]
enum LootboxError {
    #[msg("Mint already claimed")]
    AlreadyClaimed,

    #[msg("Haven't staked long enough for this loot box or invalid loot box number")]
    InvalidLootbox,
}
```

就是这样了。如果你还没有实施这个，试一试，运行一些测试。尽量独立完成。

简要查看一下测试，它们都在[一个文件](https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/tests/anchor-nft-staking.ts?utm_source=buildspace.so&utm_medium=buildspace_project)中。你会注意到我们添加了两个测试，一个是“随机选择一种薄荷口味”，另一个是“制作所选齿轮”。提醒一下，在我们标有“Swap”的地方，更改代码行以使测试正常工作。然后运行测试，它们应该都按预期工作。

## 使用Switchboard的验证功能来随机分配战利品🔀

任务
既然你已经成功实现了简单的战利品箱子，那么让我们看看是否可以通过Switchboard来提升真正的随机性（虽然从技术上来说仍然是伪随机，但是比之前好了几个数量级）。

Switchboard是建立在Solana上的分散式预言机网络。预言机是区块链和现实世界之间的门户，提供了在多个来源给出数据的情况下达成共识的机制。在随机性的情况下，这意味着提供一个可验证的伪随机结果，而没有预言机是无法获得的。这对于实现无法“作弊”的战利品箱至关重要。

与Oracle互动是一个综合运用我们在整个课程中学到的一切的练习。通常需要以下步骤：

某种与Oracle程序直接进行客户端设置
使用您自己的程序初始化特定于Oracle的账户（通常是PDAs）
您的程序向Oracle程序发出CPI调用，请求特定的数据。在这种情况下，是一个可验证的随机缓冲区。
Oracle可以调用您的程序以提供所请求的信息的指令。
执行您的程序对所请求数据的操作的指令。

## 文档

首先，文档在Web3上仍然很稀缺，但你可以在这里阅读关于Switchboard可验证随机性的简要概述。然后你应该阅读他们的集成文档。

你可能仍然会有很多问题。没关系。不要感到泄气。我们正在锻炼一些必要的“自己解决问题”的能力。

接下来你可以做的是查看他们的逐步指南，以获取随机性。这将带你了解设置交换机环境、初始化请求客户端、发出CPI指令、添加一个指令到你的程序中，Switchboard可以调用该指令来提供随机性等过程。

**最后的备注**

这将是具有挑战性的。这是有意为之的。这是对过去六周努力理解Solana的工作的总结。我们有一些视频概述了如何在我们的战利品箱计划中使用Switchboard。


随时可以立即观看它们。通常我会告诉你等到你完成一些独立工作，但是Switchboard的文档非常稀缺，所以尽快查看步骤说明会很有帮助。不过，我要说的是不要复制粘贴我的解决方案。相反，观看步骤说明，然后尝试自己重新创建类似的东西。如果你准备在我们发布步骤说明之前参考解决方案代码，随时可以查看[这里](https://github.com/Unboxed-Software/anchor-nft-staking-program/tree/solution-randomize-loot?utm_source=buildspace.so&utm_medium=buildspace_project)的 solution-randomize-lootbranch 。

你可能在本周结束之前无法完成这个任务。这是可行的，但可能需要比你拥有的时间更多的时间来解决问题。没关系。你仍然可以使用之前的简单伪随机解决方案进行发货，然后稍后再进行更强大的随机性改进。只需创建一个新的分支，尽力使用Switchboard。

你能行的。祝你好运！
