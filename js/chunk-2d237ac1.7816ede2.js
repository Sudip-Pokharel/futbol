(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237ac1"],{fbb1:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Highlights")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container highlight-container"},[i("h2",{staticClass:"title title__large"},[t._v("Latest football highlights")]),i("ul",{key:"all-highlight-list"+t.unique_key,staticClass:"highlights-list"},t._l(t.highlights,(function(e,l){return i("fragment",{key:"video"+l},[i("li",{staticClass:"highlights-list__item"},[i("router-link",{attrs:{to:{name:"HighlightVideo",params:{id:e.id}}}},[i("figure",[i("ImageItem",{attrs:{source:e.thumbnail,alternate:e.title}}),i("figcaption",{staticClass:"content"},[i("h3",{staticClass:"title title__small"},[t._v(t._s(e.title))]),i("p",{staticClass:"paragraph"},[t._v(t._s(e.competition.name))])])],1)])],1)])})),1)])},n=[],r=i("5530"),c=i("2f62"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"thumbnail loading"},[i("img",{attrs:{"data-url":t.source,alt:t.alternate}})])},o=[],u={name:"ImageItem",props:{source:{type:String,required:!0},alternate:{type:String}}},g=u,m=i("2877"),d=Object(m["a"])(g,h,o,!1,null,null,null),p=d.exports,_={name:"Highlights",data:function(){return{unique_key:0}},watch:{highlights:function(){this.unique_key+=1}},methods:{},components:{ImageItem:p},computed:Object(r["a"])({},Object(c["c"])({highlights:"highlight/HIGHLIGHTS"}))},f=_,v=Object(m["a"])(f,s,n,!1,null,null,null),b=v.exports,y={name:"AllHighlights",components:{Highlights:b},created:function(){document.querySelector("body").classList.remove("menu-open")}},k=y,C=Object(m["a"])(k,l,a,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d237ac1.7816ede2.js.map