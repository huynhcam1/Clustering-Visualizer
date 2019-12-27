(this["webpackJsonpclustering-visualizer"]=this["webpackJsonpclustering-visualizer"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(43),l=a.n(r),s=(a(55),a(56),a(6)),i=a(7),c=a(48),u=a(44),h=a(2),d=a(49),y=(a(57),a(45)),v=a(47),f=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"algorithm",value:function(e,t,a){var n=[];this.dataToArray(e,n,a,t),console.log(n);var o=[];this.repeatRange(o,t,a),this.shuffle(o),console.log(o);for(var r=0;r<10;r++){var l=[];this.zeros(l,a,t);for(var s=0;s<a;s++)l[s][o[s]-1]=1;for(var i=this.colSums(l,t,a),c=[],u=1;u<=t;u++){for(var h=[],d=0;d<a;d++)o[d]===u?h.push(n[d]):h.push([0,0]);c.push(this.colSums(h,2,a)),c[u-1][0]/=i[u-1],c[u-1][1]/=i[u-1]}for(var y=0;y<a;y++){for(var v=[],f=0;f<t;f++){var m=n[y][0]-c[f][0];m*=m;var p=n[y][1]-c[f][1];p*=p;var g=Math.sqrt(m+p);v.push(g)}for(var x=Number.MAX_VALUE,b=0;b<v.length;b++)v[b]<x&&(o[y]=b+1,x=v[b])}}return o}},{key:"dataToArray",value:function(e,t,a,n){for(var o=0;o<a;o++)t.push([]),t[o][0]=e.data.datasets[0].data[o].x,t[o][1]=e.data.datasets[0].data[o].y}},{key:"repeatRange",value:function(e,t,a){for(var n=0;n<a;)for(var o=1;o<t+1&&n<a;o++)e.push(o),n++}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}},{key:"colSums",value:function(e,t,a){for(var n=[],o=0;o<t;o++)n.push(0);for(var r=0;r<a;r++)for(var l=0;l<t;l++)n[l]+=e[r][l];return n}},{key:"zeros",value:function(e,t,a){for(var n=0;n<t;n++){e.push([0]);for(var o=0;o<a;o++)e[n][o]=0}}}]),e}(),m=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"algorithm",value:function(e,t,a){var n=[3,2,3,1,2,1],o=[];this.zeros(o,a,t);for(var r=0;r<a;r++)o[r][n[r]-1]=1;var l=this.colSums(o,t,a),s=[];this.repeat(s,a,t);this.divideArray(l,s);var i=[];this.dataToArray(e,i,a,t);var c=[];this.zeros(c,3,2);for(var u=[],h=0;h<t;h++){u.push([]);for(var d=0;d<a;d++)c[h][0]+=i[d][0]*o[d][h],c[h][1]+=i[d][1]*o[d][h],u[h].push([i[d][0]*o[d][h],i[d][1]*o[d][h]]);c[h][0]/=l[h],c[h][1]/=l[h]}for(var y=0;y<3;y++){var v=[];this.zeros(v,2,2);for(var f=0;f<2;f++){for(var m=0;m<a;m++)v[f][0]+=u[y][m][f]*i[m][0],v[f][1]+=u[y][m][f]*i[m][1];v[f][0]/=l[1],v[f][1]/=l[1]}u[y]=v}console.log(u)}},{key:"dataToArray",value:function(e,t,a,n){for(var o=0;o<a;o++)t.push([]),t[o][0]=e.data.datasets[0].data[o].x,t[o][1]=e.data.datasets[0].data[o].y}},{key:"repeatRange",value:function(e,t,a){for(var n=0;n<a;)for(var o=1;o<t+1&&n<a;o++)e.push(o),n++}},{key:"repeat",value:function(e,t,a){for(var n=0;n<a;n++)e.push(t)}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}},{key:"zeros",value:function(e,t,a){for(var n=0;n<t;n++){e.push([0]);for(var o=0;o<a;o++)e[n][o]=0}}},{key:"colSums",value:function(e,t,a){for(var n=[],o=0;o<t;o++)n.push(0);for(var r=0;r<a;r++)for(var l=0;l<t;l++)n[l]+=e[r][l];return n}},{key:"divideArray",value:function(e,t){for(var a=[],n=0;n<e.length;n++)a.push(e[n]/t[n]);return a}}]),e}(),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).chartReference={},a.MAX_WIDTH=30,a.MAX_HEIGHT=16,a.removedPoint=!1,a.dataset="none",a.algorithm="none",a.clusterCount=1,a.seed=1,a.state={type:"scatter",data:{datasets:[{label:"Scatter Dataset",data:[{x:1,y:1},{x:2,y:2},{x:3.5,y:3},{x:3.6,y:3}],pointBackgroundColor:["Blue","Blue","Blue","Blue"],pointHoverRadius:5,pointRadius:5}]},options:{scales:{xAxes:[{ticks:{min:0,max:a.MAX_WIDTH}}],yAxes:[{ticks:{min:0,max:a.MAX_HEIGHT}}]}}},a.handleSubmitDataset=a.handleSubmitDataset.bind(Object(h.a)(a)),a.handleChangeDataset=a.handleChangeDataset.bind(Object(h.a)(a)),a.handleSubmitAlgorithm=a.handleSubmitAlgorithm.bind(Object(h.a)(a)),a.handleChangeAlgorithm=a.handleChangeAlgorithm.bind(Object(h.a)(a)),a.handleChangeClusterCount=a.handleChangeClusterCount.bind(Object(h.a)(a)),a.onMouseClick=a.onMouseClick.bind(Object(h.a)(a)),a.changeColor=a.changeColor.bind(Object(h.a)(a)),a.toggleDropDownMenu=a.toggleDropDownMenu.bind(Object(h.a)(a)),a.clearData=a.clearData.bind(Object(h.a)(a)),a.debugButton=a.debugButton.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(document.getElementsByClassName("dropbtn")[0].style)}},{key:"handleSubmitDataset",value:function(e){"unvotes"===this.dataset&&this.plotUNVotes(),e.preventDefault()}},{key:"handleChangeDataset",value:function(e){this.dataset=e.target.value,console.log(e.target.value),this.toggleDropDownMenu(0)}},{key:"handleSubmitAlgorithm",value:function(e){if("kmeans"===this.algorithm){var t=this.clusterCount,a=this.chartReference.chartInstance.data.datasets[0].data.length,n=f.prototype.algorithm(this.chartReference.chartInstance,t,a);console.log(n),this.changeColor(this.chartReference.chartInstance,n)}else if("em"===this.algorithm){var o=this.clusterCount;m.prototype.algorithm(this.chartReference.chartInstance,o,6)}e.preventDefault()}},{key:"handleChangeAlgorithm",value:function(e){this.algorithm=e.target.value,console.log(e.target.value),this.toggleDropDownMenu(1)}},{key:"handleChangeClusterCount",value:function(e){this.clusterCount=e.target.value,console.log(e.target.value),this.toggleDropDownMenu(2)}},{key:"onMouseClick",value:function(e){if(!this.removedPoint){var t=this.chartReference.chartInstance,a=t.chartArea.left,n=t.chartArea.right-a,o=((e.nativeEvent.offsetX-a)/n*this.MAX_WIDTH).toFixed(2),r=t.chartArea.top,l=t.chartArea.bottom-r,s=e.nativeEvent.offsetY-r,i=(this.MAX_HEIGHT-s/l*this.MAX_HEIGHT).toFixed(2);i<=this.MAX_WIDTH&&i<=this.MAX_HEIGHT&&(this.addData(t,{x:parseFloat(o),y:parseFloat(i)}),console.log("added ("+o+", "+i+")"))}}},{key:"changeColor",value:function(e,t){for(var a=0,n=function(n){setTimeout((function(){1===t[n]?e.data.datasets[0].pointBackgroundColor[n]="Blue":2===t[n]?e.data.datasets[0].pointBackgroundColor[n]="Green":e.data.datasets[0].pointBackgroundColor[n]="Red",e.update()}),25*a),a++},o=0;o<t.length;o++)n(o)}},{key:"psora",value:function(e,t){var a=Math.PI*(e^t);return a-Math.floor(a)}},{key:"addData",value:function(e,t){e.data.datasets.forEach((function(e){e.data.push(t),e.pointBackgroundColor.push("Blue")})),e.update()}},{key:"removeData",value:function(e){if(void 0===e[0])console.log("nothing there"),this.removedPoint=!1;else{var t=this.chartReference.chartInstance,a=e[0]._index;console.log(a),t.data.datasets[0].data.splice(a,1),t.data.datasets[0].pointBackgroundColor.splice(a,1),t.update(),this.removedPoint=!0}}},{key:"plotUNVotes",value:function(){var e=this.chartReference.chartInstance;this.clearData();var t=0;v.forEach((function(a){setTimeout((function(){e.data.datasets[0].data.push(a),e.data.datasets[0].pointBackgroundColor.push("Blue"),e.update()}),25*t),t++}))}},{key:"clearData",value:function(){for(var e=this.chartReference.chartInstance;this.state.data.datasets[0].data.length>0;)e.data.labels.pop(),e.data.datasets.forEach((function(e){e.data.pop(),e.pointBackgroundColor.pop()}));e.update()}},{key:"toggleDropDownMenu",value:function(e){for(var t=document.getElementsByClassName("dropdown-content"),a=0;a<3;a++)a===e?"block"===t[a].style.display?t[a].style.display="none":t[a].style.display="block":t[a].style.display="none"}},{key:"debugButton",value:function(){document.getElementsByClassName("dropbtn")[0].firstChild.data="UN Votes"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Clustering Visualizer"),o.a.createElement("ul",null,o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:function(){return e.toggleDropDownMenu(0)}},"Datasets"),o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("button",{type:"button",value:"unvotes",onClick:this.handleChangeDataset}," UN Votes "))),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:this.handleSubmitDataset},"Visualize!")),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:this.clearData},"Clear Graph")),o.a.createElement("li",{className:"dropdown"},o.a.createElement("a",{className:"blank"})),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:function(){return e.toggleDropDownMenu(1)}},"Algorithms"),o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("button",{type:"button",value:"kmeans",onClick:this.handleChangeAlgorithm},"K-Means"),o.a.createElement("button",{type:"button",value:"em",onClick:this.handleChangeAlgorithm},"Expectation-Maximization (in progress)"))),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:function(){return e.toggleDropDownMenu(2)}},"Cluster Count"),o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("button",{type:"button",value:"1",onClick:this.handleChangeClusterCount},"1"),o.a.createElement("button",{type:"button",value:"2",onClick:this.handleChangeClusterCount},"2"),o.a.createElement("button",{type:"button",value:"3",onClick:this.handleChangeClusterCount},"3"))),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:this.handleSubmitAlgorithm},"Cluster!")),o.a.createElement("li",{className:"dropdown"},o.a.createElement("option",{className:"dropbtn",onClick:this.debugButton},"Debug Button (do not click)"))),o.a.createElement("div",{className:"chart",onClick:this.removedPoint?void 0:this.onMouseClick},o.a.createElement(y.a,{ref:function(t){return e.chartReference=t},data:this.state.data,options:this.state.options,onElementsClick:function(t){e.removeData(t)}})))}}]),t}(n.Component);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e){e.exports=JSON.parse('[{"x":25.47,"y":7.04},{"x":14.58,"y":12.1},{"x":4.54,"y":8.41},{"x":8.82,"y":10.1},{"x":16.53,"y":13.63},{"x":25.77,"y":10.61},{"x":23.54,"y":1.76},{"x":5.9,"y":9.86},{"x":20.47,"y":12.45},{"x":19.74,"y":13.04},{"x":18.95,"y":13.28},{"x":25.53,"y":10.14},{"x":10.45,"y":1.98},{"x":23.28,"y":9.29},{"x":4.46,"y":8.67},{"x":15.53,"y":14.79},{"x":27.22,"y":8.17},{"x":18.38,"y":11.53},{"x":14.28,"y":13.96},{"x":28.97,"y":2.04},{"x":14.59,"y":8.05},{"x":6.82,"y":10.07},{"x":20.02,"y":12.76},{"x":25.04,"y":10.87},{"x":22.43,"y":4.95},{"x":8.2,"y":7.38},{"x":5.77,"y":9.4},{"x":22.59,"y":11.08},{"x":9.54,"y":9.43},{"x":22,"y":10.69},{"x":9.91,"y":2.17},{"x":7,"y":10.3},{"x":25.83,"y":4.45},{"x":26.9,"y":9.58},{"x":7.66,"y":10.58},{"x":0.73,"y":5.36},{"x":6.44,"y":10.02},{"x":19.23,"y":13.22},{"x":7.8,"y":10.02},{"x":23.19,"y":11.67},{"x":21.35,"y":11.65},{"x":23.95,"y":10.23},{"x":28.39,"y":2.75},{"x":6.2,"y":10.04},{"x":26.13,"y":10.04},{"x":23.46,"y":10.22},{"x":11.49,"y":11.06},{"x":17.6,"y":12.09},{"x":21.65,"y":11.28},{"x":5.94,"y":9.74},{"x":7.63,"y":10.81},{"x":23.74,"y":10.22},{"x":7.23,"y":10.3},{"x":26.05,"y":9.24},{"x":14.94,"y":12.42},{"x":14.86,"y":14.55},{"x":15.18,"y":12.86},{"x":21.98,"y":12.11},{"x":9.82,"y":1.54},{"x":6.59,"y":10.11},{"x":19.79,"y":0},{"x":21.28,"y":12.07},{"x":8.22,"y":9.75},{"x":25.22,"y":9.7},{"x":28.3,"y":8.88},{"x":8.23,"y":10.29},{"x":28.84,"y":2.17},{"x":23.16,"y":9.25},{"x":20.62,"y":11.67},{"x":21.67,"y":11.74},{"x":20.02,"y":12.23},{"x":4.87,"y":8.93},{"x":13.6,"y":2.04},{"x":15.91,"y":13.09},{"x":0,"y":5.06},{"x":23.24,"y":11.2},{"x":22.2,"y":11.78}]')},50:function(e,t,a){e.exports=a(153)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.8620a76f.chunk.js.map