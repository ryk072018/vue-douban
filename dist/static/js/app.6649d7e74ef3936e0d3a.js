webpackJsonp([0],[,,function(t,s,a){"use strict";var e=a(5),r=a.n(e),n={};n.getMovies=function(t){r.a.get("http://api.douban.com/v2/movie/in_theaters").then(function(s){t(s)}).catch(function(t){console.log(t)})},n.getMWill=function(t){r.a.get("http://api.douban.com/v2/movie/coming_soon").then(function(s){t(s)}).catch(function(t){console.log(t)})},n.getNewM=function(t){r.a.get("http://api.douban.com/v2/movie/us_box").then(function(s){t(s)}).catch(function(t){console.log(t)})},s.a=n},,,,,,,,,function(t,s,a){"use strict";var e=a(3),r=a(91),n=a(66),i=a.n(n),o=a(69),c=a.n(o),l=a(64),u=a.n(l),v=a(71),_=a.n(v),f=a(65),p=a.n(f),d=a(70),m=a.n(d),h=a(68),C=a.n(h),g=a(67),y=a.n(g),b=a(73),x=a.n(b);e.default.use(r.a),s.a=new r.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/movie",name:"Movie",component:c.a},{path:"/books",name:"Books",component:u.a},{path:"/status",name:"Status",component:_.a},{path:"/group",name:"Group",component:p.a},{path:"/search",name:"Search",component:m.a},{path:"/login",name:"Login",component:y.a},{path:"/logon",name:"Logon",component:C.a},{path:"/hotMovie",name:"HotMovie",component:x.a}]})},function(t,s){},,function(t,s,a){function e(t){a(55)}var r=a(0)(a(32),a(84),e,null,null);t.exports=r.exports},,,,,,,,,,,,,,,,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(47);s.default={data:function(){return{db_data:[]}},methods:{getData:function(){var t=this;e.a.getData(function(s){t.db_data=s.recommend_feeds})}},created:function(){this.getData()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{formItem:{input:"",password:"",name:""},ruleCustom:{input:[{required:!0,message:"手机 / 邮箱不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(t){var s=this;this.$refs[t].validate(function(t){t?s.$Message.success("提交成功!"):s.$Message.error("表单验证失败!")})},handleReset:function(t){this.$refs[t].resetFields()}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2),r=a(74),n=a.n(r),i=a(75),o=a.n(i),c=a(72),l=a.n(c),u=a(76),v=a.n(u);s.default={data:function(){return{mov_data:[],stars:3}},methods:{getMovies:function(){var t=this;e.a.getMovies(function(s){t.mov_data=s.data.subjects})}},created:function(){this.getMovies()},components:{Jijsy:n.a,NewM:o.a,FindGood:l.a,Types:v.a}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{value:""}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2);s.default={data:function(){return{data_m:[],stars:3}},methods:{getMovies:function(){var t=this;e.a.getMovies(function(s){t.data_m=s.data.subjects})}},created:function(){this.getMovies()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2);s.default={data:function(){return{mWill:[],stars:4}},methods:{getMW:function(){var t=this;e.a.getMWill(function(s){t.mWill=s.data.subjects})}},created:function(){this.getMW()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2);s.default={data:function(){return{newM:[],stars:4}},methods:{getNew:function(){var t=this;e.a.getNewM(function(s){t.newM=s.data.subjects})}},created:function(){this.getNew()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(3),r=a(13),n=a.n(r),i=a(12),o=(a.n(i),a(14)),c=a.n(o),l=a(11);e.default.use(n.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:l.a,template:"<App/>",components:{App:c.a}})},function(t,s,a){"use strict";var e=a(5),r=a.n(e),n={};n.getData=function(t){r.a.get("https://m.douban.com/rexxar/api/v2/recommend_feed?loc_id=108288").then(function(s){t(s.data)}).catch(function(t){console.log(t)})},s.a=n},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,a){function e(t){a(53)}var r=a(0)(a(33),a(82),e,null,null);t.exports=r.exports},function(t,s,a){function e(t){a(50)}var r=a(0)(a(34),a(79),e,null,null);t.exports=r.exports},function(t,s,a){function e(t){a(59)}var r=a(0)(a(35),a(88),e,"data-v-b1698746",null);t.exports=r.exports},function(t,s,a){function e(t){a(51)}var r=a(0)(a(36),a(80),e,"data-v-0d062118",null);t.exports=r.exports},function(t,s,a){function e(t){a(49)}var r=a(0)(a(37),a(78),e,"data-v-03ba032e",null);t.exports=r.exports},function(t,s,a){function e(t){a(60)}var r=a(0)(a(38),a(89),e,"data-v-b27ff88a",null);t.exports=r.exports},function(t,s,a){function e(t){a(54)}var r=a(0)(a(39),a(83),e,"data-v-769318ad",null);t.exports=r.exports},function(t,s,a){function e(t){a(56)}var r=a(0)(a(40),a(85),e,null,null);t.exports=r.exports},function(t,s,a){function e(t){a(48)}var r=a(0)(a(41),a(77),e,"data-v-01606861",null);t.exports=r.exports},function(t,s,a){function e(t){a(61)}var r=a(0)(a(42),a(90),e,"data-v-ce0392a4",null);t.exports=r.exports},function(t,s,a){function e(t){a(52)}var r=a(0)(a(43),a(81),e,"data-v-405eeef6",null);t.exports=r.exports},function(t,s,a){function e(t){a(58)}var r=a(0)(a(44),a(87),e,"data-v-aaca3542",null);t.exports=r.exports},function(t,s,a){function e(t){a(57)}var r=a(0)(a(45),a(86),e,"data-v-a369de84",null);t.exports=r.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"find-gg"},[a("header",[a("h2",[t._v("发现好电影")])]),t._v(" "),a("ul",[a("li",{staticStyle:{"border-color":"#CC3344"}},[a("a",{staticStyle:{color:"#CC3344"},attrs:{href:""}},[t._v(" 同时入选IMDB250和豆瓣电影250的电影")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("带你进入不正常的世界")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("用电【影】来祭奠逝去的岁月")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#FF4055"}},[a("a",{staticStyle:{color:"#FF4055"},attrs:{href:""}},[t._v("女孩们的故事【电影】")])]),t._v(" "),a("br"),t._v(" "),a("li",{staticStyle:{"border-color":"#FFAC2D"}},[a("a",{staticStyle:{color:"#FFAC2D"},attrs:{href:""}},[t._v("科幻是未来的钥匙——科幻启示录【科幻题材】")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("美国生活面面观")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("2015终极期待")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("经典韩国电影——收集100部")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logon-tem"},[a("Row",{staticClass:"header-h"},[a("Col",{attrs:{span:"24"}},[a("h1",[t._v("欢迎加入豆瓣")])])],1),t._v(" "),a("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.ruleCustom}},[a("FormItem",{staticClass:"form-it",attrs:{prop:"input"}},[a("Input",{staticClass:"inp",attrs:{placeholder:"手机号 / 邮箱"},model:{value:t.formItem.input,callback:function(s){t.formItem.input=s},expression:"formItem.input"}})],1),t._v(" "),a("FormItem",{staticClass:"form-it",attrs:{prop:"password"}},[a("Input",{staticClass:"inp",attrs:{placeholder:"密码 （至少6位）"},model:{value:t.formItem.password,callback:function(s){t.formItem.password=s},expression:"formItem.password"}})],1),t._v(" "),a("FormItem",{staticClass:"form-it",attrs:{prop:"name"}},[a("Input",{staticClass:"inp",attrs:{placeholder:"昵称"},model:{value:t.formItem.name,callback:function(s){t.formItem.name=s},expression:"formItem.name"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(s){t.handleSubmit("formItem")}}},[t._v("提交")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(s){t.handleReset("formItem")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  小组\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login-tem"},[a("div",{staticClass:"d-h"},[a("h2",[t._v("登录豆瓣")])]),t._v(" "),a("form",{attrs:{action:""}},[a("p",[a("input",{staticClass:"inp inp-name",attrs:{type:"text",placeholder:"邮箱 / 手机号 / 用户名"}})]),t._v(" "),a("p",[a("input",{staticClass:"inp",attrs:{type:"text",icon:"ios-eye-outline",placeholder:"密码"}})]),t._v(" "),a("p",{staticClass:"p-bu"},[a("input",{staticClass:"p-sub",attrs:{type:"submit",placeholder:"登录",value:"登录"}})])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"ji-section"},[t._m(0),t._v(" "),a("ul",{staticClass:"row-items"},t._l(t.mWill,function(s){return a("li",{key:s.id,staticClass:"item"},[a("a",{attrs:{href:""}},[a("div",{staticClass:"item-img"},[a("img",{staticClass:"it-img",attrs:{src:s.images.medium,alt:""}})]),t._v(" "),a("span",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"item-star"},[a("Rate",{staticClass:"it-star",attrs:{disabled:""},model:{value:t.stars,callback:function(s){t.stars=s},expression:"stars"}})],1)])])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"sec-header"},[a("h2",{staticClass:"sec-type"},[t._v("即将上映")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("更多")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  图书\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"header-inp"},[a("Input",{staticClass:"inp",staticStyle:{width:"300px","margin-left":"20px"},attrs:{icon:"ios-search-outline",placeholder:"请输入搜索内容..."},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),t._v(" "),a("div",{staticClass:"types-list"},[a("Row",{staticClass:"list-item"},[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("电影")]),a("br"),t._v(" "),a("span",[t._v("影院热映")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("电视")]),a("br"),t._v(" "),a("span",[t._v("正在热播")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("图书")]),a("br"),t._v(" "),a("span",[t._v("畅销排行")])])])],1),t._v(" "),a("Row",{staticClass:"list-item"},[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("同城")]),a("br"),t._v(" "),a("span",[t._v("周末活动")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("小组")]),a("br"),t._v(" "),a("span",[t._v("知趣相投")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("音乐")]),a("br"),t._v(" "),a("span",[t._v("新碟榜")])])])],1),t._v(" "),a("Row",{staticClass:"list-item"},[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("阅读")]),a("br"),t._v(" "),a("span",[t._v("电子书")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("游戏")]),a("br"),t._v(" "),a("span",[t._v("虚拟世界")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("应用")]),a("br"),t._v(" "),a("span",[t._v("玩游戏")])])])],1),t._v(" "),a("Row",{staticClass:"list-item"},[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("东西")]),a("br"),t._v(" "),a("span",[t._v("心爱之物")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("FM")]),a("br"),t._v(" "),a("span",[t._v("红心歌单")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:""}},[a("strong",[t._v("市级")]),a("br"),t._v(" "),a("span",[t._v("购买原创")])])])],1)],1),t._v(" "),a("div",{staticClass:"user-do"},[a("Row",{staticClass:"using"},[a("Col",{staticClass:"it",attrs:{span:"12"}},[a("router-link",{staticClass:"it-use",attrs:{to:{name:"Logon"}}},[t._v("注册帐号")])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("router-link",{staticClass:"it-use",attrs:{to:{name:"Login"}}},[t._v("登录豆瓣")])],1)],1),t._v(" "),a("Row",{staticClass:"using-way"},[a("Col",{staticClass:"it",attrs:{span:"12"}},[a("router-link",{staticClass:"it-use",attrs:{to:{}}},[t._v("使用桌面版")])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("router-link",{staticClass:"it-use",attrs:{to:{}}},[t._v("使用豆瓣App")])],1)],1)],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Row",{staticClass:"nav-header"},[a("Col",{attrs:{span:"8"}},[a("router-link",{staticStyle:{color:"#00b600","font-size":"24px"},attrs:{to:{name:"Hello"}}},[t._v("豆瓣")])],1),t._v(" "),a("Col",{attrs:{span:"3"}},[a("router-link",{staticStyle:{color:"rgb(35, 132, 232)"},attrs:{to:{name:"Movie"}}},[t._v("电影")])],1),t._v(" "),a("Col",{attrs:{span:"3"}},[a("router-link",{staticStyle:{color:"rgb(159, 120, 96)"},attrs:{to:{name:"Books"}}},[t._v("图书")])],1),t._v(" "),a("Col",{attrs:{span:"3"}},[a("router-link",{staticStyle:{color:"rgb(228, 168, 19)"},attrs:{to:{name:"Status"}}},[t._v("广播")])],1),t._v(" "),a("Col",{attrs:{span:"3"}},[a("router-link",{staticStyle:{color:"rgb(159, 120, 96)"},attrs:{to:{name:"Group"}}},[t._v("小组")])],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("router-link",{staticStyle:{color:"#00b600","font-size":"24px"},attrs:{to:{name:"Search"}}},[a("Icon",{attrs:{type:"search"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"concent"},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  广播\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",[a("div",{staticClass:"type-list"},[t._m(0),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 经典\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("冷门佳片\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 豆瓣高分\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("动作\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 喜剧\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("爱情\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 悬疑\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("恐惧\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 科幻\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("治愈\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 文艺\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("成长\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 动画\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("华语\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 欧美\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v("韩国\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)])],1),t._v(" "),a("Row",{staticClass:"type-item"},[a("Col",{staticClass:"col-it",attrs:{span:"12"}},[a("a",{attrs:{href:""}},[t._v(" 日本\n          "),a("Icon",{staticClass:"it-right",attrs:{type:"chevron-right"}})],1)]),t._v(" "),a("Col",{staticClass:"col-right",attrs:{span:"12"}},[a("a",{attrs:{href:""}})])],1)],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",[a("h2",[t._v("分类浏览")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"ji-section"},[t._m(0),t._v(" "),a("ul",{staticClass:"row-items"},t._l(t.newM,function(s){return a("li",{key:s.id,staticClass:"item"},[a("a",{attrs:{href:""}},[a("div",{staticClass:"item-img"},[a("img",{staticClass:"it-img",attrs:{src:s.subject.images.medium,alt:""}})]),t._v(" "),a("span",{staticClass:"item-title"},[t._v(t._s(s.subject.title))]),t._v(" "),a("div",{staticClass:"item-star"},[a("Rate",{staticClass:"it-star",attrs:{disabled:""},model:{value:t.stars,callback:function(s){t.stars=s},expression:"stars"}})],1)])])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"sec-header"},[a("h2",{staticClass:"sec-type"},[t._v("北美票房榜")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("更多")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("div",{staticClass:"type-list"},[a("Row",[a("Col",{staticClass:"item-1",attrs:{span:"12"}},[a("router-link",{attrs:{to:{name:"Movie"}}},[t._v("影院热映")])],1),t._v(" "),a("Col",{staticClass:"item-2",attrs:{span:"12"}},[a("router-link",{attrs:{to:{}}},[t._v("生活在别处")])],1)],1),t._v(" "),a("Row",[a("Col",{staticClass:"item-3",attrs:{span:"12"}},[a("router-link",{attrs:{to:{}}},[t._v("豆瓣时间")])],1),t._v(" "),a("Col",{staticClass:"item-4",attrs:{span:"12"}},[a("router-link",{attrs:{to:{}}},[t._v("豆瓣时间")])],1)],1)],1),t._v(" "),t._l(t.db_data,function(s){return a("router-link",{key:s.id,staticClass:"page1-list",attrs:{to:{}}},[a("div",{staticClass:"list-item"},[a("Row",[a("Col",{attrs:{span:"16"}},[a("h3",{staticClass:"item-h3"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"hello-des"},[t._v(t._s(s.target.desc))])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"right"},[a("img",{attrs:{src:s.target.cover_url,alt:""}})])])],1),t._v(" "),a("div",{staticClass:"by-des"},[a("span",{staticClass:"by-left"},[t._v("by"+t._s(s.target.author.name))]),t._v(" "),a("span",{staticClass:"by-right"},[t._v(t._s(s.source_cn))])])],1),t._v(" "),a("hr")])}),t._v(" "),a("div",{staticClass:"loading"},[a("Spin",{attrs:{size:"large",sloat:""}})],1)],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"movie-page"},[a("section",{staticClass:"sec"},[a("header",{staticClass:"sec-header"},[a("h2",{staticClass:"sec-type"},[t._v("影院热映")]),t._v(" "),a("router-link",{attrs:{to:{name:"HotMovie"}}},[t._v("更多")])],1),t._v(" "),a("ul",{staticClass:"row-items"},t._l(t.mov_data,function(s){return a("li",{key:s.id,staticClass:"item"},[a("router-link",{attrs:{to:{}}},[a("div",{staticClass:"img-item"},[a("img",{staticClass:"it-img",attrs:{src:s.images.medium,alt:""}})]),t._v(" "),a("span",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"item-star"},[a("Rate",{staticClass:"it-star",attrs:{disabled:""},model:{value:t.stars,callback:function(s){t.stars=s},expression:"stars"}})],1)])],1)}))]),t._v(" "),a("Jijsy"),t._v(" "),a("NewM"),t._v(" "),a("FindGood"),t._v(" "),a("Types")],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"hot"},[a("h2",[t._v("影院热映")]),t._v(" "),a("section",{staticClass:"list"},[a("Row",t._l(t.data_m,function(s){return a("Col",{key:s.id,staticClass:"list-item",attrs:{span:"8"}},[a("router-link",{staticClass:"item",attrs:{to:""}},[a("div",[a("img",{staticClass:"item-img",attrs:{src:s.images.medium,alt:""}})]),t._v(" "),a("div",[a("span",{staticClass:"item-sp"},[t._v(t._s(s.title))]),t._v(" "),a("Rate",{staticClass:"it-star",attrs:{disabled:""},model:{value:t.stars,callback:function(s){t.stars=s},expression:"stars"}})],1)])],1)}))],1)])])},staticRenderFns:[]}}],[46]);
//# sourceMappingURL=app.6649d7e74ef3936e0d3a.js.map