(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){},34:function(e,a,t){e.exports=t(55)},41:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(13),s=t.n(r),i=(t(39),t(41),t(43),t(45),t(7)),c=t(8),m=t(10),o=t(9),u=t(11),d=(t(28),t(2)),h=t(50);function E(e){var a=e.dish;return a.image.includes("/fusion-taste-reactjs")||(a.image="/fusion-taste-reactjs"+a.image),l.a.createElement(d.d,null,l.a.createElement(h.a,{to:"/menu/".concat(a.id)},l.a.createElement(d.g,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(d.h,null,l.a.createElement(d.k,null,a.name))))}var f=function(e){var a=e.dishes.map(function(a){return l.a.createElement("div",{key:a.id,className:"col-12 col-md-5 m-1"},l.a.createElement(E,{dish:a,onClick:e.onClick}))});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement(d.b,{active:!0},"Menu")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Menu"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},a))},g=[{id:0,name:"Uthappizza",image:"/assets/images/UthaPizza.jpg",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.jpg",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.jpg",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.jpg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],p=t(56),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).toggleNav=function(){t.setState({isNavOpen:!t.state.isNavOpen})},t.toggleModal=function(){t.setState({isModalOpen:!t.state.isModalOpen})},t.handleLogin=function(e){t.toggleModal(),alert("Username: "+t.username.value+" Password: "+t.password.value+" Remember: "+t.remember.checked),e.preventDefault()},t.state={isNavOpen:!1,isModalOpen:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d.u,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(d.w,{toggle:this.toggleModal},"Login"),l.a.createElement(d.v,null,l.a.createElement(d.n,{onSubmit:this.handleLogin},l.a.createElement(d.p,null,l.a.createElement(d.s,{htmlFor:"username"},"Username"),l.a.createElement(d.q,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),l.a.createElement(d.p,null,l.a.createElement(d.s,{htmlFor:"password"},"Password"),l.a.createElement(d.q,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),l.a.createElement(d.p,{check:!0},l.a.createElement(d.s,{check:!0},l.a.createElement(d.q,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),l.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))),l.a.createElement(d.z,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(d.B,{onClick:this.toggleNav}),l.a.createElement(d.A,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Asian Fusion"})),l.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(d.x,{navbar:!0},l.a.createElement(d.y,null,l.a.createElement(p.a,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(d.y,null,l.a.createElement(p.a,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),l.a.createElement(d.y,null,l.a.createElement(p.a,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(d.y,null,l.a.createElement(p.a,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))))),l.a.createElement(d.x,{className:"ml-auto",navbar:!0},l.a.createElement(d.y,null,l.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))),l.a.createElement(d.r,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Asian Fusion Taste"),l.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component),N=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/aboutus"},"About Us")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/menu"},"Menu")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/contactus"},"Contact Us")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"6, Symphony Rd",l.a.createElement("br",null),"Boston, MA",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"fusion-taste@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2018 Asian Fusion Taste Restaurant")))))},v=t(60),y=t(51),w=t(57),k=t(59);function I(e){var a=e.item;return a.image.includes("/fusion-taste-reactjs")||(a.image="/fusion-taste-reactjs"+a.image),l.a.createElement(d.d,null,l.a.createElement(d.g,{src:a.image,alt:a.name}),l.a.createElement(d.e,null,l.a.createElement(d.k,null,a.name),a.designation?l.a.createElement(d.i,null,a.designation):null,l.a.createElement(d.j,null,a.description)))}var j=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-start"},l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(I,{item:e.dish})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(I,{item:e.promotion})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(I,{item:e.leader}))))},O=t(31),C=t(15),T=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;t.setState(Object(C.a)({},l,n))},t.handleSubmit=function(e){console.log("Current State is: "+JSON.stringify(t.state)),alert("Current State is: "+JSON.stringify(t.state)),e.preventDefault()},t.validate=function(e,a,n,l){var r={firstName:"",lastName:"",telNum:"",email:""};t.state.touched.firstName&&e.length<3?r.firstName="First Name should be >= 3 characters":t.state.touched.firstName&&e.length>10&&(r.firstName="First Name should be <= 10 characters"),t.state.touched.lastName&&a.length<3?r.lastName="Last Name should be >= 3 characters":t.state.touched.lastName&&a.length>10&&(r.lastName="Last Name should be <= 10 characters");return t.state.touched.telNum&&!/^\d+$/.test(n)&&(r.telNum="Tel. Number should contain only numbers"),t.state.touched.email&&1!==l.split("").filter(function(e){return"@"===e}).length&&(r.email="Email should contain a @"),r},t.handleBlur=function(e){return function(){t.setState({touched:Object(O.a)({},t.state.touched,Object(C.a)({},e,!0))})}},t.state={firstName:"",lastName:"",telNum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstName:!1,lastName:!1,telNum:!1,email:!1}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.validate(this.state.firstName,this.state.lastName,this.state.telNum,this.state.email);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"6 Symphony Rd",l.a.createElement("br",null),"Boston, MA",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",href:"\\",className:"btn btn-info"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:fusion-taste@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Send us your Feedback")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(d.n,{onSubmit:this.handleSubmit},l.a.createElement(d.p,{row:!0},l.a.createElement(d.s,{htmlFor:"firstName",md:2},"First Name"),l.a.createElement(d.l,{md:10},l.a.createElement(d.q,{type:"text",id:"firstName",name:"firstName",placeholder:"First Name",value:this.state.firstName,valid:""===e.firstName,invalid:""!==e.firstName,onBlur:this.handleBlur("firstName"),onChange:this.handleInputChange}),l.a.createElement(d.o,null,e.firstName))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.s,{htmlFor:"lastName",md:2},"Last Name"),l.a.createElement(d.l,{md:10},l.a.createElement(d.q,{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",value:this.state.lastName,valid:""===e.lastName,invalid:""!==e.lastName,onBlur:this.handleBlur("lastName"),onChange:this.handleInputChange}),l.a.createElement(d.o,null,e.lastName))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.s,{htmlFor:"telNum",md:2},"Contact Tel."),l.a.createElement(d.l,{md:10},l.a.createElement(d.q,{type:"tel",id:"telNum",name:"telNum",placeholder:"Tel. Number",value:this.state.telNum,valid:""===e.telNum,invalid:""!==e.telNum,onBlur:this.handleBlur("telNum"),onChange:this.handleInputChange}),l.a.createElement(d.o,null,e.telNum))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.s,{htmlFor:"email",md:2},"Email"),l.a.createElement(d.l,{md:10},l.a.createElement(d.q,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),l.a.createElement(d.o,null,e.email))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.l,{md:{size:6,offset:2}},l.a.createElement(d.p,{check:!0},l.a.createElement(d.s,{check:!0},l.a.createElement(d.q,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," "," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(d.l,{md:{size:3,offset:1}},l.a.createElement(d.q,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.s,{htmlFor:"message",md:2},"Your Feedback"),l.a.createElement(d.l,{md:10},l.a.createElement(d.q,{type:"textarea",id:"message",name:"message",rows:"12",value:this.state.message,onChange:this.handleInputChange}))),l.a.createElement(d.p,{row:!0},l.a.createElement(d.l,{md:{size:10,offset:2}},l.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),F=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Lily Horvath",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ted Mosby",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"Barney Stinson",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Neuman",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul Oatis",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Maebe Funke",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"George Michael",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"Cosmo Kramer",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Elaine Benes",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"George Costanza",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Bluth",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Rick Grimes",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"Nick Hannigan",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Rachel Green",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Phoebe Buffay",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Monica Geller",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Chandler Bing",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"Joey Tribbiani",date:"2011-12-02T17:57:28.556094Z"}],x=[{id:0,name:"Peter Pan",image:"/assets/images/default.jpg",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Zuri James",image:"/assets/images/default.jpg",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Alan Sheedy",image:"/assets/images/default.jpg",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Tim Reed",image:"/assets/images/Chef.jpeg",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences."}],S=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.jpg",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of different salads, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19 per person"}];var M=function(e){var a,t=e.dish;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/menu"},"Menu")),l.a.createElement(d.b,{active:!0},e.dish.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.dish.name),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 m-1"},null!=(a=t)?(a.image.includes("/fusion-taste-reactjs")||(a.image="/fusion-taste-reactjs"+a.image),l.a.createElement(d.d,null,l.a.createElement(d.g,{top:!0,src:a.image,alt:a.name}),l.a.createElement(d.e,null,l.a.createElement(d.k,null,a.name),l.a.createElement(d.j,null,a.description)))):l.a.createElement("div",null)),l.a.createElement("div",{className:"col-12 col-md-5 m-1"},function(e){if(null!=e){var a=e.map(function(e){var a=new Date(e.date),t=a.toDateString();return l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.comment),l.a.createElement("p",null," -- ",e.author,", ",t))});return l.a.createElement("div",{className:"p-3"},l.a.createElement("h4",null,"Comments"),l.a.createElement("ul",{className:"list-unstyled"},a))}return l.a.createElement("div",null)}(e.comments))))};var A=function(e){function a(e){var a=e.leader;return a.image.includes("/fusion-taste-reactjs")||(a.image="/fusion-taste-reactjs"+a.image),l.a.createElement(d.t,{className:"py-lg-1"},l.a.createElement(d.t,{left:!0,href:"#"},l.a.createElement(d.t,{className:"image-width",src:a.image,alt:a.image})),l.a.createElement(d.t,{body:!0},l.a.createElement(d.t,{heading:!0},a.name),l.a.createElement(d.t,{className:"py-1 font-weight-bold"},a.designation),a.description))}var t=e.leaders.map(function(e){return l.a.createElement(a,{leader:e,key:e.id})});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement(d.b,{active:!0},"About Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"About Us"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h2",null,"Our History"),l.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),l.a.createElement("p",null,"The restaurant traces its humble beginnings to ",l.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),l.a.createElement("div",{className:"col-12 col-md-5"},l.a.createElement(d.d,null,l.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),l.a.createElement(d.e,null,l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Started"),l.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),l.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),l.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))))),l.a.createElement("div",{className:"col-12"},l.a.createElement(d.d,null,l.a.createElement(d.e,{className:"bg-faded"},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),l.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",l.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Corporate Leadership")),l.a.createElement("div",{className:"col-12"},l.a.createElement(d.t,{list:!0,className:"p-0"},t))))},B=t(21),Z=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).HomePage=function(){return l.a.createElement(j,{dish:t.props.dishes.filter(function(e){return e.featured})[0],promotion:t.props.promotions.filter(function(e){return e.featured})[0],leader:t.props.leaders.filter(function(e){return e.featured})[0]})},t.DishWithId=function(e){var a=e.match;return l.a.createElement(M,{dish:t.props.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],comments:t.props.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)})})},t.onDishSelect=function(e){t.setState({selectedDishId:e})},t.MenuPage=function(){return l.a.createElement(f,{dishes:t.props.dishes})},t.AboutPage=function(){return l.a.createElement(A,{leaders:t.props.leaders})},t.state={dishes:g,comments:F,leaders:x,promotions:S,selectedDishId:null},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(v.a,null,l.a.createElement(y.a,{path:"/home",component:this.HomePage}),l.a.createElement(y.a,{exact:!0,path:"/menu",component:this.MenuPage}),"} />",l.a.createElement(y.a,{exact:!0,path:"/contactus",component:T}),"} />",l.a.createElement(y.a,{exact:!0,path:"/aboutus",component:this.AboutPage}),"} />",l.a.createElement(y.a,{path:"/menu/:dishId",component:this.DishWithId}),l.a.createElement(w.a,{to:"/home"})),l.a.createElement(N,null))}}]),a}(n.Component),P=Object(k.a)(Object(B.b)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}})(Z)),z=t(58),q=t(20),H={dishes:g,comments:F,promotions:S,leaders:x},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;arguments.length>1&&arguments[1];return e},R=Object(q.b)(L,H),U=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(B.a,{store:R},l.a.createElement(z.a,{basename:"/fusion-taste-reactjs"},l.a.createElement("div",{className:"App"},l.a.createElement(P,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.4738835d.chunk.js.map