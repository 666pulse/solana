"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(a),k=n,v=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return a?l.createElement(v,o(o({ref:t},s),{},{components:a})):l.createElement(v,o({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));const r={slug:"solana-sealevel-runtime",title:"SeaLevel Parallel Processing Thousands of Smart Contracts",authors:["davirain"],tags:["blog","blockchain","solana","sealevel","runtime"]},o=void 0,i={permalink:"/blog/solana-sealevel-runtime",editUrl:"https://creatorsdao.github.io/all-in-one-solana/blog/blog/2023-09-28/solana-sealevel-runtime.md",source:"@site/blog/2023-09-28/solana-sealevel-runtime.md",title:"SeaLevel Parallel Processing Thousands of Smart Contracts",description:"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Solana \u7684\u5e76\u884c\u667a\u80fd\u5408\u7ea6\u8fd0\u884c\u65f6 Sealevel\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u8003\u8651\u7684\u4e00\u4ef6\u4e8b\u662f EVM \u548c EOS \u57fa\u4e8e WASM \u7684\u8fd0\u884c\u65f6\u90fd\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u8fd9\u610f\u5473\u7740\u4e00\u6b21\u4e00\u4e2a\u5408\u7ea6\u4f1a\u4fee\u6539\u533a\u5757\u94fe\u72b6\u6001\u3002\u6211\u4eec\u5728 Solana \u4e2d\u6784\u5efa\u7684\u662f\u4e00\u4e2a\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u9a8c\u8bc1\u5668\u53ef\u7528\u7684\u5c3d\u53ef\u80fd\u591a\u7684\u5185\u6838\u5e76\u884c\u5904\u7406\u6570\u4e07\u4e2a\u5408\u7ea6\u3002",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"solana",permalink:"/blog/tags/solana"},{label:"sealevel",permalink:"/blog/tags/sealevel"},{label:"runtime",permalink:"/blog/tags/runtime"}],readingTime:6.41,hasTruncateMarker:!1,authors:[{name:"Davirain",title:"Davirain Blog",url:"https://github.com/DaviRain-Su",imageURL:"https://github.com/DaviRain-Su.png",key:"davirain"}],frontMatter:{slug:"solana-sealevel-runtime",title:"SeaLevel Parallel Processing Thousands of Smart Contracts",authors:["davirain"],tags:["blog","blockchain","solana","sealevel","runtime"]},prevItem:{title:"Proof of History A Clock for Blockchain",permalink:"/blog/proof-of-history"},nextItem:{title:"Tower BFT Solana High Performance Implementation of PBFT",permalink:"/blog/tower-bft"}},p={authorsImageUrls:[void 0]},m=[{value:"\u7a0b\u5e8f\u548c\u5e10\u6237",id:"\u7a0b\u5e8f\u548c\u5e10\u6237",level:2},{value:"\u4ea4\u6613",id:"\u4ea4\u6613",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Solana \u7684\u5e76\u884c\u667a\u80fd\u5408\u7ea6\u8fd0\u884c\u65f6 Sealevel\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u8003\u8651\u7684\u4e00\u4ef6\u4e8b\u662f EVM \u548c EOS \u57fa\u4e8e WASM \u7684\u8fd0\u884c\u65f6\u90fd\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u8fd9\u610f\u5473\u7740\u4e00\u6b21\u4e00\u4e2a\u5408\u7ea6\u4f1a\u4fee\u6539\u533a\u5757\u94fe\u72b6\u6001\u3002\u6211\u4eec\u5728 Solana \u4e2d\u6784\u5efa\u7684\u662f\u4e00\u4e2a\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u9a8c\u8bc1\u5668\u53ef\u7528\u7684\u5c3d\u53ef\u80fd\u591a\u7684\u5185\u6838\u5e76\u884c\u5904\u7406\u6570\u4e07\u4e2a\u5408\u7ea6\u3002"),(0,n.kt)("p",null,"Solana \u4e4b\u6240\u4ee5\u80fd\u591f\u5e76\u884c\u5904\u7406\u4e8b\u52a1\uff0c\u662f\u56e0\u4e3a Solana \u4e8b\u52a1\u63cf\u8ff0\u4e86\u4e8b\u52a1\u5728\u6267\u884c\u65f6\u5c06\u8bfb\u53d6\u6216\u5199\u5165\u7684\u6240\u6709\u72b6\u6001\u3002\u8fd9\u4e0d\u4ec5\u5141\u8bb8\u975e\u91cd\u53e0\u4e8b\u52a1\u5e76\u53d1\u6267\u884c\uff0c\u8fd8\u5141\u8bb8\u4ec5\u8bfb\u53d6\u76f8\u540c\u72b6\u6001\u7684\u4e8b\u52a1\u5e76\u53d1\u6267\u884c\u3002"),(0,n.kt)("h2",{id:"\u7a0b\u5e8f\u548c\u5e10\u6237"},"\u7a0b\u5e8f\u548c\u5e10\u6237"),(0,n.kt)("p",null,"Cloudbreak\uff0c\u6211\u4eec\u7684\u5e10\u6237\u6570\u636e\u5e93\uff0c\u662f\u516c\u94a5\u5230\u5e10\u6237\u7684\u6620\u5c04\u3002\u8d26\u6237\u7ef4\u62a4\u4f59\u989d\u548c\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u662f\u5b57\u8282\u5411\u91cf\u3002\u5e10\u6237\u6709\u4e00\u4e2a\u201c\u6240\u6709\u8005\u201d\u5b57\u6bb5\u3002\u6240\u6709\u8005\u662f\u7ba1\u7406\u5e10\u6237\u72b6\u6001\u8f6c\u6362\u7684\u7a0b\u5e8f\u7684\u516c\u94a5\u3002\u7a0b\u5e8f\u662f\u4ee3\u7801\uff0c\u6ca1\u6709\u72b6\u6001\u3002\u4ed6\u4eec\u4f9d\u8d56\u5206\u914d\u7ed9\u4ed6\u4eec\u7684\u8d26\u6237\u4e2d\u7684\u6570\u636e\u5411\u91cf\u6765\u8fdb\u884c\u72b6\u6001\u8f6c\u6362\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7a0b\u5e8f\u53ea\u80fd\u66f4\u6539\u5176\u62e5\u6709\u7684\u5e10\u6237\u7684\u6570\u636e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7a0b\u5e8f\u53ea\u80fd\u501f\u8bb0\u5176\u62e5\u6709\u7684\u8d26\u6237\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4efb\u4f55\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u5b58\u5165\u4efb\u4f55\u5e10\u6237\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4efb\u4f55\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u8bfb\u53d6\u4efb\u4f55\u5e10\u6237\u3002"))),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u5e10\u6237\u4e00\u5f00\u59cb\u5747\u7531\u7cfb\u7edf\u7a0b\u5e8f\u62e5\u6709\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u7a0b\u5e8f\u662f\u552f\u4e00\u53ef\u4ee5\u5206\u914d\u5e10\u6237\u6240\u6709\u6743\u7684\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u7a0b\u5e8f\u662f\u552f\u4e00\u53ef\u4ee5\u5206\u914d\u96f6\u521d\u59cb\u5316\u6570\u636e\u7684\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5e10\u6237\u6240\u6709\u6743\u7684\u5206\u914d\u5728\u5e10\u6237\u7684\u751f\u547d\u5468\u671f\u5185\u53ea\u80fd\u53d1\u751f\u4e00\u6b21\u3002"))),(0,n.kt)("p",null,"\u7528\u6237\u5b9a\u4e49\u7684\u7a0b\u5e8f\u7531\u52a0\u8f7d\u7a0b\u5e8f\u52a0\u8f7d\u3002\u52a0\u8f7d\u7a0b\u5e8f\u80fd\u591f\u5c06\u5e10\u6237\u4e2d\u7684\u6570\u636e\u6807\u8bb0\u4e3a\u53ef\u6267\u884c\u3002\u7528\u6237\u6267\u884c\u4ee5\u4e0b\u4e8b\u52a1\u6765\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7a0b\u5e8f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u516c\u94a5\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u786c\u5e01\u8f6c\u79fb\u5230\u94a5\u5319\u4e0a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u544a\u8bc9\u7cfb\u7edf\u7a0b\u5e8f\u5206\u914d\u5185\u5b58\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u544a\u8bc9\u7cfb\u7edf\u7a0b\u5e8f\u5c06\u5e10\u6237\u5206\u914d\u7ed9\u52a0\u8f7d\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u5b57\u8282\u7801\u5206\u5757\u4e0a\u4f20\u5230\u5185\u5b58\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u544a\u8bc9 Loader \u7a0b\u5e8f\u5c06\u5185\u5b58\u6807\u8bb0\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\u3002"))),(0,n.kt)("p",null,"\u6b64\u65f6\uff0c\u52a0\u8f7d\u5668\u5bf9\u5b57\u8282\u7801\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5b57\u8282\u7801\u52a0\u8f7d\u5230\u7684\u8d26\u6237\u5c31\u53ef\u4ee5\u4f5c\u4e3a\u53ef\u6267\u884c\u7a0b\u5e8f\u4e86\u3002\u65b0\u5e10\u6237\u53ef\u4ee5\u6807\u8bb0\u4e3a\u7531\u7528\u6237\u5b9a\u4e49\u7684\u7a0b\u5e8f\u62e5\u6709\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u7684\u5173\u952e\u89c1\u89e3\u662f\u7a0b\u5e8f\u662f\u4ee3\u7801\uff0c\u5e76\u4e14\u5728\u6211\u4eec\u7684\u952e\u503c\u5b58\u50a8\u4e2d\uff0c\u5b58\u5728\u7a0b\u5e8f\u7684\u67d0\u4e9b\u952e\u5b50\u96c6\uff0c\u5e76\u4e14\u53ea\u6709\u8be5\u7a0b\u5e8f\u5177\u6709\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,n.kt)("h2",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),(0,n.kt)("p",null,"\u4e8b\u52a1\u6307\u5b9a\u4e00\u4e2a\u6307\u4ee4\u5411\u91cf\u3002\u6bcf\u6761\u6307\u4ee4\u90fd\u5305\u542b\u7a0b\u5e8f\u3001\u7a0b\u5e8f\u6307\u4ee4\u4ee5\u53ca\u4ea4\u6613\u60f3\u8981\u8bfb\u5199\u7684\u8d26\u6237\u5217\u8868\u3002\u8be5\u63a5\u53e3\u7684\u7075\u611f\u6765\u81ea\u4e8e\u8bbe\u5907\u7684\u4f4e\u7ea7\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"size_t readv(int d, const struct iovec *iov, int iovcnt);\n\nstruct iovec {\n    char *iov_base; /* Base address. */\n    size_t iov_len; /* Length. */\n};\n")),(0,n.kt)("p",null,"readv \u6216 writev \u7b49\u63a5\u53e3\u63d0\u524d\u544a\u8bc9\u5185\u6838\u7528\u6237\u60f3\u8981\u8bfb\u53d6\u6216\u5199\u5165\u7684\u6240\u6709\u5185\u5b58\u3002\u8fd9\u5141\u8bb8\u64cd\u4f5c\u7cfb\u7edf\u9884\u53d6\u3001\u51c6\u5907\u8bbe\u5907\uff0c\u5e76\u5728\u8bbe\u5907\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\u5e76\u53d1\u6267\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5728 Solana \u4e0a\uff0c\u6bcf\u6761\u6307\u4ee4\u90fd\u4f1a\u63d0\u524d\u544a\u8bc9\u865a\u62df\u673a\u8981\u8bfb\u53d6\u548c\u5199\u5165\u54ea\u4e9b\u5e10\u6237\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u5bf9VM\u8fdb\u884c\u4f18\u5316\u7684\u6839\u6e90\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u6570\u4ee5\u767e\u4e07\u8ba1\u7684\u5f85\u5904\u7406\u4ea4\u6613\u8fdb\u884c\u6392\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5e76\u884c\u5b89\u6392\u6240\u6709\u975e\u91cd\u53e0\u4e8b\u52a1\u3002"))),(0,n.kt)("p",null,"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528 CPU \u548c GPU \u786c\u4ef6\u7684\u8bbe\u8ba1\u65b9\u5f0f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5CwncUtV3FwS3Gp91RGmSA.png",alt:null})),(0,n.kt)("p",null,"SIMD \u6307\u4ee4\u5141\u8bb8\u5728\u591a\u4e2a\u6570\u636e\u6d41\u4e0a\u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u3002\u8fd9\u610f\u5473\u7740 Sealevel \u53ef\u4ee5\u6267\u884c\u989d\u5916\u7684\u4f18\u5316\uff0c\u8fd9\u662f Solana \u8bbe\u8ba1\u6240\u72ec\u6709\u7684\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6309\u7a0b\u5e8f ID \u5bf9\u6240\u6709\u6307\u4ee4\u8fdb\u884c\u6392\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u540c\u65f6\u5728\u6240\u6709\u5e10\u6237\u4e0a\u8fd0\u884c\u76f8\u540c\u7684\u7a0b\u5e8f\u3002"))),(0,n.kt)("p",null,"\u8981\u4e86\u89e3\u4e3a\u4ec0\u4e48\u8fd9\u662f\u4e00\u4e2a\u5982\u6b64\u5f3a\u5927\u7684\u4f18\u5316\uff0c\u8bf7\u67e5\u770b ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/"},"CUDA \u5f00\u53d1\u4eba\u5458\u6307\u5357"),"\uff1a"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"CUDA \u67b6\u6784\u662f\u56f4\u7ed5\u53ef\u6269\u5c55\u7684\u591a\u7ebf\u7a0b\u6d41\u591a\u5904\u7406\u5668 (SM) \u9635\u5217\u6784\u5efa\u7684\u3002\u5f53\u4e3b\u673a CPU \u4e0a\u7684 CUDA \u7a0b\u5e8f\u8c03\u7528\u5185\u6838\u7f51\u683c\u65f6\uff0c\u7f51\u683c\u7684\u5757\u5c06\u88ab\u679a\u4e3e\u5e76\u5206\u914d\u7ed9\u5177\u6709\u53ef\u7528\u6267\u884c\u80fd\u529b\u7684\u591a\u5904\u7406\u5668\u3002")),(0,n.kt)("p",null,"\u73b0\u4ee3 Nvidia GPU \u62e5\u6709 4000 \u4e2a CUDA \u6838\u5fc3\uff0c\u4f46\u5927\u7ea6\u6709 50 \u4e2a\u591a\u5904\u7406\u5668\u3002\u867d\u7136\u591a\u5904\u7406\u5668\u4e00\u6b21\u53ea\u80fd\u6267\u884c\u4e00\u6761\u7a0b\u5e8f\u6307\u4ee4\uff0c\u4f46\u5b83\u53ef\u4ee5\u5e76\u884c\u6267\u884c\u8d85\u8fc7 80 \u4e2a\u4e0d\u540c\u8f93\u5165\u7684\u6307\u4ee4\u3002\u56e0\u6b64\uff0c\u5982\u679c Sealvel \u52a0\u8f7d\u7684\u4f20\u5165\u4e8b\u52a1\u90fd\u8c03\u7528\u76f8\u540c\u7684\u7a0b\u5e8f\u6307\u4ee4\uff08\u4f8b\u5982 CryptoKitties::BreedCats\uff09\uff0cSolana \u53ef\u4ee5\u5728\u6240\u6709\u53ef\u7528\u7684 CUDA \u6838\u5fc3\u4e0a\u540c\u65f6\u6267\u884c\u6240\u6709\u4e8b\u52a1\u3002"),(0,n.kt)("p",null,"\u6027\u80fd\u65b9\u9762\u6ca1\u6709\u514d\u8d39\u7684\u5348\u9910\uff0c\u56e0\u6b64\u4e3a\u4e86\u4f7f ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SIMD"},"SIMD")," \u4f18\u5316\u53ef\u884c\uff0c\u6267\u884c\u7684\u6307\u4ee4\u5e94\u8be5\u5305\u542b\u5c11\u91cf\u5206\u652f\uff0c\u5e76\u4e14\u90fd\u5e94\u8be5\u91c7\u7528\u76f8\u540c\u7684\u5206\u652f\u3002\u591a\u5904\u7406\u5668\u53d7\u5230\u6279\u5904\u7406\u4e2d\u6267\u884c\u901f\u5ea6\u6700\u6162\u7684\u8def\u5f84\u7684\u9650\u5236\u3002\u5373\u4f7f\u8003\u8651\u5230\u8fd9\u4e00\u70b9\uff0c\u4e0e\u5355\u7ebf\u7a0b\u8fd0\u884c\u65f6\u76f8\u6bd4\uff0c\u901a\u8fc7 Sealevel \u8fdb\u884c\u7684\u5e76\u884c\u5904\u7406\u5728\u533a\u5757\u94fe\u7f51\u7edc\u7684\u8fd0\u884c\u65b9\u5f0f\u65b9\u9762\u5448\u73b0\u51fa\u57fa\u7840\u6027\u7684\u53d1\u5c55\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u6781\u9ad8\u7684\u541e\u5410\u91cf\u548c\u53ef\u7528\u6027\u3002"))}u.isMDXComponent=!0}}]);