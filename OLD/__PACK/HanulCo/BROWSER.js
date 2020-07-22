HanulCo.MAIN=METHOD({run:n=>{ADD_FONT({name:"Noto Sans KR",style:"normal",weight:400,woff2:"//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2",woff:"//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff",opentype:"//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf"}),HanulCo.MATCH_VIEW({uri:"",target:HanulCo.Home}),HanulCo.MATCH_VIEW({uri:"iconlaunch",target:HanulCo.IconLaunch}),HanulCo.MATCH_VIEW({uri:"reverselines",target:HanulCo.ReverseLines}),HanulCo.MATCH_VIEW({uri:"googlepaymentscsv",target:HanulCo.GooglePaymentsCSV}),HanulCo.MATCH_VIEW({uri:"ip",target:HanulCo.GetIP}),HanulCo.MATCH_VIEW({uri:"generatemongoid",target:HanulCo.GenerateMongoId})}}),HanulCo.GenerateMongoId=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o,t=HanulCo.ROOM("generateMongoIdRoom"),i=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"Generate Mongo ID"}),P({c:"MongoDB ID를 생성하는 툴입니다."})]}),DIV({style:{marginTop:15},c:[o=TEXTAREA({style:{width:"100%",height:300}})]}),DIV({style:{marginTop:20},c:A({style:{color:"#3399FF",textDecoration:"underline"},c:"hanul.co로 돌아가기",on:{tap:()=>{HanulCo.GO("")}}})})]}).appendTo(BODY);t.send("getIds",o.setValue),n.on("close",()=>{i.remove()})}}),HanulCo.GetIP=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o,t=HanulCo.ROOM("getIPRoom"),i=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"Get IP"}),P({c:"로컬 IP와 실제 IP를 확인하는 툴입니다."})]}),o=DIV({style:{marginTop:15}}),DIV({style:{marginTop:20},c:A({style:{color:"#3399FF",textDecoration:"underline"},c:"hanul.co로 돌아가기",on:{tap:()=>{HanulCo.GO("")}}})})]}).appendTo(BODY);window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;let a=new RTCPeerConnection({iceServers:[]}),c=()=>{};a.createDataChannel(""),a.createOffer(a.setLocalDescription.bind(a),c),a.onicecandidate=(n=>{n&&n.candidate&&n.candidate.candidate&&(o.append(P({c:"로컬 IP: "+/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(n.candidate.candidate)[1]})),a.onicecandidate=c)}),t.send("getIP",n=>{o.append(P({c:"실제 IP: "+n}))}),n.on("close",()=>{i.remove()})}}),HanulCo.GooglePaymentsCSV=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o,t=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"Google Payments CSV Tool"}),P({c:"정산 작업을 위해 Google Payments 에서 제공하는 CSV를 분석하는 툴입니다."})]}),UUI.FULL_UPLOAD_FORM({style:{marginTop:15,border:"1px solid #999"},box:HanulCo},{overSizeFile:n=>{alert("파일 용량은 "+n+"mb를 넘을 수 없습니다.")},success:(n,e)=>{GET("__RF/HanulCo/"+n.id,n=>{let e={},t=0,i=[];EACH(n.split("\n"),(n,e)=>{let o=n.split(",");0===e||isNaN(o[0])===!0&&i.push(o)}),i.sort((n,e)=>{return n[7].localeCompare(e[7])});let a=0;EACH(i,(n,o)=>{let i=n[7],c=i.substring(i.indexOf("(")+1);c=c.substring(0,c.indexOf(")")),""===c&&(c=i);let l=e[c];void 0===l&&(l=c+"\n일자\t이름\t국가\t종류\t액수 (원)",t+=3),l+="\n",l+=(n[1]+n[2]+" "+n[3]).replace(/"/g,"")+"\t",l+=i+"\t",l+=n[12]+"\t",l+=n[5]+"\t",l+=isNaN(n[19])===!0?n[20]:n[19],a+=REAL(isNaN(n[19])===!0?n[20]:n[19]),t+=1,e[c]=l});let c="";EACH(e,n=>{""!==c&&(c+="\n\n"),c+=n}),o.setValue(c),o.addStyle({height:24*(t+4)})})}}),o=UUI.FULL_TEXTAREA({style:{marginTop:15}}),DIV({style:{marginTop:20},c:A({style:{color:"#3399FF",textDecoration:"underline"},c:"hanul.co로 돌아가기",on:{tap:()=>{HanulCo.GO("")}}})})]}).appendTo(BODY);n.on("close",()=>{t.remove()})}}),HanulCo.Home=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o={display:"block",padding:"20px 25px",fontWeight:"bold",borderRadius:8},t=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"hanul.co"}),P({c:"Hanul's Components"})]}),UL({style:{marginTop:15},c:[LI({style:{flt:"left",marginRight:10},c:A({style:COMBINE([o,{backgroundColor:"#0269E2"}]),c:"Icon Launch",on:{tap:()=>{HanulCo.GO("iconlaunch")}}})}),LI({style:{flt:"left",marginRight:10},c:A({style:COMBINE([o,{backgroundColor:"#DE0000"}]),c:"Reverse Lines",on:{tap:()=>{HanulCo.GO("reverselines")}}})}),LI({style:{flt:"left",marginRight:10},c:A({style:COMBINE([o,{backgroundColor:"#99CC00"}]),c:"Google Payments CSV Tool",on:{tap:()=>{HanulCo.GO("googlepaymentscsv")}}})}),LI({style:{flt:"left",marginRight:10},c:A({style:COMBINE([o,{backgroundColor:"#993333"}]),c:"Get IP",on:{tap:()=>{HanulCo.GO("ip")}}})}),LI({style:{flt:"left",marginRight:10},c:A({style:COMBINE([o,{backgroundColor:"#13aa52"}]),c:"Generate Mongo ID",on:{tap:()=>{HanulCo.GO("generatemongoid")}}})}),CLEAR_BOTH()]}),A({href:"https://github.com/Hanul/hanul.co",target:"_blank",c:IMG({style:{position:"absolute",right:0,top:0},src:"https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67"})})]}).appendTo(BODY);n.on("close",()=>{t.remove()})}}),HanulCo.IconLaunch=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o=HanulCo.ROOM("iconLaunchRoom"),t=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"Icon Launch"}),P({c:"이미지 하나로 여러 앱 아이콘들과 아이폰 용 Launch 이미지를 생성해주는 툴입니다."})]}),DIV({style:{marginTop:20},c:[H2({style:{fontSize:20},c:"앱 아이콘 생성"}),P({c:"최대한 큰 앱 아이콘 이미지를 선택해주세요."}),UUI.FULL_UPLOAD_FORM({style:{marginTop:10,border:"1px solid #999"},box:HanulCo},{overSizeFile:n=>{alert("파일 용량은 "+n+"mb를 넘을 수 없습니다.")},success:n=>{o.send({methodName:"icon",data:n.id},()=>{let e=new JSZip,o=0,t=0;EACH(["mdpi","hdpi","xhdpi","xxhdpi","xxxhdpi","GooglePlayStore"],i=>{o+=1;let a;"GooglePlayStore"!==i&&(a=e.folder("mipmap-"+i));let c=new Image;c.src=HanulCo.RF(n.id+"-"+i+".png"),c.onload=(()=>{let n=CANVAS({width:c.width,height:c.height}).appendTo(BODY);n.hide();let l=c.width,s=n.getContext("2d");if(s.lineTo(.9*l,0),s.quadraticCurveTo(l,0,l,.1*l),s.lineTo(l,.9*l),s.quadraticCurveTo(l,l,.9*l,l),s.lineTo(.1*l,l),s.quadraticCurveTo(0,l,0,.9*l),s.lineTo(0,.1*l),s.quadraticCurveTo(0,0,.1*l,0),s.clip(),s.drawImage(c,0,0,l,l),"GooglePlayStore"===i){let o=n.getDataURL();e.file("GooglePlayStore.png",o.substring(o.indexOf("base64,")+7),{base64:!0}),n.remove()}else{let e=n.getDataURL();a.file("ic_launcher.png",e.substring(e.indexOf("base64,")+7),{base64:!0}),n.remove(),RUN(()=>{let n=CANVAS({width:c.width,height:c.height}).appendTo(BODY);n.hide();let e=n.getContext("2d");e.arc(c.width/2,c.width/2,c.width/2,0,2*Math.PI),e.clip(),e.drawImage(c,0,0,c.width,c.height);let o=n.getDataURL();a.file("ic_launcher_round.png",o.substring(o.indexOf("base64,")+7),{base64:!0}),n.remove()})}t+=1,o===t&&e.generateAsync({type:"blob"}).then(n=>{saveAs(n,"icons.zip")})})}),EACH(["iPhoneNotification2x","iPhoneNotification3x","iPhoneSettings2x","iPhoneSettings3x","iPhoneSpotlight2x","iPhoneSpotlight3x","iPhoneApp2x","iPhoneApp3x","iPadNotification1x","iPadNotification2x","iPadSettings1x","iPadSettings2x","iPadSpotlight1x","iPadSpotlight2x","iPadApp1x","iPadApp2x","iPadProApp2x","AppStore"],i=>{o+=1;let a;"AppStore"!==i&&(a=e.folder("AppIcon"));let c=new Image;c.src=HanulCo.RF(n.id+"-"+i+".png"),c.onload=(()=>{let n=CANVAS({width:c.width,height:c.height}).appendTo(BODY);n.hide();let l=c.width,s=n.getContext("2d");if(s.drawImage(c,0,0,l,l),"AppStore"===i){let o=n.getDataURL();e.file("AppStore.png",o.substring(o.indexOf("base64,")+7),{base64:!0}),n.remove()}else{let e=n.getDataURL();a.file(i+".png",e.substring(e.indexOf("base64,")+7),{base64:!0}),n.remove()}t+=1,o===t&&e.generateAsync({type:"blob"}).then(n=>{saveAs(n,"icons.zip")})})})})}})]}),DIV({style:{marginTop:20},c:[H2({style:{fontSize:20},c:"Launch 이미지 생성"}),P({c:"최대한 큰 Launch 이미지를 선택해주세요."}),UUI.FULL_UPLOAD_FORM({style:{marginTop:10,border:"1px solid #999"},box:HanulCo},{overSizeFile:n=>{alert("파일 용량은 "+n+"mb를 넘을 수 없습니다.")},success:n=>{o.send({methodName:"launchImage",data:n.id},()=>{let e=new JSZip,o=0,t=0;EACH(HanulCo.LaunchImageMap,(i,a)=>{o+=1;let c=new Image;c.src=HanulCo.RF(n.id+"-"+a+".png"),c.onload=(()=>{let n=CANVAS({width:c.width,height:c.height}).appendTo(BODY);n.hide();let i=(c.width,n.getContext("2d"));i.drawImage(c,0,0,c.width,c.height);let l=n.getDataURL();e.file(a+".png",l.substring(l.indexOf("base64,")+7),{base64:!0}),n.remove(),t+=1,o===t&&e.generateAsync({type:"blob"}).then(n=>{saveAs(n,"launchimages.zip")})})})})}})]}),DIV({style:{marginTop:20},c:A({style:{color:"#3399FF",textDecoration:"underline"},c:"hanul.co로 돌아가기",on:{tap:()=>{HanulCo.GO("")}}})})]}).appendTo(BODY);n.on("close",()=>{t.remove()})}}),HanulCo.ReverseLines=CLASS({preset:()=>{return VIEW},init:(n,e)=>{let o,t=DIV({style:{fontFamily:"Noto Sans KR",fontSize:16,padding:"20px 25px"},c:[HEADER({c:[H1({style:{fontSize:30},c:"Reverse Lines"}),P({c:"여러 문자열의 순서를 역순으로 변환하는 툴입니다."})]}),DIV({style:{marginTop:15},c:[o=TEXTAREA({style:{width:"100%",height:300}}),UUI.FULL_SUBMIT({style:{marginTop:8,borderRadius:4},value:"역순으로 변환하기",on:{tap:()=>{let n="";REVERSE_EACH(o.getValue().split("\n"),(e,o)=>{n+=e,o>0&&(n+="\n")}),o.setValue(n)}}})]}),DIV({style:{marginTop:20},c:A({style:{color:"#3399FF",textDecoration:"underline"},c:"hanul.co로 돌아가기",on:{tap:()=>{HanulCo.GO("")}}})})]}).appendTo(BODY);n.on("close",()=>{t.remove()})}});