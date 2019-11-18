(this["webpackJsonpclustering-visualizer"]=this["webpackJsonpclustering-visualizer"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(41),s=a.n(i),l=(a(55),a(56),a(42)),r=a(43),c=a(48),y=a(44),x=a(5),h=a(49),u=(a(57),a(45)),d=a(47),m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(y.a)(t).call(this,e))).chartReference={},a.MAX_WIDTH=30,a.MAX_HEIGHT=16,a.removedPoint=!1,a.algorithm="none",a.state={type:"scatter",data:{datasets:[{label:"Scatter Dataset",data:[{x:1,y:1},{x:2,y:2},{x:3.5,y:3},{x:3.6,y:3}],pointBackgroundColor:"rgba(0, 0, 255, 1)",pointHoverRadius:5,pointRadius:5}]},options:{scales:{xAxes:[{ticks:{min:0,max:a.MAX_WIDTH}}],yAxes:[{ticks:{min:0,max:a.MAX_HEIGHT}}]}}},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.onMouseClick=a.onMouseClick.bind(Object(x.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){"unvotes"===this.algorithm&&this.plotUNVotes(),e.preventDefault()}},{key:"handleChange",value:function(e){this.algorithm=e.target.value,console.log(e.target.value)}},{key:"onMouseClick",value:function(e){if(!this.removedPoint){var t=this.chartReference.chartInstance,a=t.chartArea.left,n=t.chartArea.right-a,o=((e.nativeEvent.offsetX-a)/n*this.MAX_WIDTH).toFixed(2),i=t.chartArea.top,s=t.chartArea.bottom-i,l=e.nativeEvent.offsetY-i,r=(this.MAX_HEIGHT-l/s*this.MAX_HEIGHT).toFixed(2);r<=this.MAX_WIDTH&&r<=this.MAX_HEIGHT&&(this.addData(t,"Scatter Dataset",{x:o,y:r}),console.log("added ("+o+", "+r+")"))}}},{key:"addData",value:function(e,t,a){e.data.labels.push(t),e.data.datasets.forEach((function(e){e.data.push(a)})),e.update()}},{key:"removeData",value:function(e){if(void 0===e[0])console.log("nothing there"),this.removedPoint=!1;else{var t=e[0]._index;console.log(t);var a=this.chartReference.chartInstance;a.data.datasets[0].data.splice(t,1),a.update(),this.removedPoint=!0}}},{key:"plotUNVotes",value:function(){for(var e=this.chartReference.chartInstance;this.state.data.datasets[0].data.length>0;)e.data.labels.pop(),e.data.datasets.forEach((function(e){e.data.pop()}));var t=0;d.forEach((function(a){setTimeout((function(){e.data.datasets[0].data.push(a),e.update()}),25*t),t++,console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Clustering Visualizer"),o.a.createElement("div",{className:"datasets",onSubmit:this.handleSubmit},o.a.createElement("form",{onChange:this.handleChange},o.a.createElement("label",null,"Example Datasets:",o.a.createElement("select",{width:100,height:100},o.a.createElement("option",{value:"none"},"None"),o.a.createElement("option",{value:"unvotes"},"UN Votes"))),o.a.createElement("input",{type:"submit",value:"Submit"}))),o.a.createElement("div",{className:"algorithms",onSubmit:this.handleSubmit},o.a.createElement("form",{onChange:this.handleChange},o.a.createElement("label",null,"Algorithms:",o.a.createElement("select",{width:100,height:100},o.a.createElement("option",{value:"none"},"None"),o.a.createElement("option",{value:"em"},"EM Algorithm"))),o.a.createElement("input",{type:"submit",value:"Submit"}))),o.a.createElement("div",{className:"chart",onClick:this.removedPoint?void 0:this.onMouseClick},o.a.createElement(u.a,{ref:function(t){return e.chartReference=t},data:this.state.data,options:this.state.options,onElementsClick:function(t){e.removeData(t)}})))}}]),t}(n.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e){e.exports=JSON.parse('[{"x":25.47,"y":7.04},{"x":14.58,"y":12.1},{"x":4.54,"y":8.41},{"x":8.82,"y":10.1},{"x":16.53,"y":13.63},{"x":25.77,"y":10.61},{"x":23.54,"y":1.76},{"x":5.9,"y":9.86},{"x":20.47,"y":12.45},{"x":19.74,"y":13.04},{"x":18.95,"y":13.28},{"x":25.53,"y":10.14},{"x":10.45,"y":1.98},{"x":23.28,"y":9.29},{"x":4.46,"y":8.67},{"x":15.53,"y":14.79},{"x":27.22,"y":8.17},{"x":18.38,"y":11.53},{"x":14.28,"y":13.96},{"x":28.97,"y":2.04},{"x":14.59,"y":8.05},{"x":6.82,"y":10.07},{"x":20.02,"y":12.76},{"x":25.04,"y":10.87},{"x":22.43,"y":4.95},{"x":8.2,"y":7.38},{"x":5.77,"y":9.4},{"x":22.59,"y":11.08},{"x":9.54,"y":9.43},{"x":22,"y":10.69},{"x":9.91,"y":2.17},{"x":7,"y":10.3},{"x":25.83,"y":4.45},{"x":26.9,"y":9.58},{"x":7.66,"y":10.58},{"x":0.73,"y":5.36},{"x":6.44,"y":10.02},{"x":19.23,"y":13.22},{"x":7.8,"y":10.02},{"x":23.19,"y":11.67},{"x":21.35,"y":11.65},{"x":23.95,"y":10.23},{"x":28.39,"y":2.75},{"x":6.2,"y":10.04},{"x":26.13,"y":10.04},{"x":23.46,"y":10.22},{"x":11.49,"y":11.06},{"x":17.6,"y":12.09},{"x":21.65,"y":11.28},{"x":5.94,"y":9.74},{"x":7.63,"y":10.81},{"x":23.74,"y":10.22},{"x":7.23,"y":10.3},{"x":26.05,"y":9.24},{"x":14.94,"y":12.42},{"x":14.86,"y":14.55},{"x":15.18,"y":12.86},{"x":21.98,"y":12.11},{"x":9.82,"y":1.54},{"x":6.59,"y":10.11},{"x":19.79,"y":0},{"x":21.28,"y":12.07},{"x":8.22,"y":9.75},{"x":25.22,"y":9.7},{"x":28.3,"y":8.88},{"x":8.23,"y":10.29},{"x":28.84,"y":2.17},{"x":23.16,"y":9.25},{"x":20.62,"y":11.67},{"x":21.67,"y":11.74},{"x":20.02,"y":12.23},{"x":4.87,"y":8.93},{"x":13.6,"y":2.04},{"x":15.91,"y":13.09},{"x":0,"y":5.06},{"x":23.24,"y":11.2},{"x":22.2,"y":11.78}]')},50:function(e,t,a){e.exports=a(153)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.bfcad6dc.chunk.js.map