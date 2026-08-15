import type{MetadataRoute}from"next";
export const dynamic="force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"Sawely - مساعد واتساب للأعمال",short_name:"Sawely",description:"مساعد واتساب للحجوزات وخدمة العملاء",start_url:"/",display:"standalone",background_color:"#f4eee5",theme_color:"#4930bb",lang:"ar",dir:"rtl",icons:[{src:"/brand/sawely-logo.png",sizes:"600x400",type:"image/png"}]}}
