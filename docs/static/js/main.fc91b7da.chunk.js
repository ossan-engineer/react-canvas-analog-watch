(window["webpackJsonpreact-canvas-analog-watch"]=window["webpackJsonpreact-canvas-analog-watch"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},8:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),s=(n(8),function(){var e=Object(a.useRef)(null);return Object(a.useEffect)(function(){var t=e.current;if(t){var n=t.width,a=t.height,o=window.devicePixelRatio||1,r=t.getContext("2d");if(r){t.width=n*o,t.height=a*o,r.scale(o,o),t.style.width=n+"px",t.style.height=a+"px";var i=0,s=0,c=0,l=0,h=function(e){return Math.PI/180*e};!function e(){r.clearRect(0,0,n,a),function(){for(s=(new Date).getHours(),c=(new Date).getMinutes(),l=(new Date).getSeconds(),i=0;i<360;i+=6)r.save(),r.translate(n/2,a/2),r.rotate(h(i)),r.beginPath(),r.moveTo(0,-100),i%30===0?(r.lineTo(0,-90),r.lineWidth=2,r.font="13px Arial",r.textAlign="center",r.fillText((i/30||12).toString(),0,-75)):r.lineTo(0,-95),r.stroke(),r.restore(),r.save(),r.lineWidth=6,r.translate(n/2,a/2),r.rotate(h(30*s+.5*c)),r.beginPath(),r.moveTo(0,10),r.lineTo(0,-50),r.stroke(),r.restore(),r.save(),r.lineWidth=4,r.translate(n/2,a/2),r.rotate(h(6*c)),r.beginPath(),r.moveTo(0,10),r.lineTo(0,-70),r.stroke(),r.restore(),r.save(),r.strokeStyle="red",r.translate(n/2,a/2),r.rotate(h(6*l)),r.beginPath(),r.moveTo(0,10),r.lineTo(0,-80),r.stroke(),r.restore()}(),setTimeout(function(){e()},100)}()}}},[]),o.a.createElement("canvas",{width:"300",height:"260",ref:e})});i.a.render(o.a.createElement(s,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.fc91b7da.chunk.js.map