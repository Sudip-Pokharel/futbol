(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52dca002"],{"4eb8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("HighlightVideo",{attrs:{highlight:t.datas,others:t.otherData}})],1)},s=[],r=(i("4de4"),i("7db0"),i("a9e3"),i("5530")),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return Object.keys(t.highlight).length>0?i("div",{staticClass:"highlight"},[i("div",{staticClass:"container highlight-container"},[i("h2",{staticClass:"title title__medium"},[t._v(t._s(t.highlight.title))]),i("div",{staticClass:"video-box",domProps:{innerHTML:t._s(t.highlight.videos[0].embed)}})]),t.others.length?i("div",{staticClass:"highlight-other"},[i("div",{staticClass:"container"},[i("h3",{staticClass:"title title__medium"},[t._v("Other Highlights")]),i("ul",{staticClass:"others-list"},t._l(t.others,(function(e,a){return i("fragment",{key:"others-highlight"+a},[i("li",{staticClass:"others-list__item"},[i("router-link",{attrs:{to:{name:"HighlightVideo",params:{id:e.id}}}},[i("div",{staticClass:"thumbnail"},[i("img",{attrs:{src:e.thumbnail,alt:""}})]),i("div",{staticClass:"content"},[i("h3",{staticClass:"title title__small"},[t._v(t._s(e.title))]),i("p",{staticClass:"paragraph"},[t._v(t._s(e.competition.name))])])])],1)])})),1)])]):t._e()]):t._e()},h=[],o={name:"HighlightVideo",props:["highlight","others"],data:function(){return{}}},c=o,l=i("2877"),u=Object(l["a"])(c,n,h,!1,null,null,null),g=u.exports,d=i("2f62"),f={name:"Watch",data:function(){return{datas:{},otherData:[]}},watch:{"$route.params.id":function(){this.getDatas()}},methods:{getDatas:function(){var t=this,e=this.highlights.find((function(e){return e.id==Number(t.$route.params.id)}));if(e){this.datas=e;var i=0;this.otherData=[],this.highlights.filter((function(e){i<4&&e.id!=Number(t.$route.params.id)&&(i+=1,t.otherData.push(e))}))}else this.$router.push({name:"Highlight"})}},components:{HighlightVideo:g},computed:Object(r["a"])({},Object(d["c"])({highlights:"highlight/HIGHLIGHTS"})),created:function(){this.getDatas(),document.querySelector("body").classList.remove("menu-open")}},p=f,m=Object(l["a"])(p,a,s,!1,null,null,null);e["default"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),s=i("5899"),r="["+s+"]",n=RegExp("^"+r+r+"*"),h=RegExp(r+r+"*$"),o=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(n,"")),2&t&&(i=i.replace(h,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var a=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var r,n;return s&&"function"==typeof(r=e.constructor)&&r!==i&&a(n=r.prototype)&&n!==i.prototype&&s(t,n),t}},a9e3:function(t,e,i){"use strict";var a=i("83ab"),s=i("da84"),r=i("94ca"),n=i("6eeb"),h=i("5135"),o=i("c6b6"),c=i("7156"),l=i("c04e"),u=i("d039"),g=i("7c73"),d=i("241c").f,f=i("06cf").f,p=i("9bf2").f,m=i("58a8").trim,_="Number",v=s[_],b=v.prototype,I=o(g(b))==_,N=function(t){var e,i,a,s,r,n,h,o,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=m(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+c}for(r=c.slice(2),n=r.length,h=0;h<n;h++)if(o=r.charCodeAt(h),o<48||o>s)return NaN;return parseInt(r,a)}return+c};if(r(_,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var C,E=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof E&&(I?u((function(){b.valueOf.call(i)})):o(i)!=_)?c(new v(N(e)),i,E):N(e)},A=a?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;A.length>y;y++)h(v,C=A[y])&&!h(E,C)&&p(E,C,f(v,C));E.prototype=b,b.constructor=E,n(s,_,E)}}}]);
//# sourceMappingURL=chunk-52dca002.fee34684.js.map