(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8jRI":function(t,e,r){"use strict";r("pIFo"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("SRfc"),r("Oyvg");var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function c(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=a(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=c(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(t)}r["%C2"]="�";for(var i=Object.keys(r),u=0;u<i.length;u++){var l=i[u];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},"8yz6":function(t,e,r){"use strict";r("V+eJ"),t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},D7AY:function(t,e,r){"use strict";r.r(e);r("91GP"),r("VRzm"),r("Btvt"),r("CX2u"),r("OG14");var n=r("q1tI"),o=r.n(n),a=r("Xu5J"),c=r("QpNP"),i=r("YwZP"),u=r("cr+I"),l=r("dsgd"),s=r("Ac47"),f=r("xC1/"),d=r("AIKp"),p=r("QxVw"),m=r("Urjs"),y=r("V+uE"),b=function(t){var e=t.fileList,r=t.startDownload,c=t.setSelectedDownloadId,i=Object(m.a)().formatMessage,u=Object(n.useCallback)((function(t){return[o.a.createElement(p.a,{key:"preview",size:"sm",onClick:function(){var e=t.fileId;console.log("fileId",e),a.a.warning(i("fnNotSupport"))}},i("preview")),o.a.createElement(p.a,{key:"download",appearance:"primary",size:"sm",onClick:function(){var e=t.fileId;r(e)}},i("download"))]}),[i,r]),l=Object(n.useCallback)((function(t){var e=(t.downloadRecords||[]).slice().pop()||"";c(e)}),[c]);return o.a.createElement(y.a,{operations:u,fileList:e,clickHandler:l})},v=r("nlxu"),g=r("nFrJ"),h=r.n(g),j=function(t){var e=t.logs;return o.a.createElement("div",{className:h.a.container},e.map((function(t){return o.a.createElement(o.a.Fragment,{key:t.timestamp},o.a.createElement("span",null,Object(v.a)(new Date(t.timestamp))+" ["+t.logType+"] [FileId: "+t.fileId+"]"),"progress"===t.logType&&o.a.createElement("span",null,"totalNumOfChunks: "+t.totalNum+"; chunk"+t.chunkIdx+" download "+t.chunkStatus),o.a.createElement("br",null))})))},w=r("/8sG"),O=function(){return function(t){for(var e="",r="abcdefghijklmnopqrstuvwxyz0123456789",n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}(16)};r("pdC7"),r("rQ1h"),e.default=function(t){var e=t.pathContext.locale,r=i.globalHistory.location.search,p=u.parse(r).peerId,m=Object(n.useState)(!0),y=m[0],g=m[1],h=Object(n.useState)(),I=h[0],x=h[1],E=Object(n.useState)([]),k=E[0],S=E[1],C=Object(n.useState)({}),A=C[0],F=C[1],N=Object(n.useState)(""),R=N[0],T=N[1];Object(n.useEffect)((function(){g(!0),Object(w.b)().then((function(t){x(t)})).catch((function(){a.a.error("Try Later And Contact Admin")})).finally((function(){g(!1)}))}),[]);var P=Object(n.useCallback)((function(t){p&&t.getFileList(p).then((function(t){S(t.map((function(t){return{fileId:t.fileId,name:t.fileName,size:t.fileSize}})))}))}),[p]),L=Object(n.useCallback)((function(t,e){F((function(r){var n;return Object.assign({},r,((n={})[t]=(r[t]||[]).concat([{logType:"acc",timestamp:Object(v.c)(),fileId:e}]),n))})),console.log("downloadId",t,"downloadACC")}),[]),D=Object(n.useCallback)((function(t,e,r,n,o){F((function(a){var c;return Object.assign({},a,((c={})[t]=(a[t]||[]).concat([{logType:"progress",timestamp:Object(v.c)(),chunkIdx:r,chunkStatus:o,totalNum:n,fileId:e}]),c))})),console.log("downloadId",t,"downloading",r,n,o)}),[]),U=Object(n.useCallback)((function(t){var e=O();null==I||I.initDownload(e,p,t).then((function(){S((function(r){return r.map((function(r){return r.fileId===t?Object.assign({},r,{downloadRecords:(r.downloadRecords||[]).concat([e])}):r}))})),null==I||I.registerCbOnDownloadId(e,(function(){L(e,t)}),w.a.ACC),null==I||I.registerCbOnDownloadId(e,(function(r,n,o){D(e,t,r,n,o)}),w.a.PROGRESS),I.startDownloadFile(e)}))}),[I,p,L]);return Object(n.useEffect)((function(){I&&P(I)}),[I,P]),o.a.createElement(d.a,null,o.a.createElement(f.a,{locale:e},o.a.createElement(s.a,{titleKey:"downloadSide"},o.a.createElement(l.a,{titleKey:"downloadSide"}),o.a.createElement("div",{className:"body-container"},o.a.createElement("div",{className:"file-list"},y?o.a.createElement(c.a,null):o.a.createElement(b,{fileList:k,setSelectedDownloadId:T,startDownload:U})),o.a.createElement("div",{className:"2"},y?o.a.createElement(c.a,null):o.a.createElement(j,{logs:A[R]||[]}))))))}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},J4zp:function(t,e,r){var n=r("wTVA"),o=r("m0LI"),a=r("ZhPi"),c=r("wkBT");t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||c()}},Pmem:function(t,e,r){"use strict";r("a1Th"),r("h7Nl"),r("Btvt"),r("pIFo"),t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||c()}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},"cr+I":function(t,e,r){"use strict";r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("h7Nl"),r("0l/t");var n=r("J4zp");r("DNiP"),r("hHhE"),r("91GP"),r("Tze0"),r("7h0T"),r("xfY5"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("Vd3H"),r("LK8F"),r("bWfx"),r("KKXr"),r("V+eJ"),r("pIFo");var o=r("RIqP");function a(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r("Pmem"),u=r("8jRI"),l=r("8yz6");function s(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,e){return e.encode?e.strict?i(t):encodeURIComponent(t):t}function d(t,e){return e.decode?u(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function y(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)})):null===r?r:d(r,t);n[e]=o};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var c,i=a(t.split("&"));try{for(i.s();!(c=i.n()).done;){var u=c.value,f=l(e.decode?u.replace(/\+/g," "):u,"="),p=n(f,2),m=p[0],b=p[1];b=void 0===b?null:"comma"===e.arrayFormat?b:d(b,e),r(d(m,e),b,o)}}catch(x){i.e(x)}finally{i.f()}for(var v=0,g=Object.keys(o);v<g.length;v++){var h=g[v],j=o[h];if("object"==typeof j&&null!==j)for(var w=0,O=Object.keys(j);w<O.length;w++){var I=O[w];j[I]=y(j[I],e)}else o[h]=y(j,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var r=o[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=m,e.parse=b,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);var r=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[[f(e,t),"[",a,"]"].join("")]:[[f(e,t),"[",f(a,t),"]=",f(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[[f(e,t),"[]"].join("")]:[[f(e,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null==n||0===n.length?r:0===r.length?[[f(e,t),"=",f(n,t)].join("")]:[[r,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[f(e,t)]:[[f(e,t),"=",f(n,t)].join("")])}}}}(e),n=Object.assign({},t);if(e.skipNull)for(var a=0,c=Object.keys(n);a<c.length;a++){var i=c[a];void 0!==n[i]&&null!==n[i]||delete n[i]}var u=Object.keys(n);return!1!==e.sort&&u.sort(e.sort),u.map((function(n){var o=t[n];return void 0===o?"":null===o?f(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):f(n,e)+"="+f(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:p(t).split("?")[0]||"",query:b(m(t),e)}},e.stringifyUrl=function(t,r){var n=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o),c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url),i=Object.assign(a,t.query),u=e.stringify(i,r);return u&&(u="?".concat(u)),"".concat(n).concat(u).concat(c)}},m0LI:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-d-tsx-808c9626c10a96d451e5.js.map