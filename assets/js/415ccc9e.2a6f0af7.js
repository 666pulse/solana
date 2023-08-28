"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),m=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},k=function(e){var n=m(e.components);return a.createElement(r.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=m(t),s=l,c=d["".concat(r,".").concat(s)]||d[s]||u[s]||i;return t?a.createElement(c,p(p({ref:n},k),{},{components:t})):a.createElement(c,p({ref:n},k))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=s;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const i={slug:"solana-state-compression",title:"\u7ffb\u8bd1 Solana \u7684\u72b6\u6001\u538b\u7f29",authors:["davirain"],tags:["blog","blockchain","solana","state-compression"]},p="\u7ffb\u8bd1 Solana \u7684\u72b6\u6001\u538b\u7f29",o={permalink:"/all-in-one-solana/blog/solana-state-compression",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-26.md",source:"@site/blog/2023-08-26.md",title:"\u7ffb\u8bd1 Solana \u7684\u72b6\u6001\u538b\u7f29",description:"\u5728Solana\u4e0a\uff0c\u72b6\u6001\u538b\u7f29\u662f\u4e00\u79cd\u521b\u5efa\u79bb\u94fe\u6570\u636e\u7684\u201c\u6307\u7eb9\u201d\uff08\u6216\u54c8\u5e0c\uff09\u5e76\u5c06\u8be5\u6307\u7eb9\u5b58\u50a8\u5728\u94fe\u4e0a\u4ee5\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1\u7684\u65b9\u6cd5\u3002\u6709\u6548\u5730\u5229\u7528Solana\u8d26\u672c\u7684\u5b89\u5168\u6027\u6765\u5b89\u5168\u9a8c\u8bc1\u79bb\u94fe\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u5176\u672a\u88ab\u7be1\u6539\u3002",date:"2023-08-26T00:00:00.000Z",formattedDate:"August 26, 2023",tags:[{label:"blog",permalink:"/all-in-one-solana/blog/tags/blog"},{label:"blockchain",permalink:"/all-in-one-solana/blog/tags/blockchain"},{label:"solana",permalink:"/all-in-one-solana/blog/tags/solana"},{label:"state-compression",permalink:"/all-in-one-solana/blog/tags/state-compression"}],readingTime:16.255,hasTruncateMarker:!1,authors:[{name:"Davirain",title:"Davirain Blog",url:"https://github.com/DaviRain-Su",imageURL:"https://github.com/DaviRain-Su.png",key:"davirain"}],frontMatter:{slug:"solana-state-compression",title:"\u7ffb\u8bd1 Solana \u7684\u72b6\u6001\u538b\u7f29",authors:["davirain"],tags:["blog","blockchain","solana","state-compression"]},prevItem:{title:"\u4f7f\u7528anchor build \u4f9d\u8cf4\u885d\u7a81",permalink:"/all-in-one-solana/blog/error-after-running-anchor-build"},nextItem:{title:"Solana\u5171\u5b66\u6559\u7a0b",permalink:"/all-in-one-solana/blog/first-blog-post"}},r={authorsImageUrls:[void 0]},m=[{value:"\u4ec0\u4e48\u662f\u72b6\u6001\u538b\u7f29\uff1f",id:"\u4ec0\u4e48\u662f\u72b6\u6001\u538b\u7f29",level:2},{value:"\u9ed8\u514b\u5c14\u6811\u548c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811",id:"\u9ed8\u514b\u5c14\u6811\u548c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811",level:2},{value:"\u9ed8\u514b\u5c14\u6811\u662f\u4ec0\u4e48\uff1f",id:"\u9ed8\u514b\u5c14\u6811\u662f\u4ec0\u4e48",level:3},{value:"\u4ec0\u4e48\u662f\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\uff1f",id:"\u4ec0\u4e48\u662f\u5e76\u53d1\u9ed8\u514b\u5c14\u6811",level:3},{value:"\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u7684\u5927\u5c0f\u8c03\u6574",id:"\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u7684\u5927\u5c0f\u8c03\u6574",level:2},{value:"max depth",id:"max-depth",level:3},{value:"\u793a\u4f8b1\uff1a\u94f8\u9020100\u4e2aNFTs",id:"\u793a\u4f8b1\u94f8\u9020100\u4e2anfts",level:4},{value:"\u4f8b\u5b502\uff1a\u94f8\u902015000\u4e2aNFTs",id:"\u4f8b\u5b502\u94f8\u902015000\u4e2anfts",level:4},{value:"\u6700\u5927\u6df1\u5ea6\u8d8a\u9ad8\uff0c\u6210\u672c\u8d8a\u9ad8",id:"\u6700\u5927\u6df1\u5ea6\u8d8a\u9ad8\u6210\u672c\u8d8a\u9ad8",level:4},{value:"max buffer size",id:"max-buffer-size",level:3},{value:"Canopy depth",id:"canopy-depth",level:3},{value:"<code>Canopy</code>\u6df1\u5ea6\u503c\u8d8a\u5927\uff0c\u6210\u672c\u8d8a\u9ad8",id:"canopy\u6df1\u5ea6\u503c\u8d8a\u5927\u6210\u672c\u8d8a\u9ad8",level:4},{value:"\u8f83\u5c0f\u7684<code>Canopy</code>\u9650\u5236\u4e86\u53ef\u7ec4\u5408\u6027",id:"\u8f83\u5c0f\u7684canopy\u9650\u5236\u4e86\u53ef\u7ec4\u5408\u6027",level:4},{value:"\u521b\u5efa\u4e00\u68f5\u6811\u7684\u6210\u672c",id:"\u521b\u5efa\u4e00\u68f5\u6811\u7684\u6210\u672c",level:2},{value:"\u5728JavaScript\u4e2d\u8ba1\u7b97\u6811\u6728\u6210\u672c",id:"\u5728javascript\u4e2d\u8ba1\u7b97\u6811\u6728\u6210\u672c",level:3},{value:"\u793a\u4f8b\u8d39\u7528",id:"\u793a\u4f8b\u8d39\u7528",level:3},{value:"\u4f8b\u5b50 #1\uff1a16,384\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a0.222 SOL",id:"\u4f8b\u5b50-116384\u4e2a\u8282\u70b9\u6210\u672c\u4e3a0222-sol",level:4},{value:"\u4f8b\u5b50 #2\uff1a16,384\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a1.134 SOL",id:"\u4f8b\u5b50-216384\u4e2a\u8282\u70b9\u6210\u672c\u4e3a1134-sol",level:4},{value:"\u793a\u4f8b #3\uff1a1,048,576\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a1.673 SOL",id:"\u793a\u4f8b-31048576\u4e2a\u8282\u70b9\u6210\u672c\u4e3a1673-sol",level:4},{value:"\u793a\u4f8b\uff034\uff1a1,048,576\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a15.814 SOL",id:"\u793a\u4f8b41048576\u4e2a\u8282\u70b9\u6210\u672c\u4e3a15814-sol",level:4},{value:"\u538b\u7f29\u7684NFTs",id:"\u538b\u7f29\u7684nfts",level:2}],k={toc:m},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\uff0c\u72b6\u6001\u538b\u7f29\u662f\u4e00\u79cd\u521b\u5efa\u79bb\u94fe\u6570\u636e\u7684\u201c\u6307\u7eb9\u201d\uff08\u6216\u54c8\u5e0c\uff09\u5e76\u5c06\u8be5\u6307\u7eb9\u5b58\u50a8\u5728\u94fe\u4e0a\u4ee5\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1\u7684\u65b9\u6cd5\u3002\u6709\u6548\u5730\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u8d26\u672c\u7684\u5b89\u5168\u6027\u6765\u5b89\u5168\u9a8c\u8bc1\u79bb\u94fe\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u5176\u672a\u88ab\u7be1\u6539\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u201c\u538b\u7f29\u201d\u65b9\u6cd5\u4f7f\u5f97Solana\u7684\u7a0b\u5e8f\u548cdApps\u80fd\u591f\u4f7f\u7528\u5ec9\u4ef7\u7684\u533a\u5757\u94fe",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#ledger"},"\u8d26\u672c"),"\u7a7a\u95f4\u6765\u5b89\u5168\u5b58\u50a8\u6570\u636e\uff0c\u800c\u4e0d\u662f\u66f4\u6602\u8d35\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#account"},"\u8d26\u6237"),"\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u901a\u8fc7\u4f7f\u7528\u4e00\u79cd\u7279\u6b8a\u7684\u4e8c\u53c9\u6811\u7ed3\u6784\uff0c\u79f0\u4e3a\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\uff0c\u5bf9\u6bcf\u4e2a\u6570\u636e\u7247\u6bb5\uff08\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"leaf")," \uff09\u521b\u5efa\u54c8\u5e0c\uff0c\u5c06\u5b83\u4eec\u54c8\u5e0c\u5728\u4e00\u8d77\uff0c\u5e76\u4ec5\u5c06\u6700\u7ec8\u54c8\u5e0c\u5b58\u50a8\u5728\u94fe\u4e0a\u6765\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u72b6\u6001\u538b\u7f29"},"\u4ec0\u4e48\u662f\u72b6\u6001\u538b\u7f29\uff1f"),(0,l.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u72b6\u6001\u538b\u7f29\u4f7f\u7528\u201c\u6811\u201d\u7ed3\u6784\u5c06\u94fe\u5916\u6570\u636e\u4ee5\u786e\u5b9a\u6027\u7684\u65b9\u5f0f\u8fdb\u884c\u52a0\u5bc6\u54c8\u5e0c\uff0c\u8ba1\u7b97\u51fa\u4e00\u4e2a\u6700\u7ec8\u7684\u54c8\u5e0c\u503c\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u94fe\u4e0a\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u6811\u662f\u901a\u8fc7\u8fd9\u4e2a\u201c\u786e\u5b9a\u6027\u201d\u8fc7\u7a0b\u521b\u5efa\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4efb\u4f55\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8fd9\u4e9b\u6570\u636e\u7684\u54c8\u5e0c\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6b64\u54c8\u5e0c\u503c\u5b58\u50a8\u4e3a\u6811\u5e95\u90e8\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"leaf")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"leaf")," \u5bf9\u90fd\u4f1a\u88ab\u4e00\u8d77\u54c8\u5e0c\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"branch")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"branch")," \u7136\u540e\u4e00\u8d77\u54c8\u5e0c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u65ad\u6500\u722c\u6811\u6728\u5e76\u5c06\u76f8\u90bb\u7684\u6811\u679d\u8fde\u63a5\u5728\u4e00\u8d77"),(0,l.kt)("li",{parentName:"ul"},"\u6811\u9876\u4e0a\u4e00\u65e6\u5230\u8fbe\uff0c\u5c31\u4f1a\u4ea7\u751f\u6700\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"root hash"))),(0,l.kt)("p",null,"\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"root hash"),' \u7136\u540e\u5b58\u50a8\u5728\u94fe\u4e0a\uff0c\u4f5c\u4e3a\u6bcf\u4e2a\u53f6\u5b50\u8282\u70b9\u4e2d\u6240\u6709\u6570\u636e\u7684\u53ef\u9a8c\u8bc1\u8bc1\u636e\u3002\u8fd9\u6837\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u52a0\u5bc6\u9a8c\u8bc1\u6811\u4e2d\u6240\u6709\u79bb\u94fe\u6570\u636e\uff0c\u800c\u5b9e\u9645\u4e0a\u53ea\u9700\u5728\u94fe\u4e0a\u5b58\u50a8\u5c11\u91cf\u6570\u636e\u3002\u56e0\u6b64\uff0c\u7531\u4e8e\u8fd9\u79cd"\u72b6\u6001\u538b\u7f29"\uff0c\u5927\u5927\u964d\u4f4e\u4e86\u5b58\u50a8/\u8bc1\u660e\u5927\u91cf\u6570\u636e\u7684\u6210\u672c\u3002'),(0,l.kt)("h2",{id:"\u9ed8\u514b\u5c14\u6811\u548c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811"},"\u9ed8\u514b\u5c14\u6811\u548c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u72b6\u6001\u538b\u7f29\u4f7f\u7528\u4e86\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u9ed8\u514b\u5c14\u6811\uff0c\u5141\u8bb8\u5bf9\u4efb\u4f55\u7ed9\u5b9a\u7684\u6811\u8fdb\u884c\u591a\u6b21\u66f4\u6539\uff0c\u540c\u65f6\u4ecd\u7136\u4fdd\u6301\u6811\u7684\u5b8c\u6574\u6027\u548c\u6709\u6548\u6027\u3002"),(0,l.kt)("p",null,"\u8fd9\u68f5\u7279\u6b8a\u7684\u6811\u88ab\u79f0\u4e3a\u201c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u201d\uff0c\u6709\u6548\u5730\u5728\u94fe\u4e0a\u4fdd\u7559\u4e86\u6811\u7684\u201c\u66f4\u6539\u65e5\u5fd7\u201d\u3002\u5141\u8bb8\u5728\u4e00\u4e2a\u8bc1\u660e\u5931\u6548\u4e4b\u524d\u5bf9\u540c\u4e00\u68f5\u6811\u8fdb\u884c\u591a\u6b21\u5feb\u901f\u66f4\u6539\uff08\u5373\u5728\u540c\u4e00\u4e2a\u533a\u5757\u4e2d\uff09\u3002"),(0,l.kt)("h3",{id:"\u9ed8\u514b\u5c14\u6811\u662f\u4ec0\u4e48"},"\u9ed8\u514b\u5c14\u6811\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u9ed8\u514b\u5c14\u6811\uff0c\u6709\u65f6\u4e5f\u88ab\u79f0\u4e3a\u201c\u54c8\u5e0c\u6811\u201d\uff0c\u662f\u4e00\u79cd\u57fa\u4e8e\u54c8\u5e0c\u7684\u4e8c\u53c9\u6811\u7ed3\u6784\uff0c\u5176\u4e2d\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"leaf"),"\u8282\u70b9\u90fd\u88ab\u8868\u793a\u4e3a\u5176\u5185\u90e8\u6570\u636e\u7684\u52a0\u5bc6\u54c8\u5e0c\u3002\u800c\u6bcf\u4e2a\u975e\u53f6\u8282\u70b9\uff0c\u4e5f\u88ab\u79f0\u4e3a\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"branch"),"\u8282\u70b9\u201d\uff0c\u5219\u88ab\u8868\u793a\u4e3a\u5176\u5b50\u53f6\u8282\u70b9\u54c8\u5e0c\u7684\u54c8\u5e0c\u503c\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5206\u652f\u4e5f\u88ab\u54c8\u5e0c\u5728\u4e00\u8d77\uff0c\u6cbf\u7740\u6811\u5411\u4e0a\u722c\uff0c\u76f4\u5230\u6700\u540e\u53ea\u5269\u4e0b\u4e00\u4e2a\u54c8\u5e0c\u3002\u8fd9\u4e2a\u6700\u7ec8\u7684\u54c8\u5e0c\uff0c\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"root hash"),' \u6216\u8005"\u6839"\uff0c\u53ef\u4ee5\u4e0e\u4e00\u4e2a"\u8bc1\u660e\u8def\u5f84"\u7ed3\u5408\u4f7f\u7528\uff0c\u6765\u9a8c\u8bc1\u5b58\u50a8\u5728\u53f6\u8282\u70b9\u4e2d\u7684\u4efb\u4f55\u6570\u636e\u3002'),(0,l.kt)("p",null,"\u4e00\u65e6\u8ba1\u7b97\u51fa\u6700\u7ec8\u7684\u6839\u54c8\u5e0c\u503c(",(0,l.kt)("inlineCode",{parentName:"p"},"root hash"),")\uff0c\u53ef\u4ee5\u901a\u8fc7\u91cd\u65b0\u8ba1\u7b97\u7279\u5b9a\u53f6\u5b50(",(0,l.kt)("inlineCode",{parentName:"p"},"leaf"),")\u8282\u70b9\u7684\u6570\u636e\u548c\u6bcf\u4e2a\u76f8\u90bb\u5206\u652f\u7684\u54c8\u5e0c\u6807\u7b7e\uff08\u79f0\u4e3a\u201c\u8bc1\u660e\u8def\u5f84\u201d\uff09\u6765\u9a8c\u8bc1\u5b58\u50a8\u5728\u8282\u70b9\u4e2d\u7684\u4efb\u4f55\u6570\u636e\u3002\u5c06\u8fd9\u4e2a\u201c\u91cd\u65b0\u54c8\u5e0c\u201d\u4e0e\u6839\u54c8\u5e0c\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u5e95\u5c42\u53f6\u5b50\u6570\u636e\u7684\u51c6\u786e\u6027\u3002\u5982\u679c\u5b83\u4eec\u5339\u914d\uff0c\u6570\u636e\u5c31\u88ab\u9a8c\u8bc1\u4e3a\u51c6\u786e\u7684\u3002\u5982\u679c\u5b83\u4eec\u4e0d\u5339\u914d\uff0c\u53f6\u5b50\u6570\u636e\u5df2\u88ab\u66f4\u6539\u3002"),(0,l.kt)("p",null,"\u53ea\u8981\u9700\u8981\uff0c\u539f\u59cb\u53f6\u5b50\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u5bf9\u65b0\u7684\u53f6\u5b50\u6570\u636e\u8fdb\u884c\u54c8\u5e0c\u8fd0\u7b97\u5e76\u91cd\u65b0\u8ba1\u7b97\u6839\u54c8\u5e0c\u503c\u6765\u8fdb\u884c\u66f4\u6539\uff0c\u65b9\u6cd5\u4e0e\u539f\u59cb\u6839\u54c8\u5e0c\u503c\u7684\u8ba1\u7b97\u65b9\u5f0f\u76f8\u540c\u3002\u7136\u540e\uff0c\u8fd9\u4e2a\u65b0\u7684\u6839\u54c8\u5e0c\u503c\u7528\u4e8e\u9a8c\u8bc1\u4efb\u4f55\u6570\u636e\uff0c\u5e76\u4e14\u6709\u6548\u5730\u4f7f\u4e4b\u524d\u7684\u6839\u54c8\u5e0c\u503c\u548c\u8bc1\u660e\u65e0\u6548\u3002\u56e0\u6b64\uff0c\u5bf9\u8fd9\u4e9b\u4f20\u7edf\u7684\u9ed8\u514b\u5c14\u6811\u7684\u6bcf\u4e00\u6b21\u66f4\u6539\u90fd\u9700\u8981\u6309\u987a\u5e8f\u6267\u884c\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u4f7f\u7528\u9ed8\u514b\u5c14\u6811\u65f6\uff0c\u66f4\u6539\u53f6\u5b50\u6570\u636e\u5e76\u8ba1\u7b97\u65b0\u7684\u6839\u54c8\u5e0c\u7684\u8fc7\u7a0b\u53ef\u80fd\u662f\u975e\u5e38\u5e38\u89c1\u7684\u4e8b\u60c5\uff01\u867d\u7136\u8fd9\u662f\u6811\u7684\u8bbe\u8ba1\u8981\u70b9\u4e4b\u4e00\uff0c\u4f46\u5b83\u53ef\u80fd\u5bfc\u81f4\u6700\u663e\u8457\u7684\u7f3a\u70b9\u4e4b\u4e00\uff1a\u5feb\u901f\u53d8\u5316\u3002")),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u662f\u5e76\u53d1\u9ed8\u514b\u5c14\u6811"},"\u4ec0\u4e48\u662f\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\uff1f"),(0,l.kt)("p",null,"\u5728\u9ad8\u541e\u5410\u91cf\u7684\u5e94\u7528\u4e2d\uff0c\u6bd4\u5982\u5728",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/validator/runtime"},(0,l.kt)("inlineCode",{parentName:"a"},"Solana"),"\u8fd0\u884c\u65f6"),"\u4e2d\uff0c\u5bf9\u4e8e\u94fe\u4e0a\u4f20\u7edfMerkle\u6811\u7684\u66f4\u6539\u8bf7\u6c42\u53ef\u80fd\u4f1a\u76f8\u5bf9\u5feb\u901f\u5730\u8fde\u7eed\u63a5\u6536\u5230\u9a8c\u8bc1\u8005\uff08\u4f8b\u5982\u5728\u540c\u4e00\u4e2a\u69fd\u4e2d\uff09\u3002\u6bcf\u4e2a\u53f6\u5b50\u6570\u636e\u7684\u66f4\u6539\u4ecd\u7136\u9700\u8981\u6309\u987a\u5e8f\u6267\u884c\u3002\u8fd9\u5bfc\u81f4\u6bcf\u4e2a\u540e\u7eed\u7684\u66f4\u6539\u8bf7\u6c42\u90fd\u4f1a\u5931\u8d25\uff0c\u56e0\u4e3a\u6839\u54c8\u5e0c\u548c\u8bc1\u660e\u5df2\u7ecf\u88ab\u540c\u4e00\u69fd\u4e2d\u4e4b\u524d\u7684\u66f4\u6539\u8bf7\u6c42\u65e0\u6548\u5316\u4e86\u3002"),(0,l.kt)("p",null,"\u8fdb\u5165\uff0c\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u3002"),(0,l.kt)("p",null,"\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u5b58\u50a8\u4e86\u6700\u8fd1\u66f4\u6539\u7684\u5b89\u5168\u65e5\u5fd7\u3001\u5b83\u4eec\u7684\u6839\u54c8\u5e0c\u4ee5\u53ca\u7528\u4e8e\u63a8\u5bfc\u6839\u54c8\u5e0c\u7684\u8bc1\u660e\u3002\u8fd9\u4e2a\u65e5\u5fd7\u7f13\u51b2\u533a\u5b58\u50a8\u5728\u94fe\u4e0a\u7684\u6bcf\u4e2a\u6811\u5bf9\u5e94\u7684\u7279\u5b9a\u8d26\u6237\u4e2d\uff0c\u6700\u5927\u8bb0\u5f55\u6570\u4e3a\uff08\u4e5f\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBufferSize")," \uff09\u3002"),(0,l.kt)("p",null,"\u5f53\u540c\u4e00\u65f6\u9699\u5185\u7684\u9a8c\u8bc1\u8005\u6536\u5230\u591a\u4e2a\u53f6\u5b50\u6570\u636e\u53d8\u66f4\u8bf7\u6c42\u65f6\uff0c\u94fe\u4e0a\u5e76\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"Merkle")," \u6811\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u201c\u53d8\u66f4\u65e5\u5fd7\u7f13\u51b2\u533a\u201d\u4f5c\u4e3a\u66f4\u53ef\u63a5\u53d7\u7684\u8bc1\u660e\u7684\u771f\u5b9e\u6765\u6e90\u3002\u6709\u6548\u5730\u5141\u8bb8\u5728\u540c\u4e00\u65f6\u9699\u5185\u5bf9\u540c\u4e00\u68f5\u6811\u8fdb\u884c\u591a\u8fbe ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBufferSize")," \u6b21\u53d8\u66f4\u3002\u5927\u5e45\u63d0\u5347\u541e\u5410\u91cf\u3002"),(0,l.kt)("h2",{id:"\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u7684\u5927\u5c0f\u8c03\u6574"},"\u5e76\u53d1\u9ed8\u514b\u5c14\u6811\u7684\u5927\u5c0f\u8c03\u6574"),(0,l.kt)("p",null,"\u521b\u5efa\u8fd9\u79cd\u94fe\u4e0a\u6811\u65f6\uff0c\u6709\u4e09\u4e2a\u503c\u5c06\u51b3\u5b9a\u60a8\u7684\u6811\u7684\u5927\u5c0f\u3001\u521b\u5efa\u6811\u7684\u6210\u672c\u4ee5\u53ca\u5bf9\u6811\u7684\u5e76\u53d1\u66f4\u6539\u6570\u91cf\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"max depth")," \u6700\u5927\u6df1\u5ea6"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"max buffer size")," \u6700\u5927\u7f13\u51b2\u533a\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"canopy depth"))),(0,l.kt)("h3",{id:"max-depth"},"max depth"),(0,l.kt)("p",null,"\u6811\u7684\u201c\u6700\u5927\u6df1\u5ea6\u201d\u662f\u4ece\u4efb\u4f55\u6570\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"leaf")," \u5230\u6811\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," \u6240\u9700\u7684\u6700\u5927\u8df3\u6570\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u9ed8\u514b\u5c14\u6811\u662f\u4e8c\u53c9\u6811\uff0c\u6bcf\u4e2a\u53f6\u5b50\u8282\u70b9\u53ea\u4e0e\u53e6\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u76f8\u8fde\uff1b\u5b58\u5728\u4e8e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"leaf pair")," \u4e2d\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6811\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDepth")," \u88ab\u7528\u6765\u786e\u5b9a\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u8ba1\u7b97\u5b58\u50a8\u5728\u6811\u4e2d\u7684\u6700\u5927\u8282\u70b9\u6570\uff08\u4e5f\u79f0\u4e3a\u6570\u636e\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"leafs")," \uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nodes_count = 2 ^ maxDepth\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u6811\u7684\u6df1\u5ea6\u5fc5\u987b\u5728\u521b\u5efa\u6811\u65f6\u8bbe\u7f6e\uff0c\u60a8\u5fc5\u987b\u51b3\u5b9a\u60a8\u5e0c\u671b\u6811\u5b58\u50a8\u591a\u5c11\u4e2a\u6570\u636e\u3002\u7136\u540e\u4f7f\u7528\u4e0a\u8ff0\u7b80\u5355\u7684\u8ba1\u7b97\uff0c\u60a8\u53ef\u4ee5\u786e\u5b9a\u5b58\u50a8\u6570\u636e\u7684\u6700\u4f4e ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDepth")," \u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b1\u94f8\u9020100\u4e2anfts"},"\u793a\u4f8b1\uff1a\u94f8\u9020100\u4e2aNFTs"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8",(0,l.kt)("inlineCode",{parentName:"p"},"100"),'\u4e2a\u538b\u7f29NFT\u7684\u6811\uff0c\u6211\u4eec\u81f3\u5c11\u9700\u8981"',(0,l.kt)("inlineCode",{parentName:"p"},"100"),'\u4e2a\u53f6\u5b50"\u6216"',(0,l.kt)("inlineCode",{parentName:"p"},"100"),'\u4e2a\u8282\u70b9"\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// maxDepth=6 -> 64 nodes\n2^6 = 64\n\n// maxDepth=7 -> 128 nodes\n2^7 = 128\n")),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"7")," \u7684\u6811\uff0c\u4ee5\u5b58\u50a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"100")," \u4e2a\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u4f8b\u5b502\u94f8\u902015000\u4e2anfts"},"\u4f8b\u5b502\uff1a\u94f8\u902015000\u4e2aNFTs"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8",(0,l.kt)("inlineCode",{parentName:"p"},"15000"),'\u4e2a\u538b\u7f29NFT\u7684\u6811\uff0c\u6211\u4eec\u5c06\u9700\u8981\u81f3\u5c11"',(0,l.kt)("inlineCode",{parentName:"p"},"15000"),'\u4e2a\u53f6\u5b50"\u6216"',(0,l.kt)("inlineCode",{parentName:"p"},"15000"),'\u4e2a\u8282\u70b9"\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// maxDepth=13 -> 8192 nodes\n2^13 = 8192\n\n// maxDepth=14 -> 16384 nodes\n2^14 = 16384\n")),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"14")," \u7684\u6811\uff0c\u4ee5\u5b58\u50a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"15000")," \u4e2a\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u6700\u5927\u6df1\u5ea6\u8d8a\u9ad8\u6210\u672c\u8d8a\u9ad8"},"\u6700\u5927\u6df1\u5ea6\u8d8a\u9ad8\uff0c\u6210\u672c\u8d8a\u9ad8"),(0,l.kt)("p",null,"\u521b\u5efa\u6811\u65f6\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDepth")," \u503c\u5c06\u662f\u6210\u672c\u7684\u4e3b\u8981\u9a71\u52a8\u56e0\u7d20\u4e4b\u4e00\uff0c\u56e0\u4e3a\u60a8\u5c06\u5728\u521b\u5efa\u6811\u65f6\u652f\u4ed8\u8fd9\u7b14\u6210\u672c\u3002\u6700\u5927\u6811\u6df1\u5ea6\u8d8a\u9ad8\uff0c\u60a8\u53ef\u4ee5\u5b58\u50a8\u7684\u6570\u636e\u6307\u7eb9\uff08\u4e5f\u79f0\u4e3a\u54c8\u5e0c\uff09\u8d8a\u591a\uff0c\u6210\u672c\u5c31\u8d8a\u9ad8\u3002"),(0,l.kt)("h3",{id:"max-buffer-size"},"max buffer size"),(0,l.kt)("p",null,"\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"max buffer size"),"\u201d \u5b9e\u9645\u4e0a\u662f\u6811\u4e0a\u53ef\u4ee5\u53d1\u751f\u7684\u6700\u5927\u53d8\u5316\u6570\u91cf\uff0c\u540c\u65f6\u4ecd\u7136\u6709\u6548\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"root hash")," \u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u6839\u54c8\u5e0c\u6709\u6548\u5730\u662f\u6240\u6709\u53f6\u5b50\u6570\u636e\u7684\u5355\u4e00\u54c8\u5e0c\uff0c\u6539\u53d8\u4efb\u4f55\u4e00\u4e2a\u53f6\u5b50\u5c06\u4f7f\u5f97\u6240\u6709\u540e\u7eed\u5c1d\u8bd5\u6539\u53d8\u5e38\u89c4\u6811\u7684\u53f6\u5b50\u6240\u9700\u7684\u8bc1\u660e\u65e0\u6548\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u4f7f\u7528\u5e76\u53d1\u6811\uff0c\u5bf9\u4e8e\u8fd9\u4e9b\u8bc1\u660e\u6765\u8bf4\uff0c\u5b9e\u9645\u4e0a\u6709\u4e00\u4e2a\u66f4\u65b0\u7684\u65e5\u5fd7\u3002\u8fd9\u4e2a\u65e5\u5fd7\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u548c\u8bbe\u7f6e\u662f\u901a\u8fc7\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBufferSize")," \u503c\u5728\u6811\u521b\u5efa\u65f6\u5b8c\u6210\u7684\u3002"),(0,l.kt)("h3",{id:"canopy-depth"},"Canopy depth"),(0,l.kt)("p",null,"\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy depth"),"\u201d\uff0c\u6709\u65f6\u4e5f\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u5927\u5c0f\uff0c\u662f\u6307\u5728\u4efb\u4f55\u7ed9\u5b9a\u7684\u8bc1\u660e\u8def\u5f84\u4e0a\u7f13\u5b58/\u5b58\u50a8\u5728\u94fe\u4e0a\u7684\u8bc1\u660e\u8282\u70b9\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u5728\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"leaf")," \u6267\u884c\u66f4\u65b0\u64cd\u4f5c\u65f6\uff0c\u4f8b\u5982\u8f6c\u8ba9\u6240\u6709\u6743\uff08\u4f8b\u5982\u51fa\u552e\u538b\u7f29\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff09\uff0c\u5fc5\u987b\u4f7f\u7528\u5b8c\u6574\u7684\u8bc1\u660e\u8def\u5f84\u6765\u9a8c\u8bc1\u53f6\u5b50\u8282\u70b9\u7684\u539f\u59cb\u6240\u6709\u6743\uff0c\u4ece\u800c\u5141\u8bb8\u8fdb\u884c\u66f4\u65b0\u64cd\u4f5c\u3002\u6b64\u9a8c\u8bc1\u662f\u4f7f\u7528\u5b8c\u6574\u7684\u8bc1\u660e\u8def\u5f84\u6765\u6b63\u786e\u8ba1\u7b97\u5f53\u524d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"root hash")," \uff08\u6216\u901a\u8fc7\u94fe\u4e0a\u7684\u201c\u5e76\u53d1\u7f13\u51b2\u533a\u201d\u7f13\u5b58\u7684\u4efb\u4f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"root hash")," \uff09\u6765\u6267\u884c\u7684\u3002"),(0,l.kt)("p",null,"\u6811\u7684\u6700\u5927\u6df1\u5ea6\u8d8a\u5927\uff0c\u6267\u884c\u6b64\u9a8c\u8bc1\u6240\u9700\u7684\u8bc1\u660e\u8282\u70b9\u5c31\u8d8a\u591a\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u6700\u5927\u6df1\u5ea6\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"14")," \uff0c\u5219\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"14")," \u4e2a\u603b\u7684\u8bc1\u660e\u8282\u70b9\u8fdb\u884c\u9a8c\u8bc1\u3002\u968f\u7740\u6811\u7684\u589e\u5927\uff0c\u5b8c\u6574\u7684\u8bc1\u660e\u8def\u5f84\u4e5f\u4f1a\u53d8\u5f97\u66f4\u957f\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u8fd9\u4e9b\u8bc1\u660e\u8282\u70b9\u90fd\u9700\u8981\u5728\u6bcf\u4e2a\u6811\u66f4\u65b0\u4e8b\u52a1\u4e2d\u5305\u542b\u3002\u7531\u4e8e\u6bcf\u4e2a\u8bc1\u660e\u8282\u70b9\u7684\u503c\u5728\u4e8b\u52a1\u4e2d\u5360\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"32 bytes")," \uff08\u7c7b\u4f3c\u4e8e\u63d0\u4f9b\u516c\u94a5\uff09\uff0c\u8f83\u5927\u7684\u6811\u5f88\u5feb\u5c31\u4f1a\u8d85\u8fc7\u6700\u5927\u4e8b\u52a1\u5927\u5c0f\u9650\u5236\u3002"),(0,l.kt)("p",null,"\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u53ef\u4ee5\u5728\u94fe\u4e0a\u5b58\u50a8\u4e00\u5b9a\u6570\u91cf\u7684\u9a8c\u8bc1\u8282\u70b9\uff08\u5bf9\u4e8e\u4efb\u4f55\u7ed9\u5b9a\u7684\u9a8c\u8bc1\u8def\u5f84\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u5728\u6bcf\u4e2a\u66f4\u65b0\u4ea4\u6613\u4e2d\u5305\u542b\u8f83\u5c11\u7684\u9a8c\u8bc1\u8282\u70b9\uff0c\u4ece\u800c\u4fdd\u6301\u6574\u4f53\u4ea4\u6613\u5927\u5c0f\u4f4e\u4e8e\u9650\u5236\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"14")," \u7684\u6811\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"14")," \u4e2a\u603b\u7684\u9a8c\u8bc1\u8282\u70b9\u3002\u800c\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," \u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u66f4\u65b0\u4e8b\u52a1\u53ea\u9700\u8981\u63d0\u4ea4 ",(0,l.kt)("inlineCode",{parentName:"p"},"4")," \u4e2a\u9a8c\u8bc1\u8282\u70b9\u3002"),(0,l.kt)("h4",{id:"canopy\u6df1\u5ea6\u503c\u8d8a\u5927\u6210\u672c\u8d8a\u9ad8"},(0,l.kt)("inlineCode",{parentName:"h4"},"Canopy"),"\u6df1\u5ea6\u503c\u8d8a\u5927\uff0c\u6210\u672c\u8d8a\u9ad8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"canopyDepth")," \u503c\u4e5f\u662f\u521b\u5efa\u6811\u65f6\u6210\u672c\u7684\u4e3b\u8981\u56e0\u7d20\uff0c\u56e0\u4e3a\u60a8\u5c06\u5728\u6811\u7684\u521b\u5efa\u65f6\u652f\u4ed8\u8fd9\u4e2a\u6210\u672c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"canopyDepth"),"\u8d8a\u9ad8\uff0c\u94fe\u4e0a\u5b58\u50a8\u7684\u6570\u636e\u8bc1\u660e\u8282\u70b9\u8d8a\u591a\uff0c\u6210\u672c\u4e5f\u8d8a\u9ad8\u3002"),(0,l.kt)("h4",{id:"\u8f83\u5c0f\u7684canopy\u9650\u5236\u4e86\u53ef\u7ec4\u5408\u6027"},"\u8f83\u5c0f\u7684",(0,l.kt)("inlineCode",{parentName:"h4"},"Canopy"),"\u9650\u5236\u4e86\u53ef\u7ec4\u5408\u6027"),(0,l.kt)("p",null,"\u867d\u7136\u6811\u7684\u521b\u5efa\u6210\u672c\u968f\u7740",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u7684\u9ad8\u5ea6\u800c\u589e\u52a0\uff0c\u4f46\u8f83\u4f4e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u5c06\u9700\u8981\u5728\u6bcf\u4e2a\u66f4\u65b0\u4e8b\u52a1\u4e2d\u5305\u542b\u66f4\u591a\u7684\u8bc1\u660e\u8282\u70b9\u3002\u6240\u9700\u63d0\u4ea4\u7684\u8282\u70b9\u8d8a\u591a\uff0c\u4e8b\u52a1\u7684\u5927\u5c0f\u5c31\u8d8a\u5927\uff0c\u56e0\u6b64\u8d85\u8fc7\u4e8b\u52a1\u5927\u5c0f\u9650\u5236\u5c31\u8d8a\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e5f\u9002\u7528\u4e8e\u4efb\u4f55\u5176\u4ed6\u8bd5\u56fe\u4e0e\u60a8\u7684\u6811/\u53f6\u5b50\u8fdb\u884c\u4ea4\u4e92\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"dApp"),"\u3002\u5982\u679c\u60a8\u7684\u6811\u9700\u8981\u592a\u591a\u7684\u8bc1\u660e\u8282\u70b9\uff08\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u6df1\u5ea6\u8f83\u4f4e\uff09\uff0c\u90a3\u4e48\u4efb\u4f55\u5176\u4ed6\u94fe\u4e0a\u7a0b\u5e8f\u53ef\u80fd\u63d0\u4f9b\u7684\u989d\u5916\u64cd\u4f5c\u90fd\u5c06\u53d7\u5230\u5176\u7279\u5b9a\u6307\u4ee4\u5927\u5c0f\u52a0\u4e0a\u60a8\u7684\u8bc1\u660e\u8282\u70b9\u5217\u8868\u5927\u5c0f\u7684\u9650\u5236\u3002\u8fd9\u9650\u5236\u4e86\u53ef\u7ec4\u5408\u6027\uff0c\u5e76\u9650\u5236\u4e86\u60a8\u7684\u7279\u5b9a\u6811\u7684\u6f5c\u5728\u9644\u52a0\u6548\u7528\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u6811\u88ab\u7528\u4e8e\u538b\u7f29\u7684\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"NFTs"),"\uff09\uff0c\u5e76\u4e14",(0,l.kt)("inlineCode",{parentName:"p"},"Canopy"),"\u6df1\u5ea6\u975e\u5e38\u4f4e\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u5e02\u573a\u53ef\u80fd\u53ea\u80fd\u652f\u6301\u7b80\u5355\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u8f6c\u79fb\uff0c\u800c\u65e0\u6cd5\u652f\u6301\u94fe\u4e0a\u7ade\u6807\u7cfb\u7edf\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u4e00\u68f5\u6811\u7684\u6210\u672c"},"\u521b\u5efa\u4e00\u68f5\u6811\u7684\u6210\u672c"),(0,l.kt)("p",null,"\u521b\u5efa\u5e76\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"Merkle")," \u6811\u7684\u6210\u672c\u57fa\u4e8e\u6811\u7684\u5927\u5c0f\u53c2\u6570\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDepth")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBufferSize")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"canopyDepth")," \u3002\u8fd9\u4e9b\u503c\u90fd\u7528\u4e8e\u8ba1\u7b97\u5728\u94fe\u4e0a\u5b58\u5728\u6811\u6240\u9700\u7684\u94fe\u4e0a\u5b58\u50a8\u7a7a\u95f4\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u8ba1\u7b97\u51fa\u6240\u9700\u7684\u7a7a\u95f4\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/api/http#getminimumbalanceforrentexemption"},(0,l.kt)("inlineCode",{parentName:"a"},"getMinimumBalanceForRentExemption RPC")),"\u65b9\u6cd5\uff0c\u8bf7\u6c42\u5728\u94fe\u4e0a\u5206\u914d\u8fd9\u4e9b\u5b57\u8282\u6240\u9700\u7684\u8d39\u7528\uff08\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"lamports"),"\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("h3",{id:"\u5728javascript\u4e2d\u8ba1\u7b97\u6811\u6728\u6210\u672c"},"\u5728JavaScript\u4e2d\u8ba1\u7b97\u6811\u6728\u6210\u672c"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/spl-account-compression"},(0,l.kt)("inlineCode",{parentName:"a"},"@solana/spl-account-compression"))," \u5305\u4e2d\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"getConcurrentMerkleTreeAccountSize")," \u51fd\u6570\u6765\u8ba1\u7b97\u7ed9\u5b9a\u6811\u5927\u5c0f\u53c2\u6570\u6240\u9700\u7684\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getMinimumBalanceForRentExemption"},(0,l.kt)("inlineCode",{parentName:"a"},"getMinimumBalanceForRentExemption"))," \u51fd\u6570\u6765\u83b7\u53d6\u5728\u94fe\u4e0a\u5206\u914d\u6240\u9700\u7a7a\u95f4\u7684\u6700\u7ec8\u6210\u672c\uff08\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"lamports"),"\u8ba1\u7b97\uff09\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u786e\u5b9a\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"lamports"),"\u8ba1\u7b97\u7684\u6210\u672c\uff0c\u4f7f\u5f97\u8fd9\u4e2a\u5927\u5c0f\u7684\u8d26\u6237\u514d\u9664\u79df\u91d1\uff0c\u4e0e\u5176\u4ed6\u8d26\u6237\u521b\u5efa\u7c7b\u4f3c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// calculate the space required for the tree\nconst requiredSpace = getConcurrentMerkleTreeAccountSize(\n  maxDepth,\n  maxBufferSize,\n  canopyDepth,\n);\n\n// get the cost (in lamports) to store the tree on-chain\nconst storageCost = await connection.getMinimumBalanceForRentExemption(\n  requiredSpace,\n);\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u8d39\u7528"},"\u793a\u4f8b\u8d39\u7528"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4e0d\u540c\u6811\u5927\u5c0f\u7684\u793a\u4f8b\u6210\u672c\uff0c\u5305\u62ec\u6bcf\u4e2a\u6811\u53ef\u80fd\u7684\u53f6\u8282\u70b9\u6570\u91cf\uff1a"),(0,l.kt)("h4",{id:"\u4f8b\u5b50-116384\u4e2a\u8282\u70b9\u6210\u672c\u4e3a0222-sol"},"\u4f8b\u5b50 #1\uff1a16,384\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a0.222 SOL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"14")," \uff0c\u6700\u5927\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"64")),(0,l.kt)("li",{parentName:"ul"},"\u53f6\u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"16,384")),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"0.222 SOL")," \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Canopy"),"\u6df1\u5ea6\u5927\u7ea6\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u7684\u6210\u672c")),(0,l.kt)("h4",{id:"\u4f8b\u5b50-216384\u4e2a\u8282\u70b9\u6210\u672c\u4e3a1134-sol"},"\u4f8b\u5b50 #2\uff1a16,384\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a1.134 SOL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"14")," \uff0c\u6700\u5927\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"64")),(0,l.kt)("li",{parentName:"ul"},"\u53f6\u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"16,384")),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"1.134 SOL")," \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Canopy"),"\u6df1\u5ea6\u5927\u7ea6\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"11")," \u7684\u6210\u672c")),(0,l.kt)("h4",{id:"\u793a\u4f8b-31048576\u4e2a\u8282\u70b9\u6210\u672c\u4e3a1673-sol"},"\u793a\u4f8b #3\uff1a1,048,576\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a1.673 SOL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"20")," \uff0c\u6700\u5927\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"256")),(0,l.kt)("li",{parentName:"ul"},"\u53f6\u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"1,048,576")),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"1.673 SOL")," \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Canopy"),"\u6df1\u5ea6\u5927\u7ea6\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"10")," \u7684\u6210\u672c")),(0,l.kt)("h4",{id:"\u793a\u4f8b41048576\u4e2a\u8282\u70b9\u6210\u672c\u4e3a15814-sol"},"\u793a\u4f8b\uff034\uff1a1,048,576\u4e2a\u8282\u70b9\uff0c\u6210\u672c\u4e3a15.814 SOL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u6df1\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"20")," \uff0c\u6700\u5927\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"256")),(0,l.kt)("li",{parentName:"ul"},"\u53f6\u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"1,048,576")),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"15.814 SOL")," \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Canopy"),"\u6df1\u5ea6\u5927\u7ea6\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"15")," \u7684\u6210\u672c")),(0,l.kt)("h2",{id:"\u538b\u7f29\u7684nfts"},"\u538b\u7f29\u7684NFTs"),(0,l.kt)("p",null,"\u538b\u7f29\u7684NFT\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u72b6\u6001\u538b\u7f29\u7684\u6700\u53d7\u6b22\u8fce\u7684\u5e94\u7528\u4e4b\u4e00\u3002\u901a\u8fc7\u538b\u7f29\uff0c\u4e00\u4e2a\u62e5\u6709\u4e00\u767e\u4e07\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u7684\u6536\u85cf\u54c1\u53ef\u4ee5\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"~50 SOL")," \u7684\u4ef7\u683c\u94f8\u9020\uff0c\u800c\u4e0d\u662f\u5176\u672a\u538b\u7f29\u7684\u7b49\u4ef7\u6536\u85cf\u54c1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  \u5f00\u53d1\u8005\u6307\u5357\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u9605\u8bfb\u6211\u4eec\u7684\u5f00\u53d1\u8005\u6307\u5357\uff0c\u4e86\u89e3",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/guides/compressed-nfts"},"\u5982\u4f55\u94f8\u9020\u548c\u8f6c\u79fb\u538b\u7f29\u7684NFT"),"\u3002")))}u.isMDXComponent=!0}}]);