(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a.n(s),i=(a(24),a(2)),c=a(3),l=a(5),m=a(4),h=a(6),u=a(8),p=a.n(u),d=a(16),g=a.n(d),w=a(17),E=a.n(w),v=(a(44),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resultsComponent"},r.a.createElement("div",{className:"resultsInfo"},r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{src:this.props.img,alt:"",role:"presentation"})),r.a.createElement("div",{className:"showInformation"},r.a.createElement("h2",{className:"showTitle"},this.props.name),this.props.genre.map(function(e,t){return r.a.createElement("h3",{key:t,className:"showGenre"},e)}),r.a.createElement("p",{className:"showStartDate"},this.props.showStart?"First Aired: ".concat(this.props.showStart):null),r.a.createElement("p",{className:"showSummary"},this.props.bio),r.a.createElement("p",{className:"showRating"},this.props.rating?"Average rating: ".concat(this.props.rating," / 10"):null))),r.a.createElement("div",{className:"cast"},0!==this.props.cast.length&&r.a.createElement("h2",null,"Top Billed Cast"),this.props.cast.map(function(e,t){return r.a.createElement("div",{key:t,className:"castInformation"},r.a.createElement("div",{className:"castImage"},r.a.createElement("img",{src:e.person.image.medium,alt:"",role:"presentation"})),r.a.createElement("div",{className:"castName"},r.a.createElement("p",null,e.person.name)))})),0!==this.props.cast.length&&r.a.createElement("footer",null,r.a.createElement("p",null,"Created by Christina Greene. Data sourced from ",r.a.createElement("a",{href:"https://www.tzmaze.com"},"TVmaze"),".")))}}]),t}(n.Component)),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({userInput:t.target.value})},e.getTvData=function(t){t.preventDefault();var a="https://api.tvmaze.com/singlesearch/shows?q=".concat(e.state.userInput);p()({method:"GET",url:a,dataResponse:"json"}).then(function(t){var a=(t=t.data).summary.replace(/<[^>]+>/g," ");e.setState({img:t.image.original,name:t.name,genre:t.genres,showStart:t.premiered,bio:a,rating:t.rating.average,showId:t.id,userInput:""},function(){e.getCastData()})}).catch(function(e){g.a.fire("Please enter a valid TV Show title.")})},e.getCastData=function(){var t="https://api.tvmaze.com/shows/".concat(e.state.showId,"/cast");p()({method:"GET",url:t,dataResponse:"json"}).then(function(t){e.setState({cast:t.data})}),E()(document.querySelector(".resultsComponent"))},e.state={img:"",name:"",genre:[],showStart:"",bio:[],rating:"",showId:"",userInput:"",cast:[],error:null},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App wrapper"},r.a.createElement("header",null,r.a.createElement("h1",null,"Know Your Show!"),r.a.createElement("h2",null,"Enter your favourite TV Show title to learn more about it.")),r.a.createElement("form",{action:"submit"},r.a.createElement("label",{htmlFor:"tvShowInput",className:"visuallyHidden"},"Enter a TV Show name."),r.a.createElement("input",{type:"text",id:"tvShowInput",placeholder:"Enter a title...",onChange:this.handleChange,value:this.state.userInput,required:!0}),r.a.createElement("button",{onClick:this.getTvData},"Tell me more about my show!")),r.a.createElement(v,{img:this.state.img,name:this.state.name,genre:this.state.genre,showStart:this.state.showStart,bio:this.state.bio,rating:this.state.rating,cast:this.state.cast}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.6100fd4b.chunk.js.map