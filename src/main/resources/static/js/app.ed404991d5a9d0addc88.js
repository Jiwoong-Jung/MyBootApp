webpackJsonp([1],{NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),i=o("mtWM"),n={data:function(){return{id:0,title:"",userId:0,completed:!1}},methods:{get:function(){var t=[];i.a.get("http://localhost:4000/todo").then(function(e){t=e.data,console.log("dataCollection: ",t),t.forEach(function(t){document.querySelector(".print-data").innerHTML+="<li>id: "+t.id+" <br>title: "+t.title+" <br> content: "+t.completed+"</li>"})}).catch(function(t){return console.log(t)})},submit:function(){var t={id:this.id,userId:this.userId,title:this.title,completed:this.completed};i.a.post("http://localhost:4000/todo",t).then(function(t){console.log("res: ",t)}).catch(function(t){console.log("error: ",t)})},put:function(){var t={id:this.id,userId:this.userId,title:this.title,completed:this.completed};i.a.put("http://localhost:4000/todo/"+this.id,t).then(function(t){console.log("res: ",t)}).catch(function(t){console.log("error: ",t)})},del:function(){i.a.delete("http://localhost:4000/todo/"+this.id).then(function(t){console.log("res: ",t)}).catch(function(t){console.log("error: ",t)})}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"box"},[t._v("아이디")]),t._v(" "),o("div",{staticClass:"box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{placeholder:"아이디를 입력"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"box"},[t._v("제목")]),t._v(" "),o("div",{staticClass:"box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"제목을 입력"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"box"},[t._v("사용자 아이디")]),t._v(" "),o("div",{staticClass:"box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{placeholder:"사용자 아이디를 입력"},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"box"},[t._v("성공여부")]),t._v(" "),o("div",{staticClass:"box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"completed"}],attrs:{placeholder:"성공여부를 입력"},domProps:{value:t.completed},on:{input:function(e){e.target.composing||(t.completed=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"box"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.get}},[t._v("GET")])]),t._v(" "),o("div",{staticClass:"box"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.submit}},[t._v("POST")])]),t._v(" "),o("div",{staticClass:"box"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.put}},[t._v("PUT")])]),t._v(" "),o("div",{staticClass:"box"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.del}},[t._v("DELETE")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"print-data"},[e("ul")])}]};var l={components:{JsonCrud:o("VU/8")(n,a,!1,function(t){o("ko2x")},null,null).exports}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("JsonCrud")},staticRenderFns:[]};var r=o("VU/8")(l,c,!1,function(t){o("nZv6")},null,null).exports;new s.a({el:"#app",render:function(t){return t(r)}})},ko2x:function(t,e){},nZv6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ed404991d5a9d0addc88.js.map