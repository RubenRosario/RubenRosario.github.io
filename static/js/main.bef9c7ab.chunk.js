(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,a,t){e.exports=t(36)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),c=t.n(r),l=t(15),s=t(16),d=t(17),i=t(19),u=t(18),m=t(1),h=t.n(m),p=(t(32),h.a.TAU),y=Math.sqrt(3),f=(1+Math.sqrt(5))/2,b=function(e,a,t){var n=new h.a.Illustration({element:".".concat(a)}),o=new h.a.Anchor({addTo:n,translate:{x:-4,y:4},scale:90}),r=e,c=y/2*2/3,l=3*c/2,s=Math.asin(.5/l);[-1,1].forEach((function(e){for(var a=0;a<4;a++){var t=new h.a.Anchor({addTo:o,rotate:{y:p/4*(a+1.5)*-1}}),n=new h.a.Anchor({addTo:t,translate:{z:.5},rotate:{x:s*e}});new h.a.Polygon({sides:3,radius:c,addTo:n,translate:{y:-c/2*e},scale:{y:e},stroke:!1,fill:!0,color:r[a+.5+.5*e],backface:!0})}})),function e(){n.rotate.x-=.01,n.rotate.y+=.01,n.rotate.z+=.01,n.updateRenderGraph(),requestAnimationFrame(e)}(),n.updateRenderGraph()},g=function(e,a){var t=new h.a.Illustration({element:".".concat(a)}),n=new h.a.Anchor({addTo:t,translate:{x:0,y:4},scale:35}),o=f*f/2,r=new h.a.Polygon({sides:5,radius:1,addTo:n,translate:{y:-o},rotate:{x:p/4},fill:!0,stroke:!1,color:e[1]});r.copy({translate:{y:o},rotate:{x:-p/4},color:e[3]}),[-1,1].forEach((function(a){for(var t={"-1":e,1:e}[a],c=0;c<5;c++){var l=new h.a.Anchor({addTo:n,rotate:{y:p/5*c}}),s=new h.a.Anchor({addTo:l,rotate:{x:p/4*a-Math.atan(2)}});r.copy({addTo:s,translate:{z:o},rotate:{z:p/2},color:t[c]})}})),function e(){t.rotate.x+=.01,t.rotate.z+=.01,t.rotate.y+=.01,t.updateRenderGraph(),requestAnimationFrame(e)}(),t.updateRenderGraph()},E=function(e,a){for(var t=new h.a.Illustration({element:".".concat(a)}),n=new h.a.Anchor({addTo:t,translate:{x:0,y:0},scale:130}),o=.5*Math.cos(p/6),r=.5+o,c=new h.a.Polygon({sides:3,radius:.5,addTo:n,translate:{y:r/2},fill:!0,stroke:!1,color:e[1]}),l=0;l<3;l++){var s=new h.a.Anchor({addTo:n,rotate:{y:p/3*-l}}),d=new h.a.Anchor({addTo:s,translate:{z:o,y:r/2},rotate:{x:-1*Math.acos(1/3)+p/4}});c.copy({addTo:d,translate:{y:-o},color:e[l]})}c.rotate.set({x:-p/4,z:-p/2}),function e(){t.rotate.x+=.01,t.rotate.y+=.01,t.rotate.z-=.01,t.updateRenderGraph(),requestAnimationFrame(e)}(),t.updateRenderGraph()},v=function(e,a){var t=new h.a.Illustration({element:".".concat(a)}),n=new h.a.Anchor({addTo:t,translate:{x:4,y:4},scale:60}),o=y/2*2/3,r=3*o/2,c=.5/Math.tan(p/10),l=.5/Math.sin(p/10),s=Math.asin(c/r),d=l-c,i=Math.asin(d/r),u=Math.sqrt(r*r-d*d);[-1,1].forEach((function(a){for(var t={"-1":["#e8daa5","#ede3ba","#d2ba55","#e2d291","#d8c269","#cdb140"],1:["#e8daa5","#ede3ba","#d2ba55","#e2d291","#d8c269","#cdb140"]}[a],r={"-1":e,1:e}[a],l=0;l<5;l++){var d=new h.a.Anchor({addTo:n,rotate:{y:p/5*-l},translate:{y:u/2*a}}),m=-s,y=a>0;m+=y?p/2:0;var f=new h.a.Anchor({addTo:d,translate:{z:c*a},rotate:{x:m}}),b=new h.a.Polygon({sides:3,radius:o,addTo:f,translate:{y:-o/2},stroke:!1,fill:!0,color:t[l]}),g=-i;g+=y?0:p/2;var E=f.copy({rotate:{x:g}});b.copy({addTo:E,translate:{y:-o/2},rotate:{y:p/2},color:r[l]})}})),function e(){t.rotate.x+=.01,t.rotate.y-=.01,t.rotate.z+=.01,t.updateRenderGraph(),requestAnimationFrame(e)}(),t.updateRenderGraph()},w=function(e){var a=e.colors,t=e.illoSelector,r=e.polygonType;return Object(n.useEffect)((function(){switch(r){case"dodecahedron":g(a,t);break;case"octahedron":b(a,t);break;case"tetrahedron":E(a,t);break;case"icosahedron":v(a,t);break;default:v(a,t)}}),[a,t,r]),o.a.createElement("canvas",{width:"200",height:"200",className:t,onMouseOver:e.onMouseOver})},T=(t(33),function(e){var a,t=e.polygonType,r=e.colors,c=e.polygonName,l=Object(n.useState)("polygon-name-hide"),s=Object(u.a)(l,2),d=s[0],i=s[1];switch(t){case"tetrahedron":a="chocolate";break;case"icosahedron":a="dark-chocolate";break;case"dodecahedron":a="sand";break;case"octahedron":a="camel"}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d,onMouseLeave:function(){i("polygon-name-hide ")}},o.a.createElement("span",null,c)),o.a.createElement(w,{polygonType:t,illoSelector:"".concat(t,"-container"),colors:r,onMouseOver:function(){i("polygon-name-show tracking-in-expand ".concat(a))}}))}),A=(t(34),function(e){return o.a.createElement("main",{className:"landing"},o.a.createElement("section",{className:"welcome-container"},o.a.createElement("p",{className:"welcome-message fade-in"},o.a.createElement("span",{className:"greeting"},"Hello there!"),o.a.createElement("span",{className:"name"},"I am Ruben."),o.a.createElement("span",{className:"message"},"Welcome to my website! Please choose a stone to start.")," ")),o.a.createElement("section",{className:"polygons-container"},o.a.createElement("div",{className:"landing-item about bounce-in-top1"},o.a.createElement(T,{polygonName:"About me",polygonType:"octahedron",colors:["#211912","#533e2d","#211912","#533e2d","#211912","#533e2d"]})),o.a.createElement("div",{className:"landing-item education bounce-in-top2"},o.a.createElement(T,{polygonName:"Education",polygonType:"icosahedron",illoSelector:"icosahedron-container",colors:["#d8c269","#e2d291","#e8daa5","#d8c269","#d2ba55","#ede3ba"]})),o.a.createElement("div",{className:"landing-item skills bounce-in-top3"},o.a.createElement(T,{polygonName:"Skills",polygonType:"dodecahedron",illoSelector:"dodecahedron-container",colors:["#423224","#533E2D","#74573f","#644a36","#856348","#533E2D","#74573f"]})),o.a.createElement("div",{className:"landing-item interests bounce-in-top4"},o.a.createElement(T,{polygonName:"Interests",polygonType:"tetrahedron",illoSelector:"tetrahedron-container",colors:["#B88B4A","#a77d42","#bf975c","#c6a26f","#B88B4A","#c6a26f"]}))))}),k=function(){return o.a.createElement(A,null)},N=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))}}]),t}(n.Component);t(35);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bef9c7ab.chunk.js.map