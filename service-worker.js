"use strict";var precacheConfig=[["/portfolio/index.html","37cf2fef4842b2d31ba2fef0c457b4fe"],["/portfolio/static/css/main.b497131d.css","bc4af20e0f3e2b7b674698822c88d478"],["/portfolio/static/js/main.4c433803.js","1fa67850ec08c115049418f4304dc11f"],["/portfolio/static/media/JosefinSans-Bold.9880fc08.ttf","9880fc0845d0f3950e490e4f3b05c08c"],["/portfolio/static/media/Karla-Bold.b45be274.ttf","b45be274b8b65fc9c72b038d72486edd"],["/portfolio/static/media/Karla-Regular.fd3f938a.ttf","fd3f938a23d57da8894c8aa0e85adf3f"],["/portfolio/static/media/Poulima_Resume.0bdd72e7.pdf","0bdd72e7973aab5bbea9fd6f005223b9"],["/portfolio/static/media/RussoOne-Regular.d14e8736.ttf","d14e8736a4d3b27eab214ee40c3e15e8"],["/portfolio/static/media/ShadowsIntoLight.01782a7f.ttf","01782a7fff27bc527f8af8095aac1098"],["/portfolio/static/media/babel_logo.e7c474b7.png","e7c474b73bb355777fee4f3d2209bd8c"],["/portfolio/static/media/background_theme.06a5e5ae.jpeg","06a5e5ae113f8ae8b6b0b8e35c01dcec"],["/portfolio/static/media/contact_background.84a31b9a.png","84a31b9a09a4f76a58f034574d50a175"],["/portfolio/static/media/email_logo2.cdeec236.png","cdeec23652c0d57b3ff6bfece65806dc"],["/portfolio/static/media/eslint_logo.bbb6e08b.svg","bbb6e08bdddfa71f40e998b810a525a4"],["/portfolio/static/media/github_logo1.3c35ce34.svg","3c35ce34b044bbf42db63121aed416af"],["/portfolio/static/media/grunt_logo.242a202b.png","242a202beb8c1538cc020dfedaafad44"],["/portfolio/static/media/gulp_logo.2069f913.png","2069f913ed70a79990d831e87af54214"],["/portfolio/static/media/ionic_logo.0f735083.png","0f735083841e630fe5d7c53e49cbc13a"],["/portfolio/static/media/linkedin_logo.d7a897bb.svg","d7a897bb9afbb153b0696e3368746c0f"],["/portfolio/static/media/profile.0aaabe05.jpg","0aaabe054f681bbd851eec3aa7093e40"],["/portfolio/static/media/pwa_logo.9f0ab88a.svg","9f0ab88aa939d16e4872ff33104e4642"],["/portfolio/static/media/react_logo.ea42bd8f.png","ea42bd8fbe2fc8e997626d6037a01185"],["/portfolio/static/media/redux_logo.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/portfolio/static/media/sass_logo.8e766e95.svg","8e766e9562509cb3fa14264580c5c0f9"],["/portfolio/static/media/skill_background.0904e132.jpg","0904e132819f6a78a63c6390548c0a54"],["/portfolio/static/media/styled_component_logo.eb571fcd.png","eb571fcd21a1c0788db07bf7c30e6eaa"],["/portfolio/static/media/webpack_logo.c500a380.png","c500a3801d8356a86da86a06c3d13a4d"],["/portfolio/static/media/work_background.598ef3d8.jpg","598ef3d8ccda90b9be9e2c1a637f500d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,o){var r=new URL(e);return o&&r.pathname.match(o)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],o=new URL(t,self.location),r=createCacheKey(o,hashParamName,a,/\.\w{8}\./);return[o.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(o){return setOfCachedUrls(o).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return o.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),o="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,o),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});