(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7pj3":function(t,e,s){"use strict";s("POw6")},BcTT:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"#dashboard-analytics .greet-user {\n  position: relative;\n}\n#dashboard-analytics .greet-user .decore-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#dashboard-analytics .greet-user .decore-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 576px) {\n#dashboard-analytics .decore-left, #dashboard-analytics .decore-right {\n    width: 140px;\n}\n}",""])},CFrh:function(t,e,s){var a=s("BcTT");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},CgeC:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"/*=========================================================================================\n  File Name: vxTimeline.scss\n  Description: Styles for vx-timeline component\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir=ltr] .vx-timeline {\n  margin-left: 1.5rem;\n  padding-left: 40px;\n  border-left: 2px solid #E5E8EB;\n}\n[dir=rtl] .vx-timeline {\n  margin-right: 1.5rem;\n  padding-right: 40px;\n  border-right: 2px solid #E5E8EB;\n}\n[dir] .theme-dark .vx-timeline {\n  border-color: #414561;\n}\n.vx-timeline li {\n  position: relative;\n}\n[dir] .vx-timeline li {\n  margin-bottom: 20px;\n}\n.vx-timeline li .timeline-icon {\n  position: absolute;\n  top: 0;\n}\n[dir] .vx-timeline li .timeline-icon {\n  border-radius: 50%;\n  padding: 0.75rem;\n  padding-bottom: 0.4rem;\n}\n[dir=ltr] .vx-timeline li .timeline-icon {\n  left: -4.3rem;\n}\n[dir=rtl] .vx-timeline li .timeline-icon {\n  right: -4.3rem;\n}\n.vx-timeline li .activity-desc {\n  font-size: 0.9rem;\n}\n.vx-timeline li .activity-e-time {\n  font-size: 0.8rem;\n}",""])},POw6:function(t,e,s){var a=s("CgeC");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},daCn:function(t,e,s){"use strict";s.r(e);var a=s("EyHm"),r=s.n(a),o={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},i={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},n=s("bjns"),l={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(n.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:r.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},o),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(i)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},c=s("KHd+"),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():s("div",{staticClass:"line-area-chart"},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null).exports,p={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["rgba(115,103,240,0.15)","rgba(115,103,240,0.15)","#7367f0","rgba(115,103,240,0.15)","rgba(115,103,240,0.15)","rgba(115,103,240,0.15)"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartOptions:{plotOptions:{radialBar:{size:158,offsetY:-30,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"rgba(0,0,0,0)",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:-5,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:0,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]},h=Object(c.a)({},(function(t,e){var s=e._c;return s("vs-dropdown",{staticClass:"cursor-pointer",class:e.data.staticClass,attrs:{"vs-trigger-click":""}},[s("small",{staticClass:"flex cursor-pointer"},[s("span",[e._v("Last 7 days")]),e._v(" "),s("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e._v(" "),s("vs-dropdown-menu",{staticClass:"w-32"},[s("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-28-days")}}},[e._v("Last 28 days")]),e._v(" "),s("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-month")}}},[e._v("Last Month")]),e._v(" "),s("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-year")}}},[e._v("Last Year")])],1)],1)}),[],!0,null,null,null).exports,m={name:"vx-timeline",props:{data:{type:Array,required:!0}}},v=(s("7pj3"),Object(c.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"vx-timeline"},t._l(t.data,(function(e){return s("li",{key:e.title},[s("div",{staticClass:"timeline-icon",class:"bg-"+e.color},[s("feather-icon",{attrs:{icon:e.icon,svgClasses:"text-white stroke-current w-5 h-5"}})],1),t._v(" "),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"activity-desc"},[t._v(t._s(e.desc))])]),t._v(" "),s("small",{staticClass:"text-grey activity-e-time"},[t._v(t._s(e.time))])])})),0)}),[],!1,null,null,null).exports),u={data:function(){return{checkpointReward:{},subscribersGained:{},ordersRecevied:{},salesBarSession:{},supportTracker:{},productsOrder:{},salesRadar:{},timelineData:[{color:"primary",icon:"PlusIcon",title:"Client Meeting",desc:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",time:"25 mins Ago"},{color:"warning",icon:"MailIcon",title:"Email Newsletter",desc:"Cupcake gummi bears soufflé caramels candy",time:"15 Days Ago"},{color:"danger",icon:"UsersIcon",title:"Plan Webinar",desc:"Candy ice cream cake. Halvah gummi bears",time:"20 days ago"},{color:"success",icon:"LayoutIcon",title:"Launch Website",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",time:"25 days ago"},{color:"primary",icon:"TvIcon",title:"Marketing",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",time:"28 days ago"}],analyticsData:p,dispatchedOrders:[]}},components:{VueApexCharts:r.a,StatisticsCardLine:d,ChangeTimeDurationDropdown:h,VxTimeline:v},created:function(){var t=this;this.$http.get("/api/user/checkpoint-reward").then((function(e){t.checkpointReward=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/subscribers").then((function(e){t.subscribersGained=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(e){t.ordersRecevied=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(e){t.salesBarSession=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/support-tracker").then((function(e){t.supportTracker=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/products-orders").then((function(e){t.productsOrder=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/radar").then((function(e){t.salesRadar=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/table/dispatched-orders").then((function(e){t.dispatchedOrders=e.data})).catch((function(t){console.log(t)}))}},b=(s("j4Nb"),Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dashboard-analytics"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[s("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:"92.6k",statisticTitle:"Subscribers Gained",chartData:t.subscribersGained.series,type:"area"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[s("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:"97.5K",statisticTitle:"Orders Received",chartData:t.ordersRecevied.series,color:"warning",type:"area"}})],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[s("vx-card",[s("div",{staticClass:"vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row"},[t.salesBarSession.analyticsData?s("div",{staticClass:"vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between"},[s("div",[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.salesBarSession.analyticsData.session)))]),t._v(" "),s("span",{staticClass:"font-medium"},[t._v("Avg Sessions")]),t._v(" "),s("p",{staticClass:"mt-2 text-xl font-medium"},[s("span",{class:t.salesBarSession.analyticsData.comparison.result>=0?"text-success":"text-danger"},[t.salesBarSession.analyticsData.comparison.result>0?s("span",[t._v("+")]):t._e(),t._v(" "),s("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.result))])]),t._v(" "),s("span",[t._v(" vs ")]),t._v(" "),s("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.str))])])]),t._v(" "),s("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":""}},[t._v("View Details")])],1):t._e(),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 md:mb-base sm:mb-0 mb-base"},[s("change-time-duration-dropdown",{staticClass:"self-end"}),t._v(" "),t.salesBarSession.series?s("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.analyticsData.salesBar.chartOptions,series:t.salesBarSession.series}}):t._e()],1)]),t._v(" "),s("vs-divider",{staticClass:"my-6"}),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Goal: $100000")]),t._v(" "),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:50,color:"primary"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Users: 100K")]),t._v(" "),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:60,color:"warning"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Retention: 90%")]),t._v(" "),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:70,color:"danger"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Duration: 1yr")]),t._v(" "),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:90,color:"success"}})],1)])],1)],1),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[s("vx-card",{attrs:{title:"Support Tracker"}},[s("template",{slot:"actions"},[s("change-time-duration-dropdown")],1),t._v(" "),t.supportTracker.analyticsData?s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"vx-row text-center"},[s("div",{staticClass:"vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last"},[s("div",{staticClass:"lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6"},[s("h1",{staticClass:"font-bold text-5xl"},[t._v(t._s(t.supportTracker.analyticsData.openTickets))]),t._v(" "),s("small",[t._v("Tickets")])])]),t._v(" "),s("div",{staticClass:"vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6"},[s("vue-apex-charts",{attrs:{type:"radialBar",height:"385",options:t.analyticsData.supportTrackerRadialBar.chartOptions,series:t.supportTracker.series}})],1)]),t._v(" "),s("div",{staticClass:"flex flex-row justify-between px-8 pb-4 mt-4"},t._l(t.supportTracker.analyticsData.meta,(function(e,a){return s("p",{key:a,staticClass:"text-center"},[s("span",{staticClass:"block"},[t._v(t._s(a))]),t._v(" "),s("span",{staticClass:"text-2xl font-semibold"},[t._v(t._s(e))])])})),0)]):t._e()],2)],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Product Orders"}},[s("template",{slot:"actions"},[s("change-time-duration-dropdown")],1),t._v(" "),s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("vue-apex-charts",{attrs:{type:"radialBar",height:"420",options:t.analyticsData.productOrdersRadialBar.chartOptions,series:t.productsOrder.series}})],1),t._v(" "),s("ul",t._l(t.productsOrder.analyticsData,(function(e){return s("li",{key:e.orderType,staticClass:"flex mb-3 justify-between"},[s("span",{staticClass:"flex items-center"},[s("span",{staticClass:"inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid",class:"border-"+e.color}),t._v(" "),s("span",{staticClass:"font-semibold"},[t._v(t._s(e.orderType))])]),t._v(" "),s("span",[t._v(t._s(e.counts))])])})),0)],2)],1),t._v(" "),s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Sales Stats",subtitle:"Last 6 Months"}},[s("template",{slot:"actions"},[s("feather-icon",{attrs:{icon:"MoreVerticalIcon",svgClasses:"w-6 h-6 text-grey"}})],1),t._v(" "),s("div",{staticClass:"flex"},[s("span",{staticClass:"flex items-center"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-primary"}),s("span",[t._v("Sales")])]),t._v(" "),s("span",{staticClass:"flex items-center ml-4"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-success"}),s("span",[t._v("Visits")])])]),t._v(" "),s("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[s("vue-apex-charts",{attrs:{type:"radar",height:"385",options:t.analyticsData.statisticsRadar.chartOptions,series:t.salesRadar.series}})],1)],2)],1),t._v(" "),s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Activity Timeline"}},[s("vx-timeline",{attrs:{data:t.timelineData}})],1)],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{attrs:{title:"Dispatched Orders"}},[s("div",{staticClass:"mt-4",attrs:{slot:"no-body"},slot:"no-body"},[s("vs-table",{staticClass:"table-dark-inverted",attrs:{data:t.dispatchedOrders},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,r){return s("vs-tr",{key:r},[s("vs-td",{attrs:{data:a[r].orderNo}},[s("span",[t._v("#"+t._s(a[r].orderNo))])]),t._v(" "),s("vs-td",{attrs:{data:a[r].status}},[s("span",{staticClass:"flex items-center px-2 py-1 rounded"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-2",class:"bg-"+a[r].statusColor}),t._v(t._s(a[r].status))])]),t._v(" "),s("vs-td",{attrs:{data:a[r].orderNo}},[s("ul",{staticClass:"users-liked user-list"},t._l(a[r].usersLiked,(function(t,e){return s("li",{key:e},[s("vx-tooltip",{attrs:{text:t.name,position:"bottom"}},[s("vs-avatar",{staticClass:"border-2 border-white border-solid -m-1",attrs:{src:t.img,size:"30px"}})],1)],1)})),0)]),t._v(" "),s("vs-td",{attrs:{data:a[r].orderNo}},[s("span",[t._v(t._s(a[r].location))])]),t._v(" "),s("vs-td",{attrs:{data:a[r].orderNo}},[s("span",[t._v(t._s(a[r].distance))]),t._v(" "),s("vs-progress",{attrs:{percent:a[r].distPercent,color:a[r].statusColor}})],1),t._v(" "),s("vs-td",{attrs:{data:a[r].orderNo}},[s("span",[t._v(t._s(a[r].startDate))])]),t._v(" "),s("vs-td",{attrs:{data:a[r].orderNo}},[s("span",[t._v(t._s(a[r].estDelDate))])])],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",[t._v("ORDER NO.")]),t._v(" "),s("vs-th",[t._v("STATUS")]),t._v(" "),s("vs-th",[t._v("OPERATORS")]),t._v(" "),s("vs-th",[t._v("LOCATION")]),t._v(" "),s("vs-th",[t._v("DISTANCE")]),t._v(" "),s("vs-th",[t._v("START DATE")]),t._v(" "),s("vs-th",[t._v("EST DELIVERY DATE")])],1)],2)],1)])],1)])])}),[],!1,null,null,null));e.default=b.exports},j4Nb:function(t,e,s){"use strict";s("CFrh")}}]);