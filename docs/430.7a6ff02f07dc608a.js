"use strict";(self.webpackChunkgestion_peliculas=self.webpackChunkgestion_peliculas||[]).push([[430],{4430:(M,d,a)=>{a.r(d),a.d(d,{HomeModule:()=>S});var g=a(177),p=a(8349),r=a(9417),m=a(2419),h=a(467),f=a(1626),t=a(7705),v=a(8472),F=a(2490),k=a(5416),w=a(9520),C=a(8834),s=a(5596),c=a(6771),L=a(9631),y=a(9183);function T(o,l){1&o&&(t.j41(0,"mat-error"),t.EFF(1," Enter a valid email "),t.k0s())}function b(o,l){if(1&o){const n=t.RV6();t.j41(0,"button",10),t.bIt("click",function(){t.eBV(n);const i=t.XpG(2);return t.Njj(i.verifyEmail())}),t.EFF(1,"Next"),t.k0s()}}function x(o,l){1&o&&(t.j41(0,"div",11),t.nrm(1,"mat-spinner",12),t.k0s())}function I(o,l){if(1&o&&(t.j41(0,"div")(1,"mat-form-field",6)(2,"mat-label"),t.EFF(3,"Email"),t.k0s(),t.nrm(4,"input",7),t.DNE(5,T,2,0,"mat-error",5),t.k0s(),t.DNE(6,b,2,0,"button",8),t.DNE(7,x,2,0,"div",9),t.k0s()),2&o){const n=t.XpG();let e;t.R7$(5),t.Y8G("ngIf",(null==(e=n.loginForm.get("email"))?null:e.invalid)&&(null==(e=n.loginForm.get("email"))?null:e.touched)),t.R7$(1),t.Y8G("ngIf",!n.isLoading),t.R7$(1),t.Y8G("ngIf",n.isLoading)}}function j(o,l){if(1&o){const n=t.RV6();t.j41(0,"div")(1,"mat-form-field",6)(2,"mat-label"),t.EFF(3,"Password"),t.k0s(),t.nrm(4,"input",13),t.k0s(),t.j41(5,"button",14),t.bIt("click",function(){t.eBV(n);const i=t.XpG();return t.Njj(i.login())}),t.EFF(6,"Login"),t.k0s()()}}const E=[{path:"",component:(()=>{class o{constructor(n,e,i,u,P){this.authService=n,this.router=e,this.cookieService=i,this.snackBar=u,this.commonService=P,this.loginForm=new r.gE({username:new r.MJ("",[r.k0.required,r.k0.email]),password:new r.MJ("",[r.k0.required,r.k0.minLength(6)])}),this.showPasswordField=!1,this.loading=!1,this.isLoading=!1}verifyEmail(){this.loginForm.get("email")?.invalid?this.loginForm.get("email")?.markAsTouched():(this.isLoading=!0,this.loading=!0,setTimeout(()=>{this.loading=!1,this.showPasswordField=!0,this.isLoading=!1},2e3))}login(){this.loginForm.invalid?this.loginForm.markAllAsTouched():this.acceder()}acceder(){var n=this;return(0,h.A)(function*(){if(n.loginForm.valid){const e=n.loginForm.value;console.log(e);const i=yield n.authService.doLogin(e).toPromise();console.log(i),i.ok&&(console.log(i.data.token),i.data.token?(n.cookieService.set("token",i.data.token),localStorage.setItem("token",i.data.token),localStorage.setItem("usuario",i.data.usuario),localStorage.setItem("nombre_publico",i.data.nombre_publico),localStorage.setItem("id_rol",i.data.id_rol),n.commonService.headers=new f.Lr({"Content-Type":"application/json",Authorization:`Bearer ${i.data.token}`}),n.router.navigate(["/films/search"])):0===i.data.valido?n.snackBar.open("Disabled user","Close",{duration:5e3}):1===i.data.valido&&(n.showPasswordField=!1,n.snackBar.open("User or password are invalids","Close",{duration:5e3})))}})()}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(v.u),t.rXU(m.Ix),t.rXU(F.O),t.rXU(k.UG),t.rXU(w.h))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-login"]],decls:9,vars:3,consts:[[1,"login-wrapper"],[1,"login-card","col-12"],[2,"color","antiquewhite"],["mat-card-image","","src","https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png","alt","TheMovieDB-logo",1,"mb-3","mt-3"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["appearance","outline",1,"full-width"],["matInput","","type","email","formControlName","username","required",""],["mat-raised-button","","color","primary","class","full-width",3,"click",4,"ngIf"],["class","spinner-wrapper",4,"ngIf"],["mat-raised-button","","color","primary",1,"full-width",3,"click"],[1,"spinner-wrapper"],["diameter","80"],["matInput","","type","password","formControlName","password","required",""],["mat-raised-button","","color","accent",1,"full-width",3,"click"]],template:function(e,i){1&e&&(t.j41(0,"div",0)(1,"mat-card",1)(2,"mat-card-title",2),t.EFF(3,"Login"),t.k0s(),t.nrm(4,"img",3),t.j41(5,"mat-card-content")(6,"form",4),t.bIt("ngSubmit",function(){return i.login()}),t.DNE(7,I,8,3,"div",5),t.DNE(8,j,7,0,"div",5),t.k0s()()()()),2&e&&(t.R7$(6),t.Y8G("formGroup",i.loginForm),t.R7$(1),t.Y8G("ngIf",!i.showPasswordField),t.R7$(1),t.Y8G("ngIf",i.showPasswordField))},dependencies:[g.bT,r.qT,r.me,r.BC,r.cb,r.YS,r.j4,r.JD,C.$z,s.RN,s.m2,s.kF,s.dh,c.rl,c.nJ,c.TL,L.fg,y.LG],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;width:100vw}.login-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;background:linear-gradient(135deg,#1e1e1e,#1e1e1e)}.login-card[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px;text-align:center;box-shadow:0 4px 10px #0003;border-radius:10px;background:252525}.full-width[_ngcontent-%COMP%]{width:100%}.spinner-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100px}']})}}return o})()}];let G=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[m.iI.forChild(E),m.iI]})}}return o})(),S=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[g.MD,G,r.X1,p.G]})}}return o})()}}]);