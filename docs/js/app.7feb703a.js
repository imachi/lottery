(function(e){function t(t){for(var s,o,r=t[0],l=t[1],p=t[2],c=0,f=[];c<r.length;c++)o=r[c],n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,p||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"last-week"},[a("p",{staticClass:"last-week-text"},[e._v("#先週の担当者")]),a("span",{staticClass:"last-week-name"},[e._v(e._s(e.beforePeopleNames))])]),a("div",{staticClass:"choose-btn"},[a("button",{staticClass:"choose-btn-item",on:{click:e.addPeoplesName}},[e._v("指名する")]),a("i",{staticClass:"far fa-hand-point-left click-icon faa-horizontal animated"})]),a("div",{staticClass:"staff-wrap"},[a("p",{staticClass:"secretary"},[e._v("書記：\n      "),a("transition",{attrs:{name:"fade"}},[e.syoki?a("span",{staticClass:"secretary-text bkg-line"},[e._v(e._s(e.syoki))]):e._e()])],1),a("p",{staticClass:"mc"},[e._v("司会：\n      "),a("transition",{attrs:{name:"fade"}},[e.shikai?a("span",{staticClass:"mc-text bkg-line"},[e._v(e._s(e.shikai))]):e._e()])],1)]),a("div",{staticClass:"message"},[e._v(e._s(e.msg))]),a("form",{staticClass:"participant",on:{submit:function(t){return t.preventDefault(),e.addName(t)}}},[a("label",[e._v("参加者: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPeoplesName,expression:"inputPeoplesName"}],staticClass:"input-name",attrs:{type:"text"},domProps:{value:e.inputPeoplesName},on:{input:function(t){t.target.composing||(e.inputPeoplesName=t.target.value)}}})]),a("div",{staticClass:"participant-wrap"},e._l(e.peoples,function(t,s){return a("span",{key:s,staticClass:"output-name"},[e._v("\n      "+e._s(t.name)+"\n      "),a("button",{staticClass:"name-deleate",on:{click:function(a){return e.deleateName(t.name)}}},[a("i",{staticClass:"far fa-window-close"})])])}),0)])},i=[],o=a("f499"),r=a.n(o),l=(a("6762"),a("2fdb"),a("7f7f"),{name:"app",data:function(){return{peoples:[],lastWeekPeoples:[],writeLastWeekPeoples:[],syoki:"",shikai:"",msg:"",beforePeopleNames:"",inputPeoplesName:""}},created:function(){var e=localStorage.getItem("peoples"),t=localStorage.getItem("lastweekName");e&&(this.peoples=JSON.parse(e)),t&&(this.lastWeekPeoples=JSON.parse(t))},computed:{filterAry:function(){var e=this;return this.peoples.filter(function(t){var a=e.lastWeekPeoples.map(function(e){return e.name});return!a.includes(t.name)})},shufflePeoples:function(){return this.returnRandomNum(this.filterAry)}},mounted:function(){if(localStorage.getItem("lastweekWriteName")){var e=localStorage.getItem("lastweekWriteName");this.beforePeopleNames=e}},methods:{returnRandomNum:function(e){for(var t=e.length-1;t>=0;t--){var a=Math.floor(Math.random()*(t+1)),s=[e[a],e[t]];e[t]=s[0],e[a]=s[1]}return e},addPeoplesName:function(){if(!this.shufflePeoples.length)return!1;this.syoki=this.shufflePeoples[0].name+"さん",this.shikai=this.shufflePeoples[1].name+"さん",this.msg="よろしくおねがいしますm(..)m";var e=this.syoki.slice(0,-2),t=this.shikai.slice(0,-2);localStorage.setItem("lastweekName",r()([{name:e},{name:t}])),localStorage.setItem("lastweekWriteName",[this.syoki,this.shikai])},deleateName:function(e){this.peoples=this.peoples.filter(function(t){return t.name!==e}),localStorage.setItem("peoples",r()(this.peoples))},addName:function(){this.peoples.push({name:this.inputPeoplesName}),localStorage.setItem("peoples",r()(this.peoples)),this.inputPeoplesName=""}}}),p=l,u=(a("f29d"),a("2877")),c=Object(u["a"])(p,n,i,!1,null,"3366f2ca",null),f=c.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(f)}}).$mount("#app")},b4e8:function(e,t,a){},f29d:function(e,t,a){"use strict";var s=a("b4e8"),n=a.n(s);n.a}});
//# sourceMappingURL=app.7feb703a.js.map