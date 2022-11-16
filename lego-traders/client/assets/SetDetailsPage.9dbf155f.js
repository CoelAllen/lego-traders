import{_ as N,y as L,h as j,i as B,l as _,e as c,P as l,E as A,j as u,W as D,a as r,b as t,d as P,X as k,D as f,t as g,F as h,r as b,w as R,k as v,v as I,m as C,g as T,o as n,f as M,p as O,n as V,Z as W}from"./index.342622b1.js";const E={setup(){const i=L(),a=j({set_num:""});B(()=>{y(),e(),p(),S(),_.getTradableSets()});async function y(){try{c.activeMOCset=[],await _.getSetAlternates(i.params.set_num)}catch(s){l.error(s,"geting set alternates")}}async function e(){try{c.activeApiSet=[],await _.getSetBySetNum(i.params.set_num)}catch(s){l.error(s,"get set by setNum")}}async function p(){try{await _.getPartsBySetNum(i.params.set_num)}catch(s){l.error(s,"getting parts list")}}async function S(){try{await A.getSetDetailsComments(i.params.set_num)}catch(s){l.error(s)}}return{editable:a,account:u(()=>c.account),legoSet:u(()=>c.activeApiSet),mocSets:u(()=>c.activeMOCset),setParts:u(()=>c.activeApiSetParts),nextPage:u(()=>c.nextPage),previousPage:u(()=>c.previousPage),comments:u(()=>c.comments),owners:u(()=>c.tradableSet.filter(s=>s.set_num==i.params.set_num)),async addSetToAccount(s){try{await l.confirm("Do you own this?","")?(s.isOwned=!0,await _.addSetToAccount(s)):await _.addSetToAccount(s)}catch(m){l.error("[addToAccount]",m)}},async addSetToWishList(s){try{l.success(`You added ${s.name} to your wishlist!`),s.isOwned=!1,await _.addSetToAccount(s)}catch(m){l.error("[addToAccount]",m)}},async goPageParts(s){try{await _.goPageParts(s)}catch(m){l.error(m)}},async handleSubmit(){try{a.value.set_num=i.params.set_num,await A.createComment(a.value),a.value={}}catch(s){l.error(s,"Submitting Form")}}}},components:{LegoSetComments:D}},d=i=>(O("data-v-7fac1282"),i=i(),V(),i),F={class:"container-fluid px-4 bg-light"},Q={class:"row py-3"},q=d(()=>t("i",{class:"mdi mdi-arrow-left-thick fs-3",title:"Collections Page"},null,-1)),z={class:"col-12 d-flex gap-5 justify-content-center pb-3"},Y=d(()=>t("button",{class:"btn btn-primary button-size",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"}," Parts List ",-1)),U=["href"],G=d(()=>t("button",{class:"btn btn-danger mdi mdi-shopping fs-5"},null,-1)),H=[G],K={class:"text-center"},X={class:"col-md-12 d-flex justify-content-center"},Z=["src","title"],J={class:"col-sm-12 col-md-12 p-1"},$={class:"text-center d-flex justify-content-center gap-5"},tt={key:0,class:"row"},et=d(()=>t("h1",null,"Alternate MOC's",-1)),st={class:"col-12 col-md-12 col-lg-3 d-flex justify-content-center p-3 border-test"},ot={class:"card moc-card text-center"},at=["href"],nt=["src"],rt={class:"card-body text-dark"},it=W(" Designed by: "),ct={class:"row"},lt={class:"col-md-6 d-flex order-sm-1"},dt={class:"px-1"},mt={class:"input-group",style:{height:"50px"}},_t=d(()=>t("button",{class:"btn btn-primary",type:"submit",id:"body"}," Post ",-1)),ut={class:"col-md-6 d-flex justify-content-end order-sm-3"},gt={key:0,class:"d-flex"},ht=d(()=>t("h3",{class:"px-5"},"Trade Requests",-1)),ft=["src","title"],bt={key:1},vt=d(()=>t("h3",null,"No Trades",-1)),yt=[vt],pt={key:0,class:"col-sm-12 col-md-7 card bg-grey p-2 m-3 order-sm-3"},St={key:1},wt=d(()=>t("h4",null,"Be first to Comment",-1)),xt=[wt],At={class:"offcanvas offcanvas-end overflow2 container-fluid",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",style:{width:"50%"}},Pt={class:"row"},kt=d(()=>t("div",{class:"offcanvas-header bg-primary"},[t("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Parts List"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close",title:"close"})],-1)),Ct={class:"offcanvas-body overflow bg-primary col-sm-12 col-md-6 col-lg-2"},Tt=["href"],Nt={class:"d-flex justify-content-center part-border"},Lt=["src","title"],jt={class:"d-flex justify-content-between col-12 bg-primary py-2"};function Bt(i,a,y,e,p,S){const s=T("router-link"),m=T("LegoSetComments");return n(),r(h,null,[t("div",F,[t("div",Q,[P(s,{to:{name:"Collection"}},{default:k(()=>[q]),_:1}),t("div",z,[e.legoSet.ownerId?f("",!0):(n(),r("button",{key:0,class:"btn btn-primary button-size",onClick:a[0]||(a[0]=o=>e.addSetToAccount(e.legoSet))}," Add to Account ")),e.legoSet.ownerId?f("",!0):(n(),r("button",{key:1,onClick:a[1]||(a[1]=o=>e.addSetToWishList(e.legoSet)),class:"btn btn-primary button-size",title:"Add to Wishlist"}," Add to Wishlist ")),Y,t("a",{href:`https://www.google.com/search?tbm=shop&hl=en&psb=1&ved=0CAAQvOkFahcKEwiAkYjb1e_6AhUAAAAAHQAAAAAQEQ&q=lego set number ${e.legoSet.set_num} ${e.legoSet.name}`,target:"_blank",title:"Search set on Google Shopping"},H,8,U)]),t("h4",K,g(e.legoSet.name),1),t("div",X,[t("img",{src:e.legoSet.set_img_url,class:"img-fluid set-img",title:e.legoSet.name},null,8,Z)]),t("div",J,[t("div",$,[t("h4",null,"Set Number "+g(e.legoSet.set_num),1),t("h4",null,"Realease Year: "+g(e.legoSet.year),1),t("h4",null,g(e.legoSet.num_parts)+" pcs",1)])])]),e.mocSets.length?(n(),r("div",tt,[et,(n(!0),r(h,null,b(e.mocSets,o=>(n(),r("div",st,[t("div",ot,[t("a",{href:o.moc_url,target:"_blank"},[t("img",{src:o.moc_img_url,title:"Rebrickable set details",class:"img-fluid moc-img pointer"},null,8,nt)],8,at),t("div",rt,[t("h5",null,g(o.name)+" || "+g(o.num_parts)+" pcs",1),t("h6",null,[it,t("i",null,g(o.designer_name),1)])])])]))),256))])):f("",!0),t("div",ct,[t("div",lt,[e.account.id?(n(),r("form",{key:0,onSubmit:a[3]||(a[3]=R((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[t("div",dt,[t("div",mt,[v(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=o=>e.editable.body=o),required:"",class:"form-control",placeholder:"Comments...","aria-label":"comment body","aria-describedby":"button-addon1",maxlength:"250"},null,512),[[I,e.editable.body]]),_t])])],32)):f("",!0)]),t("div",ut,[e.owners.length>0?(n(),r("div",gt,[ht,(n(!0),r(h,null,b(e.owners,o=>(n(),r("div",null,[P(s,{to:{name:"Profile",params:{profileId:o.owner.id}}},{default:k(()=>{var w,x;return[t("img",{src:(w=o.owner)==null?void 0:w.picture,alt:"user picture",class:"user-img",title:(x=o.owner)==null?void 0:x.name},null,8,ft)]}),_:2},1032,["to"])]))),256))])):(n(),r("div",bt,yt))]),e.comments.length>0?(n(),r("div",pt,[(n(!0),r(h,null,b(e.comments,o=>(n(),M(m,{key:o.id,comment:o},null,8,["comment"]))),128))])):(n(),r("div",St,xt))])]),t("div",At,[t("div",Pt,[kt,(n(!0),r(h,null,b(e.setParts,o=>(n(),r("div",Ct,[t("a",{href:o.part.part_url,target:"_blank"},[t("div",Nt,[t("img",{src:o.part.part_img_url,title:o.part.name,class:"part-img"},null,8,Lt)])],8,Tt)]))),256)),t("div",jt,[v(t("div",null,[t("button",{class:"btn btn-warning",onClick:a[4]||(a[4]=o=>e.goPageParts(e.previousPage))}," Previous ")],512),[[C,e.previousPage]]),v(t("div",null,[t("button",{class:"btn btn-warning",onClick:a[5]||(a[5]=o=>e.goPageParts(e.nextPage))}," Next--> ")],512),[[C,e.nextPage]])])])])],64)}const Rt=N(E,[["render",Bt],["__scopeId","data-v-7fac1282"]]);export{Rt as default};
