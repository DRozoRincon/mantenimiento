(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{VtZ0:function(e,t,n){"use strict";n.r(t),n.d(t,"PendientesModule",(function(){return I}));var i=n("ofXK"),o=n("tyNb"),a=n("fXoL"),c=n("EF83"),r=n("R0Ic"),l=n("0IaG"),m=n("3Pt+"),s=n("+0xr"),d=n("kmnG"),p=n("qFsG"),b=n("bTqV");function u(e,t){if(1&e&&(a.Rb(0,"th",11),a.tc(1),a.Qb()),2&e){const e=a.bc().$implicit;a.Bb(1),a.vc(" ",e," ")}}function f(e,t){if(1&e&&(a.Rb(0,"td",12),a.tc(1),a.Qb()),2&e){const e=t.$implicit,n=a.bc().$implicit;a.Bb(1),a.vc(" ",e[n]," ")}}function g(e,t){1&e&&(a.Pb(0,10),a.sc(1,u,2,1,"th",4),a.sc(2,f,2,1,"td",5),a.Ob()),2&e&&a.fc("matColumnDef",t.$implicit)}function h(e,t){1&e&&(a.Rb(0,"th",11),a.tc(1," No. "),a.Qb())}function x(e,t){if(1&e&&(a.Rb(0,"td",12),a.tc(1),a.Qb()),2&e){const e=t.$implicit;a.Bb(1),a.vc(" ",e.serie," ")}}const C=function(e,t){return["/registro",e,t]};function M(e,t){if(1&e){const e=a.Sb();a.Rb(0,"td",12),a.Rb(1,"div",13),a.Rb(2,"div",14),a.Rb(3,"strong"),a.tc(4,"Observaciones: "),a.Qb(),a.tc(5),a.Qb(),a.Rb(6,"div",15),a.Rb(7,"span",16),a.Yb("click",(function(){a.kc(e);const n=t.$implicit;return a.bc(2).eliminar(n.serie,n.typeMcorrectivo)})),a.tc(8,"eliminar"),a.Qb(),a.Rb(9,"a",17),a.tc(10,"editar"),a.Qb(),a.Rb(11,"span",18),a.Yb("click",(function(){a.kc(e);const n=t.$implicit;return a.bc(2).completado(n.serie,n.typeMcorrectivo)})),a.tc(12,"completado"),a.Qb(),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=t.$implicit,n=a.bc(2);a.Cb("colspan",n.columnsToDisplay.length),a.Bb(1),a.ec("@detailExpand",e==n.expandedElement?"expanded":"collapsed"),a.Bb(4),a.vc("",e.observaciones," "),a.Bb(4),a.ec("routerLink",a.hc(4,C,e.serie,e.typeMcorrectivo))}}function O(e,t){1&e&&a.Mb(0,"tr",19)}function v(e,t){if(1&e){const e=a.Sb();a.Rb(0,"tr",20),a.Yb("click",(function(){a.kc(e);const n=t.$implicit,i=a.bc(2);return i.expandedElement=i.expandedElement===n?null:n})),a.Qb()}if(2&e){const e=t.$implicit,n=a.bc(2);a.Db("example-expanded-row",n.expandedElement===e)}}function w(e,t){1&e&&a.Mb(0,"tr",21)}const _=function(){return["expandedDetail"]};function P(e,t){if(1&e&&(a.Rb(0,"table",1),a.sc(1,g,3,1,"ng-container",2),a.Pb(2,3),a.sc(3,h,2,0,"th",4),a.sc(4,x,2,1,"td",5),a.Ob(),a.Pb(5,6),a.sc(6,M,13,7,"td",5),a.Ob(),a.sc(7,O,1,0,"tr",7),a.sc(8,v,1,2,"tr",8),a.sc(9,w,1,0,"tr",9),a.Qb()),2&e){const e=a.bc();a.ec("dataSource",e.dataSource),a.Bb(1),a.ec("ngForOf",e.columnsToDisplay),a.Bb(6),a.ec("matHeaderRowDef",e.columnsToDisplay),a.Bb(1),a.ec("matRowDefColumns",e.columnsToDisplay),a.Bb(1),a.ec("matRowDefColumns",a.gc(5,_))}}const R=function(){return[]};let S=(()=>{class e{constructor(e,t,n){this._mantenimientoS=e,this.dialog=t,this._router=n,this.columnsToDisplay=["nombre","serie","servicio","fecha"]}ngOnInit(){}eliminar(e,t){confirm("\xbfEstas segur@ de eliminar?")&&(this.dataSource=this.dataSource.filter(t=>t.serie!=e),this._mantenimientoS.eliminarMantenimiento(this.dataSource,t))}completado(e,t){let n=this._mantenimientoS.obtenerMantenimiento(e,t);this.mantenimientoEliminar=n.mante,this.openDialog()}openDialog(){this.dialog.open(D,{width:"320px",data:{}}).afterClosed().subscribe(e=>{if(null!=e){this.dataSource=this.dataSource.filter(e=>e.serie!=this.mantenimientoEliminar.serie),this._mantenimientoS.eliminarMantenimiento(this.dataSource,this.mantenimientoEliminar.typeMcorrectivo);let t=Object.assign(this.mantenimientoEliminar,e);this._mantenimientoS.guardarMantenimientoHistorial(t),console.log(t),this._router.navigate(["/registros"])}})}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(l.b),a.Lb(o.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-table-pendientes"]],inputs:{dataSource:"dataSource",titulo:"titulo"},decls:3,vars:3,consts:[["mat-table","","multiTemplateDataRows","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],["mat-table","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell",""],["mat-cell",""],[1,"example-element-detail"],[1,"example-element-description"],[1,"example-element-description",2,"display","block"],[1,"eliminar",3,"click"],[1,"editar",3,"routerLink"],[1,"completado",3,"click"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(e,t){1&e&&(a.Rb(0,"h1"),a.tc(1),a.Qb(),a.sc(2,P,10,6,"table",0)),2&e&&(a.Bb(1),a.vc("Pendientes ",t.titulo,""),a.Bb(1),a.ec("ngIf",t.dataSource!=a.gc(2,R)))},directives:[i.j,s.j,i.i,s.c,s.e,s.b,s.g,s.i,s.d,s.a,o.c,s.f,s.h],styles:["h1[_ngcontent-%COMP%]{margin-bottom:25px}table[_ngcontent-%COMP%]{width:100%;margin-bottom:70px}td[_ngcontent-%COMP%]{cursor:pointer}tr.example-detail-row[_ngcontent-%COMP%]{height:0}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active{background:#efefef}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.example-element-diagram[_ngcontent-%COMP%]{min-width:80px;border:2px solid #000;padding:8px;font-weight:lighter;margin:8px 0;height:104px}.example-element-symbol[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:normal}.example-element-description[_ngcontent-%COMP%]{padding:16px}.example-element-description-attribution[_ngcontent-%COMP%]{opacity:.5}.example-element-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.example-element-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .example-element-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-left:5px;margin-right:5px;transition:all .3s}.example-element-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .example-element-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{text-shadow:0 0 1px grey}.example-element-description[_ngcontent-%COMP%]   .eliminar[_ngcontent-%COMP%]{color:#f44336}.example-element-description[_ngcontent-%COMP%]   .editar[_ngcontent-%COMP%]{color:#f0ad4e}.example-element-description[_ngcontent-%COMP%]   .completado[_ngcontent-%COMP%]{color:#5cb85c}"],data:{animation:[Object(r.j)("detailExpand",[Object(r.g)("collapsed",Object(r.h)({height:"0px",minHeight:"0"})),Object(r.g)("expanded",Object(r.h)({height:"*"})),Object(r.i)("expanded <=> collapsed",Object(r.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),e})(),D=(()=>{class e{constructor(e,t,n){this.dialogRef=e,this.data=t,this._formBuilder=n,this._buildForm()}_buildForm(){this.form=this._formBuilder.group({costo:["",m.p.required],observacionesfinales:["",m.p.required],baja:[!1]})}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(l.g),a.Lb(l.a),a.Lb(m.d))},e.\u0275cmp=a.Fb({type:e,selectors:[["dialog-overview-example-dialog"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"containerDialog"],[3,"formGroup"],[1,"input"],["type","number","matInput","","placeholder","Costo del mantenimiento","formControlName","costo"],["matInput","","placeholder","Observacion","formControlName","observacionesfinales"],["type","checkbox","formControlName","baja","value","false"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close","disabled"]],template:function(e,t){1&e&&(a.Rb(0,"h1",0),a.tc(1,"Hola!!"),a.Qb(),a.Rb(2,"div",1),a.Rb(3,"p"),a.tc(4,"Diligencia la siguiente informacion"),a.Qb(),a.Rb(5,"form",2),a.Rb(6,"mat-form-field",3),a.Mb(7,"input",4),a.Qb(),a.Rb(8,"mat-form-field",3),a.Mb(9,"textarea",5),a.Qb(),a.Rb(10,"label"),a.tc(11,"\xbfEl equipo fue dado de baja?:"),a.Qb(),a.Mb(12,"input",6),a.Rb(13,"div",7),a.Rb(14,"button",8),a.Yb("click",(function(){return t.onNoClick()})),a.tc(15,"Cancelar"),a.Qb(),a.Rb(16,"button",9),a.tc(17,"Completar"),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.Bb(5),a.ec("formGroup",t.form),a.Bb(11),a.ec("mat-dialog-close",t.form.value)("disabled",t.form.invalid))},directives:[l.h,l.e,m.q,m.l,m.f,d.b,m.n,p.b,m.c,m.k,m.e,m.a,l.c,b.a,l.d],styles:[".containerDialog[_ngcontent-%COMP%]{height:250px!important}.input[_ngcontent-%COMP%]{width:266px!important}.input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{max-height:30px}"]}),e})();function y(e,t){if(1&e&&a.Mb(0,"app-table-pendientes",1),2&e){const e=a.bc();a.ec("dataSource",e.dataSource.Mpreventivo)("titulo","mantenimiento preventivo")}}function k(e,t){if(1&e&&a.Mb(0,"app-table-pendientes",1),2&e){const e=a.bc();a.ec("dataSource",e.dataSource.Mcorrectivo)("titulo","mantenimiento correctivo")}}const Q=[{path:"",component:(()=>{class e{constructor(e){this._mantenimientoS=e}ngOnInit(){this.dataSource=this._mantenimientoS.ObtenerMantenimientos()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-pendientes"]],decls:2,vars:2,consts:[[3,"dataSource","titulo",4,"ngIf"],[3,"dataSource","titulo"]],template:function(e,t){1&e&&(a.sc(0,y,1,2,"app-table-pendientes",0),a.sc(1,k,1,2,"app-table-pendientes",0)),2&e&&(a.ec("ngIf",t.dataSource.Mpreventivo),a.Bb(1),a.ec("ngIf",null!=t.dataSource.Mcorrectivo))},directives:[i.j,S],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[o.d.forChild(Q)],o.d]}),e})();var B=n("j1ZV");let I=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[i.b,j,B.a]]}),e})()}}]);