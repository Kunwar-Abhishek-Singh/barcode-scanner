if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const n=e=>d(e,c),s={module:{uri:c},exports:r,require:n};i[c]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(f(...e),r)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"es.855cf530.js",revision:"7b397a8c9a0d49e756f95752a5b50782"},{url:"es.855cf530.js.map",revision:"5fa4d5ab5209fe0b1f030ba90dce0487"},{url:"es.bf0ef079.js",revision:"3095a1b8a214adcd5e2037a572732f71"},{url:"es.bf0ef079.js.map",revision:"a86ea689130a5ba8a9df7fc46c7ea761"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"index.89efe45b.js",revision:"6814a61841cd719f59765d1ee48ea09a"},{url:"index.89efe45b.js.map",revision:"158c10f9f3d6dc52625c1c594fc7cebf"},{url:"index.a6923299.css",revision:"a2beacfa2919a06964ae8d4d8feb66a5"},{url:"index.a6923299.css.map",revision:"70d40f21939980704358c40e4ee1f7c6"},{url:"index.d081b0d1.js",revision:"adb7ac63061ff5a712b857bfa25e717c"},{url:"index.d081b0d1.js.map",revision:"7b3acfd1bcb92fa703dfad27c42a184f"},{url:"index.d44e81ec.js",revision:"b90a75d7c5128c18c30bf621d43c8122"},{url:"index.d44e81ec.js.map",revision:"05e257eb5b069a254719ec34dc67801e"},{url:"index.d9ff1fd2.js",revision:"d48eec1d5a68c3779850091da182aaf6"},{url:"index.d9ff1fd2.js.map",revision:"db587c921552ceaaae258aa08177b9e1"},{url:"index.df71182f.css",revision:"ec91a165582149a9b9ffce25dc45b617"},{url:"index.df71182f.css.map",revision:"9cb59db737a493ea8f6b0974ccf7f36d"},{url:"index.html",revision:"4aa720501e241d063283697f0df8490f"},{url:"index.runtime.499da941.js",revision:"fde425a32aa8734115fa0dba755c70df"},{url:"index.runtime.499da941.js.map",revision:"07004342feacfb3218822514db155f79"},{url:"index.runtime.7ee664b6.js",revision:"7906e74abaebf8bb89d27e33675ba414"},{url:"index.runtime.7ee664b6.js.map",revision:"2a0f589ea9501221d894443d35ef4afd"},{url:"manifest.webmanifest",revision:"f68f9dd2c9446d231a3238e515681a14"},{url:"screenshot-dark.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"screenshot-light.508f6fd6.png",revision:"7fc24a5f18e0bd76c0ca44fa6d054f5f"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
