(function(e){function t(t){for(var n,i,r=t[0],l=t[1],p=t[2],c=0,f=[];c<r.length;c++)i=r[c],o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,p||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"last-week"},[a("p",{staticClass:"last-week-text"},[e._v("#先週の担当者")]),a("span",{staticClass:"last-week-name"},[e._v(e._s(e.beforePeopleNames))])]),a("div",{staticClass:"choose-btn"},[a("button",{staticClass:"choose-btn-item",on:{click:function(t){return e.localStorageFind()}}},[e._v("指名する")]),a("i",{staticClass:"far fa-hand-point-left click-icon faa-horizontal animated"})]),a("div",{staticClass:"staff-wrap"},[a("p",{staticClass:"secretary"},[e._v("書記："),a("span",{staticClass:"secretary-text bkg-line"},[e._v(e._s(e.syoki))])]),a("p",{staticClass:"mc"},[e._v("司会："),a("span",{staticClass:"mc-text bkg-line"},[e._v(e._s(e.shikai))])])]),a("div",{staticClass:"message"},[e._v(e._s(e.msg))]),a("form",{staticClass:"participant",on:{submit:function(t){return t.preventDefault(),e.addName(t)}}},[a("label",[e._v("参加者: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPeoplesName,expression:"inputPeoplesName"}],staticClass:"input-name",attrs:{type:"text"},domProps:{value:e.inputPeoplesName},on:{input:function(t){t.target.composing||(e.inputPeoplesName=t.target.value)}}})]),a("div",{staticClass:"participant-wrap"},e._l(e.peoplesObj,function(t,n){return a("span",{key:n,staticClass:"output-name"},[e._v(e._s(t.name)),a("button",{on:{click:function(a){return e.deleateName(t.name)}}},[e._v("×")])])}),0)])},s=[],i=a("f499"),r=a.n(i),l=(a("7f7f"),a("75fc")),p=(a("28a5"),[]),u={name:"app",data:function(){return{initialPeoples:p,peoplesObj:p,syoki:"",shikai:"",msg:"",beforePeoplesList:[],beforePeopleNames:"",inputPeoplesName:""}},mounted:function(){if(localStorage.getItem("name")){var e=localStorage.getItem("name"),t=e.split(",",2);this.beforePeopleNames=t.join(", "),this.peoplesObj=JSON.parse(localStorage.getItem("people"))}},methods:{returnRandomNum:function(e){for(var t=e.length-1;t>=0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}this.addPeopleName(e)},localStorageFind:function(){if(localStorage.getItem("name")){var e=localStorage.getItem("name"),t=e.split(",",2),a=[{name:t[0]},{name:t[1]}];this.sortLottery(a)}else this.allLottery()},allLottery:function(){this.returnRandomNum(this.peoplesObj)},sortLottery:function(e){var t,a=Object(l["a"])(this.peoplesObj);for(var n in e)t=a.filter(function(t){return t.name!==e[n].name}),a=t;this.returnRandomNum(t)},addPeopleName:function(e){this.syoki=e[0].name+"さん",this.shikai=e[1].name+"さん",this.msg="よろしくおねがいしますm(..)m",this.beforePeoplesList=[e[0].name+"さん",e[1].name+"さん"];var t=[];t.push(this.beforePeoplesList),localStorage.setItem("name",this.beforePeoplesList)},addName:function(){this.peoplesObj.push({name:this.inputPeoplesName}),localStorage.setItem("people",r()(this.peoplesObj)),this.inputPeoplesName=""},deleateName:function(e){this.peoplesObj=this.peoplesObj.filter(function(t){return t.name!==e}),localStorage.setItem("people",r()(this.peoplesObj))}}},c=u,f=(a("8f54"),a("2877")),m=Object(f["a"])(c,o,s,!1,null,"ff791baa",null),d=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")},"798f":function(e,t,a){},"8f54":function(e,t,a){"use strict";var n=a("798f"),o=a.n(n);o.a}});
//# sourceMappingURL=app.b35419a9.js.map