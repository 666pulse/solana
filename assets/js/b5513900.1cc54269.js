"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[8180],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:104,sidebar_label:"\ud83d\udc41\u200d\ud83d\udde8 \u6784\u5efa\u4e00\u4e2a\u968f\u673a\u5668",sidebar_class_name:"green"},i="\ud83d\udc41\u200d\ud83d\udde8 \u6784\u9020\u968f\u673a\u5668",p={unversionedId:"module6/randomness/build-a-randomiser/README",id:"module6/randomness/build-a-randomiser/README",title:"\ud83d\udc41\u200d\ud83d\udde8 \u6784\u9020\u968f\u673a\u5668",description:"Switchboard\u8bbe\u7f6e\u7684\u8be6\u7ec6\u6b65\u9aa4 \ud83d\udeb6\ud83c\udffd\ud83d\udd00",source:"@site/docs/Solana-Co-Learn/module6/randomness/build-a-randomiser/README.md",sourceDirName:"module6/randomness/build-a-randomiser",slug:"/module6/randomness/build-a-randomiser/",permalink:"/all-in-one-solana/Solana-Co-Learn/module6/randomness/build-a-randomiser/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/dev/docs/Solana-Co-Learn/module6/randomness/build-a-randomiser/README.md",tags:[],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693735890,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:104,frontMatter:{sidebar_position:104,sidebar_label:"\ud83d\udc41\u200d\ud83d\udde8 \u6784\u5efa\u4e00\u4e2a\u968f\u673a\u5668",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1",permalink:"/all-in-one-solana/Solana-Co-Learn/module6/randomness/randomising-loot-with-switchborar/"},next:{title:"\ud83c\udf81 \u5f00\u542f\u6218\u5229\u54c1\u7bb1",permalink:"/all-in-one-solana/Solana-Co-Learn/module6/randomness/opening-loot-boxes/"}},s={},l=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"<code>init_user</code> \u6307\u4ee4\u7684\u8be6\u7ec6\u6b65\u9aa4 \ud83d\udc76",id:"init_user-\u6307\u4ee4\u7684\u8be6\u7ec6\u6b65\u9aa4-",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u6784\u9020\u968f\u673a\u5668"},"\ud83d\udc41\u200d\ud83d\udde8 \u6784\u9020\u968f\u673a\u5668"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Switchboard\u8bbe\u7f6e\u7684\u8be6\u7ec6\u6b65\u9aa4 \ud83d\udeb6\ud83c\udffd\ud83d\udd00")),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u6765\u6784\u5efa\u4e00\u4e2a\u57fa\u7840\u7a0b\u5e8f\uff0c\u4ee5\u5b9e\u73b0\u968f\u673a\u6570\u7684\u8bf7\u6c42\u3002\u5728\u6b64\u89c6\u9891\u4e2d\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u5173\u6ce8\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u8981\u8fdb\u884c\u4ea4\u6362\u673a\u7684\u521d\u59cb\u5316\u8bbe\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-randomize-loot/tests/utils/setupSwitchboard.ts?utm_source=buildspace.so&utm_medium=buildspace_project"},"/tests/utils/setupSwitchboard.ts"),"\u6587\u4ef6\u4e2d\u627e\u5230\u76f8\u5173\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u8bbe\u7f6e\u662f\u7528\u4e8e\u8fd0\u884c\u6d4b\u8bd5\u7684\u3002\u867d\u7136\u4ed6\u4eec\u7684\u6587\u6863\u975e\u5e38\u7cbe\u7b80\uff0c\u4f46\u5bf9\u4e8e\u968f\u673a\u5316\u90e8\u5206\uff0c\u6211\u4eec\u5e94\u8be5\u5df2\u7ecf\u4e86\u89e3\u5f97\u8db3\u591f\u6e05\u695a\u4e86\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4e00\u8d77\u56de\u987e\u4e00\u4e0b\u4ee3\u7801\u3002\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5bfc\u5165\u4ee5\u4e0b\u4e09\u4e2a\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SwitchboardTestContext } from "@switchboard-xyz/sbv2-utils"\nimport * as anchor from "@project-serum/anchor"\nimport * as sbv2 from "@switchboard-xyz/switchboard-v2"\n')),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u529f\u80fd\u65b9\u9762\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u4f20\u5165\u7684\u4e09\u4e2a\u9879\u76ee\u5206\u522b\u662f\u63d0\u4f9b\u8005\u3001\u6218\u5229\u54c1\u7bb1\u8ba1\u5212\u548c\u4ed8\u6b3e\u4eba\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u662f\u52a0\u8f7d",(0,a.kt)("inlineCode",{parentName:"p"},"devne"),"t\u961f\u5217\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"devnet"),"\u4e0a\u8fdb\u884c\u6d4b\u8bd5\u4e86\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ID"),"\u662fSwitchboard\u7684\u7a0b\u5e8f",(0,a.kt)("inlineCode",{parentName:"p"},"ID"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"100,000,000"),"\u5219\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"switchboard"),"\u4ee3\u5e01\u6570\u91cf\uff0c\u6211\u4eec\u9700\u8981\u8bbf\u95ee\u5b83\u4eec\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export const setupSwitchboard = async (provider, lootboxProgram, payer) => {\n\n    const switchboard = await SwitchboardTestContext.loadDevnetQueue(\n      provider,\n      "F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",\n      100_000_000\n    )\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u4e00\u4e9b\u65e5\u5fd7\uff0c\u786e\u4fdd\u4e00\u5207\u90fd\u51c6\u5907\u5c31\u7eea\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(switchboard.mint.address.toString())\n\nawait switchboard.oracleHeartbeat();\n\nconst { queue, unpermissionedVrfEnabled, authority } =\nawait switchboard.queue.loadData();\n\nconsole.log(`oracleQueue: ${switchboard.queue.publicKey}`);\nconsole.log(`unpermissionedVrfEnabled: ${unpermissionedVrfEnabled}`);\nconsole.log(`# of oracles heartbeating: ${queue.length}`);\nconsole.log(\n"\\x1b[32m%s\\x1b[0m",\n`\\u2714 Switchboard devnet\u73af\u5883\u6210\u529f\u52a0\u8f7d\\n`\n);\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\u8bed\u53e5\u52a0\u8f7d\u4e86\u6211\u4eec\u6240\u9700\u7684\u4ea4\u6362\u673a\u961f\u5217\u6570\u636e\uff0c\u5728\u51fd\u6570\u7684\u540e\u7eed\u90e8\u5206\u6211\u4eec\u5c06\u7528\u5230\u8fd9\u4e9b\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u521b\u5efa\u9a8c\u8bc1\u968f\u673a\u51fd\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"VRF"),"\uff09\u8d26\u6237\uff0c\u8fd9\u4e00\u90e8\u5206\u5bf9\u4e8e\u6211\u4eec\u4f7f\u7528\u7684\u4ea4\u6362\u677f\u975e\u5e38\u7279\u6b8a\u3002\u4f60\u4f1a\u770b\u5230\uff0c\u5b83\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5bc6\u94a5\u5bf9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u521b\u5efaVRF\u8d26\u6237\n// VRF\u8d26\u6237\u7684\u5bc6\u94a5\u5bf9\nconst vrfKeypair = anchor.web3.Keypair.generate()\n")),(0,a.kt)("p",null,"\u5728\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"VRF"),"\u8d26\u6237\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u8bbf\u95ee\u4e00\u4e9b",(0,a.kt)("inlineCode",{parentName:"p"},"PDA"),"\u8bbe\u5907\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// \u5bfb\u627e\u7528\u4e8e\u5ba2\u6237\u7aef\u72b6\u6001\u516c\u94a5\u7684PDA\nconst [userState] = anchor.utils.publicKey.findProgramAddressSync(\n[vrfKeypair.publicKey.toBytes(), payer.publicKey.toBytes()],\nlootboxProgram.programId\n)\n\n// \u7528\u4e8e\u56de\u8c03\u7684lootboxPointerPda\nconst [lootboxPointerPda] = anchor.web3.PublicKey.findProgramAddressSync(\n[Buffer.from("lootbox"), payer.publicKey.toBuffer()],\nlootboxProgram.programId\n)\n')),(0,a.kt)("p",null,"\u4f60\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"vrf"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"payer"),"\u7684\u516c\u94a5\u4f5c\u4e3a\u79cd\u5b50\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5b83\u4eec\u9700\u8981\u662f\u9759\u6001\u7684\uff0c\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"payer"),"\u7684\u516c\u94a5\u4f1a\u53d8\u5316\u3002\u8fd9\u6bb5\u4ee3\u7801\u786e\u4fdd\u6211\u4eec\u5728\u6bcf\u6b21\u6d4b\u8bd5\u8fd0\u884c\u65f6\u90fd\u6709\u4e0d\u540c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"vrf"),"\u5bc6\u94a5\u5bf9\u548c\u7528\u6237\u72b6\u6001\uff0c\u8fd9\u6837\u6211\u4eec\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u9047\u5230\u8bd5\u56fe\u91cd\u65b0\u521b\u5efa\u5df2\u7ecf\u5b58\u5728\u7684\u8d26\u6237\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"sbv2"),"\u5e93\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"VRF"),"\u8d26\u6237\uff0c\u5e76\u4f20\u5165\u4ea4\u6362\u7a0b\u5e8f\u3001\u6211\u4eec\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"VRF"),"\u8d26\u6237\u63d0\u4f9b\u7684\u5bc6\u94a5\u5bf9\u3001\u4f5c\u4e3a\u6388\u6743\u7684\u7528\u6237\u72b6\u6001",(0,a.kt)("inlineCode",{parentName:"p"},"PDA"),"\u3001\u4ea4\u6362\u673a\u961f\u5217\u548c\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u968f\u673a\u6570\u65f6\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e0e\u4ea4\u6362\u673a\u7a0b\u5e8f\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"CPI"),"\u4ea4\u4e92\u6765\u83b7\u53d6\u968f\u673a\u6570\u3002\u5b83\u5fc5\u987b\u77e5\u9053\u6211\u4eec\u7a0b\u5e8f\u4e2d\u7684\u4e00\u6761\u7279\u5b9a\u6307\u4ee4\u6765\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"CPI"),"\u56de\u8c03\uff0c\u4ee5\u4fbf\u4e3a\u6211\u4eec\u63d0\u4f9b\u968f\u673a\u6570\u3002\u50cf\u6240\u6709\u7684\u6307\u4ee4\u4e00\u6837\uff0c\u5b83\u5177\u6709\u4e00\u4e2a\u7a0b\u5e8f",(0,a.kt)("inlineCode",{parentName:"p"},"ID"),"\u3001\u4e00\u4e2a\u8d26\u6237\u5217\u8868\u548c\u6307\u4ee4\u6570\u636e\u3002\u5173\u4e8e\u8d26\u6237\uff0c\u7b2c\u4e00\u4e2a\u662f\u7528\u4e8e\u5199\u5165\u6570\u636e\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vrf"),"\u8d26\u6237\uff0c\u6211\u4eec\u5c06\u5728\u5176\u4e2d\u5199\u5165\u5df2\u9009\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"mint"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"lootbox"),"\u6307\u9488",(0,a.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff0c\u6700\u540e\u662f\u4ed8\u6b3e\u4eba\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// \u521b\u5efa\u65b0\u7684vrf\u8d26\u6237\n  const vrfAccount = await sbv2.VrfAccount.create(switchboard.program, {\n    keypair: vrfKeypair,\n    authority: userState, // \u5c06PDA\u8bbe\u4e3avrf\u8d26\u6237\u7684\u6388\u6743\n    queue: switchboard.queue,\n    callback: {\n      programId: lootboxProgram.programId,\n      accounts: [\n        { pubkey: userState, isSigner: false, isWritable: true },\n        { pubkey: vrfKeypair.publicKey, isSigner: false, isWritable: false },\n        { pubkey: lootboxPointerPda, isSigner: false, isWritable: true },\n        { pubkey: payer.publicKey, isSigner: false, isWritable: false },\n      ],\n      ixData: new anchor.BorshInstructionCoder(lootboxProgram.idl).encode(\n        "consumeRandomness",\n        ""\n      ),\n    },\n  })\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u521b\u5efa\u4e00\u4e2a\u6240\u8c13\u7684\u6743\u9650\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// CREATE PERMISSION ACCOUNT\n  const permissionAccount = await sbv2.PermissionAccount.create(\n    switchboard.program,\n    {\n      authority,\n      granter: switchboard.queue.publicKey,\n      grantee: vrfAccount.publicKey,\n    }\n  )\n")),(0,a.kt)("p",null,"\u6743\u9650\u5b57\u6bb5\u662f\u4ece\u4e0a\u6587\u7684\u961f\u5217\u4e2d\u83b7\u53d6\u7684\u52a0\u8f7d\u6570\u636e\u3002\u8fd9\u5c06\u5728\u4ea4\u6362\u673a\u4e2d\u7ed9\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vrf")," \u8d26\u6237\u6388\u6743\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b65\uff0c\u6211\u4eec\u4f1a\u5c06\u6743\u9650\u66f4\u6539\u4e3a\u6211\u4eec\u81ea\u5df1\uff0c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4ed8\u6b3e\u65b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5982\u679c\u961f\u5217\u9700\u8981\u6743\u9650\u6765\u4f7f\u7528 VRF\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u63d0\u4f9b\u4e86\u6b63\u786e\u7684\u6388\u6743\n  if (!unpermissionedVrfEnabled) {\n    if (!payer.publicKey.equals(authority)) {\n      throw new Error(\n        `\u961f\u5217\u9700\u8981 PERMIT_VRF_REQUESTS \u6743\u9650\uff0c\u800c\u63d0\u4f9b\u7684\u961f\u5217\u6388\u6743\u9519\u8bef`\n      )\n    }\n\n    await permissionAccount.set({\n      authority: payer,\n      permission: sbv2.SwitchboardPermission.PERMIT_VRF_REQUESTS,\n      enable: true,\n    })\n  }\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u7a0d\u540e\u6211\u4eec\u9700\u8981\u5207\u6362\u677f\u8d26\u6237\u7684\u63d0\u5347\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5176\u63d0\u53d6\u51fa\u6765\uff0c\u8fd8\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"switchboardStateBump"),"\uff0c\u8fd9\u662f\u5207\u6362\u677f\u7684\u7a0b\u5e8f\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u6743\u9650\u63d0\u5347\u548c\u5207\u6362\u677f\u72b6\u6001\u63d0\u5347\n  const [_permissionAccount, permissionBump] = sbv2.PermissionAccount.fromSeed(\n    switchboard.program,\n    authority,\n    switchboard.queue.publicKey,\n    vrfAccount.publicKey\n  )\n\n  const [switchboardStateAccount, switchboardStateBump] =\n    sbv2.ProgramStateAccount.fromSeed(switchboard.program)\n")),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f\u6211\u4eec\u8fdb\u884c\u6d4b\u8bd5\u4e0e\u7a0b\u5e8f\u548c\u4ea4\u6362\u673a\u4e92\u52a8\u6240\u9700\u7684\u6240\u6709\u6570\u636e\uff0c\u6211\u4eec\u5c06\u5728\u6700\u540e\u8fd4\u56de\u8fd9\u4e9b\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"return {\n    switchboard: switchboard,\n    lootboxPointerPda: lootboxPointerPda,\n    permissionBump: permissionBump,\n    permissionAccount: permissionAccount,\n    switchboardStateBump: switchboardStateBump,\n    switchboardStateAccount: switchboardStateAccount,\n    vrfAccount: vrfAccount,\n  }\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6700\u7ec8\u4f1a\u5728\u6d4b\u8bd5\u73af\u5883\u8bbe\u7f6e\u4e2d\u8c03\u7528\u6574\u4e2a\u51fd\u6570\uff0c\u6240\u4ee5\u73b0\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," \u4ee3\u7801\u5757\u662f\u8fd9\u6837\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"before(async () => {\n    ;({ nft, stakeStatePda, mint, tokenAddress } = await setupNft(\n      program,\n      wallet.payer\n    ))\n    ;({\n      switchboard,\n      lootboxPointerPda,\n      permissionBump,\n      switchboardStateBump,\n      vrfAccount,\n      switchboardStateAccount,\n      permissionAccount,\n    } = await setupSwitchboard(provider, lootboxProgram, wallet.payer))\n  })\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u5173\u4e8e\u5ba2\u6237\u7aef\u4ea4\u6362\u673a\u6240\u9700\u7684\u57fa\u672c\u77e5\u8bc6\u3002"),(0,a.kt)("h2",{id:"init_user-\u6307\u4ee4\u7684\u8be6\u7ec6\u6b65\u9aa4-"},(0,a.kt)("inlineCode",{parentName:"h2"},"init_user")," \u6307\u4ee4\u7684\u8be6\u7ec6\u6b65\u9aa4 \ud83d\udc76"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5bf9\u4e8e\u6211\u4eec\u7684\u6218\u5229\u54c1\u7bb1\u8ba1\u5212\uff0c\u6211\u4eec\u4ee5\u524d\u628a\u6240\u6709\u4e1c\u897f\u90fd\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.rs")," \u91cc\uff0c\u4f46\u968f\u7740\u9879\u76ee\u53d8\u5f97\u8d8a\u6765\u8d8a\u5e9e\u5927\uff0c\u4e5f\u53d8\u5f97\u96be\u4ee5\u7ba1\u7406\uff0c\u6240\u4ee5\u73b0\u5728\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u4e86\u62c6\u5206\uff0c\u4f60\u53ef\u4ee5\u5728\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/tree/solution-randomize-loot/programs/lootbox-program?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u94fe\u63a5"),"\u67e5\u770b\u6587\u4ef6\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," \u6587\u4ef6\u4e3b\u8981\u53ea\u662f\u4e00\u5806 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u8bed\u53e5\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"declare_id!")," \u5b8f\u548c\u6211\u4eec\u7684\u56db\u4e2a\u6307\u4ee4\uff0c\u5b83\u4eec\u53ea\u662f\u8c03\u7528\u5176\u4ed6\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Init_user")," \u5c06\u521b\u5efa\u7528\u6237\u72b6\u6001\u8d26\u6237\uff0c\u6211\u4eec\u5c06\u5728\u7a0b\u5e8f\u548c\u4ea4\u6362\u673a\u4e4b\u95f4\u5171\u4eab\u8be5\u8d26\u6237\uff0c\u5b83\u5c31\u50cf\u4e00\u4e2a\u8054\u7edc\u8d26\u6237\u3002"),(0,a.kt)("p",null,"\u6253\u5f00\u6218\u5229\u54c1\u7bb1\u7684\u8fc7\u7a0b\u4e0e\u4e4b\u524d\u76f8\u540c\uff0c\u5b83\u5c06\u5f00\u59cb\u751f\u6210\u968f\u673a\u8d27\u5e01\u7684\u8fc7\u7a0b\uff0c\u4f46\u4e0d\u4f1a\u5b8c\u6210\u8be5\u8fc7\u7a0b\uff0c\u800c\u662f\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"CPI")," \u6765\u547c\u53eb\u4ea4\u6362\u673a\u4ee5\u8bf7\u6c42\u4e00\u4e2a\u968f\u673a\u6570\u3002"),(0,a.kt)("p",null,"\u4ea4\u6362\u673a\u5c06\u8c03\u7528\u6d88\u8017\u968f\u673a\u6027\uff0c\u4ee5\u8fd4\u56de\u6307\u4ee4\u4e2d\u7684\u53f7\u7801\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u5e76\u5728\u8bbe\u7f6e\u8584\u8377\u65f6\u5b8c\u6210\u8be5\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u4ece\u6218\u5229\u54c1\u7bb1\u4e2d\u83b7\u53d6\u7269\u54c1\u57fa\u672c\u4e0a\u6ca1\u6709\u6539\u53d8\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff0c\u9996\u5148\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"init_user"),"\u3002"),(0,a.kt)("p",null,"\u5728\u6587\u4ef6\u7684\u9876\u90e8\uff0c\u4f60\u4f1a\u627e\u5230\u521d\u59cb\u7528\u6237\u4e0a\u4e0b\u6587\uff0c\u5728\u5e95\u90e8\u6709\u4e00\u4e2a\u5b9e\u73b0\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"process instruction")," \u7684\u51fd\u6570\uff0c\u5728\u8be5\u51fd\u6570\u4e2d\u6267\u884c\u4e86\u4e4b\u524d\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib"),"s \u6587\u4ef6\u4e2d\u7684\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"InitUser")," \u4e0a\u4e0b\u6587\u4e2d\u6709\u56db\u4e2a\u8d26\u6237\u3002\u72b6\u6001\u662f\u6211\u4eec\u7684\u7528\u6237\u72b6\u6001\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"vrf")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"payer")," \u5bc6\u94a5\u79cd\u5b50\uff0c\u8fd9\u662f\u7528\u4e8e\u6d4b\u8bd5\u7684\u7248\u672c\u3002\u5bf9\u4e8e\u751f\u4ea7\u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"payer")," \u79cd\u5b50\u3002\u6211\u4eec\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u8282\u7701\u65f6\u95f4\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u3002\u7136\u540e\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"vrf")," \u8d26\u6237\uff0cswitchboard \u4e0d\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5b83\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".load()")," \u8c03\u7528\u6765\u52a0\u8f7d\u3002\u53ef\u80fd\u6709\u5176\u4ed6\u4f7f\u7528 switchboard \u7684\u65b9\u6cd5\uff0c\u4f46\u6211\u4eec\u76ee\u524d\u91c7\u7528\u7684\u662f\u6700\u7b80\u5355/\u6700\u5feb\u7684\u8def\u5f84\u6765\u542f\u52a8\u548c\u8fd0\u884c\uff0c\u968f\u65f6\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u63a2\u7d22\u548c\u6539\u8fdb\u3002\u6700\u540e\uff0c\u6211\u4eec\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"payer")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," \u7a0b\u5e8f\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"use crate::*;\n\n#[derive(Accounts)]\n#[instruction(params: InitUserParams)]\npub struct InitUser<'info> {\n  #[account(\n        init,\n        // \u6d4b\u8bd5 - \u6ce8\u91ca\u6389\u8fd9\u4e9b\u79cd\u5b50\u7528\u4e8e\u6d4b\u8bd5\n        // seeds = [\n        //     payer.key().as_ref(),\n        // ],\n        // \u6d4b\u8bd5 - \u53d6\u6d88\u6ce8\u91ca\u8fd9\u4e9b\u79cd\u5b50\u7528\u4e8e\u6d4b\u8bd5\n        seeds = [\n            vrf.key().as_ref(),\n            payer.key().as_ref()\n        ],\n        payer = payer,\n        space = 8 + std::mem::size_of::<UserState>(),\n        bump,\n    )]\n  pub state: AccountLoader<'info, UserState>,\n  #[account(\n        constraint = vrf.load()?.authority == state.key() @ LootboxError::InvalidVrfAuthorityError\n    )]\n  pub vrf: AccountLoader<'info, VrfAccountData>,\n  #[account(mut)]\n  pub payer: Signer<'info>,\n  pub system_program: Program<'info, System>,\n}\n")),(0,a.kt)("p",null,"\u5728\u903b\u8f91\u90e8\u5206\uff0c\u6211\u4eec\u6b63\u5728\u64cd\u4f5c\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\u8d26\u6237\uff0c\u8be5\u8d26\u6237\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"bump"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"switchboard state bump"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"vrf permission bump"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"vrf"),"\u8d26\u6237\u4ee5\u53ca\u4e0e\u4e4b\u5173\u8054\u7684\u7528\u6237\u3002\u4f60\u4f1a\u6ce8\u610f\u5230\u5b58\u5728\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u5176\u4e2d\u53ea\u5305\u62ec\u4e86\u6211\u4eec\u524d\u9762\u63d0\u5230\u7684\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"bump"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct InitUserParams {\n  pub switchboard_state_bump: u8,\n  pub vrf_permission_bump: u8,\n}\n\nimpl InitUser<\'_> {\n  pub fn process_instruction(ctx: &Context<Self>, params: &InitUserParams) -> Result<()> {\n    let mut state = ctx.accounts.state.load_init()?;\n    *state = UserState::default();\n    state.bump = ctx.bumps.get("state").unwrap().clone();\n    state.switchboard_state_bump = params.switchboard_state_bump;\n    state.vrf_permission_bump = params.vrf_permission_bump;\n    state.vrf = ctx.accounts.vrf.key();\n    state.user = ctx.accounts.payer.key();\n\n    Ok(())\n  }\n}\n')),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5feb\u901f\u4e86\u89e3\u4e00\u4e0b\u7528\u6237\u72b6\u6001\u6587\u4ef6\uff0c\u4ece\u800c\u66f4\u597d\u5730\u7406\u89e3\u5176\u4e2d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u65b0\u5f15\u5165\u7684\u90e8\u5206\u662f\u7ed3\u679c\u7f13\u51b2\u533a\u3002\u8fd9\u662f\u6211\u4eec\u83b7\u53d6\u968f\u673a\u6027\u7684\u5730\u65b9\u3002\u7cfb\u7edf\u4f1a\u5c06\u968f\u673a\u6570\u636e\u4f5c\u4e3a\u4e00\u4e2a32\u5b57\u8282\u7684\u6570\u7ec4\u53d1\u9001\u7ed9\u6211\u4eec\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u4efb\u4f55\u6240\u9700\u7684\u968f\u673a\u6027\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u91cc\u8fd8\u6dfb\u52a0\u4e86\u4e24\u4e2a\u5c5e\u6027\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"#[account(zero_copy)]")," \u662f\u4e00\u4e2a\u9700\u8981\u52a0\u8f7d\u7684\u90e8\u5206\uff0c\u6211\u53ea\u662f\u6309\u7167\u4ea4\u6362\u673a\u793a\u4f8b\u4e2d\u7684\u5efa\u8bae\u8fdb\u884c\u64cd\u4f5c\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[repr(packed)]\n#[account(zero_copy)]\n#[derive(Default)]\npub struct UserState {\n  pub bump: u8,\n  pub switchboard_state_bump: u8,\n  pub vrf_permission_bump: u8,\n  pub result_buffer: [u8; 32],\n  pub vrf: Pubkey,\n  pub user: Pubkey,\n}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u521d\u59cb\u7528\u6237\u4ecb\u7ecd\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u6df1\u5165\u4e86\u89e3\u4e86\u3002"))}d.isMDXComponent=!0}}]);