(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){e.exports=t(33)},24:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(4),r=t.n(l),c=(t(22),t(24),t(26),t(28),t(5)),o=t(6),s=t(8),m=t(7),u=t(9),d=(t(15),t(3));function h(e){var a=e.dish,t=e.onClick;return i.a.createElement(d.a,{onClick:function(){return t(a.id)}},i.a.createElement(d.c,{width:"100%",src:a.image,alt:a.name}),i.a.createElement(d.d,null,i.a.createElement(d.f,null,a.name)))}var f=function(e){var a=e.dishes.map(function(a){return i.a.createElement("div",{key:a.id,className:"col-12 col-md-5 m-1"},i.a.createElement(h,{dish:a,onClick:e.onClick}))});return i.a.createElement("div",{className:"row"},a)},E=[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Joe Tribbiany",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Mike Hannigan",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Phoebe Buffey",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Monica Geller",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"Rachel Green",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Barney Stinson",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Ted Mosby",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Lily Oatis",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"John Pinto",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"George Costansa",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Cosmo Kramer",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Jerry Seinfeild",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Hallion",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"Elaine Bannis",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"Michael Bluth",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Rick Grimes",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Daniel Watson",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Chandler Bing",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"Andrew Horan",date:"2011-12-02T17:57:28.556094Z"}]}];var g=function(e){var a,t=e.dish;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-5 m-1"},null!=(a=t)?i.a.createElement(d.a,null,i.a.createElement(d.c,{top:!0,src:a.image,alt:a.name}),i.a.createElement(d.b,null,i.a.createElement(d.f,null,a.name),i.a.createElement(d.e,null,a.description))):i.a.createElement("div",null)),i.a.createElement("div",{className:"col-12 col-md-5 m-1"},function(e){if(e&&null!=e.comments){var a=e.comments.map(function(e){var a=new Date(e.date),t=a.toDateString();return i.a.createElement("li",{key:e.id},i.a.createElement("p",null,e.comment),i.a.createElement("p",null," -- ",e.author,", ",t))});return i.a.createElement("div",{className:"p-3"},i.a.createElement("h4",null,"Comments"),i.a.createElement("ul",{className:"list-unstyled"},a))}return i.a.createElement("div",null)}(t)))},p=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.h,{dark:!0},i.a.createElement("div",{className:"container"},i.a.createElement(d.i,{href:"/"},"Asian Fusion Taste Restaurant"))),i.a.createElement(d.g,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row row-header"},i.a.createElement("div",{className:"col-12 col-sm-6"},i.a.createElement("h1",null,"Asian Fusion Taste Restaurant"),i.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component),b=function(e){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},i.a.createElement("h5",null,"Links"),i.a.createElement("ul",{className:"list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Menu")),i.a.createElement("li",null,i.a.createElement("a",{href:"contactus.html"},"Contact")))),i.a.createElement("div",{className:"col-7 col-sm-5"},i.a.createElement("h5",null,"Our Address"),i.a.createElement("address",null,"6, Symphony Rd",i.a.createElement("br",null),"Boston, MA",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",i.a.createElement("a",{href:"mailto:confusion@food.net"},"fusion-taste@food.net"))),i.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},i.a.createElement("div",{className:"text-center"},i.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},i.a.createElement("i",{className:"fa fa-google-plus"})),i.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},i.a.createElement("i",{className:"fa fa-facebook"})),i.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},i.a.createElement("i",{className:"fa fa-linkedin"})),i.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},i.a.createElement("i",{className:"fa fa-youtube"})),i.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},i.a.createElement("i",{className:"fa fa-envelope-o"}))))),i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-auto"},i.a.createElement("p",null,"\xa9 Copyright 2018 Asian Fusion Taste Restaurant")))))},v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).onDishSelect=function(e){t.setState({selectedDishId:e})},t.getDishDetailWithDishId=function(e){return e=e||t.state.selectedDishId,t.state.dishes.filter(function(a){return a.id===e})[0]},t.state={dishes:E,selectedDishId:null},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement("div",{className:"container"},i.a.createElement(f,{dishes:this.state.dishes,onClick:function(a){return e.onDishSelect(a)}}),i.a.createElement(g,{dish:this.getDishDetailWithDishId()}),i.a.createElement(b,null)))}}]),a}(n.Component),y=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.0a9a7a49.chunk.js.map