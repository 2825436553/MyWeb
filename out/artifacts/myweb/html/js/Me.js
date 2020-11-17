/**
 * by pikachu 2020/8/31
 */
const imagePathINI = "../src/user/head/";
//bgm path
const bgmPathINI = "../src/user/bgm/";
//bg path
const bgPathINI = "../src/user/bg/";
//api
const searchApi = "https://baike.baidu.com/item/";
//text文字变换时间 textTime*0.8 = 真实显示时间
const textTime = 5000;
//切换用户动画时间 
const quserTime = 1800;


//模拟数据  img bg bgm 链接可用本地或者远程
const userArray = [{
	index: 0, //序号 其实没用
	color: {
		theme_color: "",
		themes_color: ""
	}, //主题颜色 theme_color=正常主题。themes_color=鼠标放上主题 （默认：白，黑）
	img: "3a94f0f768.jpg", //头像
	title: "PIKACHU", //昵称
	bg: "me_background.jpg", //背景图片
	bgm: "YuanLongChangAn.mp3", //背景音乐
	text_array: ["好听的音乐永远不会有完整版", "就像喜欢一个人永远都没有结果。", "唱歌的人用了心，听歌的人用了情。", "不怕音乐太好听，就怕歌词入了心。", "愿你只听曲中意，不做曲中人！"], //签名，可以多条，循环播放
	and_me: [{
		text: "作者",
		color: "#c800c8"
	}, {
		text: "男",
		color: "#319fff"
	}], //和我的关系 （标签） text-align: left;
	introduce: "<div style=\"width: fit-content;margin-top: 5px;margin-bottom: 20px;\"><b>	第一个WEB网站，感谢你的访问</b><br>	作者，一个很菜的挨踢小白。理想很伟大，现实开玩笑。在摇篮里长大的me总以为世界很小，	总是有莫名的优越感。当经历过社会的毒打，才意识到可能以前是无知罢了，毕竟无知者无畏，	一瓶不响半瓶晃荡。（吃瓜群众：md一开口就是老网易云了《我在人间凑数的日子》）<br>	QQ：2825436553<br>微信：Pikachu_WeChat<br>有相关职位工作的望大佬带带<br>			<br><b>2018年以前（小学，初中，高中）</b><br>	故事太长，屏幕太小，我有故事你有酒吗，（最好带点花生米）	<br>	<img src=\"../src/user/dataimg/c995d143ad4bd113e6b6c82554afa40f4bfb05a9.jpg\"/>	<br>			<br><b>2018年（无锡 餐厅打工记）</b><br>	第一次打工收获挺多的，(不过说实话服务员确实可以治疗社交恐惧)	<br>	<img src=\"../src/user/dataimg/169711C8D9ECC78B5AE1F312D6C32001.jpg\"/>	<img src=\"../src/user/dataimg/4F0C064FBEBDB76BD89363F5E9226E2F.jpg\"/>	<img src=\"../src/user/dataimg/68D4FBD95568A18B88D5C3E3BF7F787C.jpg\"/>	<br>			<br><b>2018年9月-2019年12月 （学校 混日子记）</b><br>	学校雏形，中秋晚会，集训，爬学校附近的山，学校的灯展，考驾照。	<br>	<img src=\"../src/user/dataimg/F694C689041E84F08F58204B1A291012.jpg\"/>	<img src=\"../src/user/dataimg/888FAF68AF260C54C6E5DCAD838805BA.jpg\"/>	<img src=\"../src/user/dataimg/9FFEB3947088F62D3F0E26DC425AB785.jpg\"/>	<img src=\"../src/user/dataimg/01973FEEA270F0764EAF5655FB5E29AB.jpg\"/>	<img src=\"../src/user/dataimg/61A53AB424033F2E1EC95DD16FC94C96.jpg\"/>	<img src=\"../src/user/dataimg/FCBC52D1F688D87FB329D0C2E827B86E.jpg\"/>	<br>		<br><b>2020年6月-2020年7月 （苏州跑路记）</b><br>	经过长达半年的假期，家庭地位逐渐没有，于是乎苏州电子厂安排。火箭线 太空服 管理刁 吃猪食 工资低 。分分钟跑3个厂，体检血都tm抽干了	<br>	<img src=\"../src/user/dataimg/f2deb48f8c5494ee4918f72523f5e0fe99257ed0.jpg\"/>	<img src=\"../src/user/dataimg/42a98226cffc1e17c33c10244590f603738de920.jpg\"/>	<img src=\"../src/user/dataimg/H0824ab18972bd4078b34f29c74899e510eb309db.jpg\"/>	<img src=\"../src/user/dataimg/08528255feca1100131346dc737bce27.jpg\"/>	<img src=\"../src/user/dataimg/BF13B4D0E30FB87622DB3871C957F0B4.jpg\"/>	<img src=\"../src/user/dataimg/B5ea95c3369efcaba8.png\"/>	<br>			<br><b>2020年7月-2020年8月 （无锡保安记）</b><br>	跑了一个月的我还是选择了当保安，钱不钱的无所谓，就是想当当保安。mmp进去才知道真tm坑。	<br>	<img src=\"../src/user/dataimg/76ADB30EFC0A7ED2A36D9FC681D95CBB.jpg\"/>	<img src=\"../src/user/dataimg/9846F9D0AC467F018C039DCBC0F3260D.jpg\"/>	<img src=\"../src/user/dataimg/6422FAEC9F7C5BCCA25E5CB6C621B4CE.jpg\"/>	<br>			<br><b>2020年8月-2020年9月 （浙江旅游，回家记）</b><br>	朋友哪旅游，然后回家。从跑路到一个月保安，出来带多少钱回去时多少钱，总结这个3个月（赚了个寂寞）。	<br>	<img src=\"../src/user/dataimg/BB527DB3C3F7408815AB270CE4CA53E7.jpg\"/>	<img src=\"../src/user/dataimg/C864D24BC9A41A3FD453F033EEE959AA.jpg\"/>	<img src=\"../src/user/dataimg/7EE52DB97C931737F32F845A1771F1E3.jpg\"/>	<img src=\"../src/user/dataimg/70ACF69ABDAADEAD3A49B36464BE2962.jpg\"/>	<img src=\"../src/user/dataimg/1D2EB95C69D48E340D2A0DC3DACC58E8.jpg\"/>	<img src=\"../src/user/dataimg/B7FDB0DDA84970795FCE21336D305504.jpg\"/>	<img src=\"../src/user/dataimg/EE0F757AA40BF511A3F06E751E597B7A.jpg\"/>	<br>		</div>"
}, {
	index: 1,
	color: {
		theme_color: "",
		themes_color: ""
	},
	img: "2017122211345022157.jpg",
	title: "色坯头子",
	bg: "a.jpg",
	bgm: "bzsc.mp3",
	text_array: ["你好我是派大星，上帝派来爱你的那颗星", "我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼"],
	and_me: [{
		text: "朋友",
		color: "#0080ff"
	}, {
		text: "死党",
		color: "#e85a71"
	}],
	introduce: "就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼我们就好聚好散,我们就好聚好散,就一刀斩开了两断,我翘首以盼,就一刀斩开了两断,我翘首以盼"
}, {
	index: 2,
	color: {
		theme_color: "",
		themes_color: ""
	},
	img: "F2B7869BE4075AE3FB0355B19A0F72AC.jpg",
	title: "再也不想",
	bg: "th.jpg",
	bgm: "la.mp3",
	text_array: ["我们就好聚好散,我们就好聚好散", "你好我是派大星,上帝派来爱你的那颗星"],
	and_me: [{
		text: "室友",
		color: "#008086"
	}, {
		text: "死党",
		color: "#e85a71"
	}, {
		text: "朋友",
		color: "#0080ff"
	}],
	introduce: "//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍//介绍"
}];


//轮播角标 轮播用
let index = 0;
//上一个轮播角标
let indexOld = 0;
//text角标 自动转换用 
let textArrayIndex = 0;
//点击数据判断
const userArrayLrngth = userArray.length - 1;
// 旋转角度
const rotateVal = 1;
//定时器
let r1;
//html加载完毕时不执行换背景动画
let arbg = false;
//切换动画
let textAnEnd = true;
//适配
const an1 = ["", "webkit", "MS"];
const an2 = ["", "-webkit-", "-moz-", "-o-", "-ms-"];

//html 创建完毕
window.onload = function() {

	//定时切换 + 动画
	const ut = document.getElementById("user_text");
	ut.style.msAnimation="userText "+textTime/1000+"s infinite";
	ut.style.MozAnimation="userText "+textTime/1000+"s infinite";
	ut.style.webkitAnimation="userText "+textTime/1000+"s infinite";
	ut.style.animation="userText "+textTime/1000+"s infinite";
	//适配浏览器用 
	for(let i = 0 ; i<an1.length; i++){
		ut.addEventListener(an1[i]+"AnimationStart", onAnimationTo);
		ut.addEventListener(an1[i]+"AnimationIteration", onAnimationTo);
	}
	function onAnimationTo(){
		if(r1!=null){
			//移除上一次的定时器
			clearInterval(r1);
		}
		//根据计算得到比例 为1.11111...
		/* var t=((textTime-(textTime*0.8))/2)+(textTime*0.8); */
		const t = textTime / 1.1111;
		//console.log("当前文字切换速度为 "+t/1000+"s");
		r1= setTimeout(function() {
			const ar = userArray[index].text_array;
			textArrayIndex < ar.length - 1 ? textArrayIndex++ : textArrayIndex = 0;
			document.getElementById("user_text").innerHTML = ar[textArrayIndex];
		},t);
		
	}
	//初始数据
	addLi(userArray.length);
	changeBg(false);
	dynamicSize();
}



//调整窗口
window.onresize = function() {
	dynamicSize();
}



//动态布局
function dynamicSize() {
	const offsetWid = document.documentElement.clientWidth;
	const offsetHei = document.documentElement.clientHeight;
	const ts = [
		document.getElementById("user_title_p"),
		document.getElementById("user_text"),
		document.getElementById("user_title_ps"),
		document.getElementById("user_text_s"),
		document.getElementById("user_la")
	];
	//console.log(offsetWid);
	for (let i = 0; i < ts.length; i++) {
		if (i < 2) {
			ts[i].style.maxWidth = (offsetWid * 0.9) + "px";
		} else{
			if (i===3){
				/* ts[i].style.maxHeight = (offsetHei * 0.24) + "px"; */
				ts[i].style.maxHeight = ( (offsetHei * 0.44)-150 ) + "px";
			}
			ts[i].style.maxWidth = (offsetWid > offsetHei ? offsetWid * 0.4 : offsetWid * 0.7) + "px";
		}
	}
	document.getElementById("lb_ul").style.marginTop = (offsetHei * 0.44) + "px";
	/* //适配浏览器大小用 
	document.getElementById("radius-border-div-id").style.marginTop=-(offsetHei * 0.25) + "px";
	document.getElementById("img-l").style.marginTop=-(offsetHei * 0.25-85) + "px";
	document.getElementById("img-r").style.marginTop=-(offsetHei * 0.25-85) + "px";
	document.getElementById("img-l").style.marginLeft=(offsetWid * 0.1) + "px";
	document.getElementById("img-r").style.marginRight=(offsetWid * 0.1) + "px"; */
}



function imageOnClickLeft() {
	index > 0 ? index-- : index = userArrayLrngth;
	changeBg(false);
	//alert(userArray[index]);
}

function imageOnClickRight() {
	index < userArrayLrngth ? index++ : index = 0;
	changeBg(true);
}



//初始化底部点
function addLi(inx) {
	let i;
	const ulp = document.getElementById("lb_ul");
	let liStr = "";
	for (i = 0; i < inx; i++) {
		if (i === 0) {
			liStr += "<li class=\"o-true\" style=\"margin-left: 0;\"></li>";
		} else {
			liStr += "<li class=\"o-false\"/>";
		}
	}
	ulp.innerHTML = liStr;
	/* 没个点占60px   即((n-1)*60+20) /2  */
	const width = (userArray.length - 1) * 60 + 20;
	ulp.style.width = width + "px";
	ulp.style.marginLeft = (width / 2 * -1) + "px";
	//console.log("width->"+width+"  marginLeft->"+ (width/2*-1));

	const ulps = ulp.getElementsByTagName("li");
	for (i = 0; i < ulps.length; i++) {
		ulps[i].tag = i;
		ulps[i].onclick = function() {
			if (this.tag !== indexOld) {
				this.className = "o-true";
				ulps[indexOld].className = "o-false";
				/* this.tag >= ulps.length ? indexOld = this.tag - 1 : indexOld = this.tag;
				index = indexOld; bug*/
				index = this.tag;
				changeBg(this.tag > indexOld);
				//console.log("tag0->"+this.tag+ "  indexOld0->"+indexOld+"  index0->"+ index);
			}
			//console.log("tag->"+this.tag+ "  indexOld->"+indexOld+"  index->"+ index);
		};
	}
}



//切换用户数据
//切换 背景 + 音乐 + 动画过度 
function changeBg(lOrR) {
	if(arbg){ 
		prohibitOn(false); 
	}
	const imgPath = isHttp(userArray[index].bg, bgPathINI);
	const img = new Image();
	img.src = imgPath;
	img.onload = function () {
		//console.log("利用图片标签先加载图片缓存，解决切换背景图片闪屏问题");


		//开始加载 背景音乐
		const music = document.getElementById("bgm");
		music.src = isHttp(userArray[index].bgm, bgmPathINI);
		music.onload=function(){
			music.play();
		}

		//切换 头像+昵称+个签+关系+标签+详情+动画过度    lOrR=右边(false)还是左边(true)
		upAnimation(lOrR);
		
		if (arbg) {
			document.getElementById("style-bg").innerHTML = "@keyframes opacity{100%{background-image: url(" +
				imgPath + ")}}@-webkit-keyframes opacity {100%{background-image: url(" +
				imgPath + ")}}";

			const bgView = document.getElementById("bg");
			bgView.style.animation = "opacity "+quserTime/1000+"s";
			bgView.style.WebkitAnimation = "opacity "+quserTime/1000+"s";
			setTimeout(function(){
				bgView.style.backgroundImage = "url(" + imgPath + ")";
			},quserTime-50);
			setTimeout(function() {
				/* bgView.style.backgroundImage = "url(" + imgPath + ")"; */
				bgView.style.animation = "opacity0 0s";
				bgView.style.WebkitAnimation = "opacity0 0s";
				prohibitOn(true);
				userEnd();
			}, quserTime);
		} else{
			arbg = true; 
		}
	}
	img.onerror = userError;


}



//切换 头像+昵称+个签+关系+标签+详情+底部的点+动画过度    lOrR=右边(false)还是左边(true)
function upAnimation(lOrR) {
	//屏幕宽
	const offsetWid = document.documentElement.clientWidth / 2;
	//动画承载 style
	const styleAnimation = document.getElementById("style-h-t");
	//要使用动画的标签 (头像) 
	const headAnimation = document.getElementById("radius-border-div");
	//要使用动画的标签 (文字) 
	const textAnimation = document.getElementById("vertical-center-text-id");

	let s1 = offsetWid, s2 = offsetWid;
	if(lOrR){
		s1*=-1;
		s2*=1;
	}else{
		s1*=1;
		s2*=-1;
	}
	
	//载入动画
	if(arbg){
		styleAnimation.innerHTML="@keyframes startp{"+
				"0%{ transform:translate(0px,0px);}"+
				"50%{ transform:translate("+s1+"px,0px);opacity: 0; }"+
				"51%{ transform:translate("+s2+"px,0px);}"+
				"100%{ transform:translate(0px,0px); opacity:1;}}";
	}else{
		styleAnimation.innerHTML="@keyframes startp{"+
				"0%{ transform:translate(0px,0px);opacity: 0;}"+
				"50%{ transform:translate("+-s1+"px,0px);opacity: 0; }"+
				"51%{ transform:translate("+-s2+"px,0px);}"+
				"100%{ transform:translate(0px,0px); opacity:1;}}";
	}
	
	//切换动画开始
	textAnEnd=false;
	//绑定动画
	headAnimation.style.animation="startp "+quserTime/1200+"s";
	textAnimation.style.animation="startp "+quserTime/1000+"s";
	headAnimation.addEventListener("animationend",function(){textAnEnd=true;});
	textAnimation.addEventListener("animationend",function(){
		//解绑动画 onmouseover
		headAnimation.style.animation="stopp 0s";
		textAnimation.style.animation="stopp 0s";
	});
	
	
	//更换数据
	setTimeout(function() {
		//头像
		document.getElementById("image_user").src = isHttp(userArray[index].img, imagePathINI);
		//昵称
		document.getElementById("user_title").innerHTML = userArray[index].title;
		//签名
		document.getElementById("user_text").innerHTML = userArray[index].text_array[textArrayIndex = 0];
		//昵称 2
		document.getElementById("user_title_ps").innerHTML = userArray[index].title;
		//标签 关系
		document.getElementById("user_la").innerHTML = addLabelStr();
		//介绍
		document.getElementById("user_text_s").innerHTML = userArray[index].introduce;
		//底部的点
		const ulp = document.getElementById("lb_ul").getElementsByTagName("li");
		ulp[indexOld].className = "o-false";
		ulp[index].className = "o-true";
		//console.log("indexOld->"+indexOld+"  index->"+ index);
	}, quserTime/2);
}


//切换用户完成后的操作
function userEnd(){
	
	//console.log("背景图片，切换完成");
	//更换当前指示游标
	indexOld = index;
	//文字游标指向0
	textArrayIndex=0;
	
}

//切换用户失败后的操作
function userError(){
	//释放点击
	prohibitOn(true);
	alert("哦！海绵宝宝，章鱼哥的图片好像出了点问题。");
}





//切换主题颜色
function switchUserColor(index_1, indexOld_1) {



}



//合成标签
function addLabelStr() {
	const list = userArray[index].and_me;
	let strLabe = "";
	for (let i = 0; i < list.length; i++) {
		if (i === 0) {
			strLabe += "<a class=\"text-title3_1\" href=\"" + searchApi + list[i].text +
				"\" target=\"_blank\" style=\" background-color: " +
				list[i].color + "; margin-left: 0px;\">" +
				list[i].text +
				"</a>";
		} else {
			strLabe += "<a class=\"text-title3_1\" href=\"" + searchApi + list[i].text +
				"\" target=\"_blank\" style=\" background-color: " +
				list[i].color + ";\">" +
				list[i].text +
				"</a>";
		}
	}
	return strLabe ;
}



// 鼠标移动上去绑定动画
function showA(info){
	if(textAnEnd){
		const headAnimation = document.getElementById("radius-border-div");
		let str = "";
		if(info){
			str = "pic "+quserTime/1000+"s linear infinite";
		}else{
			str = "stopp 0s";
		}
		headAnimation.style.animation= str ;
		/*适配浏览器
		headAnimation.style.animation= str ;
		headAnimation.style.animation= str ;
		headAnimation.style.animation= str ; */
	}
}



// 鼠标移动上去显示详情
function showInform(info) {
	const t1 = document.getElementById("user_title_p");
	const t2 = document.getElementById("user_text");
	const t3 = document.getElementById("user_title_ps");
	const t4 = document.getElementById("user_text_s");
	const t5 = document.getElementById("user_la");

	// opacity: 1;
	if (info) {
		t1.style.display = "none";
		t2.style.display = "none";
		t3.style.display = "block";
		t4.style.display = "block";
		t5.style.display = "block";
	} else {
		t1.style.display = "block";
		t2.style.display = "block";
		t3.style.display = "none";
		t4.style.display = "none";
		t5.style.display = "none";
	}
}



//禁止点击切换 （is = 是否响应点击）
function prohibitOn(is) {
	let str ;
	if (is) {
		str = "auto"; //响应点击
	} else {
		str = "none"; //禁止点击
	}
	document.getElementById("img-l").style.pointerEvents = str;
	document.getElementById("img-r").style.pointerEvents = str;

	const ulps = document.getElementById("lb_ul").getElementsByTagName("li");
	for (let i = 0; i < ulps.length; i++) {
		ulps[i].style.pointerEvents = str;
	}
}



//判断String是否为链接 返回链接
function isHttp(str, path) {
	if (str.indexOf("http://") !== -1 || str.indexOf("https://") !== -1)
		return str;
	else
		return path + str;
}






//获取数据
function loadXMLDoc(path) {
	let xmlhttp;
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		//监听
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", path, true);
	xmlhttp.send();
}
