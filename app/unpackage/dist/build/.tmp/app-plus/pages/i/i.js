(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/i/i"],{"447f":function(t,e,o){"use strict";o.r(e);var n=o("5c53"),a=o("9c73");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("e44e");var s=o("2877"),u=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"5c53":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"9c73":function(t,e,o){"use strict";o.r(e);var n=o("b5f5"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},b5f4:function(t,e,o){},b5f5:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("9ca3"));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(){return o.e("components/uni-load-more").then(o.bind(null,"9b93"))},s={components:{uniLoadMore:i},data:function(){return{name:[],sex:"♀",TabCur:0,CustomBar:this.CustomBar,page:1,postList:[],status:"loading",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"我是有底线的",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"我是有底线的"}}},onLoad:function(){var e=this;this.name=n.default.userinfo,console.log(this.name," at pages\\i\\i.vue:116"),"2"==this.name.Gender?this.sex="♀":this.sex="♂",console.log(this.name," at pages\\i\\i.vue:122"),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=myPostList",data:{uid:this.name.Auid,count:10,page:this.page},header:{"content-type":"application/x-www-form-urlencoded",Cookie:n.default.cookie},success:function(t){void 0==t.data.data.length?e.status="noMore":(e.postList=t.data.data,e.status="more",console.log(e.postList," at pages\\i\\i.vue:141"))}})},methods:{tabSelect:function(t){this.TabCur=t},getPost:function(e){console.log(e," at pages\\i\\i.vue:151"),t.navigateTo({url:"../postinfo/postinfo?id="+e})},getEditInfo:function(){t.navigateTo({url:"../editinfo/editinfo"})}},onReachBottom:function(){var e=this;this.status="loading",this.page++,console.log("拉倒低了",this.page," at pages\\i\\i.vue:165"),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=myPostList",data:{uid:this.name.Auid,count:10,page:this.page},header:{"content-type":"application/x-www-form-urlencoded",Cookie:n.default.cookie},success:function(t){void 0==t.data.data.length?(e.page--,e.status="noMore"):(e.postList=e.postList.concat(t.data.data),e.status="more",console.log(e.postList," at pages\\i\\i.vue:185"))}})}};e.default=s}).call(this,o("6e42")["default"])},e44e:function(t,e,o){"use strict";var n=o("b5f4"),a=o.n(n);a.a}},[["d87a","common/runtime","common/vendor"]]]);