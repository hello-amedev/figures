import{Dt as e,Et as t,K as n,b as r,ft as i,l as a,lt as o,m as s,mt as c,nt as l,pt as u,q as d}from"./three.module.CR4b1j-u.js";import{a as f,t as p}from"./tokens.Du4ws3ol.js";import{c as m,g as h,l as g}from"./clues.wDIbbLRb.js";var _=class{scene=new u;camera=new l(-1,1,1,-1,0,1);material;constructor(){this.material=new c({uniforms:{uTop:{value:h(p.white)},uMid:{value:h(f.bgMid)},uLow:{value:h(f.bgLow)},uAccent:{value:h(p.aqua)},uGrainAmt:{value:.035},uAspect:{value:1},uView:{value:new t(0,1)},uSeed:{value:7}},vertexShader:m,fragmentShader:`
				uniform vec3 uTop;
				uniform vec3 uMid;
				uniform vec3 uLow;
				uniform vec3 uAccent;
				uniform float uGrainAmt;
				uniform float uAspect;
				uniform vec2 uView;
				uniform float uSeed;
				varying vec2 vUv;
				${g}
				void main() {
					vec2 uv = vec2( uView.x + vUv.x * uView.y, vUv.y );
					float t = uv.y;
					vec3 c = mix( uLow, uMid, smoothstep( 0.0, 0.62, t ) );
					c = mix( c, uTop, smoothstep( 0.38, 1.0, t ) );
					vec2 q = vec2( ( uv.x - 0.12 ) * uAspect, uv.y - 0.06 );
					c = mix( c, uAccent, 0.13 * exp( -dot( q, q ) * 2.4 ) );
					vec2 q2 = vec2( ( uv.x - 0.9 ) * uAspect, uv.y - 0.95 );
					c = mix( c, uTop, 0.6 * exp( -dot( q2, q2 ) * 2.8 ) );
					c += ( grain( gl_FragCoord.xy, uSeed ) - 0.5 ) * uGrainAmt;
					gl_FragColor = vec4( c, 1.0 );
				}
			`,depthTest:!1,depthWrite:!1});let e=new n(b(),this.material);e.frustumCulled=!1,this.scene.add(e)}render(e,t,n=0,r=1){this.material.uniforms.uAspect.value=t,this.material.uniforms.uView.value.set(n,r),e.render(this.scene,this.camera)}},v=class{mesh;constructor(t){let i=[],o=[],s=[],l=[],u=new e(0,1,0),d=new e,f=new e,m=new e,g=new e,_=new e;for(let e of[`L`,`R`]){let n=t.blades[e],r=[],a=()=>{r.length>=2&&this.addRun(r,n,t,i,o,s,l,{up:u,a:d,b:f,dir:m,nrm:g,toPelvis:_}),r=[]};for(let e=0;e<t.frameCount;e++)n.contact[e]?r.push(e):a();a()}let v=new a;v.setAttribute(`position`,new r(i,3)),v.setAttribute(`aFrame`,new r(o,1)),v.setAttribute(`aSide`,new r(s,1)),v.setIndex(l);let y=new c({uniforms:{uFrame:{value:0},uFirst:{value:0},uColor:{value:h(p.aqua)},uAlpha:{value:.9}},vertexShader:`
				attribute float aFrame;
				attribute float aSide;
				varying float vFrame;
				varying float vSide;
				void main() {
					vFrame = aFrame;
					vSide = aSide;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}
			`,fragmentShader:`
				uniform float uFrame;
				uniform float uFirst;
				uniform vec3 uColor;
				uniform float uAlpha;
				varying float vFrame;
				varying float vSide;
				void main() {
					if ( vFrame > uFrame || vFrame < uFirst ) discard;
					float edge = 1.0 - smoothstep( 0.55, 1.0, abs( vSide ) );
					gl_FragColor = vec4( uColor, uAlpha * edge );
				}
			`,transparent:!0,depthWrite:!1,side:2});this.mesh=new n(v,y),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}addRun(e,t,n,r,i,a,o,s){let c=r.length/3,l=(e,n)=>n.set((t.toe[e][0]+t.heel[e][0])/2,0,(t.toe[e][2]+t.heel[e][2])/2);for(let t=0;t<e.length;t++){let u=e[t],d=e[Math.max(0,t-1)],f=e[Math.min(e.length-1,t+1)];l(d,s.a),l(f,s.b),s.dir.subVectors(s.b,s.a),s.dir.lengthSq()<1e-10&&s.dir.set(1,0,0),s.dir.normalize(),s.nrm.crossVectors(s.up,s.dir).normalize(),l(u,s.a);let p=n.pelvis[u];s.toPelvis.set(p[0]-s.a.x,p[1],p[2]-s.a.z).normalize();let m=Math.acos(Math.min(1,Math.max(-1,s.toPelvis.y))),h=.01+.045*Math.min(1,Math.sin(m)/Math.sin(35*Math.PI/180));for(let e of[-1,1])r.push(s.a.x+s.nrm.x*h*e,.002,s.a.z+s.nrm.z*h*e),i.push(u),a.push(e);if(t>0){let e=c+t*2;o.push(e-2,e-1,e,e-1,e+1,e)}}}setFrame(e,t){this.mesh.material.uniforms.uFrame.value=e,this.mesh.material.uniforms.uFirst.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},y=class{mesh;q=new o;yAxis=new e(0,1,0);constructor(){let e=new s(.007,.007,1.9,8,1,!0),t=h(p.blue),r=new d({transparent:!0,opacity:0,depthWrite:!1});r.color.setRGB(t.x,t.y,t.z,i),this.mesh=new n(e,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12}update(t,n,r){if(this.mesh.material.opacity=r,this.mesh.visible=r>.01,!this.mesh.visible)return;let i=new e().fromArray(t.pelvis,n*3),a=new e().fromArray(t.up,n*3);this.q.setFromUnitVectors(this.yAxis,a),this.mesh.quaternion.copy(this.q),this.mesh.position.copy(i).addScaledVector(a,.35)}};function b(){let e=new a;return e.setAttribute(`position`,new r([-1,-1,0,3,-1,0,-1,3,0],3)),e}export{_ as n,v as r,y as t};