(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"3bc0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{xikxik:t.xikxik,newsList:t.newsList,poet:t.poet}})],1)},i=[],s={animal:["海鷗","小貓","小狗","鯨魚","水獺","烏龜","狼","獾","地鼠","蝸牛","蝙蝠","大象","獅子"],noun:["天空","大火","風","雷電","浮雲","山嵐","大海","石頭","漩渦","樹","草","花","磚牆","竹籬","碗","陶窯","泥土路","紙船","風箏","馬車","柏油路","電線竿","怪手","磚牆","竹籬","碗","紙船","風箏","馬車"],natureS:["天","雲","海","山","月亮","風","大雨","太陽","雷","閃電","雲豹","老虎","黑熊","山豬","飛鼠","巫師","神仙"],place:["湖泊","森林","山脈","海島","平原","沼澤","高山","大地","河流","茅坑","木屋","稻田","五角大廈","金時堂","迪士尼樂園","恐怖谷","鬼屋","武道館","下水道","火車站","雲端","地獄","天堂","高速公路","外太空","星空下","美好的夏夜","午夜裡","光天化日下","大霧中","火堆旁"],vi:["站著","坐著","躺著","沉默","停止","持續轉動","睡著","獨自漫歩","靜坐","自爆","休息","自爆","狂吃拉麵","原地轉圈","表演單腳跳","寫程式","祈禱","靜坐","吹泡泡","玩耍","跳舞","做實驗","算數學"],peaceVI:["等待","沉默","凝結","睡去","微笑","祈禱"],violenceVI:["崩潰","倒下","碎裂","死了","破了","消失無蹤"],vt:["毆打","拍打","載運","推動","舉起","移動","衝擊","包容","擁抱","輕撫","親吻","照顧","安慰","治癒","喚醒","擁抱","扶起","牽起","保護","溫暖","呵護","安撫","深愛著","固定","敲擊","抓緊","踐踏","踢","撕裂","壓倒","撞破","衝向","搥打","揉躪","敲擊","搖晃","扭轉","壓扁","攻擊","摔破"],peaceVT:["輕撫","親吻","照顧","安慰","治癒","喚醒","擁抱","扶起","牽起","保護","溫暖","呵護","安撫","深愛著"],violenceVT:["拍打","踐踏","踢","撕裂","壓倒","撞破","衝向","搥打","揉躪","敲擊","搖晃","扭轉","壓扁","攻擊","摔破"],blah:["沒有人知道為什麼","原來","過了很久","時光飛逝","風吹過之後","這就是，世界的夢囈","於是，我們也生生不息","無常，還是無常","喔喔喔","妙哉，善哉"],num:[1,2,3,5,10,20,30,50,100,200,500],per:["和尚","道士","外星人","剌客","魔法師","智者","戰士","修行人","小偷","工頭","國王","詩人","船長","路人甲","修女","超人","漁夫","農婦","小女孩","小男孩","小肥蟲","外星人","電漿生物","變形蟲","蜘蛛人","神奇寶貝","MIB探員","秘密客","宗教領袖","幽靈","政客","知名藝人","米老鼠","白雪公主","空空道人","假面超人","哈哈人","魔術師","小叮噹","武林高手","航海家","數學家","強盜","幫派份子","水果奶奶","微生物","黑傑克","紅魔鬼","黃飛鴻","夜叉","河童","孫悟空","豬八戒","富豪","恐怖份子","宅男","宅女"],adj:["不起眼的","爆笑的","詭異的","愚蠢的","引人省思的","意義深遠的","巨大的","寶貴的","奇特的"],object:["雞蛋","釘子","小刀","骨頭","定時炸彈","水晶球","原子筆","絲巾","符咒","電子計算機","電腦","地球儀","綿被","掃把","鋤頭","石頭","石油","玩偶","滑鼠","啟蒙導師牌","竹筒飯","香蕉","花"],natureO:["石頭","土地","湖","小溪","雲","沖積扇","荔枝","高麗菜","野薑花","相思樹","芒草","柳樹","毛毛蟲","蚯蚓","蟑螂","烏龜","斑馬","貓","黃牛","水牛","綿羊"],civilO:["磚牆","竹籬","茅坑","木屋","稻田","碗","陶窯","泥土路","紙船","風箏","馬車","柏油路","電線竿","怪手","磚牆","竹籬","茅坑","木屋","稻田","碗"]},o=["昨日per被指控在place放置adjobject，他鄭重否認。告密者per表示，他已有充份證據，將於num日後公諸於世。","昨日per宣稱，他和per在遺傳上是接近的。對方表示，這種說法純粹是為了要繼承adjobject。","最近避不露面的per終於出現了，他對外表示，連續num日他都在placevi","昨天per和per在place旁彼此vt。他們相互vt了num分鐘，最後決定一起vi","per和per昨天竟然在place旁violenceVI了num分鐘，大家都覺得很神奇","per昨天在place旁vtanimal，引來num人關注"],l=["blah","perpeaceVTnatureO","perpeaceVTnatureO","animalvi、vi","blah","natureSvtnatureO","natureSvtnatureO","animalpeaceVI、peaceVI","只剩下place"],c={name:"app",data:function(){return{xikxik:s,newsList:o,poet:l}},methods:{},mounted:function(){}},u=c,p=(n("034f"),n("2877")),d=Object(p["a"])(u,r,i,!1,null,null,null),f=d.exports,v=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"ui container grid"},[t._m(0),n("div",{staticClass:"two column doubling row",attrs:{id:"poet"}},[n("div",{staticClass:"six wide column ui teal segment"},[n("h1",[t._v("拾詩氏")]),n("img",{attrs:{src:"http://lorempixel.com/400/200/animals/"}}),n("hr"),n("div",{staticClass:"ui list"},t._l(t.poet,function(e,a){return n("div",{key:a,staticClass:"item"},[n("h2",[t._v(t._s(t.parse(e)))])])}),0)]),n("div",{staticClass:"ten wide column left aligned ui black segment"},[n("h1",[t._v("小道小報 "+t._s(t.today.getFullYear()+"-"+(t.today.getMonth()+1)+"-"+t.today.getDate()))]),n("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}}),n("h2",[t._v("(本報訊)")]),n("div",{staticClass:"ui bulleted celled list"},t._l(t.newsList,function(e,a){return n("div",{key:a,staticClass:"item"},[n("h3",[t._v(t._s(t.parse(e)))])])}),0)],1)]),n("div",{staticClass:"one column row"},[n("div",{staticClass:"column ui segment"},[n("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}})],1)]),t._m(1),t._m(2)])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one column row"},[n("div",{staticClass:"column"},[n("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[t._v("再來！")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one column row"},[n("div",{staticClass:"column"},[n("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[t._v("再來！")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one column row"},[n("div",{staticClass:"column"},[n("div",{staticClass:"fb-comments",attrs:{"data-href":"http://xikxik.bestian.tw","data-width":"","data-numposts":"5"}})])])}],b=(n("a481"),n("ac6a"),n("456d"),n("55dd"),{name:"HelloWorld",data:function(){return{today:new Date}},props:["xikxik","newsList","poet"],methods:{p:function(t){var e=this.xikxik[t],n=Math.floor(Math.random()*e.length);return e[n]},parse:function(t){for(var e=t,n=Object.keys(this.xikxik).sort(function(t,e){return e.length-t.length}),a=0;a<n.length;a++){var r=n[a];t.indexOf(r)>-1&&(e=e.replace(r,this.p(r)))}for(var i=!0,s=0;s<n.length;s++){var o=n[s];e.indexOf(o)>-1&&(i=!1)}return i?e:this.parse(e)}}}),g=b,_=(n("8326"),Object(p["a"])(g,m,h,!1,null,"53e6062f",null)),w=_.exports;a["a"].use(v["a"]);var x=new v["a"]({routes:[{path:"/",name:"HelloWorld",component:w}]}),k=(n("c4ca"),n("bf74")),y=n.n(k);a["a"].use(n("395c")),a["a"].use(y.a.Adsense),a["a"].use(y.a.InArticleAdsense),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(f)},router:x}).$mount("#app")},"64a9":function(t,e,n){},8326:function(t,e,n){"use strict";var a=n("3bc0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.36527fe9.js.map