(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{A0qh:function(e,a,t){e.exports={normal:"normal___YzYMc",title:"title___1eHup"}},KYyY:function(e,a,t){"use strict";var s=t("iqUP"),n=t.n(s),l={apiKey:"AIzaSyDpMc6BpiHdZe7e6uxY6hX5Tj1aSSV-FGU",authDomain:"rladies-jkt.firebaseapp.com",databaseURL:"https://rladies-jkt.firebaseio.com",projectId:"rladies-jkt",storageBucket:"rladies-jkt.appspot.com",messagingSenderId:"910385343993",appId:"1:910385343993:web:8f1bc2719f7ecc48a0e128",measurementId:"G-264V27T8ZK"};n.a.initializeApp(l);var r=n.a.firestore();a["a"]=r},POGa:function(e,a,t){"use strict";t.r(a);t("fOrg");var s=t("+KLJ"),n=(t("14J3"),t("BMrR")),l=(t("jCWc"),t("kPKH")),r=t("jehZ"),i=t.n(r),o=(t("+L6B"),t("2/Rp")),c=(t("7Kak"),t("9yH6")),m=(t("5Dmo"),t("3S7+")),u=(t("5NDa"),t("5rEg")),p=t("d6i3"),j=t.n(p),d=t("1l/V"),h=t.n(d),g=t("p0pE"),y=t.n(g),E=(t("y8nQ"),t("Vl3Y")),v=t("qIgq"),f=t.n(v),b=(t("O3gP"),t("lrIw")),k=(t("OaEy"),t("2fM7")),w=t("q1tI"),x=t.n(w),z=t("Lyp1"),O=t("A0qh"),I=t.n(O),D=t("KYyY"),S=t("3a4m"),C=t.n(S),R=t("wd/R"),P=t.n(R),Y=(k["a"].Option,b["a"].Option,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),V={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},F={display:"block",height:"30px",lineHeight:"30px",float:"left"},A=()=>{var e=E["a"].useForm(),a=f()(e,1),t=a[0],r=E["a"].useForm(),p=f()(r,1),d=p[0],g=E["a"].useForm(),v=f()(g,1),b=v[0],k=x.a.useState([]),w=f()(k,2),O=w[0],I=w[1],S=x.a.useState([]),R=f()(S,2),A=R[0],J=R[1],B=O.length>0?O[0]:null,M=x.a.useState(),T=f()(M,2),U=T[0],q=T[1],Q=x.a.useState(!1),W=f()(Q,2),K=W[0],L=W[1],X=x.a.useState(!1),N=f()(X,2),Z=N[0],H=N[1],G=O.reduce((e,a)=>y()({},e,{[a.id]:a}),{}),_=A.filter(e=>Object.keys(G).includes(e.event)),$=O.filter(e=>!_.map(e=>e.event).includes(e.id));x.a.useEffect(()=>{D["a"].collection("events").where("isAvailable","==",!0).onSnapshot(e=>{var a=e.docChanges().map(e=>y()({id:e.doc.id},e.doc.data()));I(a)})},[]),x.a.useEffect(()=>{U&&D["a"].collection("rsvp").where("email","==",U).onSnapshot(e=>{var a=e.docChanges().map(e=>y()({id:e.doc.id},e.doc.data()));J(a)})},[U]);var ee=function(){var e=h()(j.a.mark(function e(a){return j.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:D["a"].collection("reg").doc(a.email).get().then(function(e){e.exists?H(!0):H(!1),L(!0),q(a.email)}).catch(function(e){console.log("Error getting document:",e)});case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),ae=function(){var e=h()(j.a.mark(function e(a){var t;return j.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={email:a.email,name:a.name,occupation:a.occupation,institution:a.institution,linkedin:a.linkedin,socmed:a.socmed,age:a.age,education:a.education,wag:a.wag,phone:a.phone,timestamp:P()().format()},e.prev=1,e.next=4,D["a"].collection("reg").doc(a.email).set(t);case 4:e.sent,H(!0),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(a){return e.apply(this,arguments)}}(),te=function(){var e=h()(j.a.mark(function e(a,t){var s;return j.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s={email:U,event:t.id,timestamp:P()().format()},e.prev=1,e.next=4,D["a"].collection("rsvp").doc("".concat(t.id,"__").concat(U)).set(s);case 4:e.sent,C.a.push("/registration/success"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(a,t){return e.apply(this,arguments)}}();return x.a.createElement(x.a.Fragment,null,K?Z?x.a.createElement(n["a"],{justify:"center"},x.a.createElement(l["a"],{md:!0},_.map(e=>x.a.createElement(s["a"],{message:"You already RSVP'd to the event ".concat(G[e.event].name),type:"success"})),$.length>0?x.a.createElement(E["a"],i()({},Y,{form:b,name:"register",onFinish:e=>te(e,$[0]),labelAlign:"left",labelCol:{span:12},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),x.a.createElement(E["a"].Item,V,x.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"Click this button to RSVP For ",B.name))):null)):x.a.createElement(n["a"],{justify:"center"},x.a.createElement(l["a"],{md:!0},x.a.createElement(E["a"],i()({},Y,{form:d,name:"register",onFinish:ae,labelAlign:"left",labelCol:{span:12},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),x.a.createElement(E["a"].Item,{name:"email",label:"E-mail (gmail)",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"name",label:"Full Name",rules:[{required:!0,message:"Please input your full name!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"occupation",label:"Occupation",rules:[{required:!0,message:"Please input your occupation!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"institution",label:"Institution",rules:[{required:!0,message:"Please input your institution!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"linkedin",label:x.a.createElement("span",null,"Professional Social Media (Linkedin)\xa0",x.a.createElement(m["a"],{title:"Type NA if you do not have a linkedin acccount"},x.a.createElement(z["a"],null))),rules:[{required:!0,message:"Please input your linkedin account. Type NA if you do not have a linkedin acccount!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"socmed",label:x.a.createElement("span",null,"Other Social Media\xa0",x.a.createElement(m["a"],{title:"E.g.: @rladiesjkt (instagram) or @rladiesjakarta (twitter)"},x.a.createElement(z["a"],null))),rules:[{required:!0,message:"Please input your social media account or type NA!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,{name:"age",label:x.a.createElement("span",null,"Age Range\xa0",x.a.createElement(m["a"],{title:"This will help us to get insight about the demography of our members. "},x.a.createElement(z["a"],null))),rules:[{required:!0,message:"Please input your age range!"}]},x.a.createElement(c["a"].Group,null,x.a.createElement(c["a"],{style:F,value:"Under 20"},"Under 20"),x.a.createElement(c["a"],{style:F,value:"21 - 25"},"21 - 25"),x.a.createElement(c["a"],{style:F,value:"26 - 30"},"26 - 30"),x.a.createElement(c["a"],{style:F,value:"31 - 35"},"31 - 35"),x.a.createElement(c["a"],{style:F,value:"36 - 40"},"36 - 40"),x.a.createElement(c["a"],{style:F,value:"Over 40"},"Over 40"))),x.a.createElement(E["a"].Item,{name:"education",label:x.a.createElement("span",null,"Education\xa0",x.a.createElement(m["a"],{title:"The highest degree or level of school you have completed."},x.a.createElement(z["a"],null))),rules:[{required:!0,message:"Please input your education!"}]},x.a.createElement(c["a"].Group,null,x.a.createElement(c["a"],{style:F,value:"Diploma"},"Diploma"),x.a.createElement(c["a"],{style:F,value:"Bachelor's"},"Bachelor's"),x.a.createElement(c["a"],{style:F,value:"Master's"},"Master's"),x.a.createElement(c["a"],{style:F,value:"Doctorate"},"Doctorate"))),x.a.createElement(E["a"].Item,{name:"wag",label:x.a.createElement("div",{style:{whiteSpace:"initial"}},"Would you like to be invited to R-Ladies Jakarta Whatsapp Group?"),rules:[{required:!0,message:"Please confirm whether you'd like to be added to R-Ladies Jakarta Whatsapp Group!"}]},x.a.createElement(c["a"].Group,null,x.a.createElement(c["a"],{style:F,value:"yes"},"Yes"),x.a.createElement(c["a"],{style:F,value:"no"},"No"))),x.a.createElement(E["a"].Item,{name:"phone",label:x.a.createElement("div",{style:{whiteSpace:"initial"}},"If you answer 'yes' to the previous question, please provide your Whatsapp number?"),rules:[{required:!0,message:"Please input your whatsapp number!"}]},x.a.createElement(u["a"],{style:{width:"100%"}})),x.a.createElement(E["a"].Item,V,x.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"Register"))))):x.a.createElement(n["a"],{justify:"center"},x.a.createElement(l["a"],{md:!0},x.a.createElement(E["a"],i()({},Y,{form:t,name:"register",onFinish:ee,labelAlign:"left",labelCol:{span:12},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),x.a.createElement(E["a"].Item,{name:"email",label:"E-mail (gmail)",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},x.a.createElement(u["a"],null)),x.a.createElement(E["a"].Item,V,x.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"Check Your Email"))))))},J=()=>{return x.a.createElement(x.a.Fragment,null,x.a.createElement("h1",{className:I.a.title,style:{marginBottom:"40px"}},x.a.createElement("img",{style:{width:"150px",marginRight:"10px"},src:"https://avatars0.githubusercontent.com/u/53382294?s=460&u=bc70d89943cd2e898cc05bb1fe5708c24f3f1236&v=4"}),"R-Ladies Jakarta Registration",x.a.createElement("div",{style:{fontSize:"45%"}},"Welcome to R-Ladies Jakarta. Please fill out this form to help us grow our community and establish a solid network.")),x.a.createElement(A,null))};a["default"]=J},RnhZ:function(e,a,t){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(e){var a=l(e);return t(a)}function l(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id="RnhZ"}}]);