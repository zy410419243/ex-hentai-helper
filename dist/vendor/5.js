(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(43)(r,a);r.locals&&(e.exports=r.locals)},122:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}",""])},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(62)),a=u(n(60)),o=u(n(120));n(67),n(61),n(68);var i=n(1),c=u(i),l=u(n(52)),s=u(n(54));function u(e){return e&&e.__esModule?e:{default:e}}n(259);var f=(chrome.extension?chrome.extension.getBackgroundPage():{store:new s.default("options")}).store,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));h.call(n);var r=f.get("search")||"";return n.state={coopraidSearchValue:r,coopraidSwitchChecked:!!r},r&&n.handleSearch(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}(),h=function(){var e=this;this.componentDidMount=function(){},this.handleSearch=function(){var t=e.state.coopraidSearchValue;chrome.tabs.query({active:!0,currentWindow:!0},function(e){var n=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});f.set("search",t),n.postMessage({message:"open_coopraid_search",search:t})})},this.handleCoopraidSearch=function(t){return e.setState({coopraidSearchValue:t.target.value})},this.handleCoopraidSwitch=function(t){t?e.handleSearch():(f.remove("search"),e.setState({coopraidSearchValue:""})),e.setState({coopraidSwitchChecked:t})},this.render=function(){var t=e.state,n=t.coopraidSearchValue,i=t.coopraidSwitchChecked;return c.default.createElement("div",{className:"CoopraidSearch"},c.default.createElement(o.default,{style:{width:"90%"},onChange:e.handleCoopraidSearch,value:n,placeholder:"这里填房间描述"}),c.default.createElement(l.default,null),c.default.createElement("div",{style:{marginLeft:"6%"}},c.default.createElement(a.default,{title:"看见上面的文本框了么，填了这个你才能开启搜索"},c.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启共斗搜索")),c.default.createElement(r.default,{disabled:!n,onChange:e.handleCoopraidSwitch,checked:i,style:{float:"right",marginRight:"6%"}}),c.default.createElement("div",{style:{clear:"both"}})),c.default.createElement(l.default,null))}};t.default=d},259:function(e,t,n){var r=n(260);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(43)(r,a);r.locals&&(e.exports=r.locals)},260:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,".CoopraidSearch{}",""])},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(76)),a=u(n(123)),o=u(n(125));n(77),n(138),n(139);var i=n(1),c=u(i),l=u(n(52)),s=n(6);function u(e){return e&&e.__esModule?e:{default:e}}n(404);var f="http://game.granbluefantasy.jp/profile/content/index/",d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"isCharacterPage"}),t.onMessage.addListener(function(e){var t=e.flag;n.setState({disabled:!t})})})},n.handleCheckUbCharacters=function(){n.state.disabled||chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});n.setState({checkUbCharactersBtnLoading:!0}),t.postMessage({message:"check_ub_characters"}),t.onMessage.addListener(function(e){var t=e.datas,r=!0,i=!1,l=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var d=s.value,y=d.userId,m=void 0===y?1:y;d.url=f+m,d.hasCharacter=""}}catch(e){i=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw l}}n.recursionRequest(t,0,function(e){var t=!0,r=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!(t=(l=s.next()).done);t=!0){var u=l.value,f=u.data,d=[],y=!0,m=!1,v=void 0;try{for(var b,g=f.split("http%3A%2F%2Fgame-a.granbluefantasy.jp%2Fassets%2Fimg_light%2Fsp%2Fassets%2Fnpc%2Fquest")[Symbol.iterator]();!(y=(b=g.next()).done);y=!0){var _=b.value,w=!0,k=!1,E=void 0;try{for(var S,O=h[Symbol.iterator]();!(w=(S=O.next()).done);w=!0){var C=S.value,j=C.key,x=C.url;_.includes(x)&&d.push(j)}}catch(e){k=!0,E=e}finally{try{!w&&O.return&&O.return()}finally{if(k)throw E}}}}catch(e){m=!0,v=e}finally{try{!y&&g.return&&g.return()}finally{if(m)throw v}}u.hasCharacter=Array.from(new Set(d)).toString()}}catch(e){r=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(r)throw i}}var P=c.default.createElement(o.default,{scroll:{y:280},columns:p,dataSource:e,pagination:!1,rowKey:"id"});a.default.open({message:"红茶已泡好，跟谁喝自便，但请注意卫生",description:P,duration:null}),n.setState({checkUbCharactersBtnLoading:!1})})})})},n.recursionRequest=function(e,t,r){if(t>=e.length)r(e);else{var a=e[t],o=a.url;(0,s.getByCookie)(o,{},function(o){var i=o.data,c=void 0===i?"":i;a.data=decodeURI(c),n.recursionRequest(e,++t,r)})}},n.render=function(){var e=n.state,t=e.checkUbCharactersBtnLoading,a=e.disabled;return c.default.createElement("div",{className:"CheckCharacters"},c.default.createElement(r.default,{type:"primary",loading:t,disabled:a,onClick:n.handleCheckUbCharacters,style:{width:"90%"}},"严格检查骑空士队友是否失格"),c.default.createElement(l.default,null))},n.state={checkUbCharactersBtnLoading:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=d;var h=[{key:1,name:"",url:"3040030000"},{key:2,name:"",url:"3040031000"},{key:3,name:"",url:"3040032000"},{key:4,name:"",url:"3040033000"},{key:5,name:"",url:"3040034000"},{key:6,name:"",url:"3040035000"},{key:7,name:"",url:"3040036000"},{key:7,name:"",url:"3710074000"},{key:8,name:"",url:"3040037000"},{key:9,name:"",url:"3040038000"},{key:10,name:"",url:"3040039000"}],p=[{title:"姓名",dataIndex:"nickName",key:"nickName"},{title:"年龄",dataIndex:"userRank",key:"userRank"},{title:"天人",dataIndex:"hasCharacter",key:"hasCharacter"}]},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=s(r),o=s(n(198)),i=s(n(261)),c=s(n(406)),l=s(n(407));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(408);var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,f=Array(s),d=0;d<s;d++)f[d]=arguments[d];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),r.render=function(){return a.default.createElement("div",{className:"Popup"},a.default.createElement(o.default,null),a.default.createElement(c.default,null),a.default.createElement(i.default,null),a.default.createElement(l.default,null))},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=f},404:function(e,t,n){var r=n(405);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(43)(r,a);r.locals&&(e.exports=r.locals)},405:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,".CheckCharacters{}",""])},406:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(76)),a=u(n(123)),o=u(n(125));n(77),n(138),n(139);var i=n(1),c=u(i),l=u(n(52)),s=u(n(54));function u(e){return e&&e.__esModule?e:{default:e}}var f=(chrome.extension?chrome.extension.getBackgroundPage():{store:new s.default("options")}).store,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"isCharacterPage"}),t.onMessage.addListener(function(e){var t=e.flag;n.setState({disabled:!t})})})},n.handleExportBlackList=function(){var e=JSON.stringify(f.get("blackList")),t=document.createElement("a"),n=new Blob([e],{type:"octet/stream"}),r=window.URL.createObjectURL(n);t.setAttribute("href",r),t.setAttribute("download","black_list.json"),t.click()},n.handleCheckBlackList=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){n.setState({checkLoading:!0});var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"checkBlackList"}),t.onMessage.addListener(function(e){var t=e.datas,r=[],i=!0,l=!1,s=void 0;try{for(var u,d=t[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var p=u.value,y=p.nickName,m=p.userId,v=!0,b=!1,g=void 0;try{for(var _,w=f.get("blackList")[Symbol.iterator]();!(v=(_=w.next()).done);v=!0){var k=_.value,E=k.id,S=k.description;m==E&&r.push({id:E,nickName:y,description:S})}}catch(e){b=!0,g=e}finally{try{!v&&w.return&&w.return()}finally{if(b)throw g}}}}catch(e){l=!0,s=e}finally{try{!i&&d.return&&d.return()}finally{if(l)throw s}}var O=c.default.createElement(o.default,{scroll:{y:280},columns:h,dataSource:r,pagination:!1,rowKey:"id"});a.default.open({message:r.length?"有目标人物":"无目标人物",description:r.length?O:"你和另"+t.length+"个人的关系尚未发生，可能有新的基会。咦？为什么会多了一个人？",duration:null}),n.setState({checkLoading:!1})})})},n.render=function(){var e=n.state,t=e.exportLoading,a=e.checkLoading,o=e.disabled;return c.default.createElement("div",{className:"CheckBlackList"},c.default.createElement(r.default,{type:"primary",loading:t,onClick:n.handleExportBlackList,style:{width:"90%"}},"下载黑名单"),c.default.createElement(l.default,null),c.default.createElement(r.default,{type:"primary",loading:a,disabled:o,onClick:n.handleCheckBlackList,style:{width:"90%"}},"检查黑名单"),c.default.createElement(l.default,null))},n.state={exportLoading:!1,checkLoading:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=d;var h=[{title:"id",dataIndex:"id",key:"id",align:"center",width:60},{title:"姓名",dataIndex:"nickName",key:"nickName",align:"center",width:100},{title:"描述",dataIndex:"description",key:"description",align:"center"}]},407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(62)),a=s(n(60));n(67),n(61);var o=n(1),i=s(o),c=s(n(52)),l=s(n(54));function s(e){return e&&e.__esModule?e:{default:e}}var u=(chrome.extension?chrome.extension.getBackgroundPage():{store:new l.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSwitchOnChange=function(e){u.set("isEunuch",e),chrome.extension&&e&&(chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"to_be_a_eunuch",status:e})}),n.setState({title:"这就是我想要的生活（便乘"})),chrome.extension&&!e&&(chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"to_be_a_gbfer",status:e})}),n.setState({title:"开启该选项时，你将成为穷空士"})),n.setState({checked:e})},n.render=function(){var e=n.state,t=e.checked,o=e.title;return i.default.createElement("div",{className:"GachaOptions"},i.default.createElement("div",{style:{marginLeft:"6%"}},i.default.createElement(a.default,{title:o},i.default.createElement("span",{style:{float:"left",color:"#666"}},"是否精神阉割骑空士")),i.default.createElement(r.default,{onChange:n.handleSwitchOnChange,defaultChecked:t,disabled:t,style:{float:"right",marginRight:"6%"}}),i.default.createElement(c.default,{clear:!0})),i.default.createElement(c.default,{clear:!0}))},n.state={checked:u.get("isEunuch"),title:"开启该选项时，你将成为穷空士"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=f},408:function(e,t,n){var r=n(409);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(43)(r,a);r.locals&&(e.exports=r.locals)},409:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,".Popup {\r\n    width: 430px;\r\n    height: 460px;\r\n    text-align: center;\r\n    padding: 8px;\r\n    background: #B0E0E6;\r\n    font-size: 14px;\r\n}",""])},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(121);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){var e=n.props,t=e.clear,r=e.style;return a.default.createElement("div",{className:"white-space",style:Object.assign({clear:t?"both":"none"},r)})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=o},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){var n="store."+e.name+"."+t;if(null!==localStorage.getItem(n))try{return JSON.parse(localStorage.getItem(n))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,a="store."+e.name+".",o=localStorage.length-1;o>=0;o--)localStorage.key(o).substring(0,a.length)===a&&(n=localStorage.key(o).substring(a.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var a in n)n.hasOwnProperty(a)&&void 0===this.get(a)&&this.set(a,n[a])}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.dispatchInjectToContentScript=function(e){var t=new CustomEvent("inject_to_content_script",{detail:e});document.getElementById("init_window").dispatchEvent(t)},t.dispatchContentScriptToInject=function(e){var t=new CustomEvent("content_script_to_inject",{detail:e});document.getElementById("init_window").dispatchEvent(t)}}}]);