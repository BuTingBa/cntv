(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sunui-upimg/sunui-upimg-alioos"],{"05b1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,i,u,a){try{var s=e[u](a),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function s(e){u(a,r,i,s,o,"next",e)}function o(e){u(a,r,i,s,o,"throw",e)}s(void 0)})}}var s=n("d75b"),o=n("208e");n("dd11"),n("57df");var c=n("90de"),l={data:function(){return{upload_after_list:[],upload_picture_list:[]}},name:"sunui-upimg",props:{upImgConfig:{type:Object}},methods:{chooseImage:function(e){g(this,parseInt(e),this.upImgConfig)},uploadimage:function(e){_(this,e)},deleteImg:function(e){h(e,this)},previewImg:function(e){m(e,this)},previewImgs:function(e){y(e,this)}}};t.default=l;var p=function(){var e=new Date;e.setHours(e.getHours()+s.timeout);var t=e.toISOString(),n={expiration:t,conditions:[["content-length-range",0,5242880]]},r=o.encode(JSON.stringify(n));return r},f=function(e,t){var n=e.upImgConfig.aliConfig.AccessKeySecret||s.AccessKeySecret,r=c.HMAC(c.SHA1,t,n,{asBytes:!0}),i=c.util.bytesToBase64(r);return i},d=function(){var t=a(r.default.mark(function t(n,i,u,s){var o,c,l,d,_,h,g;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o={aliyunFileKey:"".concat(i.aliConfig.oosDirectory,"/")+(new Date).getTime()+Math.floor(150*Math.random())+".png",aliyunServerURL:i.aliConfig.url,accessid:i.aliConfig.OSSAccessKeyId,url:i.aliConfig.url||"",oos:i.aliConfig.oos||!1},c=o.aliyunFileKey?o.aliyunFileKey:"",l=o.aliyunServerURL?o.aliyunServerURL:"",d=o.accessid?o.accessid:"",_=p(),h=f(n,_),t.next=8,e.uploadFile({url:o.url,filePath:u[s]["path"],name:"file",formData:{key:c,policy:_,OSSAccessKeyId:d,signature:h,success_action_status:"200"},success:function(){var t=a(r.default.mark(function t(i){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(200!=i.statusCode){t.next=10;break}return a=l+c,console.log("%c 阿里云上传(成功返回地址):".concat(a),"color:#1AAD19"),u[s]["path_server"]=a,n.upload_picture_list=u,t.next=7,n.$emit("onUpImg",n.upload_picture_list);case 7:e.hideLoading(),t.next=16;break;case 10:e.showLoading({title:"上传失败!"}),console.log("阿里云上传图片失败,返回状态码:",i.statusCode),setTimeout(function(){e.hideLoading()},2e3),n.upload_picture_list=[],n.upload_after_list=[],console.warn("阿里云上传图片失败,返回状态码:",i.statusCode);case 16:case"end":return t.stop()}},t,this)}));function i(e){return t.apply(this,arguments)}return i}(),fail:function(){var t=a(r.default.mark(function t(n){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.showLoading({title:"上传失败!"}),setTimeout(function(){e.hideLoading()},2e3),console.log(n);case 3:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()});case 8:g=t.sent,g.onProgressUpdate(function(){var e=a(r.default.mark(function e(t){var i,a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i=0,a=n.upload_picture_list.length;case 1:if(!(i<a)){e.next=8;break}return e.next=4,t.progress;case 4:u[i]["upload_percent"]=e.sent;case 5:i++,e.next=1;break;case 8:n.upload_picture_list=u;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return t.stop()}},t,this)}));return function(e,n,r,i){return t.apply(this,arguments)}}(),_=function(){var e=a(r.default.mark(function e(t,n){var i,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i=0,u=t.upload_picture_list.length;case 1:if(!(i<u)){e.next=8;break}if(0!=t.upload_picture_list[i]["upload_percent"]){e.next=5;break}return e.next=5,d(t,n,t.upload_picture_list,i);case 5:i++,e.next=1;break;case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=a(r.default.mark(function e(t,n){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$emit("onImgDel",{url:t.currentTarget.dataset.url,index:t.currentTarget.dataset.index});case 2:n.upload_picture_list.splice(t.currentTarget.dataset.index,1),n.upload_after_list.splice(t.currentTarget.dataset.index,1),n.upload_picture_list=n.upload_picture_list;case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),g=function(t,n,i){var u={aliConfig:{AccessKeySecret:i.aliConfig.AccessKeySecret,OSSAccessKeyId:i.aliConfig.OSSAccessKeyId,oosDirectory:i.aliConfig.oosDirectory,url:i.aliConfig.url},count:n,tips:i.tips||!1,notli:i.notli,sourceType:i.sourceType,sizeType:i.sizeType};e.chooseImage({count:u.notli?u.count=9:0==t.upload_after_list.length?u.count:u.count-t.upload_after_list.length,sizeType:""==u.sizeType||void 0==u.sizeType||1==u.sizeType?["compressed"]:["original"],sourceType:""==u.sourceType||void 0==u.sourceType?["album","camera"]:"camera"==u.sourceType?["camera"]:"album"==u.sourceType?["album"]:["album","camera"],success:function(){var e=a(r.default.mark(function e(n){var i,a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(i=0,a=n.tempFiles.length;i<a;i++)n.tempFiles[i]["upload_percent"]=0,n.tempFiles[i]["path_server"]="",t.upload_picture_list.push(n.tempFiles[i]),t.upload_picture_list.length>u.count&&(t.upload_picture_list=t.upload_picture_list.slice(0,u.count));return e.next=3,v(t,n,u);case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()})},v=function(e,t,n){!n.notli&&n.count==e.upload_picture_list.length&&_(e,n),n.notli&&9==n.count&&_(e,n),e.upload_after_list=e.upload_after_list.concat(t.tempFilePaths).slice(0,n.count),e.upload_picture_list=e.upload_picture_list.slice(0,n.count)},m=function(t,n){e.previewImage({current:n.upload_after_list[t.currentTarget.dataset.index],urls:n.upload_after_list})},y=function(){var t=a(r.default.mark(function t(n,i){var u,a,s;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(u=[],a=0,s=i.upload_picture_list.length;a<s;a++)u.push(i.upload_picture_list[a].path);e.previewImage({current:u[n.currentTarget.dataset.idx],urls:u});case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n("543d")["default"])},"7d97":function(e,t,n){},"84b1":function(e,t,n){"use strict";var r=n("7d97"),i=n.n(r);i.a},a620:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},b0b0:function(e,t,n){"use strict";n.r(t);var r=n("05b1"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=i.a},deb6:function(e,t,n){"use strict";n.r(t);var r=n("a620"),i=n("b0b0");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("84b1");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"2c7d73f8",null);t["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sunui-upimg/sunui-upimg-alioos-create-component',
    {
        'components/sunui-upimg/sunui-upimg-alioos-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("deb6"))
        })
    },
    [['components/sunui-upimg/sunui-upimg-alioos-create-component']]
]);                
