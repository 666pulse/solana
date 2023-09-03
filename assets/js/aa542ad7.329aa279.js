"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[6612],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,u=c["".concat(i,".").concat(d)]||c[d]||k[d]||o;return a?n.createElement(u,l(l({ref:e},m),{},{components:a})):n.createElement(u,l({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[c]="string"==typeof t?t:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19474:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u7a0b\u5e8f",sidebar_position:5,tags:["solana-cook-book","program"]},l="\u7a0b\u5e8f",p={unversionedId:"core-concepts/programs",id:"core-concepts/programs",title:"\u7a0b\u5e8f",description:"\u4efb\u4f55\u5f00\u53d1\u8005\u90fd\u53ef\u4ee5\u5728Solana\u94fe\u4e0a\u7f16\u5199\u4ee5\u53ca\u90e8\u7f72\u7a0b\u5e8f\u3002Solana\u7a0b\u5e8f\uff08\u5728\u5176\u4ed6\u94fe\u4e0a\u53eb\u505a\u667a\u80fd\u5408\u7ea6\uff09\uff0c\u662f\u6240\u6709\u94fe\u4e0a\u6d3b\u52a8\u7684\u57fa\u7840\u3002",source:"@site/docs/cookbook-zh/core-concepts/programs.md",sourceDirName:"core-concepts",slug:"/core-concepts/programs",permalink:"/all-in-one-solana/cookbook-zh/core-concepts/programs",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/dev/docs/cookbook-zh/core-concepts/programs.md",tags:[{label:"solana-cook-book",permalink:"/all-in-one-solana/cookbook-zh/tags/solana-cook-book"},{label:"program",permalink:"/all-in-one-solana/cookbook-zh/tags/program"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693735890,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:5,frontMatter:{title:"\u7a0b\u5e8f",sidebar_position:5,tags:["solana-cook-book","program"]},sidebar:"tutorialSidebar",previous:{title:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09",permalink:"/all-in-one-solana/cookbook-zh/core-concepts/pdas"},next:{title:"\u4ea4\u6613",permalink:"/all-in-one-solana/cookbook-zh/core-concepts/transactions"}},i={},s=[{value:"\u6df1\u5165",id:"\u6df1\u5165",level:2},{value:"\u539f\u751f\u7a0b\u5e8f\u548cSolana\u7a0b\u5e8f\u5e93\uff08SPL\uff09",id:"\u539f\u751f\u7a0b\u5e8f\u548csolana\u7a0b\u5e8f\u5e93spl",level:3},{value:"\u7f16\u5199\u7a0b\u5e8f",id:"\u7f16\u5199\u7a0b\u5e8f",level:3},{value:"\u90e8\u7f72\u7a0b\u5e8f",id:"\u90e8\u7f72\u7a0b\u5e8f",level:3},{value:"\u5176\u4ed6\u8d44\u6599",id:"\u5176\u4ed6\u8d44\u6599",level:2}],m={toc:s},c="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7a0b\u5e8f"},"\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u4efb\u4f55\u5f00\u53d1\u8005\u90fd\u53ef\u4ee5\u5728Solana\u94fe\u4e0a\u7f16\u5199\u4ee5\u53ca\u90e8\u7f72\u7a0b\u5e8f\u3002Solana\u7a0b\u5e8f\uff08\u5728\u5176\u4ed6\u94fe\u4e0a\u53eb\u505a\u667a\u80fd\u5408\u7ea6\uff09\uff0c\u662f\u6240\u6709\u94fe\u4e0a\u6d3b\u52a8\u7684\u57fa\u7840\u3002\n\u94fe\u4e0a\u7684\u4e00\u5207\u6d3b\u52a8\uff0c\u4ece\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08DeFi\uff09\uff0c\u5230\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08NFT\uff09\uff0c\u518d\u5230\u793e\u4ea4\u5a92\u4f53\uff0c\u94fe\u4e0a\u6e38\u620f\uff0c\u90fd\u7531Solana\u7a0b\u5e8f\u6240\u9a71\u52a8\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"tip \u8981\u70b9")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u53ef\u4ee5\u5904\u7406\u6765\u81ea\u7528\u6237\u548c\u5176\u4ed6\u7a0b\u5e8f\u7684",(0,r.kt)("a",{parentName:"li",href:"./transactions"},"\u6307\u4ee4")),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u7a0b\u5e8f\u90fd\u662f",(0,r.kt)("strong",{parentName:"li"},"\u65e0\u72b6\u6001"),"\u7684\uff1a\u6240\u6709\u7684\u548c\u7a0b\u5e8f\u4ea4\u4e92\u7684\u6570\u636e\u90fd\u662f\u5b58\u50a8\u5728\u72ec\u7acb\u7684",(0,r.kt)("a",{parentName:"li",href:"/all-in-one-solana/cookbook-zh/core-concepts/accounts"},"\u8d26\u6237"),"\u4e2d\u3002\u6267\u884c\u65f6\uff0c\u8fd9\u4e9b\u8d26\u6237\u501f\u7531\u6307\u4ee4\u4f20\u5165\u7a0b\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u672c\u8eab\u5b58\u50a8\u5728\u6807\u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"executable"),"\uff08\u53ef\u6267\u884c\uff09\u7684\u8d26\u6237\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u7a0b\u5e8f\u7684\u6240\u6709\u8005\u90fd\u662f",(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader"},"BPF Loader")," and executed by the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/runtime"},"Solana Runtime")),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u901a\u5e38\u4f7f\u7528Rust\u6216C++\u6765\u7f16\u5199\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u91c7\u7528\u4efb\u4f55\u5176\u4ed6\u53ef\u4ee5\u7f16\u8bd1\u4e3a",(0,r.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM"),"\u7684",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"BPF"),"\u540e\u7aef\u7684\u8bed\u8a00"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u7a0b\u5e8f\u90fd\u6709\u4e00\u4e2a\u5355\u72ec\u7684\u5165\u53e3\u70b9\uff0c\u6307\u4ee4\u7684\u6267\u884c\u5c31\u662f\u4ece\u8fd9\u91cc\u5f00\u59cb\u7684\uff08\u4ea6\u5373",(0,r.kt)("inlineCode",{parentName:"li"},"process_instruction"),"\uff09\u3002\u53c2\u6570\u987b\u5305\u62ec\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"program_id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"pubkey")," \uff08\u516c\u94a5\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," \uff08\u6570\u7ec4\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instruction_data"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"byte array")," \uff08\u5b57\u8282\u6570\u7ec4\uff09"))))),(0,r.kt)("h2",{id:"\u6df1\u5165"},"\u6df1\u5165"),(0,r.kt)("p",null,'\u4e0e\u5176\u4ed6\u94fe\u4e0d\u540c\uff0cSolana\u5c06\u4ee3\u7801\u4e0e\u6570\u636e\u5b8c\u5168\u5206\u5f00\u3002\n\u7a0b\u5e8f\u9700\u8981\u8bbf\u95ee\u7684\u5168\u90e8\u6570\u636e\u90fd\u5b58\u50a8\u5728\u72ec\u7acb\u7684\u8d26\u6237\u4e2d\uff0c\u5728\u6307\u4ee4\u4e2d\u8fd9\u4e9b\u8d26\u6237\u9700\u8981\u4ee5\u5f15\u7528\u7684\u65b9\u5f0f\u4f20\u5165\u3002\n\u8fd9\u79cd\u6a21\u5f0f\u4f7f\u5f97\u4e00\u4e2a\u901a\u7528\u7684\u7a0b\u5e8f\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8d26\u6237\u4e0a\u8fd0\u884c\uff0c\u800c\u4e0d\u7528\u4e3a\u6b64\u989d\u5916\u90e8\u7f72\u7a0b\u5e8f\u3002\n\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f8b\u5b50\u5f88\u5e38\u89c1\uff0c\u5305\u62ec\u4e86"\u539f\u751f\u7a0b\u5e8f"\u4ee5\u53ca"SPL\u7a0b\u5e8f"\u7b49\u3002'),(0,r.kt)("h3",{id:"\u539f\u751f\u7a0b\u5e8f\u548csolana\u7a0b\u5e8f\u5e93spl"},"\u539f\u751f\u7a0b\u5e8f\u548cSolana\u7a0b\u5e8f\u5e93\uff08SPL\uff09"),(0,r.kt)("p",null,"Solana\u81ea\u5e26\u4e00\u7cfb\u5217\u7a0b\u5e8f\uff0c\u8fd9\u4e9b\u7a0b\u5e8f\u662f\u94fe\u4e0a\u4ea4\u4e92\u7684\u6838\u5fc3\u6784\u6210\u8981\u7d20\u3002\n\u8fd9\u4e9b\u7a0b\u5e8f\u5206\u4e3a",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader"},"\u539f\u751f\u7a0b\u5e8f"),"\n\u548c",(0,r.kt)("a",{parentName:"p",href:"https://spl.solana.com/"},"Solana\u7a0b\u5e8f\u5e93\uff08SPL\u7a0b\u5e8f\uff09")),(0,r.kt)("p",null,"\u539f\u751f\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u8fd0\u884c\u9a8c\u8bc1\u8282\u70b9\uff08validator\uff09\u6240\u9700\u7684\u529f\u80fd\u3002\u539f\u751f\u7a0b\u5e8f\u4e2d\u6700\u5e7f\u4e3a\u4eba\u77e5\u7684\u662f",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program"},"System Program"),"\u3002\n\u8fd9\u4e2a\u7a0b\u5e8f\u8d1f\u8d23\u7ba1\u7406\u5efa\u7acb\u65b0\u8d26\u6237\u4ee5\u53ca\u5728\u4e24\u4e2a\u8d26\u6237\u4e4b\u95f4\u8f6c\u8d26SOL\u3002"),(0,r.kt)("p",null,"SPL\u7a0b\u5e8f\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u94fe\u4e0a\u6d3b\u52a8\uff0c\u5176\u4e2d\u5305\u62ec\u9488\u5bf9\u4ee3\u5e01\u7684\u521b\u5efa\uff0c\u4ea4\u6362\uff0c\u501f\u8d37\uff0c\u4ee5\u53ca\u521b\u5efa\u8d28\u62bc\u6c60\uff0c\u7ef4\u62a4\u94fe\u4e0a\u57df\u540d\u89e3\u6790\u670d\u52a1\u7b49\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://spl.solana.com/token"},"SPL Token Program\uff08SPL\u4ee3\u5e01\u7a0b\u5e8f\uff09"),"\u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u8c03\u7528\uff0c\u5176\u4ed6\u7684\u4e00\u4e9b\uff0c\u5982\n",(0,r.kt)("a",{parentName:"p",href:"https://spl.solana.com/associated-token-account"},"Associated Token Account Program\uff08\u5173\u8054\u4ee3\u5e01\u8d26\u6237\u7a0b\u5e8f\uff09"),"\uff0c\n\u5219\u5e38\u88ab\u7528\u4e8e\u7f16\u5199\u5176\u4ed6\u5b9a\u5236\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"\u7f16\u5199\u7a0b\u5e8f"},"\u7f16\u5199\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u7f16\u5199Solana\u7a0b\u5e8f\u5e38\u7528\u7684\u662fRust\u548cC++\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u53ef\u4ee5\u7f16\u8bd1\u4e3aLLVM\u7684BPF\u540e\u7aef\u7684\u8bed\u8a00\u3002\n\u6700\u8fd1",(0,r.kt)("a",{parentName:"p",href:"https://neon-labs.org/"},"Neon Labs"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://solang.readthedocs.io/en/latest/"},"Solang"),"\u53d1\u8d77\u4e86\u4e00\u4e2a\u9879\u76ee\uff0c\n\u65e8\u5728\u5efa\u7acbSolana\u7684",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),"\u517c\u5bb9\u6027\uff0c\u8fdb\u800c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528Solidity\u7f16\u5199\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5927\u90e8\u5206Rust\u7f16\u5199\u7684\u7a0b\u5e8f\u9075\u5faa\u4ee5\u4e0b\u67b6\u6784\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lib.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u6a21\u5757")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entrypoint.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instruction.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u7684API, \u5bf9\u6307\u4ee4\u7684\u6570\u636e\u8fdb\u884c\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processor.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u7684\u4e1a\u52a1\u903b\u8f91")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u5bf9\u8c61\uff0c\u5bf9\u72b6\u6001\u8fdb\u884c\u53cd\u5e8f\u5217\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error.rs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u4e2d\u5236\u5b9a\u7684\u9519\u8bef")))),(0,r.kt)("p",null,"\u6700\u8fd1\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://project-serum.github.io/anchor/getting-started/introduction.html"},"Anchor"),"\u9010\u6e10\u6210\u4e3a\u4e86\u4e00\u4e2a\u5e7f\u53d7\u6b22\u8fce\u7684Solana\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u3002\nAnchor\u662f\u4e00\u4e2a\u6709\u6001\u5ea6\u7684\u6846\u67b6\uff0c\u4e0eRuby on Rails\u76f8\u4f3c\uff0c\u8fd9\u4e2a\u6846\u67b6\u65e8\u5728\u51cf\u5c11\u6a21\u5f0f\u5316\u7684\u4ee3\u7801\uff0c\u5c06Rust\u5f00\u53d1\u6d41\u7a0b\u4e2d\u7684\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u6d41\u6c34\u7ebf\u5316\u3002"),(0,r.kt)("p",null,"\u5728\u90e8\u7f72\u5230Testnet\uff08\u6d4b\u8bd5\u7f51\uff09\u548cMainnet\uff08\u4e3b\u7f51\uff09\u4e4b\u524d\uff0c\u7a0b\u5e8f\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u9636\u6bb5\u7ecf\u5e38\u4f7f\u7528Localhost\u548cDevnet\uff08\u5f00\u53d1\u7f51\uff09\u73af\u5883\u3002\nSolana\u652f\u6301\u4ee5\u4e0b\u7684\u51e0\u4e2a\u73af\u5883\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4\u73af\u5883"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC\u8fde\u63a5URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet-beta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.mainnet-beta.solana.com"},"https://api.mainnet-beta.solana.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.testnet.solana.com"},"https://api.testnet.solana.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Devnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.devnet.solana.com"},"https://api.devnet.solana.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7aef\u53e3\uff1a8899\uff08\u4f8b\u5982\uff0chttp://localhost:8899\uff0c",(0,r.kt)("a",{parentName:"td",href:"http://192.168.1.88:8899%EF%BC%89"},"http://192.168.1.88:8899\uff09"))))),(0,r.kt)("p",null,"\u90e8\u7f72\u5230\u4e00\u4e2a\u73af\u5883\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u901a\u8fc7\u5bf9\u5e94\u96c6\u7fa4\u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api"},"RPC\u8fde\u63a5"),"\u4e0e\u94fe\u4e0a\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("h3",{id:"\u90e8\u7f72\u7a0b\u5e8f"},"\u90e8\u7f72\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/deploy-a-program"},"\u547d\u4ee4\u884c"),"\u90e8\u7f72\u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana program deploy <PROGRAM_FILEPATH>\n")),(0,r.kt)("p",null,"\u90e8\u7f72\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u5305\u542bBPF\u5b57\u8282\u7801\u7684",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},"ELF\u5171\u4eab\u5bf9\u8c61"),"\uff0c\u5e76\u4e0a\u4f20\u5230Solana\u96c6\u7fa4\u4e0a\u3002\n\u548cSolana\u4e0a\u5176\u4ed6\u7684\u4efb\u4f55\u4e1c\u897f\u4e00\u6837\uff0c\u7a0b\u5e8f\u50a8\u5b58\u5728\u8d26\u6237\u5f53\u4e2d\u3002\u552f\u4e00\u7684\u7279\u6b8a\u4e4b\u5904\u662f\uff0c\u8fd9\u4e9b\u8d26\u6237\u6807\u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"executable"),'\uff08\u53ef\u6267\u884c\uff09\uff0c\u5e76\u4e14\u5176\u6240\u6709\u8005\u662f"BPF Loader\uff08BPF\u52a0\u8f7d\u5668\uff09"\u3002\n\u8fd9\u4e2a\u8d26\u6237\u7684\u5730\u5740\u88ab\u79f0\u4e3a',(0,r.kt)("inlineCode",{parentName:"p"},"program_id"),"\uff0c\u5728\u540e\u9762\u7684\u4e00\u5207\u4ea4\u6613\u5f53\u4e2d\uff0c\u7528\u4e8e\u6307\u4ee3\u8fd9\u4e2a\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"Solana\u652f\u6301\u591a\u79cdBPF\u52a0\u8f7d\u5668\uff0c\u6700\u65b0\u7684\u662f",(0,r.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/BPFLoaderUpgradeab1e11111111111111111111111"},"Upgradable BPF Loader"),"\u3002\nBPF\u52a0\u8f7d\u5668\u8d1f\u8d23\u7ba1\u7406\u7a0b\u5e8f\u8d26\u6237\uff0c\u8ba9\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"program_id"),"\u5bf9\u7a0b\u5e8f\u8fdb\u884c\u8bbf\u95ee\u3002\u6bcf\u4e2a\u7a0b\u5e8f\u90fd\u53ea\u6709\u4e00\u4e2a\u5165\u53e3\u70b9\uff0c\u8fd9\u91cc\u5bf9\u6307\u4ee4\u8fdb\u884c\u5904\u7406\u3002\u8fd9\u91cc\u7684\u53c2\u6570\u987b\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"program_id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"pubkey"),"\uff08\u516c\u94a5\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),"\uff08\u6570\u7ec4\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instruction_data"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"byte array"),"\uff08\u5b57\u8282\u6570\u7ec4\uff09")),(0,r.kt)("p",null,"\u5f53\u7a0b\u5e8f\u88ab\u8c03\u7528\u65f6\uff0c\u4f1a\u5728Solana\u8fd0\u884c\u5e93\u4e2d\u88ab\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6599"},"\u5176\u4ed6\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/on-chain-programs/overview"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spl.solana.com/"},"SPL\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jstarry.notion.site/Program-deploys-29780c48794c47308d5f138074dd9838"},"Program Deploys by Justin Starry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hackmd.io/@ironaddicteddog/solana-starter-kit"},"Solana Starter Kit by Iron Addicted Dog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/"},"Programming on Solana by Paulx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://2501babe.github.io/posts/solana101.html"},"An Introduction to the Solana Blockchain by Hana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://project-serum.github.io/anchor/getting-started/introduction.html"},"Anchor"))))}k.isMDXComponent=!0}}]);