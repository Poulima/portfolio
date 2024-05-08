"use strict";var precacheConfig=[["/portfolio/index.html","1e7df998f9df049714b3bb5103688888"],["/portfolio/static/css/main.9fe917ad.css","9806c779c3a90ce7a5bc6f05fc79108d"],["/portfolio/static/js/main.bce4ca3a.js","699e2af1b789e3236328af2a8054a46a"],["/portfolio/static/media/JosefinSans-Bold.9880fc08.ttf","9880fc0845d0f3950e490e4f3b05c08c"],["/portfolio/static/media/Karla-Bold.b45be274.ttf","b45be274b8b65fc9c72b038d72486edd"],["/portfolio/static/media/Karla-Regular.fd3f938a.ttf","fd3f938a23d57da8894c8aa0e85adf3f"],["/portfolio/static/media/Poulima_Resume.344ed75b.pdf","344ed75bb6c30337df8fa7e686b528b1"],["/portfolio/static/media/RussoOne-Regular.d14e8736.ttf","d14e8736a4d3b27eab214ee40c3e15e8"],["/portfolio/static/media/ShadowsIntoLight.01782a7f.ttf","01782a7fff27bc527f8af8095aac1098"],["/portfolio/static/media/aws.c7401f52.png","c7401f520e568a2994f0269e6c537f1d"],["/portfolio/static/media/babel.181a1458.svg","181a145821f4897f4d9c0e141041deff"],["/portfolio/static/media/background_theme.06a5e5ae.jpeg","06a5e5ae113f8ae8b6b0b8e35c01dcec"],["/portfolio/static/media/contact_background.84a31b9a.png","84a31b9a09a4f76a58f034574d50a175"],["/portfolio/static/media/docker.de17aa3d.svg","de17aa3d85bbf1f20f5757c90f237179"],["/portfolio/static/media/email_logo2.cdeec236.png","cdeec23652c0d57b3ff6bfece65806dc"],["/portfolio/static/media/express.9de32921.svg","9de32921fe1e3899c721d066d10da3ef"],["/portfolio/static/media/github_logo1.3c35ce34.svg","3c35ce34b044bbf42db63121aed416af"],["/portfolio/static/media/jenkins.b2527f01.svg","b2527f0153d8d2167102e3cfae3fa108"],["/portfolio/static/media/jest.79db3da9.svg","79db3da9f3b690523c3b0e589e9cf8e9"],["/portfolio/static/media/kubernetes.e573b775.svg","e573b7757d9413f970c00770f2944624"],["/portfolio/static/media/linkedin_logo.d7a897bb.svg","d7a897bb9afbb153b0696e3368746c0f"],["/portfolio/static/media/mongodb.ce756188.svg","ce756188f8cec48ed678bf47355ccf48"],["/portfolio/static/media/nodejs.5c376133.svg","5c376133d6403088a87a04fcc9685674"],["/portfolio/static/media/profile.0aaabe05.jpg","0aaabe054f681bbd851eec3aa7093e40"],["/portfolio/static/media/react.c3fbd71b.svg","c3fbd71b12b726e00eec2b59f3c76786"],["/portfolio/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/portfolio/static/media/skill_background4.e4f79bdc.jpeg","e4f79bdc02f068580450d839026b354e"],["/portfolio/static/media/webpack.1310ad87.svg","1310ad87482dd07e827bdbcfd4b3565d"],["/portfolio/static/media/work_background1.0c78854d.jpeg","0c78854d6722cd5ea5e06af28db93a1b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var o="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});