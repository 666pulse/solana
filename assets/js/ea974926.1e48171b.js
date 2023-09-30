"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9981],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),s=l,b=m["".concat(u,".").concat(s)]||m[s]||k[s]||n;return a?r.createElement(b,o(o({ref:t},p),{},{components:a})):r.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},99426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(87462),l=(a(67294),a(3905));const n={slug:"cloudbreak",title:"Cloudbreak Solana Horizontally Scaled State Architecture",authors:["davirain"],tags:["blog","blockchain","solana","cloudbreak"]},o=void 0,i={permalink:"/blog/cloudbreak",editUrl:"https://creatorsdao.github.io/all-in-one-solana/blog/blog/2023-09-28/cloudbreak.md",source:"@site/blog/2023-09-28/cloudbreak.md",title:"Cloudbreak Solana Horizontally Scaled State Architecture",description:"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd Cloudbreak\uff0cSolana \u7684\u6c34\u5e73\u6269\u5c55\u72b6\u6001\u67b6\u6784",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"solana",permalink:"/blog/tags/solana"},{label:"cloudbreak",permalink:"/blog/tags/cloudbreak"}],readingTime:6.35,hasTruncateMarker:!1,authors:[{name:"Davirain",title:"Davirain Blog",url:"https://github.com/DaviRain-Su",imageURL:"https://github.com/DaviRain-Su.png",key:"davirain"}],frontMatter:{slug:"cloudbreak",title:"Cloudbreak Solana Horizontally Scaled State Architecture",authors:["davirain"],tags:["blog","blockchain","solana","cloudbreak"]},nextItem:{title:"Gulf Stream Solana Mempool-less Transaction Forwarding Protocol",permalink:"/blog/gulf-stream"}},u={authorsImageUrls:[void 0]},c=[{value:"\u6982\u8ff0\uff1aRAM\u3001SSD \u548c\u7ebf\u7a0b",id:"\u6982\u8ff0ramssd-\u548c\u7ebf\u7a0b",level:2},{value:"Cloudbreak \u7834\u4e91",id:"cloudbreak-\u7834\u4e91",level:2},{value:"Benchmarking Cloudbreak Cloudbreak \u57fa\u51c6\u6d4b\u8bd5",id:"benchmarking-cloudbreak-cloudbreak-\u57fa\u51c6\u6d4b\u8bd5",level:2}],p={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd Cloudbreak\uff0cSolana \u7684\u6c34\u5e73\u6269\u5c55\u72b6\u6001\u67b6\u6784"),(0,l.kt)("h2",{id:"\u6982\u8ff0ramssd-\u548c\u7ebf\u7a0b"},"\u6982\u8ff0\uff1aRAM\u3001SSD \u548c\u7ebf\u7a0b"),(0,l.kt)("p",null,"\u5f53\u5728\u4e0d\u8fdb\u884c\u5206\u7247\u7684\u60c5\u51b5\u4e0b\u6269\u5c55\u533a\u5757\u94fe\u65f6\uff0c\u4ec5\u6269\u5c55\u8ba1\u7b97\u662f\u4e0d\u591f\u7684\u3002\u7528\u4e8e\u8ddf\u8e2a\u5e10\u6237\u7684\u5185\u5b58\u5f88\u5feb\u5c31\u4f1a\u6210\u4e3a\u5927\u5c0f\u548c\u8bbf\u95ee\u901f\u5ea6\u7684\u74f6\u9888\u3002\u4f8b\u5982\uff1a\u4eba\u4eec\u666e\u904d\u8ba4\u4e3a\uff0c\u8bb8\u591a\u73b0\u4ee3\u94fe\u4f7f\u7528\u7684\u672c\u5730\u6570\u636e\u5e93\u5f15\u64ce LevelDB \u5728\u5355\u53f0\u673a\u5668\u4e0a\u65e0\u6cd5\u652f\u6301\u8d85\u8fc7 5,000 TPS\u3002\u8fd9\u662f\u56e0\u4e3a\u865a\u62df\u673a\u65e0\u6cd5\u901a\u8fc7\u6570\u636e\u5e93\u62bd\u8c61\u5229\u7528\u5bf9\u5e10\u6237\u72b6\u6001\u7684\u5e76\u53d1\u8bfb\u5199\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5728 RAM \u4e2d\u7ef4\u62a4\u5168\u5c40\u72b6\u6001\u3002\u7136\u800c\uff0c\u671f\u671b\u6d88\u8d39\u7ea7\u673a\u5668\u6709\u8db3\u591f\u7684 RAM \u6765\u5b58\u50a8\u5168\u5c40\u72b6\u6001\u662f\u4e0d\u5408\u7406\u7684\u3002\u4e0b\u4e00\u4e2a\u9009\u62e9\u662f\u4f7f\u7528 SSD\u3002\u867d\u7136 SSD \u5c06\u6bcf\u5b57\u8282\u6210\u672c\u964d\u4f4e\u4e86 30 \u500d\u6216\u66f4\u591a\uff0c\u4f46\u5b83\u4eec\u6bd4 RAM \u6162 1000 \u500d\u3002\u4ee5\u4e0b\u662f\u6700\u65b0\u4e09\u661f SSD \u7684",(0,l.kt)("a",{parentName:"p",href:"https://www.samsung.com/semiconductor/global.semi.static/Samsung_NVMe_SSD_970_PRO_Data_Sheet_Rev.1.0.pdf"},"\u6570\u636e\u8868"),"\uff0c\u5b83\u662f\u5e02\u573a\u4e0a\u6700\u5feb\u7684 SSD \u4e4b\u4e00\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/0*rjRPk_av77fMNZbK",alt:null})),(0,l.kt)("p",null,"\u5355\u7b14\u4ea4\u6613\u9700\u8981\u8bfb\u53d6 2 \u4e2a\u8d26\u6237\u5e76\u5199\u5165 1 \u4e2a\u8d26\u6237\u3002\u8d26\u6237\u5bc6\u94a5\u662f\u52a0\u5bc6\u516c\u94a5\uff0c\u5b8c\u5168\u968f\u673a\uff0c\u6ca1\u6709\u771f\u5b9e\u7684\u6570\u636e\u5c40\u90e8\u6027\u3002\u7528\u6237\u7684\u94b1\u5305\u4f1a\u6709\u5f88\u591a\u8d26\u6237\u5730\u5740\uff0c\u6bcf\u4e2a\u5730\u5740\u7684\u4f4d\u4e0e\u4efb\u4f55\u5176\u4ed6\u5730\u5740\u5b8c\u5168\u65e0\u5173\u3002\u7531\u4e8e\u5e10\u6237\u4e4b\u95f4\u4e0d\u5b58\u5728\u5c40\u90e8\u6027\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u53ef\u80fd\u5c06\u5b83\u4eec\u653e\u7f6e\u5728\u5185\u5b58\u4e2d\u4ee5\u4f7f\u5b83\u4eec\u53ef\u80fd\u5f7c\u6b64\u63a5\u8fd1\u3002"),(0,l.kt)("p",null,"\u6bcf\u79d2\u6700\u591a 15,000 \u6b21\u552f\u4e00\u8bfb\u53d6\uff0c\u4f7f\u7528\u5355\u4e2a SSD \u7684\u5e10\u6237\u6570\u636e\u5e93\u7684\u7b80\u5355\u5355\u7ebf\u7a0b\u5b9e\u73b0\u5c06\u652f\u6301\u6bcf\u79d2\u6700\u591a 7,500 \u4e2a\u4e8b\u52a1\u3002\u73b0\u4ee3 SSD \u652f\u6301 32 \u4e2a\u5e76\u53d1\u7ebf\u7a0b\uff0c\u56e0\u6b64\u53ef\u4ee5\u652f\u6301\u6bcf\u79d2 370,000 \u6b21\u8bfb\u53d6\uff0c\u6216\u6bcf\u79d2\u5927\u7ea6 185,000 \u4e2a\u4e8b\u52a1\u3002"),(0,l.kt)("h2",{id:"cloudbreak-\u7834\u4e91"},"Cloudbreak \u7834\u4e91"),(0,l.kt)("p",null,"Solana \u7684\u6307\u5bfc\u8bbe\u8ba1\u539f\u5219\u662f\u8bbe\u8ba1\u4e0d\u59a8\u788d\u786c\u4ef6\u7684\u8f6f\u4ef6\uff0c\u4ee5\u5b9e\u73b0 100% \u7684\u5229\u7528\u7387\u3002"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u5e10\u6237\u6570\u636e\u5e93\u4ee5\u4fbf\u5728 32 \u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u53ef\u4ee5\u8fdb\u884c\u5e76\u53d1\u8bfb\u53d6\u548c\u5199\u5165\u662f\u4e00\u9879\u6311\u6218\u3002\u50cf LevelDB \u8fd9\u6837\u7684\u666e\u901a\u5f00\u6e90\u6570\u636e\u5e93\u4f1a\u5bfc\u81f4\u74f6\u9888\uff0c\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u9488\u5bf9\u533a\u5757\u94fe\u8bbe\u7f6e\u4e2d\u7684\u8fd9\u4e00\u7279\u5b9a\u6311\u6218\u8fdb\u884c\u4f18\u5316\u3002 Solana \u4e0d\u4f7f\u7528\u4f20\u7edf\u6570\u636e\u5e93\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u4f7f\u7528\u7684\u51e0\u79cd\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5229\u7528\u5185\u5b58\u6620\u5c04\u6587\u4ef6\u3002\u5185\u5b58\u6620\u5c04\u6587\u4ef6\u662f\u5176\u5b57\u8282\u88ab\u6620\u5c04\u5230\u8fdb\u7a0b\u7684\u865a\u62df\u5730\u5740\u7a7a\u95f4\u7684\u6587\u4ef6\u3002\u4e00\u65e6\u6587\u4ef6\u88ab\u6620\u5c04\uff0c\u5b83\u7684\u884c\u4e3a\u5c31\u50cf\u4efb\u4f55\u5176\u4ed6\u5185\u5b58\u4e00\u6837\u3002\u5185\u6838\u53ef\u80fd\u4f1a\u5c06\u90e8\u5206\u5185\u5b58\u7f13\u5b58\u5728 RAM \u4e2d\uff0c\u6216\u8005\u4e0d\u5c06\u5176\u7f13\u5b58\u5728 RAM \u4e2d\uff0c\u4f46\u7269\u7406\u5185\u5b58\u7684\u6570\u91cf\u53d7\u5230\u78c1\u76d8\u5927\u5c0f\u7684\u9650\u5236\uff0c\u800c\u4e0d\u662f RAM \u7684\u5927\u5c0f\u3002\u8bfb\u53d6\u548c\u5199\u5165\u4ecd\u7136\u660e\u663e\u53d7\u5230\u78c1\u76d8\u6027\u80fd\u7684\u9650\u5236\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u91cd\u8981\u7684\u8bbe\u8ba1\u8003\u8651\u56e0\u7d20\u662f\u987a\u5e8f\u64cd\u4f5c\u6bd4\u968f\u673a\u64cd\u4f5c\u5feb\u5f97\u591a\u3002\u8fd9\u4e0d\u4ec5\u9002\u7528\u4e8e SSD\uff0c\u4e5f\u9002\u7528\u4e8e\u6574\u4e2a\u865a\u62df\u5185\u5b58\u5806\u6808\u3002 CPU \u64c5\u957f\u9884\u53d6\u6309\u987a\u5e8f\u8bbf\u95ee\u7684\u5185\u5b58\uff0c\u800c\u64cd\u4f5c\u7cfb\u7edf\u5219\u64c5\u957f\u5904\u7406\u8fde\u7eed\u9875\u9519\u8bef\u3002\u4e3a\u4e86\u5229\u7528\u8fd9\u79cd\u884c\u4e3a\uff0c\u6211\u4eec\u5c06\u5e10\u6237\u6570\u636e\u7ed3\u6784\u5927\u81f4\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8d26\u6237\u548c\u5206\u53c9\u7684\u7d22\u5f15\u5b58\u50a8\u5728 RAM \u4e2d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5e10\u6237\u5b58\u50a8\u5728\u6700\u5927 4MB \u7684\u5185\u5b58\u6620\u5c04\u6587\u4ef6\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5185\u5b58\u6620\u5c04\u4ec5\u5b58\u50a8\u6765\u81ea\u5355\u4e2a\u63d0\u8bae\u5206\u53c9\u7684\u5e10\u6237\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5730\u56fe\u968f\u673a\u5206\u5e03\u5728\u5c3d\u53ef\u80fd\u591a\u7684\u53ef\u7528 SSD \u4e0a\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5199\u65f6\u590d\u5236\u8bed\u4e49\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5199\u5165\u4f1a\u9644\u52a0\u5230\u540c\u4e00\u5206\u53c9\u7684\u968f\u673a\u5185\u5b58\u6620\u5c04\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6bcf\u6b21\u5199\u5165\u5b8c\u6210\u540e\u90fd\u4f1a\u66f4\u65b0\u7d22\u5f15\u3002"))),(0,l.kt)("p",null,"\u7531\u4e8e\u5e10\u6237\u66f4\u65b0\u662f\u5199\u65f6\u590d\u5236\u5e76\u9644\u52a0\u5230\u968f\u673a SSD\uff0c\u56e0\u6b64 Solana \u83b7\u5f97\u4e86\u987a\u5e8f\u5199\u5165\u548c\u8de8\u591a\u4e2a SSD \u8fdb\u884c\u6a2a\u5411\u5199\u5165\u4ee5\u8fdb\u884c\u5e76\u53d1\u4e8b\u52a1\u7684\u597d\u5904\u3002\u8bfb\u53d6\u4ecd\u7136\u662f\u968f\u673a\u8bbf\u95ee\uff0c\u4f46\u7531\u4e8e\u4efb\u4f55\u7ed9\u5b9a\u7684\u5206\u53c9\u72b6\u6001\u66f4\u65b0\u90fd\u5206\u5e03\u5728\u8bb8\u591a SSD \u4e0a\uff0c\u56e0\u6b64\u8bfb\u53d6\u6700\u7ec8\u4e5f\u4f1a\u6c34\u5e73\u6269\u5c55\u3002"),(0,l.kt)("p",null,"Cloudbreak \u8fd8\u6267\u884c\u67d0\u79cd\u5f62\u5f0f\u7684\u5783\u573e\u6536\u96c6\u3002\u968f\u7740\u5206\u53c9\u5728\u56de\u6eda\u4e4b\u5916\u6700\u7ec8\u786e\u5b9a\u5e76\u4e14\u5e10\u6237\u88ab\u66f4\u65b0\uff0c\u65e7\u7684\u65e0\u6548\u5e10\u6237\u5c06\u88ab\u5783\u573e\u6536\u96c6\uff0c\u5e76\u4e14\u5185\u5b58\u5c06\u88ab\u653e\u5f03\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u81f3\u5c11\u8fd8\u6709\u4e00\u4e2a\u66f4\u5927\u7684\u597d\u5904\uff1a\u8ba1\u7b97\u4efb\u4f55\u7ed9\u5b9a\u5206\u53c9\u7684\u72b6\u6001\u66f4\u65b0\u7684 Merkle \u6839\u53ef\u4ee5\u901a\u8fc7\u8de8 SSD \u6c34\u5e73\u6269\u5c55\u7684\u987a\u5e8f\u8bfb\u53d6\u6765\u5b8c\u6210\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u7f3a\u70b9\u662f\u5931\u53bb\u4e86\u6570\u636e\u7684\u901a\u7528\u6027\u3002\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\uff0c\u5177\u6709\u81ea\u5b9a\u4e49\u5e03\u5c40\uff0c\u56e0\u6b64\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528\u901a\u7528\u6570\u636e\u5e93\u62bd\u8c61\u6765\u67e5\u8be2\u548c\u64cd\u4f5c\u6570\u636e\u3002\u6211\u4eec\u5fc5\u987b\u4ece\u5934\u5f00\u59cb\u6784\u5efa\u4e00\u5207\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u73b0\u5728\u5df2\u7ecf\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("h2",{id:"benchmarking-cloudbreak-cloudbreak-\u57fa\u51c6\u6d4b\u8bd5"},"Benchmarking Cloudbreak Cloudbreak \u57fa\u51c6\u6d4b\u8bd5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*k_JFp7vmxdp0IOSgURJNug.png",alt:null})),(0,l.kt)("p",null,"\u867d\u7136\u5e10\u6237\u6570\u636e\u5e93\u4f4d\u4e8e RAM \u4e2d\uff0c\u4f46\u6211\u4eec\u770b\u5230\u541e\u5410\u91cf\u4e0e RAM \u8bbf\u95ee\u65f6\u95f4\u76f8\u5339\u914d\uff0c\u540c\u65f6\u968f\u53ef\u7528\u5185\u6838\u6570\u91cf\u8fdb\u884c\u6269\u5c55\u3002\u5f53\u5e10\u6237\u6570\u91cf\u8fbe\u5230 1000 \u4e07\u65f6\uff0c\u6570\u636e\u5e93\u4e0d\u518d\u9002\u5408 RAM\u3002\u7136\u800c\uff0c\u6211\u4eec\u4ecd\u7136\u770b\u5230\u5355\u4e2a SSD \u4e0a\u6bcf\u79d2\u8bfb\u53d6\u6216\u5199\u5165\u7684\u6027\u80fd\u63a5\u8fd1 1m\u3002"))}k.isMDXComponent=!0}}]);