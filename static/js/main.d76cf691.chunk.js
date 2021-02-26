(this["webpackJsonpc-is-for-compiled"]=this["webpackJsonpc-is-for-compiled"]||[]).push([[0],{55:function(t,n,e){},67:function(t,n,e){"use strict";e.r(n);var i=e(1),r=e(0),a=e.n(r),o=e(22),c=e.n(o),d=(e(55),e(38),e(45)),s=e(8),l=e(4),h=e(72),p=e(73),u=e(5);function g(){var t=Object(l.a)(["\n\tfont-family: 'Droid Serif', serif;\n\tfont-size: 1.1em;\n\t\n\t.navbar { \n\t\tbox-shadow: 0 5px 20px -10px #000;\n\t\tpadding: 0.25rem 1rem 0.25rem 1rem;\n\t\ttop: 0;\n\t\twidth: 100vw;\n\t\tbackground: var(--nav-gradient);\n\t\tborder-bottom: 1px solid var(--blue-magenta);\n\t}\n\ta, .navbar-nav, .navbar-light .nav-link {\n\t\tcolor: var(--light-accent-blue);\n\t\t&:hover { color: white; }\n\t}\n\t.navbar-brand {\n\t\tfont-size: 1.4em;\n\t\tz-index: 9999;\n\t\tcolor: var(--light-accent-blue) !important;\n\t\tcursor: pointer;\n\t\t&:hover { color: white; }\n\t}\n\t.navbar-light .navbar-toggler {\n\t\tpadding: 0.125em;\n\t}\n\t.navbar-nav {\n\t\tmargin-top: 0.25em;\n\t\tmargin-bottom: 0.25em;\n\t}\n\t.nav-item {\n\t\tborder: 1px solid transparent;\n\t\ttext-align: center;\n\t\ttransition: all .6s ease;\n\t\t&:hover { \n\t\t\tbackground: var(--nav-gradient); \n\t\t\tborder: 1px solid var(--light-pastel-purple);\n\t\t\tborder-radius: 0.125em;\n\t\t\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; \n\t\t}\n\t}\n\t.nav-link {\n\t\tpadding-right: .8rem;\n    \tpadding-left: .8rem;\n\t}\n\t.nav-link.active {\n\t\tcolor: var(--light-accent-blue) !important;\n\t}\n\t\n"]);return g=function(){return t},t}var m=u.a.div(g()),b=function(){return Object(i.jsx)(m,{children:Object(i.jsxs)(h.a,{expand:"lg",children:[Object(i.jsxs)(h.a.Brand,{href:"https://elizabethharkins.github.io/c-is-for-compiled/#/",children:["L",Object(i.jsx)("span",{style:{color:"#ff00ff",fontFamily:"'Barriecito', cursive"},children:";"}),"z Harkins"]}),Object(i.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(i.jsxs)(p.a,{className:"ml-auto",children:[Object(i.jsx)(p.a.Item,{children:Object(i.jsx)(p.a.Link,{href:"https://www.linkedin.com/in/emharkins/",target:"_blank",children:"in"})}),Object(i.jsx)(p.a.Item,{children:Object(i.jsx)(p.a.Link,{href:"https://twitter.com/_lizzith",target:"_blank",children:"chirp"})}),Object(i.jsx)(p.a.Item,{children:Object(i.jsx)(p.a.Link,{href:"https://github.com/elizabethharkins",target:"_blank",children:"hub"})}),Object(i.jsx)(p.a.Item,{children:Object(i.jsx)(p.a.Link,{href:"https://elizabethharkins.github.io/c-is-for-compiled/#/about",children:"About"})}),Object(i.jsx)(p.a.Item,{children:Object(i.jsx)(p.a.Link,{href:"https://elizabethharkins.github.io/c-is-for-compiled/#/thecollection",children:"The Collection"})})]})})]})})},x=e(18),f=e(19),j=e(21),v=e(20);function w(){var t=Object(l.a)(['\n.fill-area  {\n\tbottom: -72px;\n\tbackground: var(--fill-area-bg-color);\n\tbox-shadow: inset 3px 3px 5px -1px #111;\n\tpointer-events: none;\n\tposition:fixed;\n\tpadding:0;\n\tmargin:0;\n\ttop:0;\n\tleft:0;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: all 1s ease; \n\tz-index: 2;\n}\n\nmain {\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: var(--main-area-bg-gradient);\n}\n\n.content {\n\tcolor: var(--light-accent-blue);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-flow: row wrap;\n\tfont-family: \'Droid Serif\', serif;\n\tfont-size: 1.3em;\n\tmargin: 0 auto;\n\theight: 200px;\n\twidth: 45%;\n\tz-index: 2;\n\ttext-align: center;\n\tmargin-top: 50px;\n}\n\n.slidecontainer {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tflex-flow: column;\n\tmargin: 10vh auto;\n\twidth: 80%;\n\tz-index: 2;\n}\n\nlabel {\n\tposition: static;\n\tz-index: 1;\n\tfont: 8rem "Monoton", sans-serif;\n\tcolor: purple;\n\tmargin: -5rem 0 2rem;\n}\nlabel::after {\n  content: "%";\n}\n\n.slider {\n\tposition: static;\n\tz-index: 2;\n\twidth: 50vw;\n\theight: 1rem;\n\tbackground-color: purple;\n\t-webkit-appearance: none; \n\tappearance: none;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 100vmax;\n\tbox-shadow: inset 3px 3px 5px -1px #000;\n}\n.slider::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 4vw;\n\theight: 4vw;\n\tbackground: var(--light-accent-blue);\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tbox-shadow: 5px 5px 8px -1px #000;\n\ttransition: box-shadow .3s ease-in-out;\n}\n.slider::-moz-range-thumb {\n\tappearance: none;\n\twidth: 4vw;\n\theight: 4vw;\n\tbackground: var(--light-accent-blue);\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tbox-shadow: 5px 5px 8px -1px #000;\n\ttransition: box-shadow .3s ease-in-out;\n}\n\n@media screen and (max-width: 52em) {\n\t.content {\n\t\theight: 100px;\n\t\twidth: 85%;\n\t}\n\n\tlabel {\n\t\tfont: 4rem "Monoton", sans-serif;\n\t\tmargin: -2rem 0 1rem;\n\t}\n\t.slider {\n\t\twidth: 85vw;\n\t}\n}\n\n@media screen and (max-width: 33.250em) {\n\t.content {\n\t\tmargin: 1em auto 0 auto;\n\t}\n\t.slidecontainer {\n\t\tmargin: 3vh auto;\n\t}\n\n\tlabel {\n\t\tmargin: 2rem 0 2rem;\n\t}\n\n\t.slider::-webkit-slider-thumb {\n\t\twidth: 8vw;\n\t\theight: 8vw;\n\t}\n}\n']);return w=function(){return t},t}var y=u.a.div(w()),O=function(t){Object(j.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(x.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={rangeValues:[0,25,50,75,100],currentRangeValue:0,storyValues:["Hi, my name is Liz -","Hi, Liz!","- and I'm a teacher-turned-developer who met code when I wanted to give my classroom community a modern upgrade.","I'd love to work for a great company in a frontend role, with a team that values learning, inclusion, and diversity -","- and where I can continue improving and contributing. Let's build better together!"],currentStoryValue:"Hi, my name is Liz -"},t.handleInputChange=function(n){t.setState({currentRangeValue:n.target.value,currentStoryValue:t.state.storyValues[n.target.value]});var e=document.getElementById("myStory"),i=e.value/e.max*100,r=document.querySelector("#range-value"),a=document.querySelector(".fill-area"),o="hue-rotate("+i+"deg)";r.textContent=e.value,r.style.filter=o,e.style.filter=o,a.style.left=i+"vw",a.style.width=100-i+"vw",a.style.filter=o},t}return Object(f.a)(e,[{key:"render",value:function(){var t=this.state,n=t.rangeValues,e=t.currentRangeValue,r=t.currentStoryValue;return Object(i.jsx)(y,{className:"page",children:Object(i.jsxs)("div",{className:"effects-container",children:[Object(i.jsx)("div",{className:"fill-area"}),Object(i.jsxs)("main",{children:[Object(i.jsx)("p",{className:"content",children:Object(i.jsx)("span",{id:"output",children:[r]})}),Object(i.jsxs)("div",{className:"slidecontainer",children:[Object(i.jsx)("label",{id:"range-value",htmlFor:"range",children:n[e]}),Object(i.jsx)("input",{onChange:this.handleInputChange,type:"range",name:"range",min:0,max:4,defaultValue:0,className:"slider",id:"myStory",step:1,list:"tick-list"}),Object(i.jsxs)("datalist",{id:"tick-list",children:[Object(i.jsx)("option",{children:"0"}),Object(i.jsx)("option",{children:"25"}),Object(i.jsx)("option",{children:"50"}),Object(i.jsx)("option",{children:"75"}),Object(i.jsx)("option",{children:"100"})]})]})]})]})})}}]),e}(a.a.Component);function k(){var t=Object(l.a)(["\n\tmargin: 0 auto;\n"]);return k=function(){return t},t}var S=u.a.div(k()),z=function(){return Object(i.jsx)(S,{children:Object(i.jsx)(O,{})})},C=e(47),N=function(t){Object(j.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(x.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={typeColor:{color:"var(--grey)"},typed:"",titleString:"Welcome, You've Got M- ... An About Page"},t}return Object(f.a)(e,[{key:"componentDidMount",value:function(){this.typeWord(this.props.inputStrings[0],Object(C.a)(this.props.inputStrings))}},{key:"typeWord",value:function(t,n){this.stringChecker(t,n)}},{key:"typeWriter",value:function(t,n){var e=this;0===t.length?(n=n.slice(1))[0]&&this.typeWord(n[0],n):this.setState((function(n,e){return{typed:n.typed.concat(t[0])}})),setTimeout((function(){return e.typeWriter(t.slice(1),n)}),200)}},{key:"stringChecker",value:function(t,n){t===this.state.titleString?this.setState({typeColor:{color:"var(--grey)"}}):this.setState({typeColor:{color:"var(--med-light-yellow"}}),this.typeWriter(t,n)}},{key:"render",value:function(){return Object(i.jsx)("div",{style:this.state.typeColor,children:this.state.typed})}}]),e}(a.a.Component);function I(){var t=Object(l.a)(["\n\talign-items: end;\n\tbackground: var(--dark-accent-grey);\n\tborder-right: 1px solid var(--light-grey);\n\tborder-bottom: 1px solid var(--light-grey);\n\tcolor: var(--grey);\n\tdisplay: grid;\n\tfont-family: 'Barriecito', cursive;\n\tfont-weight: normal;\n\tfont-size: calc(10px + 1.5vw);\n\tgrid-row: 1;\n\tgrid-column: 1 / 4;\n\tjustify-content: end;\n\tpadding-bottom: 20px;\n\tpadding-right: 40px;\n\tpadding-top: 1%;\n\tpadding-left: 1%;\n\ttext-transform: uppercase;\n\tz-index: 3;\n\n\t@media (max-width: 73em) {\n\t\tborder: 1px solid var(--light-grey);\n\t\toutline: 6px solid #121219;\n\n\t\tfont-size: calc(10px + 2vw);\n\t\tgrid-row: 1;\n\n\t\talign-items: center;\n    \tjustify-content: center;\n    \tpadding: 2%;\n    \ttext-align: center;\n\t}\n"]);return I=function(){return t},t}var L=u.a.div(I()),E=function(){return Object(i.jsx)(L,{children:Object(i.jsx)(N,{inputStrings:["Welcome, You've Got M- ... An About Page"]})})};function M(){var t=Object(l.a)(["\n\tborder-right: 6px solid #121219;\n\tborder-radius: 0.125em;\n\tbox-shadow: var(--content-box-shadow);\n\tdisplay: block;\n\tgrid-row: 2 / 4;\n\tgrid-column: 1 / 2;\n\ttext-align: left;\n\tz-index: 2;\n\n\tbackground-color: #a9a9a9;\n\tfont-family: 'Roboto Mono', monospace;\n\tfont-size: 16px;\n\tpadding: 20px 20px;\n\n\th1 {\n\t\tbackground: #fff;\n\t\tcolor: var(--dark-grey);\n\t\tmargin-bottom: 1rem;\n\t\tpadding: 0.5%;\n\t\ttransform: rotate(-1deg);\n\t\twidth: fit-content;\n\t}\n\n\tp {\n\t\tborder-radius: 0.125em;\n\t\tbackground: #fff;\n\t\tcolor: var(--dark-grey);\n\t\tpadding: 0.5%;\n\t}\n\n\t@media (max-width: 73em) {\n\t\tbox-shadow: 0 5px 50px -5px orange;\n    \tborder: 1px solid var(--blue-magenta);\n    \tmargin: 2% 1%;\n\t\toutline: 6px solid #121219;\n\t\tgrid-row: 3;\n\t\tgrid-column: 1;\n\t\tpadding-top: 50px;\n\t\tz-index: 3;\n\n\t\th1 {\n\t\t\tmargin-bottom: 1em;\n\t\t}\n\n\t\th1, \n\t\tp {\n\t\t\tpadding: 2%;\n\t\t}\n\t}\n"]);return M=function(){return t},t}var R=u.a.div(M()),A=function(){return Object(i.jsxs)(R,{children:[Object(i.jsx)("h1",{children:"About Me"}),Object(i.jsx)("p",{children:"I am passionate about connecting people with solutions. What began as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time."})]})};function H(){var t=Object(l.a)(["\n\talign-items: center;\n\tborder-top: 6px solid #121219;\n\tborder-radius: 0.125em;\n\tbox-shadow: var(--content-box-shadow);\n\tdisplay: grid;\n\tgrid-row: 3 / 4;\n\tgrid-column: 2 / 5;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-column-gap: 30px;\n\ttext-align: right;\n\tz-index: 2;\n\n\tbackground-color: #a9a9a9;\n\tborder-radius: 0.125em;\n\tfont-family: 'Roboto Mono', monospace;\n\tfont-size: 16px;\n\tpadding: 20px 20px;\n\n\tp {\n\t\tbackground: #fff;\n\t\tcolor: var(--dark-grey);\n\t\tpadding: 0.5%;\n\t\ttransform: rotate(-2deg);\n\t}\n\n\t@media (max-width: 73em) {\n\t\tbox-shadow: 0 5px 50px -5px orange;\n    \tborder: 1px solid var(--blue-magenta);\n    \tmargin: 0 1%;\n\t\toutline: 6px solid #121219;\n\t\tgrid-row: 4;\n\t\tgrid-column: 1;\n\t\tpadding-top: 50px;\n\t\tdisplay: block;\n\t\tbackground-image: radial-gradient(at top right #00ff00, gray);\n\t\ttext-align: left;\n\t\tz-index: 4;\n\t\t-ms-transform: rotate(0deg); /* IE 9 */\n\t\t-webkit-transform: rotate(0deg); /* Safari 3-8 */\n\t\ttransform: rotate(0deg);\n\n\t\tp {\n\t\t\tpadding: 2%;\n\t\t}\n\t}\n"]);return H=function(){return t},t}var V=u.a.div(H()),D=function(){return Object(i.jsx)(V,{children:Object(i.jsx)("p",{children:"Happiness is ... GT Cinetype, baking, Art Deco, mint-chip gelato, traveling, art direction, Bowie, retro, record-collecting, JavaScripting"})})};function T(){var t=Object(l.a)(["\n\talign-self: end;\n\tbackground: rgba(0,0,0,0.5);\n\tborder-left: 10px solid var(--med-light-yellow);\n\tbottom: 8%;\n\tcolor: var(--med-light-yellow);\n\tfont-family: 'Droid Serif', serif;\n\tfont-size: 1.5em;\n\tgrid-row: 2;\n\tgrid-column: 4;\n\tjustify-content: start;\n\tpadding: 10px;\n\tposition: relative;\n\tright: 125px;\n\ttext-transform: uppercase;\n\tz-index: 3;\n\t\n\t@media only screen and (min-width: 240px) and (max-width: 479px) {\n\t\tleft: 50px;\n\t}\n\t@media only screen and (max-width: 73em) {\n\t\tbottom: 11%;\n\t\tfont-size: calc(12px + 2.3vw);\n\t\tgrid-row: 2;\n\t\tgrid-column: 1;\n\t\tleft: 75px;\n\t\twidth: 66%;\n\t}\n"]);return T=function(){return t},t}var W=u.a.div(T()),J=function(){return Object(i.jsx)(W,{children:Object(i.jsx)(N,{inputStrings:["A ship in harbor is safe - but that is not what ships are built for."]})})},F=e.p+"static/media/synthwave.5b2b607b.jpg";function P(){var t=Object(l.a)(["\n\tbackground-image: url(",");\n\tbackground-position: left center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tgrid-row: 1 / 3;\n\tgrid-column: 2 / 5;\n\tz-index: 2;\n\n\t@media (max-width: 73em) {\n\t\tbackground-size: auto;\n\t\tbackground-position: top center;\n\t\tgrid-row: 2;\n\t\tgrid-column: 1;\n\t\tmargin: 0;\n\t\toutline: 6px solid #121219;\n\t}\n"]);return P=function(){return t},t}var G=u.a.div(P(),F),B=function(){return Object(i.jsx)(G,{})},_=e.p+"static/media/mebygv.fa33ceea.png";function Y(){var t=Object(l.a)(["\n\tbackground-image: url(",");\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 125%;\n\tbox-shadow: 0 5px 50px -5px orange;\n    border: 1px solid var(--blue-magenta);\n\tgrid-row: 2 / 4;\n\tgrid-column: 1;\n\tmargin: 0;\n\tpadding: 0;\n\tz-index: 2;\n\n\t@media (max-width: 73em) {\t\n\t\tbackground-position: auto;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbox-shadow: none;\n    \tborder: none;\n\t\tgrid-row: 4;\n\t\tgrid-column: 1;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tmargin-top: -10em;\n\t\tz-index: 4;\n\n\t\twidth: 50%;\n    \tmargin: 0 auto;\n    \tmargin-top: 11em;\n\t}\n\t@media (max-width: 480px) {\n\t\tbackground-size: 125%;\n\t}\n"]);return Y=function(){return t},t}var q=u.a.div(Y(),_),U=function(){return Object(i.jsx)(q,{})};function Q(){var t=Object(l.a)(["\n\tbackground: var(--grey);\n\tborder-bottom: 1px solid var(--dark-grey);\n\tborder-right: 5px solid var(--dark-grey);\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tfont-size: 1.95em;\n\tfont-style: italic;\n\tfont-weight: bold;\n\tgrid-column: 4;\n\tgrid-row: 3;\n\theight: 66%;\n\tpadding-bottom: 20px;\n\tpadding-right: 25px;\n\ttext-align: right;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\twidth: 75%;\n\tz-index: 2;\n\n\ttransform: scaleY(1.5);\n\twhite-space: wrap;\n\n\ttext-decoration: none;\n\tcolor: var(--dark-accent-grey);\n\t\n\t&:hover {\n\t\tbackground-color: var(--med-light-yellow);\n\t\ttransition: .7s;\n\t}\n\n\ta {\n\t\tcolor: var(--dark-accent-grey);\n\t\t&:hover {\n\t\t\tcolor: rgb(0, 0, 230);\n\t\t}\n\t}\n\n\t@media (max-width: 73em) {\n\t\tpadding-bottom: 0.125%;\n\t\tpadding-right: 25px;\n\t\tpadding-top: 3%;\n\n\t\tborder-top: 1px solid var(--dark-grey);\n\t\tborder-left: 1px solid var(--dark-grey);\n\t\tdisplay: flex;\n\t\talign-items: flex-end;\n\t\tjustify-content: flex-end;\n\t\tfont-size: calc(12px + 1.6vw);\n\t\tfont-style: italic;\n\t\tfont-weight: bold;\n\t\tgrid-column: 1;\n\t\tgrid-row: 6;\n\t\theight: auto;\n\t\tmargin: 0 auto;\n\t\ttext-align: right;\n\t\ttext-transform: uppercase;\n\t\twidth: 70%;\n\t\tz-index: 4;\n\t}\n"]);return Q=function(){return t},t}var X=u.a.div(Q()),K=function(){return Object(i.jsx)(X,{children:Object(i.jsx)("a",{href:"mailto:lizharkins@gmail.com?Subject=Hi, Liz!",target:"_top",children:"Electronic mail me!"})})};function Z(){var t=Object(l.a)(["\n\tbackground: #e5e5e5;\n\tdisplay: grid;\n\tgrid-template-rows: 130px 2fr 1fr;\n\tgrid-template-columns: 1.5fr 1fr 1fr 1.5fr;\n\theight: 52em;\n\tmax-width: 85em;\n\toutline: 6px solid #121219;\n\twidth: 95vw;\n\tmargin: 5% auto;\n\tmargin-bottom: 8%;\n\n\t@media only screen and (max-width: 73em) {\n\t\tmax-width: unset;\n\t\tgrid-template-rows: 120px 4fr 3fr 3fr 1fr 0.5fr;/*130px 2fr 1fr*/\n\t\tgrid-template-rows: .5fr 2fr 1.25fr 1.25fr;\n\t\tgrid-template-columns: 99vw; /*1.5fr 1fr 1fr 1.5fr*/\n\t\theight: 1800px;\n\t\twidth: 99vw;\n\t\tmargin: 3em auto 0 auto;\n\t\toutline: none;\n\t}\n"]);return Z=function(){return t},t}var $=u.a.div(Z()),tt=function(){return Object(i.jsxs)($,{children:[Object(i.jsx)(E,{}),Object(i.jsx)(A,{}),Object(i.jsx)(D,{}),Object(i.jsx)(J,{}),Object(i.jsx)(B,{}),Object(i.jsx)(U,{}),Object(i.jsx)(K,{})]})},nt=function(t){Object(j.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(x.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={date:""},t.getDate=function(){var n=(new Date).toDateString();t.setState({date:n})},t}return Object(f.a)(e,[{key:"componentDidMount",value:function(){this.getDate()}},{key:"render",value:function(){var t=this.state.date;return Object(i.jsxs)("div",{children:["Richmond, VA - ",t]})}}]),e}(a.a.Component);function et(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-flow: column;\n\n\th1 {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-family: 'Playfair Display', serif;\n\t\tfont-weight: 900;\n\t\tfont-size: 8em;\n\t\tline-height: 72px;\n\t\tmargin-bottom: 20px;\n\t\tmargin-top: 50px;\n\t\ttext-transform: uppercase;\n\t\twidth: 100%;\n\t}\n\n\t.subheading {\n\t\tborder-top: 10px solid var(--charcoal-grey);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: row wrap;\n\t\ttext-transform: uppercase;\n\t\twidth: 100%;\n\t\tpadding: 2em 0 0 0;\n\t}\n\n\t.tag {\n\t\tborder: 5px solid var(--charcoal-grey);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: column wrap;\n\t\tpadding: 10px 15px 10px 15px;\n\t\twidth: 33%;\n\t}\n\t.tag span {\n\t\tfont-size: 1.1em;\n\t\tpadding: 5px;\n\t}\n\t.emph {\n\t\tborder-bottom: 2px solid var(--blue-magenta);\n\t\tborder-top: 2px solid var(--blue-magenta);\n\t\tfont-size: 1.3em;\n\t\tfont-style: italic;\n\t\tpadding: 11px;\n\t}\n\n\t.supplementary {\n\t\tpadding-left: 2%;\n\t\tmin-width: 55%;\n\t}\n\t.supplementary > div {\n\t\tborder-bottom: var(--standard-column-border);\n\t    border-top: var(--standard-column-border);\n\t    padding: 12px 0 12px 0;\n\t    text-align: center;\n\t}\n\th2 {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: row wrap;\n\t\tfont-size: 4em;\n\t\ttransform: scaleY(1.8);\n\t\twidth: 100%;\n\t}\n\n\t@media (max-width: 81.250em) {\n\t\th1\t{\n\t\t\tfont-size: 7em;\n\t\t}\n\n\t\t.subheading\t{\n\t\t\tpadding: 2em 0 0 0;\n\t\t\twidth: 95%;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 3.3em;\n\t\t}\n\t}\n\t@media (min-width: 56.250em) and (max-width: 68.750em) {\n\t\th1\t{\n\t\t\tfont-size: 5.5em;\n\t\t}\n\n\t\t.supplementary {\n\t\t\twidth: 66%;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: 3.4em;\n\t\t}\n\t}\n\t@media (min-width: 37.5em) and (max-width: 64em) {\n\t\th1\t{\n\t\t\tfont-size: 3.9em;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\t.subheading\t{\n\t\t\tjustify-content: flex-start;\n\t\t\tflex-flow: column wrap;\n\t\t\tpadding: 12px 0 12px 0;\n\t\t}\n\t\t.supplementary {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.tag  {\n\t\t\tmargin-bottom: 3%;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\th2\t{\n\t\t\tfont-size: 2.8em;\n\t\t}\n\t}\n\t@media (max-width: 37.5em) {\n\t\th1\t{\n\t\t\tfont-size: 3.9em;\n\t\t\tmargin-bottom: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.subheading {\n\t\t\tpadding: 12px 0 12px 0;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.supplementary {\n\t\t\tpadding-left: unset;\n\t\t}\n\n\t\t.tag {\n\t\t\tmargin-bottom: 3%;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 2.5em;\n\t\t}\n\t}\n\t@media (max-width: 30em) {\n\t\th1\t{\n\t\t\tfont-size: 2em;\n\t\t\tline-height: 42px;\n\t\t\tmargin-bottom: 3px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.subheading {\n\t\t\tpadding: 12px 0 12px 0;\n\t\t\twidth: 100%;\n\t\t}\n\t\t\n\t\t.tag {\n\t\t\tpadding: 8px 15px 8px 15px;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\t.tag span {\n\t\t\tfont-size: 1em;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 1.3em;\n\t\t}\n\t}\n"]);return et=function(){return t},t}var it=u.a.div(et()),rt=function(){return Object(i.jsxs)(it,{className:"header",children:[Object(i.jsx)("h1",{children:"The Collection"}),Object(i.jsxs)("div",{className:"subheading",children:[Object(i.jsxs)("div",{className:"tag",children:[Object(i.jsx)("span",{children:"classic"}),Object(i.jsx)("span",{className:"emph",children:"Bets"}),Object(i.jsx)("span",{children:"Styles"})]}),Object(i.jsxs)("div",{className:"supplementary",children:[Object(i.jsx)("h2",{children:"Color. Line. Design."}),Object(i.jsx)(nt,{})]})]})]})};function at(){var t=Object(l.a)(["\n\tfont-size: 14px;\n\tline-height: 20px;\n\twidth: 20%;\n\tdisplay: inline-block;\n\tborder-left: 1px solid #2f2f2f;\n\tpadding: 0 1% 0 1%;\n\tvertical-align: top;\n\tmargin-bottom: 50px;\n\ttransition: all .7s;\n\t\n\t&:hover {\n\t\tborder-radius: 0.125em;\n\t\tbox-shadow:var(--collection-cw-box-shadow);\n\t}\n\n\t.column-header {\n\t\ttext-align: center;\n\t\tline-height: normal;\n\t\tfont-family: 'Playfair Display', serif;\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t}\n\t.heading {\n\t\tfont-weight: 700;\n\t\tfont-size: 30px;\n\t\ttext-transform: uppercase;\n\t\tpadding: var(--headline-padding);\n\t}\n\t.subheading {\n\t\tfont-weight: 700;\n\t\tfont-size: 14px;\n\t\tbox-sizing: border-box;\n\t\tpadding: var(--headline-padding);\n\t\tfont-weight: 400;\n\t\tfont-style: italic;\n\t}\n\n\t.subheading:before {\n\t\tborder-top: var(--standard-column-border);\n\t\tcontent: '';\n\t\twidth: 100px;\n\t\theight: 7px;\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t}\n\t.subheading:after {\n\t\tborder-bottom: var(--standard-column-border);\n\t\tcontent: '';\n\t\twidth: 100px;\n\t\theight: 10px;\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t}\n\n\t.newscontent {\n\t\tmargin: 1rem;\n\t\ttext-align: left;\n\t}\n\t.newscontent.accented {\n\t\tfont-style: italic;\n\t\ttext-align: center;\n\t}\n\n\t.links {\n\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tflex-flow: row;\n\t\tfont-style: italic;\n\t\tmargin-top: 2em;\n\t}\n\t.links a {\n\t\tcolor: inherit;\n\t\tpadding: 5px;\n\t\ttext-decoration: none;\n\t}\n\t.links a:hover {\n\t\tcolor: var(--blue-magenta);\n\t\ttext-decoration: underline;\n\t}\n\n\tul.horizontal {\n\t\tdisplay: flex;\n\t    justify-content: center;\n\t    align-items: center;\n\t    flex-direction: row;\n\t    flex-wrap: wrap;\n\t}\n\tul.horizontal li { \n\t\tlist-style-type:disc;\n\t\ttext-indent:-4px; \n\t\tmargin-right:20px;\n\t}\n\tul.horizontal li:nth-child(1) {\n   \t\tlist-style-type: none; \n\t}\n\n\t@media (max-width: 1200px) {\n\t\twidth: 33%;\n\t}\n\t@media (max-width: 900px) {\n\t\twidth: 50%;\n\t}\n\t@media (max-width: 600px) {\n\t\twidth: 100%;\n\t\tborder-bottom: var(--standard-column-border);\n\t\tborder-left: none;\n\t}\n\n"]);return at=function(){return t},t}var ot=u.a.div(at()),ct=function(t){return Object(i.jsxs)(ot,{className:"column",children:[Object(i.jsxs)("div",{className:"column-header",children:[Object(i.jsx)("span",{className:"headline heading",children:t.heading}),Object(i.jsx)("p",{children:Object(i.jsx)("span",{className:"headline subheading",children:t.subheading})})]}),Object(i.jsx)("p",{className:"newscontent accented",children:t.description}),Object(i.jsxs)("p",{className:"newscontent",children:[t.descriptionExt,Object(i.jsxs)("span",{className:"links",style:{display:!t.live&&"none"},children:[Object(i.jsx)("a",{href:t.live,target:"_blank",rel:"noreferrer",children:"Live"}),Object(i.jsx)("span",{style:{display:!t.github&&"none"},children:"-"}),Object(i.jsx)("a",{href:t.github,target:"_blank",rel:"noreferrer",style:{display:!t.github&&"none"},children:"GitHub"})]})]}),Object(i.jsx)("ul",{className:"horizontal",children:t.list})]})},dt=[{id:1,heading:"Face Found App",subheading:"Full Stack JavaScript",description:"Featuring an image-recognition API by Clarifai - Particles.js brings the gleam -",descriptionExt:"Currently accepting and registering new users. How many - and what kinds of - faces can you capture? Secure your account today.",live:"https://face-found.herokuapp.com/",github:"https://github.com/elizabethharkins/smart-brain",list:["React","Redux","Postgres","Express","Node","HTML5","CSS3","Tachyons CSS","Vanilla JavaScript","ES6","ES6 Modules","Particles.js"]},{id:2,heading:"Read With Me App",subheading:"Full Stack JavaScript",description:"Coming Soon!",descriptionExt:"I'm designing an app that helps parents teach their children early reading skills, in addition to tracking and monitoring progress with regard to those skills.",live:"",github:"",list:["React","React Hooks","Postgres","Express","Node","HTML5","CSS3","Vanilla JavaScript","ES6","ES6 Modules"]},{id:3,heading:"Nestiny Realty",subheading:"HTML5, CSS3, JavaScript",description:"Frontend developer with a keen eye for design",descriptionExt:"Responsibilities for this role included, but were not limited to, translating wireframes and design to code and ensuring the alignment of web design with user experience and technical requirements. I collaborated with our graphic designer, the marketing team, and our backend developer to ensure all elements of web creation were consistent. In addition, I was responsible for managing our company\u2019s web presence and ensuring that our site was up to date at all times. I especially enjoyed developing the page set up to display individual listings, referenced below.",live:"https://www.nestinyrealty.com/listing/653712",list:["HTML5","CSS3","JQuery","Ajax","Vanilla JavaScript","ES6","ES6 Modules"]},{id:4,heading:"Grid-Folio",subheading:"React, CSS Grid",description:"A portfolio enters the modern age!",descriptionExt:"I spruced up an existing portfolio, found at my grid-folio repo, into the version you are now visiting. I refactored the JavaScript into React, and reduced the CSS, weaving previous designs into complementary, styled components.",live:"https://elizabethharkins.github.io/c-is-for-compiled/#/",github:"https://github.com/elizabethharkins/c-is-for-compiled",list:["React","React Hooks","React Router","HTML5","CSS3","SCSS","Vanilla JavaScript","ES6","ES6 Modules","Styled Components"]},{id:5,heading:"Grid Layout Collective",subheading:"CSS Grid",description:"For the love of the Grid",descriptionExt:"Stained [glass] grids, plus a [realty] business card: explorations into making the web more beautiful. Or, a handful of tiles, many ways. I wrote a class to eliminate repetitive HTML and to experiment with reworking this fun, existing side project.",live:"https://elizabethharkins.github.io/grid-layout-collective/",github:"https://github.com/elizabethharkins/grid-layout-collective",list:["Vanilla JavaScript","HTML5","CSS Grid"]}];function st(){var t=Object(l.a)(["\n\tfont-size: 0;\n\tline-height: 0;\n\tword-spacing: -.31em;\n\tdisplay: inline-block;\n\tmargin: 30px 2% 0 2%;\n"]);return st=function(){return t},t}var lt=u.a.div(st()),ht=function(){var t=dt.map((function(t){return Object(i.jsx)(ct,{heading:t.heading,subheading:t.subheading,description:t.description,descriptionExt:t.descriptionExt,live:t.live,github:t.github,list:t.list.map((function(t){return Object(i.jsx)("li",{children:t},t)}))},t.id)}));return Object(i.jsx)(lt,{children:Object(i.jsx)("div",{className:"columns",children:t})})};function pt(){var t=Object(l.a)(["\n\t.citation {\n\t\tfont-family: 'Playfair Display', serif;\n\t\tfont-size: 2.250em;\n\t\tline-height: 44px;\n\t\ttext-align: center;\n\t\tfont-weight: 400;\n\t\tdisplay: block;\n\t\tmargin: 40px auto;\n\t\tfont-feature-settings: \"liga\", \"dlig\";\n\t\tmax-width: 66%;\n\t\tpadding: 2%;\n\t}\n\t.citation:before {\n\t\tbackground: var(--charcoal-grey);\n\t\tcontent: '';\n\t\twidth: 100px;\n\t\theight: 4px;\n\t\tdisplay: block;\n\t\tmargin: 1% auto;\n\t}\n\t.citation:after {\n\t\tbackground: var(--charcoal-grey);\n\t\tcontent: '';\n\t\twidth: 100px;\n\t\theight: 4px;\n\t\tdisplay: block;\n\t\tmargin: 1% auto;\n\t}\n\n\t@media (max-width: 64em) {\n\t   .citation {\n\t\t\tfont-size: 1.875em;\n\t\t}\n\t}\n\t@media (max-width: 50em) {\n\t   .citation {\n\t\t\tmax-width: unset;\n\t\t}\n\t}\n\t@media (max-width: 30em) {\n\t   .citation {\n\t\t\tfont-size: 1.525em;\n\t\t}\n\t}\n"]);return pt=function(){return t},t}var ut=u.a.footer(pt()),gt=function(){return Object(i.jsx)(ut,{children:Object(i.jsx)("span",{className:"citation",children:"Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people"})})},mt=e(17),bt=e(69),xt=e(70),ft=e(74),jt=e(71);function vt(){var t=Object(l.a)(["\n\t.row {\n\t\tjustify-content: center;\n\t  \tmargin: 15px 0;\n\t}\n\n\th1 {\n\t\tfont-size: 2rem;\n\t\tfont-style: italic;\n\t}\n\n\tinput.form-control {\n\t\tborder-radius: 0.125em;\n\t\ttext-align: center;\n\t\tmax-width: 35em;\n    \tmargin: 0 auto;\n\t}\n\n\t.btn-primary {\n\t\tbackground-color: var(--charcoal-grey);\n\t\tborder-color: #5d6063;\n\t\tborder-radius: 0.125em;\n\t}\n\t.btn-primary:hover {\n\t\tbackground-color: var(--blue-magenta);\n\t}\n"]);return vt=function(){return t},t}var wt=u.a.div(vt()),yt=function(t){var n=t.onSearch,e=Object(r.useState)(""),a=Object(mt.a)(e,2),o=a[0],c=a[1];return Object(i.jsxs)(wt,{children:[Object(i.jsx)(bt.a,{children:Object(i.jsx)(xt.a,{children:Object(i.jsx)("h1",{children:"Search your city"})})}),Object(i.jsx)(bt.a,{children:Object(i.jsx)(xt.a,{xs:8,className:"text-center",children:Object(i.jsx)(ft.a,{placeholder:"Enter city",onChange:function(t){return c(t.target.value)},value:o})})}),Object(i.jsx)(bt.a,{children:Object(i.jsx)(xt.a,{children:Object(i.jsx)(jt.a,{onClick:function(){return n(o)},children:"Check Weather"})})})]})},Ot=function(t){var n=Object(r.useState)(null),e=Object(mt.a)(n,2),i=e[0],a=e[1],o=Object(r.useState)(null),c=Object(mt.a)(o,2),d=c[0],s=c[1],l=Object(r.useState)(null),h=Object(mt.a)(l,2),p=h[0],u=h[1],g=Object(r.useState)(t),m=Object(mt.a)(g,2),b=m[0],x=m[1];return Object(r.useEffect)((function(){b&&(u(!0),a(null),s(null),fetch(b).then((function(t){return t.json()})).then((function(t){u(!1),t.cod>=400?s(t.message):a(t)})).catch((function(t){u(!1),s(t)})))}),[b]),{data:i,error:d,isLoading:p,setUrl:x}},kt=e(75);function St(){var t=Object(l.a)(["\n\t.card {\n\t\tbackground: transparent;\n\t\tborder-bottom: 5px solid rgba(0,0,0,.125);\n\t\tcolor: #eaedf0;\n\t\tmax-height: 352px;\n    \tmin-height: 281px;\n\t}\n\n\t.card-title {\n\t\tmargin-bottom: 0.125rem;\n\t}\n\n\t@media (max-width: 30em) {\n\t\t.card {\n\t\t\tborder-bottom: unset\n\t    \tborder-right: unset\n\t    \tborder: 3px solid rgba(0,0,0,.125);\n\t\t}\n\t}\n\n"]);return St=function(){return t},t}var zt=u.a.div(St()),Ct=function(t){var n=t.dt,e=t.main,r=t.icon,a=new Date(n);return Object(i.jsx)(zt,{children:Object(i.jsxs)(kt.a,{children:[Object(i.jsx)(kt.a.Img,{variant:"top",src:"http://openweathermap.org/img/wn/".concat(r,"@2x.png")}),Object(i.jsxs)(kt.a.Body,{children:[Object(i.jsx)(kt.a.Title,{children:e}),Object(i.jsx)("p",{children:a.toLocaleTimeString([],{timeStyle:"short"})})]})]})})},Nt=function(t){var n=t.data;return Object(i.jsx)(bt.a,{children:n.map((function(t){var n=t.dt,e=(t.main,t.weather);return Object(i.jsx)(xt.a,{children:Object(i.jsx)(Ct,{dt:1e3*n,main:e[0].main,icon:e[0].icon})},n)}))})};function It(){var t=Object(l.a)(["\n\tborder-bottom: 10px solid var(--charcoal-grey);\n\tmargin: 0 2% 0 2%;\n\ttext-align: center;\n\n\t.weather-header {\n\t\tdisplay:flex;\n\t\tflex-direction: column;\n\t}\n\t.weather-header h1 {\n\t\tborder-bottom: var(--standard-column-border);\n    \tborder-top: var(--standard-column-border);\n\t}\n\n\t.weather-body {\n\t\tbackground: var(--collection-bg-gradient);\n\t\tborder-radius: 0.125em;\n\t    margin: 1em auto;\n\t    padding: 1%;\n\t}\n\t.weather-body > .row {\n\t\tmargin: 0.125em;\n\t\tpadding: 0;\n\t}\n\t.weather-body > .row > .col {\n\t\tpadding: 0.33em;\n\t}\n\n\t.fineprint {\n\t\tpadding: 2px;\n\t}\n\n\t@media (max-width: 70em) {\n\t\t.weather-body > .row > .col {\n\t\t\tflex-basis: unset;\n    \t\tflex-grow: unset;\n    \t\tmax-width: 25%;\n\t\t}\n\t}\n\t@media (max-width: 37.5em) {\n\t\t.weather-body > .row > .col {\n\t\t\tmax-width: 50%;\n\t\t}\n\t}\t\n\t@media (max-width: 30em) {\n\t\t.weather-header h1 {\n\t\t\tfont-size: 2em;\n\t\t}\n\t}\n\n"]);return It=function(){return t},t}var Lt=u.a.div(It()),Et=function(){var t=Ot(),n=t.data,e=t.error,r=t.isLoading,a=t.setUrl;return Object(i.jsxs)(Lt,{children:[Object(i.jsx)("header",{className:"weather-header",children:Object(i.jsx)("h1",{children:"Your Local Weather"})}),Object(i.jsxs)("div",{className:"weather-body",children:[Object(i.jsx)(yt,{onSearch:function(t){return a("".concat("http://api.openweathermap.org/","/data/2.5/forecast?q=").concat(t,"&appid=").concat("6237e53abb12c7ea55d7834d74667fe2"))}}),e?Object(i.jsxs)("h2",{children:["Check your entry: ",e]}):!n&&r?Object(i.jsx)("h2",{children:"Loading..."}):n?Object(i.jsx)(Nt,{data:n.list.slice(0,8)}):null,Object(i.jsx)("p",{className:"fineprint",children:"Weather by OpenWeather API"})]})]})};function Mt(){var t=Object(l.a)(["\n\tbackground: var(--collection-bg-gradient);\n\ttransition: background 6s ease-in;\n\tcolor: var(--dark-grey);\n\tfont-family: 'Droid Serif', serif;\n\tfont-size: 16px;\n\tmax-width: 80em;\n\tdisplay: grid;\n\tbox-shadow:var(--collection-cw-box-shadow);\n\n\t@media (min-width: 85em) {\n\t\tmargin: 5% auto;\n\t}\n\t@media (max-width: 85em) {\n\t\tmargin: 5% auto;\n\t}\n"]);return Mt=function(){return t},t}var Rt=u.a.div(Mt()),At=function(){return Object(i.jsxs)(Rt,{children:[Object(i.jsx)(rt,{}),Object(i.jsx)(ht,{}),Object(i.jsx)(Et,{}),Object(i.jsx)(gt,{})]})};function Ht(){var t=Object(l.a)(["\n\tbackground: inherit;\n\tmin-height: 2em;\n\n\tbackground: var(--nav-gradient);\n\tborder: 1px solid var(--blue-magenta);\n\tborder-radius: 0.125em;\n"]);return Ht=function(){return t},t}var Vt=u.a.footer(Ht()),Dt=function(){return Object(i.jsx)(Vt,{})},Tt=function(){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)(d.a,{basename:"/c-is-for-compiled",children:[Object(i.jsx)(b,{}),Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",component:z}),Object(i.jsx)(s.a,{path:"/about",component:tt}),Object(i.jsx)(s.a,{path:"/thecollection",component:At})]}),Object(i.jsx)(Dt,{})]})})};c.a.render(Object(i.jsx)(Tt,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d76cf691.chunk.js.map