(this.webpackJsonpwaldo=this.webpackJsonpwaldo||[]).push([[0],{11:function(e,t,r){e.exports={list:"list_list__21g88",li:"list_li__1JHFr",input:"list_input__1wnaO"}},21:function(e,t,r){e.exports={wrapper:"scoreBoard_wrapper__1SqZq"}},26:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(17),c=r.n(a),i=(r(26),r(8)),o=r(14),s=r.n(o),l=r(18),u=r(6),d=(r(35),r.p+"static/media/image2.6fc61e4f.jpeg"),m=r.p+"static/media/image5.64b04029.jpeg",p=r.p+"static/media/image6.0f3abf15.jpeg";function h(e,t){u.a.firestore().collection("images").doc(e).set(t)}function g(){return(g=Object(l.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.firestore().collection("timers").doc(t).get();case 2:return r=e.sent,e.abrupt("return",r.exists?r.data():console.log("error"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.initializeApp({apiKey:"AIzaSyCDdjsr3F6WO5DWqkRnONMN59AZxn_m8WM",authDomain:"waldo-39119.firebaseapp.com",projectId:"waldo-39119",storageBucket:"waldo-39119.appspot.com",messagingSenderId:"304422655857",appId:"1:304422655857:web:8bf691db487958d7a788d0"}),h("image1",{name:"image1",src:"https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg",char:[{name:"Waldo",coord:[968,37]},{name:"Oldlaw",coord:[59,540]}]}),h("image2",{name:"image2",src:d,char:[{name:"Waldo",coord:[518,563]},{name:"Oldlaw",coord:[709,709]},{name:"Wizard Whitebard",coord:[789,581]}]}),h("image3",{name:"image3",src:"https://4.bp.blogspot.com/-NjohvYgHUQU/Ttcs_ommPRI/AAAAAAAABA0/wm6M6HxbI28/s1600/Play+Wheres+Waldo+Online+Puzzle+Game+Department+Store+Shopping+Mall.jpg",char:[{name:"Waldo",coord:[505,137]},{name:"Oldlaw",coord:[235,554]},{name:"Wenda",coord:[353,554]}]}),h("image4",{name:"image4",src:"https://4.bp.blogspot.com/-H9JDgPrgsfc/TtcrDPO5vvI/AAAAAAAABAc/1roVH5Ni83Y/s1600/Play+Wheres+Waldo+Online+Puzzle+Game+Medieval+Gluttons.jpg",char:[{name:"Waldo",coord:[466,250]},{name:"Wizard Whitebard",coord:[1020,652]}]}),h("image5",{name:"image5",src:m,char:[{name:"Oldlaw",coord:[449,72]},{name:"Wizard Whitebard",coord:[1147,184]},{name:"Wenda",coord:[705,629]}]}),h("image6",{name:"image1",src:p,char:[{name:"Waldo",coord:[201,656]},{name:"Wizard Whitebard",coord:[347,106]},{name:"Wenda",coord:[908,591]}]});var f=r(19),j=r(20),b=(r(32),r(1));function x(){return Object(b.jsx)("header",{style:{backgroundColor:"#F71735",height:"100px",width:"100%",display:"flex",alignItems:"center"},children:Object(b.jsx)("h1",{style:{color:"rgb(220,250,250)",margin:"0",marginLeft:"20px",fontSize:"46px"},children:"Where is Waldo? "})})}function O(e){var t=e.onClick,r=e.show;return Object(b.jsx)("div",{className:"circle",onClick:t,style:{display:r?"none":"flex"},children:Object(b.jsx)("div",{className:"playIcon"})})}function v(e){var t=e.image,r=e.onClick;return Object(b.jsx)("img",{src:t.src,width:"1000px",alt:"Find Waldo.",onClick:r})}function y(e){var t=e.coord;return Object(b.jsx)("div",{style:{top:t[1]-25+"px",left:t[0]-15+"px",display:t.length?"flex":"none",position:"absolute",zIndex:"1000",width:"30px",height:"50px",border:"1px solid black",backgroundColor:"rgba(240,240,240,0.4)"}})}var w=r(11),I=r.n(w),W=function(e){return function(t){var r=t+e/2,n=function(e){return e<=0?0:e};return[n(t-e/2),n(r)]}};function A(e){var t=e.coord,r=e.setCoord,n=e.char,a=e.dispatchImage,c=(e.timer,e.setTimer,e.isGameOver,e.currImage),i=function(){var e=c.char.filter((function(e){return function(e,t,r){var n=W(r[0]),a=W(r[1]),c={x:n(t[0]),y:a(t[1])},i=function(e,t){return t>e[0]&&t<e[1]};return i(c.x,e[0])&&i(c.y,e[1])}(e.coord,[t.layer[0],t.layer[1]],[30,50])}));return e.length?e[0]:null};return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{style:{display:t.page.length?"flex":"none",left:t.page[0]+15+"px",top:t.page[1]-37+"px"},className:I.a.list,children:n.map((function(e){return Object(b.jsx)("li",{className:I.a.li,onClick:function(n){return function(e,n){if(e.stopPropagation(),i()){if(i().name===n.name){var c=Object.assign({},i(),{pageCoord:t.page});a({type:"char found",charFound:c}),r((function(e){return{page:[],layer:[]}}))}}else r((function(e){return{page:[],layer:[]}}))}(n,e)},children:Object(b.jsx)("input",{className:I.a.input,type:"button",value:e.name})},n+e.name)}))})})}function k(e){var t=e.coord;return Object(b.jsx)("div",{style:{left:t[0]-30+"px",top:t[1]-30+"px",position:"absolute",zIndex:"1000",margin:"0",width:"50px",height:"50px",border:"5px solid red",borderRadius:"50%",background:"transparent"}})}function C(e){var t=e.currImage,r=e.isGameOver,a=e.charFound,c=e.char,o=e.dispatchImage,s=e.setTimer,l=e.timer,u=e.startTimer,d=Object(n.useState)({page:[],layer:[]}),m=Object(i.a)(d,2),p=m[0],h=m[1];return Object(b.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(b.jsx)(y,{coord:p.page}),Object(b.jsx)(A,{coord:p,setCoord:h,setTimer:s,isGameOver:r,timer:l,currImage:t,dispatchImage:o,char:c,charFound:a}),a.length?Object(b.jsx)("div",{children:a.map((function(e){return Object(b.jsx)(k,{coord:e.pageCoord},e.pageCoord)}))}):null,Object(b.jsxs)("div",{className:"containPlay",children:[Object(b.jsx)(v,{image:t,onClick:l?function(e){return r()?alert("You already found everybody! Congrats"):h((function(t){return{page:[e.pageX,e.pageY],layer:[e.nativeEvent.layerX,e.nativeEvent.layerY]}}))}:null}),Object(b.jsx)(O,{onClick:u,show:!!l})]})]})}function F(e){var t=e.images,r=e.handleNewImage;return Object(b.jsx)("div",{style:{display:"flex",width:"1300px",flexWrap:"nowrap",alignItems:"center",justifyContent:"left",margin:"auto",overflowX:"auto"},children:t.map((function(e){return Object(b.jsx)("img",{onClick:function(){return r(e)},style:{objectFit:"cover",width:"200px",height:"130px",margin:"20px"},src:e.src,alt:"preview"},e.src)}))})}var N=r(21),S=r.n(N);function T(e){var t=e.show,r=e.handleNewScore,n=e.time;return Object(b.jsxs)("form",{style:{margin:"10px",display:t?"block":"none"},children:[Object(b.jsx)("h3",{children:" Add your time:"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("input",{style:{position:"relative",left:"10px"},type:"text",required:!0}),Object(b.jsx)("button",{style:{position:"relative",left:"20px"},type:"button",onClick:r,children:"Submit"}),Object(b.jsx)("h1",{children:n})]})]})}function _(){return Object(b.jsxs)("h1",{style:{paddingTop:"10px",width:"100%",textAlign:"center",backgroundColor:"rgb(247, 23, 53)",margin:0,color:"white",height:"50px"},children:[" ","ScoreBoard"]})}function z(e){var t=e.scores;return Object(b.jsxs)("div",{style:{display:t.length?"flex":"none",flexWrap:"noWrap",justifyContent:"center",width:"100%"},children:[Object(b.jsxs)("div",{style:{marginRight:"50px"},children:[Object(b.jsx)("h2",{style:{margin:0},children:" Place "}),Object(b.jsx)("ol",{style:{listStyle:"none",padding:0,textAlign:"center"},children:t.map((function(e,t){return Object(b.jsx)("li",{children:t+1+"."},t)}))})]}),Object(b.jsxs)("div",{style:{marginRight:"50px"},children:[Object(b.jsx)("h2",{style:{margin:0,textAlign:"center"},children:" Player "}),Object(b.jsx)("ol",{style:{listStyle:"none",padding:0,textAlign:"center"},children:t.map((function(e,t){return Object(b.jsx)("li",{children:e.name},t)}))})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{style:{margin:0},children:" Time "}),Object(b.jsx)("ol",{style:{listStyle:"none",padding:0,textAlign:"center"},children:t.map((function(e,t){return Object(b.jsx)("li",{children:e.time},t)}))})]})]})}function P(e){var t=e.time,r=e.setTime,a=e.dispatchImage,c=e.setTimer,o=e.currImage,s=Object(n.useState)([]),l=Object(i.a)(s,2),d=l[0],m=l[1],p=Object(n.useState)(!0),h=Object(i.a)(p,2),g=h[0],f=h[1],j=Object(n.useRef)(null),x=function(){var e,t=[];(e=o,u.a.firestore().collection(e+"scores").orderBy("time","asc").limit(15).get()).then((function(e){e.forEach((function(e){var r={name:e.data().name,time:e.data().time};t.push(r)})),m((function(e){return t})),f((function(e){return!1})),r((function(e){return"submited"}))}))},O=Object(n.useCallback)((function(){d.length&&(f((function(e){return!0})),m((function(e){return[]})),a({type:"reset"}),c((function(e){return 0})))}),[a,d,c]);return Object(n.useEffect)((function(){function e(e){j.current&&!j.current.contains(e.target)&&t&&O()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[j,O,t]),Object(b.jsx)("div",{className:S.a.wrapper,children:Object(b.jsxs)("div",{ref:j,style:{width:"340px",backgroundColor:"white"},children:[Object(b.jsx)(_,{}),Object(b.jsx)(T,{show:g,handleNewScore:function(e){if(""!==e.target.form[0].value){var r=e.target.form[0].value;!function(e,t,r){u.a.firestore().collection(e+"scores").doc().set({timestamp:u.a.firestore.FieldValue.serverTimestamp(),time:r,name:t})}(o,r,t),x()}else x()},time:t}),Object(b.jsx)(z,{scores:d})]})})}var E={images:[],currImage:null,char:[],charFound:[]};function G(e,t){var r=e.images,n=e.currImage,a=e.char,c=e.charFound;if("default image"===t.type)return{images:r,currImage:r[0],char:r[0].char,charFound:c};if("add images"===t.type)return{images:t.images,currImage:n,char:a,charFound:[]};if("select image"===t.type)return{images:r,currImage:t.image,char:t.image.char,charFound:[]};if("char found"===t.type)return{images:r,currImage:n,char:a.filter((function(e){return e.name!==t.charFound.name})),charFound:c.concat(t.charFound)};if("reset"===t.type)return{images:r,currImage:r[0],char:r[0].char,charFound:[]};throw new Error}function B(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(null),o=Object(i.a)(c,2),s=o[0],l=o[1],d=Object(n.useReducer)(G,E),m=Object(i.a)(d,2),p=m[0],h=m[1],O=p.images,v=p.currImage,y=p.char,w=p.charFound,I=Object(n.useCallback)((function(){return 0===y.length&&!!w.length}),[w,y]);Object(n.useEffect)((function(){var e=[];u.a.firestore().collection("images").get().then((function(t){t.forEach((function(t){return e.push(t.data())})),h({type:"add images",images:j.cloneDeep(e)}),h({type:"default image"})})).catch((function(e){return console.log(e)}))}),[h]),Object(n.useEffect)((function(){var e;return I()&&(e=r,u.a.firestore().collection("timers").doc(e).update({stop:u.a.firestore.FieldValue.serverTimestamp()}).catch((function(e){return console.log("Failed to update timer")}))).then((function(e){return function(e){return g.apply(this,arguments)}(r).then((function(e){var t=e.stop-e.start;l(Math.round(100*t)/100)}))})),function(){return I()?function(e){u.a.firestore().collection("timers").doc(e).delete()}(r):null}}),[I,r]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)(F,{images:O,handleNewImage:function(e){h({type:"select image",image:e}),a((function(e){return 0}))}}),Object(b.jsxs)("div",{className:"playWrap",children:[I()&&s?Object(b.jsx)(P,{time:s,setTime:l,setTimer:a,dispatchImage:h,currImage:v.name}):null,v?Object(b.jsx)(C,{isGameOver:I,setTimer:a,timer:r,startTimer:function(e){e.stopPropagation();var t=Object(f.v4)();a((function(e){return t})),function(e){u.a.firestore().collection("timers").doc(e).set({start:u.a.firestore.FieldValue.serverTimestamp()}).catch((function(e){return console.log("Failed to set timer")}))}(t)},dispatchImage:h,char:y,charFound:w,currImage:v}):null]})]})}c.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4d8a9be3.chunk.js.map