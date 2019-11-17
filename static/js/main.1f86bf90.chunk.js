(this["webpackJsonpclustering-visualizer"]=this["webpackJsonpclustering-visualizer"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(46),c=a.n(i),r=(a(54),a(55),a(16)),s=a(17),l=a(19),u=a(18),h=a(5),d=a(20),m=(a(56),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={algorithm:"none"},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){"unvotes"===this.state.algorithm&&(console.log("unvotes"),this.plotUNVotes()),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({algorithm:e.target.value})}},{key:"plotUNVotes",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"header",onSubmit:this.handleSubmit},o.a.createElement("h1",null,"Clustering Visualizer"),o.a.createElement("form",{onChange:this.handleChange},o.a.createElement("label",null,"Example Datasets:",o.a.createElement("select",{width:100,height:100},o.a.createElement("option",{value:"none"},"None"),o.a.createElement("option",{value:"unvotes"},"UN Votes"))),o.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),v=(a(57),a(47)),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).chartReference={},a.MAX_WIDTH=30,a.MAX_HEIGHT=30,a.removedPoint=!1,a.state={type:"scatter",data:{datasets:[{label:"Scatter Dataset",data:[{x:1,y:1},{x:2,y:2},{x:3.5,y:3},{x:3.6,y:3}],pointBackgroundColor:"rgba(0, 0, 255, 1)",pointHoverRadius:5,pointRadius:5}]},options:{scales:{xAxes:[{ticks:{min:0,max:a.MAX_WIDTH}}],yAxes:[{ticks:{min:0,max:a.MAX_HEIGHT}}]}}},a.onMouseClick=a.onMouseClick.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onMouseClick",value:function(e){if(!this.removedPoint){var t=this.chartReference.chartInstance,a=t.chartArea.left,n=t.chartArea.right-a,o=(e.nativeEvent.offsetX-a)/n*this.MAX_WIDTH,i=t.chartArea.top,c=t.chartArea.bottom-i,r=(e.nativeEvent.offsetY-i)/c*this.MAX_HEIGHT;this.addData(t,"Scatter Dataset",{x:o.toFixed(2),y:(this.MAX_HEIGHT-r).toFixed(2)}),console.log("added ("+o.toFixed(2)+", "+(10-r).toFixed(2)+")")}}},{key:"addData",value:function(e,t,a){e.data.labels.push(t),e.data.datasets.forEach((function(e){e.data.push(a)})),e.update()}},{key:"removeData",value:function(e){if(void 0===e[0])console.log("nothing there"),this.removedPoint=!1;else{var t=e[0]._index;console.log(t);var a=this.chartReference.chartInstance;a.data.datasets[0].data.splice(t,1),a.update(),this.removedPoint=!0}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"chart",onClick:this.removedPoint?void 0:this.onMouseClick},o.a.createElement(v.a,{ref:function(t){return e.chartReference=t},data:this.state.data,options:this.state.options,onElementsClick:function(t){e.removeData(t)}}))}}]),t}(n.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){e.exports=a(153)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.1f86bf90.chunk.js.map