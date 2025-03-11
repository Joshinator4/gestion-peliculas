"use strict";(self.webpackChunkgestion_peliculas=self.webpackChunkgestion_peliculas||[]).push([[411],{1411:(dt,E,a)=>{a.r(E),a.d(E,{FilmsModule:()=>mt});var c=a(177),u=a(2419),I=a(7587),m=a(467),t=a(7705),d=a(1626),$=a(3921),C=a(4421);let h=(()=>{class i{constructor(e){this.httpClient=e,this.listaGeneros=[],this.listaPeliculas=[],this.apiKey="75619e68d51d07c77caa2da60519d5dd",this.serviceUrl="https://api.themoviedb.org/3"}buscarPelicula(e){const r=(new d.Nl).set("query",e).set("language","en-US").set("page",1).set("include_adult",!1).set("api_key",this.apiKey);this.httpClient.get(`${this.serviceUrl}/search/movie`,{params:r}).subscribe(o=>{this.listaPeliculas=o.results})}buscarPeliculaPorID(e){const r=(new d.Nl).set("language","en-US").set("api_key",this.apiKey);return this.httpClient.get(`${this.serviceUrl}/movie/${e}`,{params:r}).pipe((0,$.W)(o=>(0,C.of)(void 0)))}getGenreList(){const e=(new d.Nl).set("language","en-US").set("api_key",this.apiKey);this.httpClient.get(`${this.serviceUrl}/genre/movie/list`,{params:e}).subscribe(r=>{this.listaGeneros=r.genres})}searchGenreList(){const e=(new d.Nl).set("language","en-US").set("api_key",this.apiKey);return this.httpClient.get(`${this.serviceUrl}/genre/movie/list`,{params:e})}getFilmImage(e){return null==e?"https://www.ucm.es/icae/file/no-image-available/?ver":`https://image.tmdb.org/t/p/w1280/${e}`}static{this.\u0275fac=function(r){return new(r||i)(t.KVO(d.Qq))}}static{this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var v=a(5312),P=a(9520);const F="favorito";let p=(()=>{class i{constructor(e,r){this.http=e,this.commonService=r,this.favorites=[]}getFavorites(e){const r=btoa(e);return this.http.get(`${v.FM}/${F}.php?token=${r}`,{headers:this.commonService.headers})}addFavorite(e,r){const o=JSON.stringify(r);return this.http.post(`${v.FM}/${F}.php?id=${e}`,o,{headers:this.commonService.headers})}deleteFavorite(e,r){const o=btoa(r);return this.http.delete(`${v.FM}/${F}.php?id=${e}&token=${o}`,{headers:this.commonService.headers})}onDelete(e){var r=this;return(0,m.A)(function*(){return!!(yield r.deleteFavorite(e,localStorage.getItem("token")).toPromise()).ok})()}onDeleteFavorite(e){return this.favorites=this.favorites.filter(r=>r!==e),this.onDelete(e)}onAddFavorite(e){this.addFavoriteFilm(e)}addFavoriteFilm(e){var r=this;return(0,m.A)(function*(){return!!(yield r.addFavorite(e,localStorage.getItem("token")).toPromise()).ok})()}static{this.\u0275fac=function(r){return new(r||i)(t.KVO(d.Qq),t.KVO(P.h))}}static{this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var N=a(6771),_=a(9631),l=a(6072),g=a(5416),k=a(8834),s=a(5596),j=a(6471),S=a(9213),b=a(1997);function G(i,n){if(1&i&&(t.j41(0,"mat-chip")(1,"span",11),t.EFF(2),t.k0s()()),2&i){const e=n.$implicit;t.R7$(2),t.JRh(e.name)}}function w(i,n){if(1&i){const e=t.RV6();t.j41(0,"button",12),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.deleteFavorites())}),t.j41(1,"mat-icon"),t.EFF(2,"delete"),t.k0s(),t.EFF(3," Delete Favorite "),t.k0s()}}function T(i,n){if(1&i){const e=t.RV6();t.j41(0,"button",13),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.addFavoriteFilm())}),t.j41(1,"mat-icon"),t.EFF(2,"favorite"),t.k0s(),t.EFF(3," Add to Favorites "),t.k0s()}}const D=function(){return{name:"Unkwnown genre",id:0}},B=function(i){return[i]},O=function(i){return["/films",i]};let U=(()=>{class i{constructor(e,r,o){this.filmService=e,this.favoritesService=r,this.snackBar=o,this.isFavorite=!1}ngOnInit(){if(!this.film)throw new Error("Film property is required");this.genreList=this.filmService.listaGeneros.filter(e=>this.film.genre_ids.includes(e.id)),this.favoritesService.favorites.includes(this.film.id)&&(this.isFavorite=!0)}get FilmImage(){return this.filmService.getFilmImage(this.film.backdrop_path)}onDelete(){var e=this;return(0,m.A)(function*(){(yield e.favoritesService.onDeleteFavorite(e.film.id))?(e.snackBar.open("Favorite deleted successfully",l.Nd,{duration:5e3}),e.isFavorite=!1):e.snackBar.open("Cant delete Favorite",l.Nd,{duration:5e3})})()}deleteFavorites(){this.onDelete()}addFavoriteFilm(){this.addFavorite()}addFavorite(){var e=this;return(0,m.A)(function*(){e.isFavorite=!0,(yield e.favoritesService.addFavoriteFilm(e.film.id))?e.snackBar.open("Favorite added successfully",l.Nd,{duration:5e3}):e.snackBar.open(l.ff,l.Nd,{duration:5e3})})()}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(h),t.rXU(p),t.rXU(g.UG))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["films-film-card"]],inputs:{film:"film"},decls:30,vars:15,consts:[[2,"color","aqua"],[2,"color","yellow"],["mat-card-image","",2,"height","400px",3,"src","alt"],[1,"mt-2"],[2,"color","chartreuse"],[4,"ngFor","ngForOf"],[1,"mt-1"],["mat-button","","mat-raised","","color","accent",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","","color","warn",3,"click",4,"ngIf"],["mat-button","","mat-raised","","style","color: rgb(196, 0, 196);",3,"click",4,"ngIf"],[2,"color","aquamarine"],["mat-button","","mat-raised","","color","warn",3,"click"],["mat-button","","mat-raised","",2,"color","rgb(196, 0, 196)",3,"click"]],template:function(r,o){1&r&&(t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),t.EFF(3),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5,"Popularity: "),t.j41(6,"span",1),t.EFF(7),t.k0s()()(),t.nrm(8,"img",2),t.j41(9,"mat-card-content",3)(10,"h4"),t.EFF(11,"Original lenguage "),t.j41(12,"span",4),t.EFF(13),t.k0s()(),t.j41(14,"p")(15,"strong"),t.EFF(16,"Overview: "),t.k0s(),t.EFF(17),t.k0s(),t.nrm(18,"br"),t.j41(19,"mat-chip-listbox"),t.DNE(20,G,3,1,"mat-chip",5),t.k0s()(),t.nrm(21,"mat-divider",6),t.j41(22,"mat-card-actions")(23,"button",7)(24,"mat-icon"),t.EFF(25,"visibility"),t.k0s(),t.EFF(26," Show details "),t.k0s(),t.nrm(27,"span",8),t.DNE(28,w,4,0,"button",9),t.DNE(29,T,4,0,"button",10),t.k0s()()),2&r&&(t.R7$(3),t.JRh(o.film.title),t.R7$(4),t.JRh(o.film.popularity),t.R7$(1),t.FS9("src",o.FilmImage,t.B4B),t.FS9("alt",o.film.title),t.R7$(5),t.JRh(o.film.original_language.toUpperCase()),t.R7$(4),t.SpI("",o.film.overview.slice(0,150),"... "),t.R7$(3),t.Y8G("ngForOf",o.genreList.length>0?o.genreList.slice(0,3):t.eq3(11,B,t.lJ4(10,D))),t.R7$(3),t.Y8G("routerLink",t.eq3(13,O,o.film.id)),t.R7$(5),t.Y8G("ngIf",o.isFavorite),t.R7$(1),t.Y8G("ngIf",!o.isFavorite))},dependencies:[c.Sq,c.bT,k.$z,s.RN,s.YY,s.m2,s.MM,s.kF,s.Lc,s.dh,j.Jl,j.uI,S.An,b.q,u.Wk],encapsulation:2})}}return i})();const X=["txtInputTitulo"];function Y(i,n){1&i&&(t.j41(0,"h1",10),t.EFF(1,"No films found"),t.k0s())}function x(i,n){if(1&i&&(t.j41(0,"div",11),t.nrm(1,"films-film-card",12),t.k0s()),2&i){const e=n.$implicit;t.R7$(1),t.Y8G("film",e)}}let L=(()=>{class i{constructor(e,r){this.filmsService=e,this.favoritesService=r,this.inicio=!0}ngOnInit(){this.filmsService.getGenreList(),this.getFavorites()}getFavorites(){var e=this;return(0,m.A)(function*(){const r=yield e.favoritesService.getFavorites(localStorage.getItem("token")).toPromise();r.ok&&(e.favoritesService.favorites=r.data)})()}buscarPelicula(){const e=this.inputEtiqueta.nativeElement.value.trim();""!=e?(this.filmsService.buscarPelicula(e),this.inputEtiqueta.nativeElement.value="",setTimeout(()=>{this.inicio=!1},500)):window.alert("No se admiten busquedas vac\xedas")}get films(){return this.filmsService.listaPeliculas}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(h),t.rXU(p))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-search-page"]],viewQuery:function(r,o){if(1&r&&t.GBs(X,5),2&r){let f;t.mGM(f=t.lsd())&&(o.inputEtiqueta=f.first)}},decls:11,vars:2,consts:[[1,"row","p-3"],[1,"col-12"],[2,"text-align","center"],["appearance","outline",2,"width","100%"],["matInput","","placeholder","Search films",3,"keyup.enter"],["txtInputTitulo",""],[1,"spacer"],["style","text-align: center; color: rgb(207, 0, 0);",4,"ngIf"],[1,"grid","mb-8"],["class","col-12 sm:col-6 md:col-6 xl:col-4",4,"ngFor","ngForOf"],[2,"text-align","center","color","rgb(207, 0, 0)"],[1,"col-12","sm:col-6","md:col-6","xl:col-4"],[3,"film"]],template:function(r,o){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"h2",2),t.EFF(3,"Search Films"),t.k0s(),t.j41(4,"mat-form-field",3)(5,"input",4,5),t.bIt("keyup.enter",function(){return o.buscarPelicula()}),t.k0s()(),t.nrm(7,"span",6),t.DNE(8,Y,2,0,"h1",7),t.j41(9,"div",8),t.DNE(10,x,2,1,"div",9),t.k0s()()()),2&r&&(t.R7$(8),t.Y8G("ngIf",null==o.films[0]&&0==o.inicio),t.R7$(2),t.Y8G("ngForOf",o.films))},dependencies:[c.Sq,c.bT,N.rl,_.fg,U],encapsulation:2})}}return i})();var A=a(9090),y=a(6195),R=a(3902),V=a(9183);function J(i,n){1&i&&(t.j41(0,"mat-grid-list",2)(1,"mat-grid-tile"),t.nrm(2,"mat-spinner"),t.k0s()())}function M(i,n){1&i&&(t.j41(0,"mat-list-item")(1,"strong"),t.EFF(2,"Film Link: "),t.k0s()())}function K(i,n){if(1&i&&(t.j41(0,"a",19),t.EFF(1),t.k0s()),2&i){const e=t.XpG(2);t.FS9("href",e.film.homepage,t.B4B),t.R7$(1),t.JRh(e.film.homepage)}}function Q(i,n){if(1&i&&(t.j41(0,"p",20),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(1),t.SpI("",e.name," ")}}function z(i,n){if(1&i&&(t.j41(0,"p",11),t.nrm(1,"img",21)(2,"br"),t.EFF(3),t.nrm(4,"br"),t.k0s()),2&i){const e=n.$implicit,r=t.XpG(2);t.R7$(1),t.FS9("src",r.ProductionImage(e.logo_path),t.B4B),t.R7$(2),t.SpI("",e.name," ")}}function H(i,n){if(1&i&&(t.j41(0,"p",7),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(1),t.SpI("",e.name," ")}}function W(i,n){if(1&i){const e=t.RV6();t.j41(0,"button",22),t.bIt("click",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.addFavoriteFilm())}),t.j41(1,"mat-icon"),t.EFF(2,"favorite"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Add to Favorites"),t.k0s()()}}function Z(i,n){if(1&i){const e=t.RV6();t.j41(0,"button",23),t.bIt("click",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.deleteFavorites())}),t.j41(1,"mat-icon"),t.EFF(2,"delete"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Delete Favorite"),t.k0s()()}}function q(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title",5),t.EFF(4),t.k0s(),t.j41(5,"mat-card-subtitle"),t.EFF(6,"Poster film:"),t.k0s()(),t.nrm(7,"img",6),t.k0s(),t.j41(8,"mat-card",4)(9,"mat-card-header")(10,"mat-card-title"),t.EFF(11,"Information"),t.k0s()(),t.j41(12,"mat-card-content")(13,"mat-list")(14,"mat-list-item")(15,"strong"),t.EFF(16,"Original title: "),t.k0s()(),t.j41(17,"p",7),t.EFF(18),t.k0s(),t.j41(19,"mat-list-item")(20,"strong"),t.EFF(21,"Release Date: "),t.k0s()(),t.j41(22,"p",7),t.EFF(23),t.k0s(),t.DNE(24,M,3,0,"mat-list-item",8),t.DNE(25,K,2,2,"a",9),t.j41(26,"mat-list-item")(27,"strong"),t.EFF(28,"Film ID: "),t.k0s()(),t.j41(29,"p",10),t.EFF(30),t.k0s(),t.j41(31,"mat-list-item")(32,"strong"),t.EFF(33,"Overview: "),t.k0s()(),t.j41(34,"p",7),t.EFF(35),t.k0s(),t.j41(36,"mat-list-item")(37,"strong"),t.EFF(38,"Original lenguage:"),t.k0s()(),t.j41(39,"p",11),t.EFF(40),t.k0s(),t.j41(41,"mat-list-item")(42,"strong"),t.EFF(43,"Genres:"),t.k0s()(),t.DNE(44,Q,2,1,"p",12),t.j41(45,"mat-list-item")(46,"strong"),t.EFF(47,"Production Companys:"),t.k0s()(),t.DNE(48,z,5,2,"p",13),t.j41(49,"mat-list-item")(50,"strong"),t.EFF(51,"Production countrys:"),t.k0s()(),t.DNE(52,H,2,1,"p",14),t.k0s(),t.j41(53,"div",15)(54,"button",16),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.volverAlListado())}),t.j41(55,"mat-icon"),t.EFF(56,"arrow_back"),t.k0s(),t.j41(57,"span"),t.EFF(58,"Back to search page"),t.k0s()(),t.DNE(59,W,5,0,"button",17),t.DNE(60,Z,5,0,"button",18),t.k0s()()()()}if(2&i){const e=t.XpG();t.R7$(4),t.JRh(e.film.title),t.R7$(3),t.FS9("src",e.FilmImage,t.B4B),t.R7$(11),t.JRh(e.film.original_title),t.R7$(5),t.JRh(e.film.release_date),t.R7$(1),t.Y8G("ngIf",e.film.homepage),t.R7$(1),t.Y8G("ngIf",e.film.homepage),t.R7$(5),t.JRh(e.film.id),t.R7$(5),t.JRh(e.film.overview),t.R7$(5),t.JRh(e.film.original_language.toUpperCase()),t.R7$(4),t.Y8G("ngForOf",e.genreList),t.R7$(4),t.Y8G("ngForOf",e.film.production_companies),t.R7$(4),t.Y8G("ngForOf",e.film.production_countries),t.R7$(7),t.Y8G("ngIf",!e.isFavorite),t.R7$(1),t.Y8G("ngIf",e.isFavorite)}}let tt=(()=>{class i{constructor(e,r,o,f,ft){this.filmService=e,this.snackBar=r,this.favoritesService=o,this.activatedRoute=f,this.router=ft,this.isFavorite=!1}volverAlListado(){this.router.navigate(["/films/search"])}ngOnInit(){this.getFavorites().then(()=>{this.activatedRoute.params.pipe((0,A.n)(({id:e})=>this.filmService.buscarPeliculaPorID(e))).subscribe(e=>{if(!e)return this.router.navigate(["/films/search"]);this.film=e,console.log(this.favoritesService.favorites),console.log(this.film.id),this.favoritesService.getFavorites(localStorage.getItem("token")),this.favoritesService.favorites.includes(this.film.id)&&(this.isFavorite=!0),this.filmService.searchGenreList().subscribe(r=>{console.log(r.genres),console.log(this.film.genres),this.genreList=r.genres.filter(o=>this.film.genres.map(f=>f.id).includes(o.id))})})})}getFavorites(){var e=this;return(0,m.A)(function*(){const r=yield e.favoritesService.getFavorites(localStorage.getItem("token")).toPromise();r.ok&&(e.favoritesService.favorites=r.data)})()}get FilmImage(){if(this.film)return null==this.film.poster_path?"https://www.ucm.es/icae/file/no-image-available/?ver":`https://image.tmdb.org/t/p/w1280/${this.film.poster_path}`}ProductionImage(e){if(this.film)return null==this.film.production_companies?"Known production companies":null==e?"https://www.ucm.es/icae/file/no-image-available/?ver":`https://image.tmdb.org/t/p/w200${e}`}addFavoriteFilm(){this.addFavorite()}addFavorite(){var e=this;return(0,m.A)(function*(){e.isFavorite=!0,(yield e.favoritesService.addFavoriteFilm(e.film.id))?e.snackBar.open("Favorite added successfully",l.Nd,{duration:5e3}):e.snackBar.open(l.ff,l.Nd,{duration:5e3})})()}onDelete(){var e=this;return(0,m.A)(function*(){(yield e.favoritesService.onDeleteFavorite(e.film.id))?(e.snackBar.open("Favorite deleted successfully",l.Nd,{duration:5e3}),e.isFavorite=!1):e.snackBar.open("Cant delete Favorite",l.Nd,{duration:5e3})})()}deleteFavorites(){this.onDelete()}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(h),t.rXU(g.UG),t.rXU(p),t.rXU(u.nX),t.rXU(u.Ix))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-show-page"]],decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],[2,"color","aqua"],["alt","hero.superhero","mat-card-image","",3,"src"],[1,"pl-4",2,"color","bisque"],[4,"ngIf"],["class","pl-4","style","color: aquamarine;",3,"href",4,"ngIf"],[1,"pl-4",2,"color","red"],[1,"pl-4",2,"color","chartreuse"],["class","pl-4","style","color: yellow;",4,"ngFor","ngForOf"],["class","pl-4","style","color: chartreuse;",4,"ngFor","ngForOf"],["class","pl-4","style","color: bisque;",4,"ngFor","ngForOf"],[1,"flex","justify-content-between"],["mat-fab","","extended","","color","primary",3,"click"],["mat-fab","","extended","","color","accent",3,"click",4,"ngIf"],["mat-fab","","extended","","color","warn",3,"click",4,"ngIf"],[1,"pl-4",2,"color","aquamarine",3,"href"],[1,"pl-4",2,"color","yellow"],["alt","",2,"height","100px",3,"src"],["mat-fab","","extended","","color","accent",3,"click"],["mat-fab","","extended","","color","warn",3,"click"]],template:function(r,o){if(1&r&&(t.DNE(0,J,3,0,"ng-template",null,0,t.C5r),t.DNE(2,q,61,14,"div",1)),2&r){const f=t.sdS(1);t.R7$(2),t.Y8G("ngIf",o.film)("ngIfElse",f)}},dependencies:[c.Sq,c.bT,k.Sr,s.RN,s.m2,s.MM,s.kF,s.Lc,s.dh,y.B_,y.NS,S.An,R.jt,R.YE,V.LG],encapsulation:2})}}return i})();function et(i,n){if(1&i&&t.nrm(0,"img",7),2&i){const e=t.XpG();t.FS9("src",e.FilmImage,t.B4B),t.FS9("alt",e.film.title)}}let it=(()=>{class i{constructor(e,r,o){this.filmService=e,this.favoritesService=r,this.snackBar=o}ngOnInit(){this.filmService.buscarPeliculaPorID(this.favorite).subscribe(e=>{this.film=e})}get FilmImage(){return this.filmService.getFilmImage(this.film.backdrop_path)}onDelete(){var e=this;return(0,m.A)(function*(){(yield e.favoritesService.onDeleteFavorite(e.film.id))?e.snackBar.open("Favorite deleted successfully",l.Nd,{duration:5e3}):e.snackBar.open("Cant delete Favorite",l.Nd,{duration:5e3})})()}deleteFavorites(){this.onDelete()}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(h),t.rXU(p),t.rXU(g.UG))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["films-favorite-card"]],inputs:{favorite:"favorite"},decls:20,vars:4,consts:[[2,"color","aqua"],[2,"color","yellow"],["mat-card-image","","style","height: 200px;",3,"src","alt",4,"ngIf"],[1,"mt-2"],[2,"color","chartreuse"],[1,"mt-1"],["mat-button","","mat-raised","","color","warn",3,"click"],["mat-card-image","",2,"height","200px",3,"src","alt"]],template:function(r,o){1&r&&(t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),t.EFF(3),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5,"Popularity: "),t.j41(6,"span",1),t.EFF(7),t.k0s()()(),t.DNE(8,et,1,2,"img",2),t.j41(9,"mat-card-content",3)(10,"h4"),t.EFF(11,"Release date "),t.j41(12,"span",4),t.EFF(13),t.k0s()()(),t.nrm(14,"mat-divider",5),t.j41(15,"mat-card-actions")(16,"button",6),t.bIt("click",function(){return o.deleteFavorites()}),t.j41(17,"mat-icon"),t.EFF(18,"delete"),t.k0s(),t.EFF(19," Delete Favorite "),t.k0s()()()),2&r&&(t.R7$(3),t.JRh(null==o.film?null:o.film.title),t.R7$(4),t.JRh(null==o.film?null:o.film.popularity),t.R7$(1),t.Y8G("ngIf",o.film),t.R7$(5),t.JRh(null==o.film?null:o.film.release_date))},dependencies:[c.bT,k.$z,s.RN,s.YY,s.m2,s.MM,s.kF,s.Lc,s.dh,S.An,b.q],encapsulation:2})}}return i})();function rt(i,n){1&i&&(t.j41(0,"h1",7),t.EFF(1,"No favorites found"),t.k0s())}function ot(i,n){if(1&i&&(t.j41(0,"div",8),t.nrm(1,"films-favorite-card",9),t.k0s()),2&i){const e=n.$implicit;t.R7$(1),t.Y8G("favorite",e)}}const nt=[{path:"",component:I.z,children:[{path:"search",component:L},{path:"favorites",component:(()=>{class i{constructor(e){this.favoritesService=e}ngOnInit(){this.getFavorites()}getFavorites(){var e=this;return(0,m.A)(function*(){const r=yield e.favoritesService.getFavorites(localStorage.getItem("token")).toPromise();r.ok&&(e.favoritesService.favorites=r.data)})()}get favorites(){return this.favoritesService.favorites}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(p))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-favorites-page"]],decls:8,vars:2,consts:[[1,"row","p-3"],[1,"col-12"],[2,"text-align","center"],[1,"spacer"],["style","text-align: center; color: rgb(207, 0, 0);",4,"ngIf"],[1,"grid","mb-8"],["class","col-12 sm:col-6 md:col-4 xl:col-3",4,"ngFor","ngForOf"],[2,"text-align","center","color","rgb(207, 0, 0)"],[1,"col-12","sm:col-6","md:col-4","xl:col-3"],[3,"favorite"]],template:function(r,o){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"h2",2),t.EFF(3,"Favorites films"),t.k0s(),t.nrm(4,"span",3),t.DNE(5,rt,2,0,"h1",4),t.j41(6,"div",5),t.DNE(7,ot,2,1,"div",6),t.k0s()()()),2&r&&(t.R7$(5),t.Y8G("ngIf",null==o.favorites[0]),t.R7$(2),t.Y8G("ngForOf",o.favorites))},dependencies:[c.Sq,c.bT,it],encapsulation:2})}}return i})()},{path:":id",component:tt},{path:"**",redirectTo:"search"}]}];let st=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[u.iI.forChild(nt),u.iI]})}}return i})();var lt=a(8349),ct=a(9417);let mt=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[c.MD,lt.G,st,ct.X1]})}}return i})()}}]);