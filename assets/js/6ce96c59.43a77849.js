"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[7483],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=a.createContext({}),l=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(p.Provider,{value:e},n.children)},s="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),s=l(t),d=o,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||r;return t?a.createElement(k,i(i({ref:e},u),{},{components:t})):a.createElement(k,i({ref:e},u))}));function k(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c[s]="string"==typeof n?n:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},166:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:85,sidebar_label:"\ud83d\udd00 Anchor\u7684CPIs",sidebar_class_name:"green"},i="\ud83d\udd00 Anchor\u7684CPIs",c={unversionedId:"module5/program-in-anchor/cpis-in-anchor/README",id:"module5/program-in-anchor/cpis-in-anchor/README",title:"\ud83d\udd00 Anchor\u7684CPIs",description:"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0CPI\uff08\u8de8\u7a0b\u5e8f\u8c03\u7528\uff09\u6765\u63d0\u5347\u6211\u4eec\u7684\u4ee3\u7801\u6c34\u5e73\u3002",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README.md",sourceDirName:"module5/program-in-anchor/cpis-in-anchor",slug:"/module5/program-in-anchor/cpis-in-anchor/",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README.md",tags:[],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85,sidebar_label:"\ud83d\udd00 Anchor\u7684CPIs",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Anchor PDA\u6784\u5efa",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/"},next:{title:"\u4f7f\u7528Anchor CPIs\u6784\u5efa",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/"}},p={},l=[{value:"\u274c Anchor \u9519\u8bef\u5904\u7406",id:"-anchor-\u9519\u8bef\u5904\u7406",level:2},{value:"<code>constraint</code> \u7ea6\u675f\u6761\u4ef6",id:"constraint-\u7ea6\u675f\u6761\u4ef6",level:3}],u={toc:l},s="wrapper";function m(n){let{components:e,...t}=n;return(0,o.kt)(s,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-anchor\u7684cpis"},"\ud83d\udd00 Anchor\u7684CPIs"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\uff08\u8de8\u7a0b\u5e8f\u8c03\u7528\uff09\u6765\u63d0\u5347\u6211\u4eec\u7684\u4ee3\u7801\u6c34\u5e73\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u56de\u987e\u4e00\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u662f\u901a\u8fc7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"invoke"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u65b9\u6cd5\u6765\u5236\u4f5c\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u7279\u6b8a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u5236\u4f5c\u683c\u5f0f\u3002\u8981\u4f7f\u7528\u8fd9\u79cd\u683c\u5f0f\uff0c\u4f60\u9700\u8981\u8bbf\u95ee\u6240\u8c03\u7528\u7a0b\u5e8f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u6a21\u5757\u3002\u4e00\u4e9b\u5e38\u89c1\u7684\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u6709\u73b0\u6210\u7684\u5305\u4f9b\u4f60\u4f7f\u7528\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"anchor_spl"),"\uff0c\u8fd9\u53ef\u4ee5\u7528\u4e8e\u4ee4\u724c\u7a0b\u5e8f\u3002\u5426\u5219\uff0c\u4f60\u5c06\u9700\u8981\u4f7f\u7528\u6240\u8c03\u7528\u7a0b\u5e8f\u7684\u6e90\u4ee3\u7801\u6216\u5df2\u53d1\u5e03\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"IDL"),"\uff08\u63a5\u53e3\u5b9a\u4e49\u8bed\u8a00\uff09\u6765\u751f\u6210CPI\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u73b0\u6210\u7684CPI\u6a21\u5757\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u76f4\u63a5\u5728\u6307\u4ee4\u4e2d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"invoke"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u65b9\u6cd5\u3002\u6b63\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u6307\u4ee4\u9700\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u7c7b\u578b\u4e00\u6837\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Anchor CPI"),"\u5219\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext"),"\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext"),"\u63d0\u4f9b\u4e86\u6267\u884c\u6307\u4ee4\u6240\u9700\u7684\u6240\u6709\u8d26\u6237\u548c\u79cd\u5b50\u4fe1\u606f\u3002\u5f53\u4e0d\u9700\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff08\u7a0b\u5e8f\u884d\u751f\u8d26\u6237\uff09\u7b7e\u540d\u8005\u65f6\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"CpiContext::new(cpi_program, cpi_accounts)\n")),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u4e00\u4e2aPDA\u4f5c\u4e3a\u7b7e\u540d\u8005\u65f6\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new_with_signer"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"CpiContext::new_with_signer(cpi_program, cpi_accounts, seeds)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," - \u8d26\u6237\u5217\u8868"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remaining_accounts")," - \u5982\u679c\u6709\u7684\u8bdd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"program")," - \u6b63\u5728\u8c03\u7528CPI\u7684\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signer_seeds")," - \u5982\u679c\u9700\u8981\u4f7f\u7528PDA\u7b7e\u7f72CPI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CpiContext<'a, 'b, 'c, 'info, T>\nwhere\n    T: ToAccountMetas + ToAccountInfos<'info>,\n{\n    pub accounts: T,\n    pub remaining_accounts: Vec<AccountInfo<'info>>,\n    pub program: AccountInfo<'info>,\n    pub signer_seeds: &'a [&'b [&'c [u8]]],\n}\n")),(0,o.kt)("p",null,"\u5f53\u4e0d\u9700\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"signer_seeds"),"\u65f6\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new"),"\uff08\u4e0d\u4f7f\u7528PDA\u7b7e\u540d\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new(\n    program: AccountInfo<'info>,\n    accounts: T\n    ) -> Self {\n        Self {\n            accounts,\n            program,\n            remaining_accounts: Vec::new(),\n            signer_seeds: &[],\n        }\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new_with_signer"),"\u7528\u4e8e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"PDA"),"\u4e0a\u7528\u79cd\u5b50\u7b7e\u540d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new_with_signer(\n        program: AccountInfo<'info>,\n        accounts: T,\n        signer_seeds: &'a [&'b [&'c [u8]]],\n    ) -> Self {\n        Self {\n            accounts,\n            program,\n            signer_seeds,\n            remaining_accounts: Vec::new(),\n        }\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"anchor_spl"),"\u5305\u8fd8\u5305\u62ec\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"token"),"\u6a21\u5757\uff0c\u7528\u4e8e\u7b80\u5316\u521b\u5efa\u5230\u4ee4\u724c\u7a0b\u5e8f\u7684CPI\u7684\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u201c",(0,o.kt)("inlineCode",{parentName:"p"},"Structs"),"\u201d\u6307\u7684\u662f\u6bcf\u4e2a\u76f8\u5e94\u7684\u4ee4\u724c\u7a0b\u5e8f\u6307\u4ee4\u6240\u9700\u7684\u8d26\u6237\u5217\u8868\u3002\u201c",(0,o.kt)("inlineCode",{parentName:"p"},"Functions"),"\u201d\u6307\u7684\u662f\u6bcf\u4e2a\u76f8\u5e94\u6307\u4ee4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"MintTo"),"\u5c31\u662f\u6240\u9700\u7684\u8d26\u6237\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct MintTo<'info> {\n    pub mint: AccountInfo<'info>,\n    pub to: AccountInfo<'info>,\n    pub authority: AccountInfo<'info>,\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"mint_to"),"\u65b9\u6cd5\u7684\u5185\u90e8\u5de5\u4f5c\u539f\u7406\u3002"),(0,o.kt)("p",null,"\u5b83\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext"),"\u6765\u6784\u5efa\u4e00\u4e2a\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"mint_to"),"\u6307\u4ee4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u6765\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn mint_to<'a, 'b, 'c, 'info>(\n    ctx: CpiContext<'a, 'b, 'c, 'info, MintTo<'info>>,\n    amount: u64,\n) -> Result<()> {\n    let ix = spl_token::instruction::mint_to(\n        &spl_token::ID,\n        ctx.accounts.mint.key,\n        ctx.accounts.to.key,\n        ctx.accounts.authority.key,\n        &[],\n        amount,\n    )?;\n    solana_program::program::invoke_signed(\n        &ix,\n        &[\n            ctx.accounts.to.clone(),\n            ctx.accounts.mint.clone(),\n            ctx.accounts.authority.clone(),\n        ],\n        ctx.signer_seeds,\n    )\n    .map_err(Into::into)\n}\n")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"mint_to CPI")," \u6765\u94f8\u9020\u4ee3\u5e01")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let auth_bump = *ctx.bumps.get("mint_authority").unwrap();\nlet seeds = &[\n    b"mint".as_ref(),\n    &[auth_bump],\n];\nlet signer = &[&seeds[..]];\n\nlet cpi_program = ctx.accounts.token_program.to_account_info();\n\nlet cpi_accounts = MintTo {\n    mint: ctx.accounts.token_mint.to_account_info(),\n    to: ctx.accounts.token_account.to_account_info(),\n    authority: ctx.accounts.mint_authority.to_account_info()\n};\n\nlet cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer);\n\ntoken::mint_to(cpi_ctx, amount)?;\n')),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u91cd\u6784\u8fd9\u4e2a\u4ee3\u7801\u6bb5\uff0c\u5f97\u5230\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'token::mint_to(\n    CpiContext::new_with_signer(\n        ctx.accounts.token_program.to_account_info(),\n        token::MintTo {\n            mint: ctx.accounts.mint_account.to_account_info(),\n            to: ctx.accounts.token_account.to_account_info(),\n            authority: ctx.accounts.mint_authority.to_account_info(),\n        },\n        &[&[\n            b"mint",\n            &[*ctx.bumps.get("mint_authority").unwrap()],\n        ]]\n    ),\n    amount,\n)?;\n')),(0,o.kt)("h2",{id:"-anchor-\u9519\u8bef\u5904\u7406"},"\u274c Anchor \u9519\u8bef\u5904\u7406"),(0,o.kt)("p",null,"\u9519\u8bef\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6765\u81ea ",(0,o.kt)("inlineCode",{parentName:"li"},"Anchor")," \u6846\u67b6\u81ea\u8eab\u4ee3\u7801\u7684\u5185\u90e8\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\uff08\u4e5f\u5c31\u662f\u4f60\uff01\uff09\u5b9a\u4e49\u7684\u81ea\u5b9a\u4e49\u9519\u8bef")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AnchorErrors")," \u80fd\u63d0\u4f9b\u8bb8\u591a\u6709\u5173\u9519\u8bef\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9519\u8bef\u7684\u540d\u79f0\u548c\u7f16\u53f7"),(0,o.kt)("li",{parentName:"ul"},"\u9519\u8bef\u5728\u4ee3\u7801\u4e2d\u7684\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u8fdd\u53cd\u7684\u7ea6\u675f\u6761\u4ef6\u548c\u76f8\u5173\u8d26\u6237")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6240\u6709\u7a0b\u5e8f\u4f1a\u8fd4\u56de\u4e00\u4e2a\u901a\u7528\u7684\u9519\u8bef\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/solana-program/latest/solana_program/program_error/enum.ProgramError.html?utm_source=buildspace.so&utm_medium=buildspace_project"},"ProgramError"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Anchor")," \u6709\u8bb8\u591a\u4e0d\u540c\u7684\u5185\u90e8\u9519\u8bef\u4ee3\u7801\u3002\u867d\u7136\u8fd9\u4e9b\u4ee3\u7801\u4e0d\u662f\u4e3a\u7528\u6237\u6240\u8bbe\u8ba1\uff0c\u4f46\u901a\u8fc7\u7814\u7a76\u53ef\u4ee5\u4e86\u89e3\u4ee3\u7801\u548c\u5176\u80cc\u540e\u539f\u56e0\u7684\u5173\u8054\uff0c\u8fd9\u5bf9\u7406\u89e3\u5f88\u6709\u5e2e\u52a9\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u9519\u8bef\u4ee3\u7801\u7684\u7f16\u53f7\u5c06\u4ece\u81ea\u5b9a\u4e49\u9519\u8bef\u504f\u79fb\u91cf\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"error_code")," \u5c5e\u6027\u4e3a\u4f60\u7684\u7a0b\u5e8f\u5b9a\u4e49\u72ec\u7279\u7684\u9519\u8bef\u3002\u53ea\u9700\u5c06\u5176\u6dfb\u52a0\u5230\u6240\u9009\u679a\u4e3e\u4e2d\u5373\u53ef\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u7a0b\u5e8f\u4e2d\u5c06\u679a\u4e3e\u7684\u53d8\u4f53\u7528\u4f5c\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," \u4e3a\u5404\u4e2a\u53d8\u4f53\u5b9a\u4e49\u6d88\u606f\u3002\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0c\u5ba2\u6237\u7aef\u5c06\u663e\u793a\u6b64\u9519\u8bef\u6d88\u606f\u3002\u8981\u5b9e\u9645\u89e6\u53d1\u9519\u8bef\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"err!")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"error!")," \u5b8f\u3002\u8fd9\u4e9b\u5b8f\u4f1a\u5c06\u6587\u4ef6\u548c\u884c\u4fe1\u606f\u6dfb\u52a0\u5230\u9519\u8bef\u4e2d\uff0c\u7136\u540e\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor")," \u8bb0\u5f55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        if data.data >= 100 {\n            return err!(MyError::DataTooLarge);\n        }\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount \u7684\u6570\u636e\u53ea\u80fd\u5c0f\u4e8e 100")]\n    DataTooLarge\n}\n')),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," \u5b8f\u6765\u7b80\u5316\u9519\u8bef\u7684\u7f16\u5199\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u7b80\u5316\u4e3a\u4e0b\u9762\u7684\u6837\u5b50\uff08\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},">=")," \u7ffb\u8f6c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," \uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        require!(data.data < 100, MyError::DataTooLarge);\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount \u7684\u6570\u636e\u53ea\u80fd\u5c0f\u4e8e 100")]\n    DataTooLarge\n}\n')),(0,o.kt)("h3",{id:"constraint-\u7ea6\u675f\u6761\u4ef6"},(0,o.kt)("inlineCode",{parentName:"h3"},"constraint")," \u7ea6\u675f\u6761\u4ef6"),(0,o.kt)("p",null,"\u5982\u679c\u8d26\u6237\u4e0d\u5b58\u5728\uff0c\u7cfb\u7edf\u5c06\u521d\u59cb\u5316\u4e00\u4e2a\u8d26\u6237\u3002\u5982\u679c\u8d26\u6237\u5df2\u5b58\u5728\uff0c\u4ecd\u9700\u68c0\u67e5\u5176\u4ed6\u7684\u9650\u5236\u6761\u4ef6\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u7f16\u8f91\u5668\uff0c\u8bf7\u786e\u4fdd\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor-lang")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},'features = ["init-if-needed"]')," \u7279\u6027\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},'anchor-lang = {version = "0.26.0", features = ["init-if-needed"]}'),"\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5173\u8054\u4ee4\u724c\u8d26\u6237\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\nmod example {\n    use super::*;\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        Ok(())\n    }\n}\n\n#[derive(Accounts)]\npub struct Initialize<'info> {\n    #[account(\n        init_if_needed,\n        payer = payer,\n        associated_token::mint = mint,\n        associated_token::authority = payer\n    )]\n    pub token_account: Account<'info, TokenAccount>,\n    pub mint: Account<'info, Mint>,\n    #[account(mut)]\n    pub payer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub rent: Sysvar<'info, Rent>,\n}\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"init_if_needed")," \u751f\u6210\u7684\u4ee3\u7801\uff08\u8fd9\u6bb5\u4ee3\u7801\u7247\u6bb5\u6765\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor expand")," \u547d\u4ee4\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let token_account: anchor_lang::accounts::account::Account<TokenAccount> = {\n    if !true\n    || AsRef::<AccountInfo>::as_ref(&token_account).owner\n    == &anchor_lang::solana_program::system_program::ID\n    {\n        let payer = payer.to_account_info();\n        let cpi_program = associated_token_program.to_account_info();\n        let cpi_accounts = anchor_spl::associated_token::Create {\n            payer: payer.to_account_info(),\n            associated_token: token_account.to_account_info(),\n            authority: payer.to_account_info(),\n            mint: mint.to_account_info(),\n            system_program: system_program.to_account_info(),\n            token_program: token_program.to_account_info(),\n            rent: rent.to_account_info(),\n        };\n        let cpi_ctx = anchor_lang::context::CpiContext::new(\n            cpi_program,\n            cpi_accounts,\n        );\n        anchor_spl::associated_token::create(cpi_ctx)?;\n    }\n  ...\n}\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u7ea6\u675f\u6761\u4ef6\uff0c\u53ef\u4ee5\u786e\u4fdd\u5728\u521d\u59cb\u5316\u65f6\u6839\u636e\u9700\u8981\u521b\u5efa\u5173\u8054\u7684\u4ee4\u724c\u8d26\u6237\uff0c\u4f7f\u5f97\u6574\u4e2a\u6d41\u7a0b\u66f4\u52a0\u81ea\u52a8\u5316\u548c\u667a\u80fd\u3002"))}m.isMDXComponent=!0}}]);