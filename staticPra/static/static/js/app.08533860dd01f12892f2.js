webpackJsonp([1],{MKhk:function(t,i){},NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("7+uW"),a={data:function(){return{title:"华语男歌手"}},created:function(){},watch:{$route:function(t,i){"/"==t.path&&(this.title="华语男歌手",this.$router.go(0)),console.log(t)}}},s={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"headBox"},[n("div",{attrs:{id:"head"}},[n("span",{attrs:{id:"back"},on:{click:function(i){t.$router.go(-1)}}},[t._v("返回")]),t._v(t._s(t.title))])]),t._v(" "),n("router-view",{attrs:{title:t.title},on:{"update:title":function(i){t.title=i}}})],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("MKhk")},null,null).exports,r=n("/ocq"),l={data:function(){return{artists:[],classify:[{id:1001,title:"华语男歌手"},{id:1002,title:"华语女歌手"},{id:1003,title:"华语组合/乐队"},{id:2001,title:"欧美男歌手"},{id:2002,title:"欧美女歌手"},{id:2003,title:"欧美组合/乐队"},{id:6001,title:"日本男歌手"}],ifyName:"华语男歌手"}},created:function(){var t=this;this.$loading.show("正在加载,请稍等..."),this.$ajax("http://musicapi.leanapp.cn/artist/list?cat=1001").then(function(i){t.artists=JSON.parse(i).artists,console.log(t.artists),t.$loading.hide()})},methods:{singer:function(t){var i=this;this.$loading.show("正在加载,请稍等..."),this.$emit("update:title",t.title),this.$ajax("http://musicapi.leanapp.cn/artist/list?cat="+t.id).then(function(t){i.artists=JSON.parse(t).artists,console.log(i.artists),i.$loading.hide()})}}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("ul",{staticClass:"singer"},t._l(t.classify,function(i){return n("li",{on:{click:function(n){t.singer(i)}}},[t._v(t._s(i.title))])})),t._v(" "),n("ul",{staticClass:"list"},t._l(t.artists,function(i){return n("li",{on:{click:function(n){t.$router.push("/songs/"+i.id+"/"+i.name)}}},[n("img",{attrs:{src:i.img1v1Url,alt:""}}),t._v(" "),n("span",[t._v(t._s(i.name))])])})),t._v(" "),n("toTop")],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("kj4t")},null,null).exports,d={data:function(){return{songList:[]}},created:function(){var t=this;this.$emit("update:title",this.$route.params.name+"的单曲"),this.$loading.show("正在加载,请稍等..."),this.$ajax("http://musicapi.leanapp.cn/artists?id="+this.$route.params.id).then(function(i){t.songList=JSON.parse(i).hotSongs,console.log(t.songList),t.$loading.hide()})},methods:{cl:function(t){this.$emit("cha",t.al.picUrl),this.$router.push("/player/"+t.id+"/"+t.al.name)}}},p={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("singerList"),t._v(" "),n("ul",{staticClass:"list"},t._l(t.songList,function(i){return n("li",{on:{click:function(n){t.cl(i)}}},[n("img",{attrs:{src:i.al.picUrl,alt:""}}),t._v(" "),n("span",[t._v(t._s(i.al.name))])])})),t._v(" "),n("toTop")],1)},staticRenderFns:[]};var h=n("VU/8")(d,p,!1,function(t){n("UtGx")},null,null).exports,f={data:function(){return{url:"",imgUrl:"",x:0,timer:null,flag:!0}},created:function(){var t=this;this.$loading.show("歌曲正在加载..."),this.$ajax("http://musicapi.leanapp.cn/song/detail?ids="+this.$route.params.id).then(function(i){t.imgUrl=JSON.parse(i).songs[0].al.picUrl,console.log(t.imgUrl)}),this.$emit("update:title","歌曲名："+this.$route.params.name),this.$ajax("http://musicapi.leanapp.cn/music/url?id="+this.$route.params.id).then(function(i){t.url=JSON.parse(i).data[0].url,t.$loading.hide()})},methods:{play:function(t){var i=this;console.log(t.target.paused),clearInterval(this.timer),this.timer=setInterval(function(){i.x+=.2,i.x>360&&(i.x=0)},16.7)},pause:function(t){clearInterval(this.timer),console.log(t.target.paused)}}},m={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("audio",{attrs:{controls:"",src:t.url},on:{play:t.play,pause:t.pause}}),t._v(" "),n("div",{staticClass:"imgBox"},[n("img",{attrs:{src:t.imgUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"lyricBox"},[n("div",{staticClass:"rot",style:{transform:"rotate("+t.x+"deg)"}},[n("img",{attrs:{src:t.imgUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"lyric"},[t._v("暂无歌词")])])])},staticRenderFns:[]};var v=n("VU/8")(f,m,!1,function(t){n("a/eH")},null,null).exports;e.a.use(r.a);var g=new r.a({routes:[{path:"/",component:u},{path:"/songs/:id/:name",component:h},{path:"/player/:id/:name",component:v}]}),_={install:function(t){var i=new t({data:{msg:"正在加载，请稍等",flag:!1},template:'\n        <div v-show="flag" style="position:fixed;width:100vw;left:0;top:0;height:100vh;line-height:100vh;text-align:center;background:rgba(0,0,0,0.5);color:#ccccc6;">\n          {{msg}}\n        </div>\n      '}),n=document.createElement("div");n.id="loading",document.body.appendChild(n),i.$mount(n),t.prototype.$loading={show:function(t){i.msg=t||"正在加载，请稍等",i.flag=!0},hide:function(){i.flag=!1}}}},$=n("//Fk"),x=n.n($),w={install:function(t){t.prototype.$ajax=function(t){return new x.a(function(i,n){var e=new XMLHttpRequest;e.open("GET",t),e.send(),e.onreadystatechange=function(){200==e.status&&4==e.readyState&&i(e.responseText)}})}}},y={data:function(){return{flag:!1}},created:function(){var t=this;window.addEventListener("scroll",function(){var i=document.body.scrollTop||document.documentElement.scrollTop;t.flag=i>100})},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.flag,expression:"flag"}],staticClass:"toTop",on:{click:this.toTop}},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("返回"),i("br"),this._v("顶部")])}]};var T=n("VU/8")(y,U,!1,function(t){n("Tafe")},null,null).exports,k={data:function(){return{artists:[],classify:[{id:1001,title:"华语男歌手"},{id:1002,title:"华语女歌手"},{id:1003,title:"华语组合/乐队"},{id:2001,title:"欧美男歌手"},{id:2002,title:"欧美女歌手"},{id:2003,title:"欧美组合/乐队"},{id:6001,title:"日本男歌手"}],ifyName:"华语男歌手"}},methods:{singer:function(t){var i=this;this.$loading.show("正在加载,请稍等..."),this.$emit("update:title",t.title),this.$ajax("http://musicapi.leanapp.cn/artist/list?cat="+t.id).then(function(t){i.artists=JSON.parse(t).artists,console.log(i.artists),i.$loading.hide()})}}},C={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("ul",{staticClass:"singer"},t._l(t.classify,function(i){return n("li",{on:{click:function(n){t.singer(i)}}},[t._v(t._s(i.title))])}))])},staticRenderFns:[]};var E=n("VU/8")(k,C,!1,function(t){n("amqt")},null,null).exports;n("ao16");e.a.use(_),e.a.use(w),e.a.component("toTop",T),e.a.component("singerList",E),e.a.config.productionTip=!1,new e.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},Tafe:function(t,i){},UtGx:function(t,i){},"a/eH":function(t,i){},amqt:function(t,i){},ao16:function(t,i){},kj4t:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.08533860dd01f12892f2.js.map