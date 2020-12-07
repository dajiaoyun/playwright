(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(277)),c={id:"verification",title:"Verification"},i={unversionedId:"verification",id:"version-1.6.1/verification",isDocsHomePage:!1,title:"Verification",description:"- Videos",source:"@site/versioned_docs/version-1.6.1/verification.md",slug:"/verification",permalink:"/playwright/docs/1.6.1/verification",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/verification.md",version:"1.6.1",sidebar:"version-1.6.1/docs",previous:{title:"Assertions",permalink:"/playwright/docs/1.6.1/assertions"},next:{title:"Navigations",permalink:"/playwright/docs/1.6.1/navigations"}},l=[{value:"Videos",id:"videos",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Console logs",id:"console-logs",children:[]},{value:"Page errors",id:"page-errors",children:[]},{value:"Page events",id:"page-events",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#videos"}),"Videos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#screenshots"}),"Screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#console-logs"}),"Console logs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#page-errors"}),"Page errors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#page-events"}),"Page events"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"videos"},"Videos"),Object(o.b)("p",null,"Playwright can record videos for all pages in a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(o.b)("inlineCode",{parentName:"p"},"browserContext.close()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// With browser.newContext()\nconst context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n\n// With browser.newPage()\nconst page = await browser.newPage({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait page.close();\n\n// [Optional] Specify video size; defaults to viewport size\nconst context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 800, height: 600 },\n  }\n});\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#class-browsercontext"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#browsernewpageoptions"}),"browser.newPage([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#browsercontextclose"}),"browserContext.close()"))),Object(o.b)("h2",{id:"screenshots"},"Screenshots"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Save to file\nawait page.screenshot({ path: 'screenshot.png' });\n\n// Capture full page\nawait page.screenshot({ path: 'screenshot.png', fullPage: true });\n\n// Capture into buffer\nconst buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n\n// Capture given element\nconst elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pagescreenshotoptions"}),"page.screenshot([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandlescreenshotoptions"}),"elementHandle.screenshot([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"console-logs"},"Console logs"),Object(o.b)("p",null,"Console messages logged in the page can be brought into the Node.js context."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#class-consolemessage"}),"class: ConsoleMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#class-page"}),"class: Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#event-console"}),"event: 'console'"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-errors"},"Page errors"),Object(o.b)("p",null,"Listen for uncaught exceptions in the page with the ",Object(o.b)("inlineCode",{parentName:"p"},"pagerror")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#class-page"}),"class: Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#event-pageerror"}),"event: 'pageerror'"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-events"},"Page events"),Object(o.b)("h4",{id:"requestfailed"},Object(o.b)("inlineCode",{parentName:"h4"},'"requestfailed"')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(o.b)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(o.b)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),Object(o.b)("h4",{id:"popup---handle-popup-windows"},Object(o.b)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#class-page"}),"class: Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#event-requestfailed"}),"event: 'requestfailed'")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#event-dialog"}),"event: 'dialog'")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#event-popup"}),"event: 'popup'"))))}p.isMDXComponent=!0},277:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),g=n,d=b["".concat(c,".").concat(g)]||b[g]||u[g]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);