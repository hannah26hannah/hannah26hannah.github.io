(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[0],{556:function(e,t,n){var a={"./testPost2.md":[559,4],"./testpost.md":[560,5],"./webpack_1.md":[561,6]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=556,e.exports=i},557:function(e,t,n){},558:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(37),o=n.n(r),c=n(596),l=n(41),s=n(571),d=n(572),j=n(573),b=n(574),u=n(2),m=[{name:"Github",a11yTitle:"Click to see my Github Profile",href:"https://github.com/hannah26hannah",icon:Object(u.jsx)(s.a,{color:"black"})},{name:"LinkedIn",a11yTitle:"Follow me on LinkedIn",href:"https://www.linkedin.com/in/jeongwon-yoo/",icon:Object(u.jsx)(d.a,{color:"black"})},{name:"Mail",a11yTitle:"Send me an Email If you need any questions or invitation!",href:"mailto:jeongwon.y.h@gmail.com",icon:Object(u.jsx)(j.a,{color:"black"})},{name:"Blog",a11yTitle:"I'm making posts about technologies I learnt on Tistory Blog, too",href:"https://uiyoji-journal.tistory.com/",icon:Object(u.jsx)(b.a,{color:"black"})}],h=n(8),p=n(9),g=n(11),f=n(10),x=n(170),O=n(103),k=n(584),y=n(585),v=n.p+"static/media/logo.f891871b.svg",w=n.p+"static/media/logo_m.16c6d654.svg",C=n(12),S=n(25),T=n(597),z=n(578),I=n(598),P=n(593),A=n(599),L=n(581),D=n(582),N=n(583),F=function(e){return Object(u.jsx)(l.a,Object(O.a)({tag:"header",direction:"row",align:"center",justify:"between",pad:{left:"medium",right:"medium",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},_=function(e){return Object(u.jsxs)(T.a,{level:"3",margin:"none",children:["xsmall"===e.size&&Object(u.jsx)("img",{src:w,className:"mobile-App-logo",alt:"logo"}),["small","medium","large"].includes(e.size)&&Object(u.jsx)("img",{src:v,className:"App-logo",alt:"logo"})]})},W=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})},M=function(e){return Object(u.jsxs)(z.a,{className:"commonAlign"+("header"===e.location?" headerAlign":" sideAlign"),children:["/"===Object(C.e)().pathname&&Object(u.jsxs)(l.a,{className:"subAlign",children:[Object(u.jsx)(I.a,{className:"anchorLink",href:"#About",label:"About",onClick:function(){e.sendDataToParent(),W("#About")}}),Object(u.jsx)(I.a,{className:"anchorLink",href:"#Portfolio",label:"Portfolio",onClick:function(){e.sendDataToParent(),W("#Portfolio")}}),Object(u.jsx)(I.a,{className:"anchorLink",href:"#Contact",label:"Contact",onClick:function(){e.sendDataToParent(),W("#Contact")}})]}),"/"!==Object(C.e)().pathname&&Object(u.jsx)(l.a,{className:"subAlign",children:Object(u.jsx)(S.b,{className:"routeLink",to:"/",onClick:function(){return e.sendDataToParent()},children:"\ud83d\udc48 Take me to Home"})}),Object(u.jsxs)(l.a,{className:"subAlign",children:[Object(u.jsx)(I.a,{className:"resumeLink",label:"Resume",href:"https://www.notion.so/Jeongwon-Yoo-72675253e1284032a53a8749a383d31a",color:"moon",target:"_blank",onClick:function(){return e.sendDataToParent()}}),Object(u.jsx)(S.b,{className:"routeLink",to:"blog",onClick:function(){return e.sendDataToParent()},children:"Blog"})]})]})},B=function(e){var t=e.label,n=e.href,a=Object(x.a)(e,["label","href"]);return Object(u.jsx)(l.a,{pad:"small",children:Object(u.jsx)(P.a,Object(O.a)({alignSelf:"start",plain:!0,label:t,href:n},a))})},H=function(e){return Object(u.jsx)(l.a,{align:"center",gap:"small",direction:"row",margin:{bottom:"large"},children:Object(u.jsxs)(A.a,{alignSelf:"start",align:"center",anchor:"top-right",children:[["xsmall"].includes(e.size)&&Object(u.jsx)("img",{src:w,className:"mobile-App-logo",alt:"logo"}),["small","medium","large"].includes(e.size)&&Object(u.jsx)("img",{src:v,className:"App-logo",alt:"logo"})]})})},J=function(e){return Object(u.jsx)(z.a,{responsive:!1,direction:"row",alignSelf:"end",children:e.channel.map((function(e){return Object(u.jsx)(B,{icon:e.icon,href:e.href,a11yTitle:e.a11yTitle,color:"black"},e.name)}))})},R=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).sendDataToParent=function(){a.setState({showSidebar:!a.state.showSidebar})},a.state={showSidebar:!1,channel:e.channel},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(L.a.Consumer,{children:function(t){return Object(u.jsxs)(l.a,{fill:!0,children:[Object(u.jsxs)(F,{children:[Object(u.jsx)(S.b,{to:"/",children:Object(u.jsx)(_,{size:t})}),["large"].includes(t)&&Object(u.jsx)(M,{location:"header",size:t})]}),["xsmall","small","medium"].includes(t)&&Object(u.jsx)(D.a,{direction:"horizontal",open:e.state.showSidebar,style:{height:"100vh"},children:Object(u.jsxs)(N.a,{responsive:!1,width:"medium",background:"orange",header:Object(u.jsx)(H,{size:t}),footer:Object(u.jsx)(J,{channel:e.state.channel}),pad:{left:"small",right:"medium",vertical:"small"},elevation:"small",style:{position:"absolute",top:"0px",zIndex:"3"},children:[Object(u.jsx)(P.a,{plain:!0,primary:!0,icon:Object(u.jsx)(k.a,{}),onClick:function(){return e.setState({showSidebar:!e.state.showSidebar})},style:{display:"block",position:"absolute",top:"17px",right:"5%",zIndex:"3",background:"#57816D",margin:"12px"},size:"small"}),Object(u.jsx)(M,{sendDataToParent:e.sendDataToParent})]})}),["xsmall","small","medium"].includes(t)&&Object(u.jsx)(P.a,{icon:Object(u.jsx)(y.a,{}),onClick:function(){e.setState({showSidebar:!e.state.showSidebar})},style:{display:"block",position:"absolute",top:"15px",right:"5%",zIndex:"2"}})]})}})}}]),n}(a.Component),G=n(600),V=n(590),E=n.p+"static/media/memoji.cc22df5a.jpg",Y=n.p+"static/media/memoji_2.268ebaed.jpg",K=function(){return Object(u.jsxs)(T.a,{margin:"none",children:["Hi! I'm",Object(u.jsx)("br",{}),Object(u.jsx)(G.a,{size:"xxxlarge",color:"orange",margin:"none",children:"Jeongwon \ud83d\ude4c"}),Object(u.jsx)("br",{}),"A Junior Developer"]})},q=function(e){return Object(u.jsxs)(T.a,{textAlign:"center",children:[e.title?e.title:"Portfolio",Object(u.jsx)("br",{}),Object(u.jsx)(G.a,{size:"xxlarge",color:"orange",children:e.desc})]})},U=function(){return Object(u.jsxs)(G.a,{size:"large",color:"dark-2",children:["Hi! I'm Jeongwon, a junior developer seeking for the job opportunity based in Seoul, South Korea. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"I enjoy consuming almost all kinds of media contents, but love to think of human experience and technology behind them more. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"I hope I can act as a bridge between them with my skill and insight."]})},Q=[{order:1,titleComponent:Object(u.jsx)(K,{}),image:E,imageAlt:"main profile",contents:"who loves to learn modern technologies to solve problems in real world. Welcome to my portfolio web site!"},{order:2,title:"About Me",link:"About",image:Y,imageAlt:"sub profile",contentsComponent:Object(u.jsx)(U,{})},{order:3,titleComponent:Object(u.jsx)(q,{desc:"Featured Works"}),link:"Portfolio",contents:"My goal as a developer is to make well-functioning web products as well as to give pleasant experience to users. Here are my main projects to achieve this goal:"},{order:4,titleComponent:Object(u.jsx)(q,{desc:"Side Projects"}),contents:"I made several side projects to learn various techniques as many as possible during training period."},{order:6,titleComponent:Object(u.jsx)(q,{title:"Contact",desc:"via these channels"}),link:"Contact",contents:"I'm ready do any valuable moments with you! Public resume is ready on Notion as well :)"}],Z=n(601),X=function(e){return Object(u.jsx)(Z.a,{data:e.channel,pad:"small",border:!1,direction:"column",style:{display:"flex",flexDirection:"column",alignItems:"start"},children:function(e){return Object(u.jsxs)(l.a,{direction:"row-responsive",flex:!0,gap:"medium",alignSelf:"center",size:"medium",align:"center",justify:"around",pad:"small",children:[Object(u.jsx)(I.a,{icon:e.icon,href:e.href,a11yTitle:e.a11yTitle,size:"small",style:{backgroundColor:"orange",width:"3rem",height:"3rem",borderRadius:"1rem",fontSize:"2rem"}},e.name),Object(u.jsx)(G.a,{weight:"normal",size:"medium",children:e.a11yTitle})]})}})},$=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={channel:e.channel},a}return Object(p.a)(n,[{key:"render",value:function(){return Object(u.jsx)(X,{channel:this.state.channel})}}]),n}(a.Component),ee=n.p+"static/media/up.2243d5a2.svg",te=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isVisible:!1,size:e.size},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.scrollY>0?this.setState({isVisible:!0}):this.setState({isVisible:!1})}},{key:"scrollToTop",value:function(){(document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isVisible;t.size;return Object(u.jsx)(l.a,{responsive:!0,a11yTitle:"Back to top",style:{transition:"all .25s ease-in-out",position:"fixed",bottom:"1rem",right:"1.5rem",display:"inline-flex",cursor:"pointer",width:"3rem",backgroundColor:"yello",height:"auto"},children:n&&Object(u.jsx)(l.a,{onClick:function(){return e.scrollToTop()},children:Object(u.jsx)("img",{src:ee,alt:"go to top"})})})}}]),n}(a.Component),ne=n(602),ae=n.p+"static/media/moon_mob_pad.0c069e25.png",ie=n.p+"static/media/koopkorea_b_m.9f453397.png",re=n.p+"static/media/portfolio_b_m.efe2fb0e.png",oe=n(586),ce=n(587),le=n(588),se="https://hannah26hannah.github.io/",de="https://github.com/hannah26hannah/",je="https://uiyoji-journal.tistory.com/tag/",be=[{title:"Tech Portfolio Blog",year:"2021",tags:["React.js","Grommet","Responsive","Markdown"],detail:"This project is mainly built with React.js. I used grommet, node-sass for styling and react router for navigating menu. I also chose markdown for managing blog posts.",images:[{order:1,alt:"browser window preview",src:re}],gif:{alt:"preview gif",src:""},links:[{title:"Demo",href:se,icon:Object(u.jsx)(oe.a,{color:"black"})},{title:"Work Log",href:"".concat(je,"techBlog"),icon:Object(u.jsx)(ce.a,{color:"black"})},{title:"Github Source Code",href:"".concat(de,"hannah26hannah.github.io"),icon:Object(u.jsx)(le.a,{color:"black"})}]},{title:"KoopKorea Online Store Front",year:"2020",tags:["Stencil CLI","jQuery","scss","Handlebar.js"],detail:"I re-developed some web components for online store, KoopKorea. I used BigCommerce-Stencil CLI emulator for devleopment, bundling and publishing.",images:[{order:1,alt:"browser window preview",src:ie}],gif:{alt:"preview gif",src:""},links:[{title:"Website",href:"https://koopkorea.nl/",icon:Object(u.jsx)(oe.a,{color:"black"})}]},{title:"Moon-todo",year:"2021",tags:["Vue.js","Tailwinds","TypeScript","Chart.js"],detail:"Moon-todo is a personal dashboard Web application. Calendar and Chart Report are offered based on simple to do feature. I used Vue.js, Vuex, TypeScript, Chart.js, Tailwinds CSS library, SCSS for this app.",images:[{order:1,alt:"preview image",src:ae}],gif:{alt:"preview gif",src:""},links:[{title:"Demo",href:"".concat(se,"vuejs-todolist-2.0"),icon:Object(u.jsx)(oe.a,{color:"black"})},{title:"Work Log",href:"".concat(je,"todolist"),icon:Object(u.jsx)(ce.a,{color:"black"})},{title:"Github Source Code",href:"".concat(de,"vuejs-todolist-2.0"),icon:Object(u.jsx)(le.a,{color:"black"})}]}],ue=function(e){return Object(u.jsx)(l.a,{direction:"row",style:{flexWrap:"wrap",display:["xsmall","small"].includes(e.size)?"block":"flex"},align:"center",gap:"small",pad:"xsmall",justify:"around",overflow:"auto",children:e.tags.map((function(e,t){return Object(u.jsx)(l.a,{margin:{top:"small",bottom:"small"},children:Object(u.jsx)(P.a,{color:"paper",primary:!0,label:e,hoverIndicator:"light-1"})},t)}))})},me=function(e){return Object(u.jsx)(l.a,{tag:"article",direction:"row",flex:!0,align:"center",margin:{top:"medium",bottom:"medium"},border:{side:"all",color:"dark-2"},round:!0,pad:"small",style:{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:e.images.map((function(e){return Object(u.jsx)(ne.a,{src:e.src,alt:e.alt,style:{flexShrink:"0",maxWidth:"100%",maxHeight:"100%",borderRadius:"12px"}},e.order)}))})},he=function(e){return Object(u.jsx)(l.a,{tag:"article",direction:"row",flex:!0,align:"center",margin:{top:"small",bottom:"small"},border:{side:"all",color:"dark-2"},round:!0,pad:"small",children:Object(u.jsx)(ne.a,{fit:"cover",src:e.gif.src,alt:e.gif.alt,style:{borderRadius:"12px"}})})},pe=function(e){return Object(u.jsx)(l.a,{pad:"small",children:e.links.map((function(e){return Object(u.jsx)(I.a,{icon:e.icon,href:e.href,target:"_blank",color:"black",label:e.title,margin:"xxsmall"},e.href)}))})},ge=function(e){return e.contents.map((function(t){return Object(u.jsxs)(l.a,{tag:"section",border:{side:"all",color:"light-4"},round:{size:"small"},pad:"large",elevation:"medium",gap:"xxsmall",margin:{top:"medium",bottom:"medium"},children:[Object(u.jsxs)(T.a,{level:1,textAlign:"start",style:{margin:0},children:[t.title," "]}),Object(u.jsx)(G.a,{size:"medium",margin:{top:"2rem",bottom:"2rem"},color:"dark-2",children:t.detail}),Object(u.jsx)(ue,{tags:t.tags,size:e.size}),Object(u.jsx)(me,{images:t.images}),""!==t.gif.src&&Object(u.jsx)(he,{gif:t.gif}),Object(u.jsx)(pe,{links:t.links})]},t.detail)}))},fe=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={size:e.size},a}return Object(p.a)(n,[{key:"render",value:function(){return Object(u.jsx)(ge,{contents:be,size:this.state.size})}}]),n}(a.Component),xe=n(102),Oe=n.p+"static/media/meditation_b.0c71c716.png",ke=n.p+"static/media/weather_b.8853223a.png",ye=n.p+"static/media/kakao_clone.e565fc53.png",ve="https://github.com/hannah26hannah/",we=[{title:"Meditation App",tags:"HTML5, CSS3, JavaScript, WebPack",detail:"Practice vanilla JavaScript & webpack system.",image:{alt:"preview image of meditation app",src:Oe},links:[{title:"Demo",href:"https://hannah-meditation-app.netlify.app/",icon:Object(u.jsx)(oe.a,{color:"black"})},{title:"Work Log",href:"",icon:Object(u.jsx)(ce.a,{color:"black"})},{title:"Github Source Code",href:"".concat(ve,"meditation-app"),icon:Object(u.jsx)(le.a,{color:"black"})}]},{title:"Weather App",tags:"HTML5, CSS3, JavaScript, Open API",detail:"Practice vanilla JavaScript & fetching Open API",image:{alt:"preview image of weather app",src:ke},links:[{title:"Demo",href:"https://hannah-weather-app.netlify.app",icon:Object(u.jsx)(oe.a,{color:"black"})},{title:"Work Log",href:"",icon:Object(u.jsx)(ce.a,{color:"black"})},{title:"Github Source Code",href:"".concat(ve,"weather-app"),icon:Object(u.jsx)(le.a,{color:"black"})}]},{title:"Kakao Talk Clone",tags:"HTML5, CSS3, JavaScript",detail:"Practice HTML5, CSS3 and JavaScript",image:{alt:"preview image of kakaotalk clone app",src:ye},links:[{title:"Demo",href:"".concat("https://hannah26hannah.github.io/","kakao/index.html"),icon:Object(u.jsx)(oe.a,{color:"black"})},{title:"Work Log",href:"",icon:Object(u.jsx)(ce.a,{color:"black"})},{title:"Github Source Code",href:"".concat(ve,"kakao"),icon:Object(u.jsx)(le.a,{color:"black"})}]}],Ce=n(595);function Se(e){0===window.pageYOffset&&window.scrollTo(0,e)}var Te=function(e){var t=Object(a.useState)(),n=Object(xe.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(),c=Object(xe.a)(o,2),s=c[0],d=c[1];return Object(u.jsxs)(l.a,{tag:"article",direction:"row",flex:!0,align:"center",margin:{top:"small",bottom:"small"},border:{side:"all",color:"dark-2"},round:!0,pad:"small",style:{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[Object(u.jsx)("img",{src:e.image.src,alt:e.image.alt,onClick:function(){d(window.pageYOffset),r(!0)},style:{flexShrink:"0",maxWidth:"100%",maxHeight:"100%",borderRadius:"12px"}}),i&&Object(u.jsx)(Ce.a,{style:{},onEsc:function(){r(!1),Se(s)},onClickOutside:function(){r(!1),Se(s)},margin:"xlarge",children:Object(u.jsxs)(l.a,{pad:"small",direction:"column",flex:!0,background:"paper",children:[Object(u.jsx)(ne.a,{fit:"contain",src:e.image.src,alt:e.image.alt,style:{borderRadius:"12px",paddingTop:"1rem"}}),Object(u.jsx)(l.a,{pad:"small",alignSelf:"end",children:Object(u.jsx)(P.a,{style:{width:"100%"},primary:!0,hoverIndicator:"light-1",color:"logoGreen",label:"close",onClick:function(e){r(!1),Se(s)}})})]})})]})},ze=function(e){var t=e.links.filter((function(e){return""!==e.href}));return Object(u.jsx)(l.a,{pad:"small",children:t.map((function(e){return Object(u.jsx)(I.a,{icon:e.icon,href:e.href,target:"_blank",color:"black",label:e.title,margin:"xxsmall"},e.href)}))})},Ie=function(e){return e.contents.map((function(e){return Object(u.jsxs)(l.a,{tag:"section",border:{side:"all",color:"light-4"},round:{size:"small"},pad:"large",elevation:"medium",gap:"xxsmall",margin:{top:"medium",bottom:"medium"},children:[Object(u.jsxs)(T.a,{level:3,textAlign:"start",style:{margin:0},children:[e.title," "]}),Object(u.jsx)(G.a,{size:"medium",margin:{top:"2rem",bottom:"2rem"},color:"dark-2",children:e.detail}),Object(u.jsx)(Te,{image:e.image}),Object(u.jsx)(G.a,{size:"medium",margin:{top:"1rem",bottom:"1rem"},color:"dark-2",children:e.tags}),Object(u.jsx)(ze,{links:e.links})]},e.detail)}))},Pe=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={size:e.size},a}return Object(p.a)(n,[{key:"render",value:function(){return Object(u.jsx)(l.a,{tag:"main",flex:!0,justify:"center",align:"center",pad:{left:"3vw"},children:Object(u.jsx)(Ie,{contents:we,size:this.state.size})})}}]),n}(a.Component),Ae=n(603),Le=n(604),De=function(e){return e.toISOString().slice(0,10)},Ne=[{title:"testpost",category:"til",filename:"testpost",date:De(new Date)},{title:"testPost2",category:"feature",filename:"testPost2",date:De(new Date)}],Fe=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={category:e.title,detail:e.detail},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.match,n=Ne.find((function(t){return t.category===e.state.category}));return Object(u.jsxs)(l.a,{tag:"main",children:[Object(u.jsx)(T.a,{level:3,children:this.state.detail}),Object(u.jsx)("ul",{className:"blogListWrap",children:Object(u.jsx)("li",{children:Object(u.jsxs)(S.b,{to:"".concat(t.url,"/").concat(this.state.category,"/").concat(n.title.split(" ").join("-")),className:"blogList",children:[Object(u.jsx)(G.a,{pad:{right:"small"},children:n.title}),Object(u.jsx)(G.a,{color:"light-4",children:n.date})]})})})]})}}]),n}(a.Component),_e=Object(C.f)(Fe),We=n(100),Me=n.n(We),Be=n(163),He=n(164),Je=n.n(He),Re=n(594),Ge=n(589),Ve=n(165),Ee=n.n(Ve)()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return e&&["span","a","img","image"].includes(e.name)},processNode:function(e){var t={},n="",a="",i="";return e.attribs&&e.attribs.style&&(t.color=function(e,t){var n=new RegExp("".concat(t,"\\s*:\\s*[#a-zA-Z0-9]+")).exec(e);if(n&&n.length>0){var a=n[0].split(":");if(a.length>1)return a[1]}return null}(e.attribs.style,"color")),e.attribs&&e.attribs.href&&(n=e.attribs.href),e.attribs&&e.attribs.src&&(a=e.attribs.src,i=e.attribs.alt),Object(u.jsx)(e.name,{style:t,href:n,src:a,alt:i})}}]});var Ye=function(e){var t=e.language,n=e.value;return Object(u.jsx)(Re.a,{language:t,style:Ge.a,children:n})},Ke=function(e){return Object(u.jsx)("span",{style:{background:"hsl(60, 1%, 97%)",color:"hsl(348, 100%, 61%)",fontSize:"0.85em",padding:"3px 3px",borderRadius:"2px",whiteSpace:"nowrap"},children:e.value})},qe=function(e){return Object(u.jsx)("div",{style:{borderLeft:"5px solid lightgray",paddingLeft:"1rem",margin:"1rem 0"},children:e.children})},Ue=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={markdown:null,filename:e.fn},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(Be.a)(Me.a.mark((function e(){var t,a,i,r;return Me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.filename,e.next=3,n(556)("./".concat(t,".md"));case 3:return a=e.sent,e.next=6,fetch(a.default);case 6:return i=e.sent,e.next=9,i.text();case 9:r=e.sent,this.setState({markdown:r});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Je.a,{source:this.state.markdown,skipHtml:!1,escapeHtml:!1,astPlugins:[Ee],renderers:{code:Ye,inlineCode:Ke,blockquote:qe}})})}}]),a}(a.Component),Qe=[{title:"testpost",category:"til",filename:"testpost"},{title:"testPost2",category:"feature",filename:"testPost2"}],Ze=function(e){return Object(u.jsx)(P.a,{primary:!0,label:"Back to List",style:{background:"lightblue",border:"none",width:"12rem"},onClick:function(){return e.history.goBack()}})},Xe=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.location.pathname,a=n.substring(n.lastIndexOf("/")+1,n.length),i=Qe.find((function(e){return e.filename===a}));return Object(u.jsxs)(l.a,{children:[i&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Ue,{fn:i.filename})}),(void 0===i||null==i)&&Object(u.jsx)("div",{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\uc74c"}),Object(u.jsx)(Ze,{history:t})]})}}]),n}(a.Component),$e=[{title:"TIL",body:Object(u.jsx)(_e,{title:"til",detail:"\ud83d\udd0d Today I Learned"})},{title:"Feature",body:Object(u.jsx)(_e,{title:"feature",detail:"\ud83d\udc40 Featured Article"})},{title:"Tistory",body:Object(u.jsx)(_e,{title:"tistory",detail:"\ud83d\udcdd Published From Tistory"}),state:"disabled"}],et=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={markdownContents:null},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.match;return Object(u.jsxs)(l.a,{pad:"large",children:[Object(u.jsxs)(l.a,{pad:"small",background:"paper",margin:{bottom:"large"},gap:"small",children:[Object(u.jsx)("span",{children:"Still Working On .. \ud83d\udea7"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Currently Tistory Blog is open. You can read some posts there!"}),Object(u.jsx)("br",{}),Object(u.jsx)(I.a,{label:"\ud83d\udc49 Go to Blog",href:"https://uiyoji-journal.tistory.com/",target:"blank"})]}),Object(u.jsx)(Ae.a,{alignControls:"start",children:$e.map((function(t){return Object(u.jsx)(Le.a,{title:t.title,margin:{bottom:"2rem"},disabled:"disabled"===t.state,children:Object(u.jsx)(C.a,{exact:!0,path:e.path,component:function(){return t.body}})},t.title)}))}),Object(u.jsx)(C.a,{path:"".concat(e.path,"/:id"),component:Xe})]})}}]),n}(a.Component),tt=Object(C.f)(et),nt=function(e){return e.contents.map((function(t){return Object(u.jsxs)(l.a,{tag:"section",id:t.link,direction:"row-responsive",flex:!0,justify:"around",align:"center",pad:{top:"large",bottom:"large"},margin:{top:"2rem",bottom:"3rem"},border:{side:"bottom",color:"dark-2"},children:[t.image&&Object(u.jsx)(l.a,{tag:"article",width:"small"===e.size?"small":"medium",gap:"small",pad:"small",border:{side:"between"},round:!0,alignSelf:"center",children:Object(u.jsx)("img",{src:t.image,alt:t.imageAlt,style:{width:"100%",height:"auto"}})}),Object(u.jsxs)(l.a,{tag:"article",width:"large",pad:"medium",children:[t.title&&Object(u.jsx)(T.a,{level:1,margin:"none",a11yTitle:t.title,textAlign:"center",children:t.title}),t.titleComponent,Object(u.jsx)(G.a,{size:"large",margin:{top:"2rem",bottom:"4rem"},color:"dark-2",children:t.contents}),t.contentsComponent,3===t.order&&Object(u.jsx)(fe,{size:e.size}),4===t.order&&Object(u.jsx)(Pe,{size:e.size}),6===t.order&&Object(u.jsx)($,{channel:e.channel})]})]},t.order)}))},at=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={contents:Q,channel:e.channel},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(L.a.Consumer,{children:function(t){return Object(u.jsxs)(V.a,{pad:"large",fill:"vertical",style:{height:"auto"},children:[Object(u.jsx)(C.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(nt,{contents:e.state.contents,channel:e.state.channel,size:t})}}),Object(u.jsx)(C.a,{path:"/blog",component:function(){return Object(u.jsx)(tt,{})}}),Object(u.jsx)(te,{size:t})]})}})}}]),n}(a.Component),it=n(591),rt=n(592),ot=function(e){return Object(u.jsx)(l.a,{direction:"row",gap:"xxsmall",justify:"center",children:e.channel.map((function(e){return Object(u.jsx)(I.a,{icon:e.icon,href:e.href,a11yTitle:e.a11yTitle,color:"black"},e.name)}))})},ct=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={channel:e.channel},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(L.a.Consumer,{children:function(t){return Object(u.jsx)(c.a,{theme:it.a,children:Object(u.jsx)(rt.a,{background:"orange",pad:"small",height:["xsmall","small"].includes(t)?"small":"xsmall",children:Object(u.jsxs)(l.a,{direction:"row-responsive",align:"center",justify:"around",flex:!0,children:[Object(u.jsxs)(G.a,{alignSelf:"center",color:"black",size:"small",children:["\xa9 ",(new Date).getFullYear()," Jeongwon Yoo. All rights reserved."]}),Object(u.jsx)(I.a,{href:"#",alignSelf:"center",children:Object(u.jsx)(l.a,{width:"small",children:Object(u.jsx)("img",{src:v,className:"App-logo",alt:"logo"})})}),Object(u.jsx)(ot,{channel:e.state.channel})]})})})}})}}]),n}(a.Component),lt={global:{colors:{orange:"#F39C12",moon:"#F1C40F",paper:"#F8EFBA",logoGreen:"#57816D"},font:{family:"Comfortaa",size:"18px",height:"20px"},breakpoints:{xsmall:{value:375}}}},st=function(){return Object(u.jsx)(at,{channel:m})};var dt=function(){return Object(u.jsxs)(c.a,{id:"container",theme:lt,children:[Object(u.jsx)(l.a,{children:Object(u.jsx)(R,{channel:m,theme:lt})}),Object(u.jsx)(st,{}),Object(u.jsx)(ct,{channel:m})]})},jt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,605)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};n(557);o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(S.a,{children:Object(u.jsx)(dt,{})})}),document.getElementById("root")),jt()}},[[558,1,2]]]);
//# sourceMappingURL=main.849d1a99.chunk.js.map