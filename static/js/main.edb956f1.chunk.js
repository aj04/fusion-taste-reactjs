(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(4),o=a.n(r),c=(a(21),a(23),a(5)),s=a(6),l=a(8),m=a(7),d=a(9),u=a(3),h=(a(25),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.selectedDish;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-5 m-1"},this.renderDish(e)),i.a.createElement("div",{className:"col-12 col-md-5 m-1"},this.renderComments(e)))}},{key:"renderComments",value:function(e){if(e&&null!=e.comments){var t=e.comments.map(function(e){var t=new Date(e.date).toDateString();return i.a.createElement("li",{key:e.id},i.a.createElement("p",null,e.comment),i.a.createElement("p",null," -- ",e.author,", ",t))});return i.a.createElement("div",{className:"p-3"},i.a.createElement("h4",null,"Comments"),i.a.createElement("ul",{className:"list-unstyled"},t))}return i.a.createElement("div",null)}},{key:"renderDish",value:function(e){return null!=e?i.a.createElement(u.a,null,i.a.createElement(u.c,{top:!0,src:e.image,alt:e.name}),i.a.createElement(u.b,null,i.a.createElement(u.f,null,e.name),i.a.createElement(u.e,null,e.description))):i.a.createElement("div",null)}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={selectedDish:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this,t=this.props.dishes.map(function(t){return i.a.createElement("div",{key:t.id,className:"col-12 col-md-5 m-1"},i.a.createElement(u.a,{onClick:function(){return e.onDishSelect(t)}},i.a.createElement(u.c,{width:"100%",src:t.image,alt:t.name}),i.a.createElement(u.d,null,i.a.createElement(u.f,null,t.name))))});return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},t),i.a.createElement("div",{className:"row"},i.a.createElement(h,{selectedDish:this.state.selectedDish})))}}]),t}(n.Component),p=[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]}],y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={dishes:p},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.g,{dark:!0,color:"primary"},i.a.createElement("div",{className:"container"},i.a.createElement(u.h,{href:"/"}," Asian Fusion Taste Restaurant "))),i.a.createElement(g,{dishes:this.state.dishes}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.edb956f1.chunk.js.map