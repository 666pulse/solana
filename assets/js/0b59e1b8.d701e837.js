"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),k=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=k(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=k(t),c=l,d=u["".concat(p,".").concat(c)]||u[c]||s[c]||o;return t?a.createElement(d,r(r({ref:n},m),{},{components:t})):a.createElement(d,r({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var k=2;k<o;k++)r[k]=t[k];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var a=t(87462),l=(t(67294),t(3905));const o={sidebar_position:28,sidebar_label:"\ud83d\udcb5 Token Program",sidebar_class_name:"green",tags:["spl-token","solana","token-program"]},r="\ud83d\udcb5 Token Program",i={unversionedId:"module2/spl-token/the-token-program/README",id:"module2/spl-token/the-token-program/README",title:"\ud83d\udcb5 Token Program",description:"\u4f5c\u4e3a\u533a\u5757\u94fe\u6700\u57fa\u672c\u7684\u627f\u8bfa\uff0c\u8fd9\u4e9b\u4ee3\u5e01\u4e5f\u8bb8\u662f\u4f60\u5b89\u88c5\u94b1\u5305\u7684\u4e3b\u8981\u539f\u56e0\uff0c\u5b83\u4eec\u662f\u533a\u5757\u94fe\u4e0a\u8d44\u4ea7\u6700\u7eaf\u7cb9\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u4ece\u5408\u6210\u80a1\u7968\u5230\u6570\u767e\u79cd\u72d7\u5e01\u3002",source:"@site/docs/Solana-Co-Learn/module2/spl-token/the-token-program/README.md",sourceDirName:"module2/spl-token/the-token-program",slug:"/module2/spl-token/the-token-program/",permalink:"/Solana-Co-Learn/module2/spl-token/the-token-program/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/Solana-Co-Learn/module2/spl-token/the-token-program/README.md",tags:[{label:"spl-token",permalink:"/Solana-Co-Learn/tags/spl-token"},{label:"solana",permalink:"/Solana-Co-Learn/tags/solana"},{label:"token-program",permalink:"/Solana-Co-Learn/tags/token-program"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1695967092,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:28,frontMatter:{sidebar_position:28,sidebar_label:"\ud83d\udcb5 Token Program",sidebar_class_name:"green",tags:["spl-token","solana","token-program"]},sidebar:"tutorialSidebar",previous:{title:"SPL token",permalink:"/Solana-Co-Learn/module2/spl-token/"},next:{title:"\ud83c\udfe7 \u5728Solana\u4e0a\u94f8\u9020\u4ee3\u5e01",permalink:"/Solana-Co-Learn/module2/spl-token/mint-token-on-solana/"}},p={},k=[{value:"\ud83d\uddc3 \u8d26\u6237\u5173\u7cfb",id:"-\u8d26\u6237\u5173\u7cfb",level:2},{value:"\ud83c\udf0c \u94f8\u5e01\u8d26\u6237(<code>Mint Account</code>)",id:"-\u94f8\u5e01\u8d26\u6237mint-account",level:2},{value:"\ud83d\udc5b \u4ee3\u5e01\u8d26\u6237(<code>Token Account</code>)",id:"-\u4ee3\u5e01\u8d26\u6237token-account",level:2},{value:"\ud83e\udd11 \u4ee3\u5e01\u94f8\u9020\u8fc7\u7a0b",id:"-\u4ee3\u5e01\u94f8\u9020\u8fc7\u7a0b",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:k},u="wrapper";function s(e){let{components:n,...o}=e;return(0,l.kt)(u,(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-token-program"},"\ud83d\udcb5 Token Program"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u533a\u5757\u94fe\u6700\u57fa\u672c\u7684\u627f\u8bfa\uff0c\u8fd9\u4e9b\u4ee3\u5e01\u4e5f\u8bb8\u662f\u4f60\u5b89\u88c5\u94b1\u5305\u7684\u4e3b\u8981\u539f\u56e0\uff0c\u5b83\u4eec\u662f\u533a\u5757\u94fe\u4e0a\u8d44\u4ea7\u6700\u7eaf\u7cb9\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u4ece\u5408\u6210\u80a1\u7968\u5230\u6570\u767e\u79cd\u72d7\u5e01\u3002"),(0,l.kt)("p",null,"\u672c\u8bfe\u5c06\u4e3b\u8981\u8bb2\u89e3\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u4ee3\u5e01\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u533a\u5757\u94fe\u6709\u6240\u4e86\u89e3\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u8fd9\u91cc\u5b58\u5728\u4e00\u4e9b\u5dee\u5f02\uff0c\u6240\u4ee5\u5c3d\u91cf\u4e0d\u8981\u4e0e\u4f60\u5f53\u524d\u5bf9\u4ee3\u5e01\u7684\u7406\u89e3\u8054\u7cfb\u8d77\u6765\u3002"),(0,l.kt)("p",null,"\u63a2\u8ba8",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e2d\u4ee3\u5e01\u7684\u5de5\u4f5c\u539f\u7406\u4e5f\u662f\u4e00\u4e2a\u6df1\u5165\u4e86\u89e3\u4e0d\u540c\u7a0b\u5e8f\u5982\u4f55\u4f7f\u7528\u8d26\u6237\u7684\u7edd\u4f73\u673a\u4f1a\u3002\u4f60\u8d8a\u6df1\u5165\u4e86\u89e3",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\uff0c\u5c31\u8d8a\u80fd\u610f\u8bc6\u5230\u8d26\u6237\u7684\u91cd\u8981\u6027\u3002\u867d\u7136\u5b83\u4eec\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u62bd\u8c61\u548c\u7075\u6d3b\u6027\u4e0e\u6587\u4ef6\u7c7b\u4f3c\uff0c\u4f46\u8fd9\u4e5f\u610f\u5473\u7740\u4efb\u4f55\u7279\u5b9a\u7a0b\u5e8f\u4e0a\u7684\u8d26\u6237\u53ef\u80fd\u53d8\u5f97\u76f8\u5f53\u590d\u6742\uff01\u521d\u5f00\u59cb\u53ef\u80fd\u4f1a\u611f\u5230\u6df7\u4e71\uff0c\u4f46\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5b83\u4f1a\u53d8\u5f97\u66f4\u52a0\u6e05\u6670\u3002"),(0,l.kt)("p",null,"Solana\u4e0a\u7684\u4ee3\u5e01\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Solana Token Program"),"\u6765\u521b\u5efa\u548c\u7ba1\u7406\u7684\uff0c\u5b83\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Solana Program Library\uff08SPL\uff09"),"\u7684\u4e00\u90e8\u5206\u7a0b\u5e8f\u3002\u5e38\u89c4\u4ee3\u5e01\u548c\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"NFTs"),"\uff09\u90fd\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\u5e93\u4e2d\u7684\u4ee3\u5e01\u7c7b\u578b\u3002\u4eca\u5929\u6211\u4eec\u4e0d\u4f1a\u6d89\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"NFTs"),"\uff0c\u4f46\u4e0d\u8981\u62c5\u5fc3\uff0c\u6211\u4eec\u4f1a\u5f88\u5feb\u4ecb\u7ecd\u3002"),(0,l.kt)("h2",{id:"-\u8d26\u6237\u5173\u7cfb"},"\ud83d\uddc3 \u8d26\u6237\u5173\u7cfb"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u8981\u4e86\u89e3\u4e00\u4e0b\u6574\u4f53\u60c5\u51b5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Token Program"),"\u9700\u8981\u4e09\u4e2a\u5fc5\u8981\u7684\u8d26\u6237\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(37740).Z,width:"1398",height:"324"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Wallet Account")," - \u5c31\u662f\u4f60\u7684\u94b1\u5305\uff01"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mint Account")," - \u5b58\u50a8\u5173\u4e8e\u4ee3\u5e01\u94f8\u9020\u7684\u5143\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Token Account")," - \u4e0e\u94b1\u5305\u5173\u8054\uff0c\u5b58\u50a8\u6709\u5173\u7279\u5b9a\u94b1\u5305\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u5b83\u6301\u6709\u591a\u5c11\u4ee3\u5e01\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u6bcf\u4e2a\u8d26\u6237\uff0c\u770b\u770b\u5b83\u4eec\u7684\u5185\u90e8\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"-\u94f8\u5e01\u8d26\u6237mint-account"},"\ud83c\udf0c \u94f8\u5e01\u8d26\u6237(",(0,l.kt)("inlineCode",{parentName:"h2"},"Mint Account"),")"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(89309).Z,width:"1398",height:"432"})),(0,l.kt)("p",null,"\u94f8\u5e01\u8d26\u6237\u5b58\u50a8\u5173\u4e8e\u4ee3\u5e01\u672c\u8eab\u7684\u5143\u6570\u636e\uff0c\u4e0d\u662f\u5173\u4e8e\u4f60\u5bf9\u4ee3\u5e01\u7684\u6240\u6709\u6743\uff0c\u800c\u662f\u6d89\u53ca\u4ee3\u5e01\u7684\u66f4\u5e7f\u6cdb\u5185\u5bb9\u3002\u5b83\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mint authority")," - \u53ea\u6709\u4e00\u4e2a\u8d26\u6237\u53ef\u4ee5\u4ece\u94f8\u5e01\u8d26\u6237\u7b7e\u540d\u5e76\u94f8\u9020\u4ee3\u5e01\u3002\u521b\u5efa\u94f8\u5e01\u8d26\u6237\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u94f8\u5e01\u6743\u9650\uff0c\u53ef\u4ee5\u662f\u4f60\u7684\u4e2a\u4eba\u94b1\u5305\u6216\u5176\u4ed6\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"supply")," - \u5b58\u5728\u7684\u603b\u4ee3\u5e01\u6570\u91cf\u3002\u201c",(0,l.kt)("inlineCode",{parentName:"li"},"supply"),"\u201d\u57fa\u672c\u4e0a\u662f\u5728\u8bf4\uff1a\u201c\u7801\u519c\u5927\u795e\uff0c\u4f60\u597d\uff01\u8fd9\u662f\u53d1\u884c\u7684\u603b\u4ee3\u5e01\u6570\u91cf\u3002\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimals")," - \u8fd9\u662f\u6211\u4eec\u5141\u8bb8\u4ee3\u5e01\u88ab\u5206\u5272\u7684\u5c0f\u6570\u4f4d\u6570\uff0c\u5373\u4ee3\u5e01\u7684\u7cbe\u5ea6\u3002\u8fd9\u53ef\u80fd\u4f1a\u6709\u4e9b\u68d8\u624b\uff0c\u56e0\u4e3a\u5b9e\u9645\u4e0a\u94fe\u4e0a\u6ca1\u6709\u5c0f\u6570\u3002\u6574\u4e2a\u4f9b\u5e94\u91cf\u8868\u793a\u4e3a\u6574\u6570\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u8fdb\u884c\u6570\u5b66\u8ba1\u7b97\u4ee5\u5728\u5c0f\u6570\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5c06\u5c0f\u6570\u4f4d\u6570\u8bbe\u7f6e\u4e3a\u4e24\u4f4d\uff0c\u800c\u4f60\u7684\u4f9b\u5e94\u91cf\u662f\u4e00\u767e\uff0c\u90a3\u4e48\u5b9e\u9645\u4e0a\u4f60\u53ea\u6709\u4e00\u4e2a\u4ee3\u5e01\u3002\u4f9b\u5e94\u91cf\u4e2d\u53ea\u6709\u4e00\u4e2a\u4ee3\u5e01\uff0c\u4f46\u4f60\u5141\u8bb8\u5b83\u88ab\u5206\u5272\u6210\u8f83\u5c0f\u7684\u9762\u989d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Is Initialized")," - \u57fa\u672c\u4e0a\u6307\u7684\u662f\u8be5\u8d26\u6237\u662f\u5426\u5df2\u51c6\u5907\u5c31\u7eea\u3002\u8fd9\u4e0e\u8d26\u6237\u672c\u8eab\u6709\u5173\uff0c\u800c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"\u4ee3\u5e01\u7a0b\u5e8f"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Freeze authority ")," - \u51bb\u7ed3\u6743\u9650\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"mint authority"),"\u7c7b\u4f3c\uff0c\u8868\u793a\u4e00\u4e2a\u4eba\u6216\u7a0b\u5e8f\u5177\u6709\u51bb\u7ed3\uff08\u6216\u94f8\u9020\uff09\u4ee3\u5e01\u7684\u6743\u9650\u3002")),(0,l.kt)("p",null,"\u5c06\u94f8\u5e01\u6743\u9650\u8bbe\u7f6e\u4e3a\u4f60\u7684\u94b1\u5305\u662f\u4e00\u79cd\u76f8\u5f53\u6807\u51c6\u7684\u505a\u6cd5\u3002\u4f60\u53ef\u4ee5\u94f8\u9020\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u4ee3\u5e01\uff0c\u7136\u540e\u64a4\u9500\u94f8\u5e01\u6743\u9650\uff0c\u57fa\u672c\u4e0a\u610f\u5473\u7740\u672a\u6765\u4e0d\u4f1a\u518d\u6709\u66f4\u591a\u7684\u4f9b\u5e94\u91cf\u3002\u6216\u8005\uff0c\u5982\u679c\u4f60\u6709\u67d0\u79cd\u52a8\u6001\u53d1\u884c\u4ee3\u5e01\u7684\u65b9\u5f0f\uff0c\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u5c06\u5176\u653e\u5165\u6743\u9650\u4e2d\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u7a0b\u5e8f\u6765\u7ba1\u7406\u4ee3\u5e01\u7684\u94f8\u9020\u3002"),(0,l.kt)("p",null,"\u51bb\u7ed3\u6743\u9650\u7684\u5de5\u4f5c\u65b9\u5f0f\u76f8\u540c\u3002"),(0,l.kt)("h2",{id:"-\u4ee3\u5e01\u8d26\u6237token-account"},"\ud83d\udc5b \u4ee3\u5e01\u8d26\u6237(",(0,l.kt)("inlineCode",{parentName:"h2"},"Token Account"),")"),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\u751f\u6001\u7cfb\u7edf\u4e2d\u6d41\u901a\u7684\u4f17\u591a\u4e0d\u540c\u4ee3\u5e01\u3002\u4f60\u7684\u94b1\u5305\u91cc\u73b0\u5728\u53ef\u80fd\u5145\u6ee1\u4e86\u5404\u79cd\u5404\u6837\u7684\u4ee3\u5e01\u3002\u4f46\u662f\uff0c\u7f51\u7edc\u662f\u5982\u4f55\u8bc6\u522b\u4f60\u6301\u6709\u67d0\u4e9b\u4ee3\u5e01\u7684\u5462\uff1f\u7b54\u6848\u5c31\u5728\u4e8e\u5b58\u50a8\u8fd9\u4e9b\u6570\u636e\u7684\u8d26\u6237\uff01\u6700\u597d\u7684\u65b9\u5f0f\u5c31\u662f\u901a\u8fc7\u5173\u8054\u4ee3\u5e01\u8d26\u6237\u6765\u5b9e\u73b0\u3002\u4e0b\u9762\u8fd9\u5f20\u56fe\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7406\u89e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(63626).Z,width:"1210",height:"802"})),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u6570\u636e\u5173\u7cfb\u548c\u8d26\u6237\u5c5e\u6027\u7684\u793a\u4f8b\u56fe\u3002"),(0,l.kt)("p",null,"Token\u8d26\u6237\u5fc5\u987b\u4e0e\u7528\u6237\u6216\u94b1\u5305\u5173\u8054\u3002\u4e00\u79cd\u7b80\u4fbf\u7684\u65b9\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff08\u7a0b\u5e8f\u884d\u751f\u5730\u5740\uff09\uff0c\u5176\u5730\u5740\u5c06\u94f8\u5e01\u8d26\u6237\u548c\u94b1\u5305\u8fde\u63a5\u5728\u4e00\u8d77\u3002\u4ee4\u724c\u8d26\u6237",(0,l.kt)("inlineCode",{parentName:"p"},"PDA"),"\u7684\u79cd\u5b50\u7531\u94f8\u5e01\u8d26\u6237\u7684\u5730\u5740\u548c\u94b1\u5305\u5730\u5740\u7ec4\u6210\uff08\u5176\u4e2d\u4ee4\u724c\u7a0b\u5e8fID\u662f\u9ed8\u8ba4\u5b58\u5728\u7684\uff09\u3002"),(0,l.kt)("p",null,"\u867d\u7136\u5305\u62ec\u4e86\u5f88\u591a\u4e0d\u540c\u7684\u4fe1\u606f\uff0c\u4f46\u73b0\u5728\u4f60\u53ea\u9700\u8981\u7406\u89e3\u7684\u662f\uff0c\u4f60\u7684\u94b1\u5305\u5e76\u4e0d\u76f4\u63a5\u6301\u6709\u5177\u4f53\u7684\u4ee3\u5e01\u3002\u5b83\u4e0e\u4e00\u4e2a\u5b58\u50a8\u4e86\u4ee3\u5e01\u6570\u91cf\u7684\u5173\u8054\u8d26\u6237\u6709\u5173\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u94f8\u5e01\u8d26\u6237\uff0c\u5b58\u50a8\u4e86\u6709\u5173\u6240\u6709\u4ee3\u5e01\u548c\u94f8\u5e01\u7684\u66f4\u5e7f\u6cdb\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8bf7\u82b1\u4e9b\u65f6\u95f4\u4ed4\u7ec6\u7814\u7a76\u8fd9\u4e2a\u56fe\u8868\uff0c\u5bf9\u4e0d\u660e\u767d\u7684\u90e8\u5206\u8fdb\u884c\u641c\u7d22\uff08\u4f8b\u5982\u5173\u8054\u7684\u4ee4\u724c\u7a0b\u5e8f\u7a76\u7adf\u662f\u4ec0\u4e48\uff1f\uff09\u3002\u5904\u7406\u4e86\u6240\u6709\u590d\u6742\u7684\u90e8\u5206\u540e\uff0c\u8fd9\u4e00\u5207\u5c06\u53d8\u5f97\u975e\u5e38\u7b80\u5355\uff01"),(0,l.kt)("h2",{id:"-\u4ee3\u5e01\u94f8\u9020\u8fc7\u7a0b"},"\ud83e\udd11 \u4ee3\u5e01\u94f8\u9020\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u522b\u518d\u76ef\u7740\u56fe\u8868\u770b\u4e86\uff0c\u8ba9\u6211\u4eec\u6765\u6df1\u5165\u4e00\u4e9b\u4ee3\u7801\uff0c\u4e86\u89e3\u8fd9\u4e00\u5207\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SPL-Token"),"\uff0c\u9996\u5148\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Token Mint"),"\uff08\u4e00\u4e2a\u5b58\u50a8\u8be5\u7279\u5b9a\u4ee3\u5e01\u76f8\u5173\u6570\u636e\u7684\u8d26\u6237\uff09\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8fc7\u7a0b\u60f3\u8c61\u4e3a\u5236\u4f5c\u6bd4\u8428\u997c\u3002\u4f60\u9700\u8981\u98df\u8c31\uff08\u5173\u4e8e\u4ee3\u5e01\u7684\u6570\u636e\uff09\u3001\u98df\u6750\uff08\u94f8\u5e01\u8d26\u6237\u548c\u94b1\u5305\u5730\u5740\uff09\uff0c\u8fd8\u6709\u4e00\u4e2a\u4eba\u5c06\u5b83\u4eec\u7ec4\u5408\u5728\u4e00\u8d77\uff08\u6d3e\u751f\u4e00\u4e2a\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff09\u3002\u5c31\u50cf\u5236\u4f5c\u6bd4\u8428\u4e00\u6837\uff0c\u53ea\u8981\u4f60\u6709\u6b63\u786e\u7684\u98df\u6750\u5e76\u6309\u7167\u98df\u8c31\u64cd\u4f5c\uff0c\u6700\u7ec8\u4f60\u5c31\u80fd\u5f97\u5230\u4e00\u679a\u7f8e\u5473\u7684\u65b0\u4ee3\u5e01\uff01"),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Token Program"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"SPL"),"\u7684\u4e00\u90e8\u5206\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/spl-token"},(0,l.kt)("inlineCode",{parentName:"a"},"@solana/spl-token"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeScript SDK"),"\u76f8\u5f53\u8f7b\u677e\u5730\u8fdb\u884c\u521b\u5efa\u4ea4\u6613\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"createMint"),"\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'\nimport { createMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";\n\n// \u751f\u6210token \u7684 account\u5730\u5740\uff0c\u6b64\u9879\u4e3a\u53ef\u9009\u9879\nconst newToken = web3.Keypair.generate();\nconst tokenMint = await createMint(\n  connection,\n  payer,\n  mintAuthority,\n  freezeAuthority,\n  decimals,\n  newToken,\n  null,\n  TOKEN_PROGRAM_ID\n)\n')),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"connection")," - \u4e0e\u96c6\u7fa4\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"JSON-RPC"),"\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payer")," - \u4ed8\u6b3e\u65b9\u4ea4\u6613\u7684\u516c\u94a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mintAuthority")," - \u88ab\u6388\u6743\u94f8\u9020\u65b0\u4ee3\u5e01\u7684\u8d26\u6237"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"freezeAuthority")," - \u88ab\u6388\u6743\u51bb\u7ed3\u4ee3\u5e01\u7684\u8d26\u6237\u3002\u5982\u679c\u4f60\u4e0d\u60f3\u51bb\u7ed3\u4ee3\u5e01\uff0c\u8bf7\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\uff01"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimals")," - \u6307\u5b9a\u4ee3\u5e01\u6240\u9700\u7684\u5c0f\u6570\u7cbe\u5ea6")),(0,l.kt)("p",null,"\u53ef\u9009\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"newToken \u751f\u6210token \u7684 account\u5730\u5740\uff0c\u4e3a\u7a7a\uff0c\u5c06\u9ed8\u8ba4\u751f\u6210\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"null \u4e3a confirmOptions \uff0c\u6309\u7167\u9ed8\u8ba4\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"TOKEN_PROGRAM_ID token \u7a0b\u5e8f\u7684ID")),(0,l.kt)("p",null,"\u5b8c\u6210\u8fd9\u4e2a\u6b65\u9aa4\u540e\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5173\u8054\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Token"),"\u8d26\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4ee3\u5e01\u94f8\u9020\u5230\u67d0\u4e2a\u8d26\u6237\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u60f3\u901a\u8fc7\u8f6c\u8d26\u529f\u80fd\u7a7a\u6295\u5230\u591a\u4e2a\u8d26\u6237")),(0,l.kt)("p",null,"\u4f60\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/spl-token SDK"),"\u4e2d\u9700\u8981\u7684\u4e00\u5207\u90fd\u5df2\u51c6\u5907\u597d\u3002\u5982\u679c\u4f60\u5bf9\u67d0\u4e2a\u5177\u4f53\u90e8\u5206\u611f\u5174\u8da3\uff0c\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"https://spl.solana.com/token"},"\u67e5\u770b\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/spl-token SDK"),"\u5c31\u8db3\u591f\u4e86\uff0c\u4f60\u65e0\u9700\u81ea\u5df1\u521b\u5efa\u539f\u59cb\u4ea4\u6613\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u4e00\u4e2a\u6709\u8da3\u7684\u9644\u6ce8\u2014\u2014\u5982\u679c\u51fa\u4e8e\u67d0\u79cd\u539f\u56e0\uff0c\u4f60\u60f3\u8981\u5728\u521b\u5efa\u94f8\u5e01\u6307\u4ee4\u7684\u540c\u65f6\u521b\u5efa\u53e6\u4e00\u4e2a\u6307\u4ee4\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u8fd9\u4e9b\u6307\u4ee4\uff0c\u5e76\u5c06\u5b83\u4eec\u7ec4\u5408\u6210\u4e00\u4e2a\u4e8b\u52a1\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u6027\u7684\u3002\u4e5f\u8bb8\u4f60\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u9ad8\u5ea6\u4fdd\u5bc6\u7684\u4ee3\u5e01\u7a0b\u5e8f\uff0c\u4f60\u5e0c\u671b\u5728\u94f8\u5e01\u540e\u7acb\u5373\u9501\u5b9a\u6240\u6709\u4ee3\u5e01\uff0c\u4f7f\u6ca1\u6709\u4eba\u80fd\u591f\u8f6c\u79fb\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u4e0d\u7528\u8bf4\uff0c\u56f4\u7ed5\u8fd9\u4e9b\u4ee3\u5e01\u53d1\u751f\u4e86\u8bb8\u591a\u6709\u8da3\u7684\u4e8b\u60c5\u3002\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://www.soldev.app/course/token-program"},"\u6b64\u5904"),"\u4e86\u89e3\u6bcf\u4e2a\u529f\u80fd\u80cc\u540e\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u751a\u81f3\u8fd8\u53ef\u4ee5\u67e5\u770b\u4e00\u4e9b\u5173\u4e8e\u9500\u6bc1\u4ee3\u5e01\u7b49\u7684\u8bf4\u660e\u3002:)"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.soldev.app/course/token-program"},"\u901a\u8fc7\u4ee3\u5e01\u7a0b\u5e8f\u521b\u5efa\u4ee3\u5e01"))))}s.isMDXComponent=!0},37740:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/account-relationships-32aea7eebf191f14b24d07413a4830ef.png"},89309:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mint-account-fde825e14362cee72fa5485c8c97a171.png"},63626:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/token-account-3c6963a8d1ed41b58a413bac17b70494.png"}}]);