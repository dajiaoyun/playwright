(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(277)),l={id:"assertions",title:"Assertions"},i={unversionedId:"assertions",id:"version-1.6.1/assertions",isDocsHomePage:!1,title:"Assertions",description:"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in",source:"@site/versioned_docs/version-1.6.1/assertions.md",slug:"/assertions",permalink:"/playwright/docs/1.6.1/assertions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/assertions.md",version:"1.6.1",sidebar:"version-1.6.1/docs",previous:{title:"Network",permalink:"/playwright/docs/1.6.1/network"},next:{title:"Verification",permalink:"/playwright/docs/1.6.1/verification"}},c=[{value:"Common patterns",id:"common-patterns",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Custom assertions",id:"custom-assertions",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in\nNode.js."),Object(o.b)("p",null,"The examples in this guide use the built-in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html"}),Object(o.b)("inlineCode",{parentName:"a"},"assert")," module"),", but they can be used with any assertion library (like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/expect"}),"Expect")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/chai"}),"Chai"),"). See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/test-runners"}),"Test runners")," for more info."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#common-patterns"}),"Common patterns")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#element-handles"}),"Element Handles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"common-patterns"},"Common patterns"),Object(o.b)("p",null,"Playwright provides convenience APIs for common assertion tasks, like finding the\ntext content of an element. These APIs require a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/selectors"}),"selector")," to locate\nthe element."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert text content\nconst content = await page.textContent('nav:first-child');\nassert(content === 'home');\n\n// Assert inner text\nconst text = await page.innerText('.selected');\nassert(text === 'value');\n\n// Assert inner HTML\nconst html = await page.innerHTML('div.result');\nassert(html === '<p>Result</p>')\n\n// Assert `checked` attribute\nconst checked = await page.getAttribute('input', 'checked');\nassert(checked);\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pagetextcontentselector-options"}),"page.textContent(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pageinnertextselector-options"}),"page.innerText(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pageinnerhtmlselector-options"}),"page.innerHTML(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pagegetattributeselector-name-options"}),"page.getAttribute(selector, name[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frametextcontentselector-options"}),"frame.textContent(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frameinnertextselector-options"}),"frame.innerText(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frameinnerhtmlselector-options"}),"frame.innerHTML(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#framegetattributeselector-name-options"}),"frame.getAttribute(selector, name[, options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"element-handles"},"Element Handles"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api#class-elementhandle"}),"ElementHandle")," objects represent in-page DOM\nelements. They can be used to assert for multiple properties of the element."),Object(o.b)("p",null,"It is recommended to fetch the ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle")," object with\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api#pagewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api#framewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),". These\nAPIs wait for the element to be visible and then return an ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nassert(boundingBox.width === 100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nassert(classNames.includes('highlighted'));\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandletextcontent"}),"elementHandle.textContent()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandleinnertext"}),"elementHandle.innerText()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandleinnerhtml"}),"elementHandle.innerHTML()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandlegetattributename"}),"elementHandle.getAttribute(name)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandleboundingbox"}),"elementHandle.boundingBox()"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(o.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of\nthe browser. This is useful in situations where you want to assert for values\nthat are not covered by the convenience APIs above."),Object(o.b)("p",null,"The following APIs do not auto-wait for the element. It is recommended to use\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api#pagewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api#framewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nassert(userId);\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nassert(value === 'query');\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nassert(fontSize === '16px');\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nassert(length === 3);\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#pageevalselector-pagefunction-arg-1"}),"page.$$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frameevaluatepagefunction-arg"}),"frame.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frameevalselector-pagefunction-arg"}),"frame.$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#frameevalselector-pagefunction-arg-1"}),"frame.$$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandleevalselector-pagefunction-arg"}),"elementHandle.$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#elementhandleevalselector-pagefunction-arg-1"}),"elementHandle.$$eval(selector, pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},"Evaluation argument ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api#evaluationargument"}),"examples"))))}p.isMDXComponent=!0},277:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);