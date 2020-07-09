require('../../css/index.less');

import Popup from '../../components/popup/popup.vue'

import {createStore} from '../store/index.js'
import Api from '../api/index.js'
import Utils from '../common/index.js'

Vue.prototype.$Api = Api;
Vue.prototype.$Utils = Utils;
Vue.prototype.resPath = __CDNPATH;

Vue.component('popup',Popup);

const store = createStore();


const app = new Vue({
	el : "#app",
	store,
	data : function(){
        return{
			start_show : true, //开场动画
			page_state : 'home', // 首页
			request_ok: true,
        	nickName : '',//游戏昵称，地址上携带
        	isLogin : false,//已授权登录
        	isLottery : false,
			noPagePkey: false,
        	checkClick : true,
        	record : [],//分享者被开福袋记录
        	serverId : '',//选择的服务器id
        	serverName : '',//选择的服务器名称
        	roleId : '',//输入的角色ID
        	roleName : '',//输入的角色ID对应的昵称
        	roleDataKey : '',//
        	errorMsg : '',//
        	bjTime : null,
        	gamestart : null,
        	usernumber : 0,
        	currentTime : '',//服务器时间
        	activityEnd : false,//活动是否结束
			pageUrl : __DEBUG ? 'https://test.nie.163.com/test_html/knivesout.jp/sns/hyxd_junxu/' : 'https://www.knivesout.jp/sns/hyxd_junxu/',
			ealphaData : 0,
			ebetaData : 0,
			egammaData : 0,
			position: {x:0, y:0},
			start_ealpha : 0, // 上移 
			start_ebeta : 0, // 下移
			span_h: 0,
			span_w: 0,
			bg_box: {w:0, h:0},
			startX: 0,
			startY: 0,
			isTouch: false, //是否滑动
			isOk: true,
			aimData: {w:0 ,h:0,coreX: 0,coreY: 0,effect:false}, // 瞄准     
			monsterData: {blood: 10000}, 
			jlu:0,
			gamma: 0,
			beta: 0,
			target_core:{x:0,y:0},
			count: '',
			count_num :59
        }
    },
    components:{},
	computed :{},
	watch : {
		serverId : function(){
			if(this.serverId==""){
				this.errorMsg = " サーバーを選択してください";
			}else{
				this.errorMsg = "";
			}
		},
		roleId : function(){
			if(this.roleId==""){
				this.errorMsg = " キャラクターIDを入力する";
			}else{
				this.errorMsg = "";
			}
		}
	},
	created: function(){
		
	},
	methods : {
		//登录
		login(){
			let _this = this;
			var apiUrl = 'https://interact2.webapp.easebar.com/g83military/';//配置平台提供的接口域名链接
			function getLoginInfo() {
				var myurl = myLogin.urlps(location.href);
				var dev = myLogin.dev()||myLogin.def;
				var page_key = myurl.data("page_key");
				var code='';
				var ap = '';
				var dobj = {page_key:page_key,need_userinfo:1};
				switch(dev) {
					case 'weixin':
						code = myurl.data('code');
						dobj.code = code;
						ap = 'wx/login';
						break;
					case 'qq':
						code = myurl.data('code');
						dobj.code = code;
						dobj.redirect_uri = myurl.data("rurl");
						ap = 'qq/login';
						break;
					case 'weibo':
						code = myurl.data('code');
						dobj.code = code;
						dobj.redirect_uri = "https://game.163.com/weibo/callback/";
						ap = 'weibo/login';
						break;
					// case 'facebook':
					// 	code = myurl.data('code');
					// 	dobj.code = code;
					// 	dobj.redirect_uri = "https://www.knivesout.jp/callback/";
					// 	ap = 'fb/login';
					// 	break;
					// case 'line':
					// 	code = myurl.data('code');
					// 	dobj.code = code;
					// 	dobj.redirect_uri = "https://www.knivesout.jp/callback/";
					// 	ap = 'line/login';
					// 	break;
					// case 'twitter':
					// 	code = myurl.data('oauth_token');
					// 	dobj.oauth_token = code;
					// 	dobj.oauth_verifier = myurl.data("oauth_verifier");
					// 	ap = 'twitter/login';
					// 	break;
				}
				
				$.ajax({
					url:apiUrl+ap,
					data:dobj,
					dataType:"jsonp",
					success:function(data){
						if (data.success == true) {
							_this.loginSuccess(data)
							// alert(data)
						} else {
							if(!data.msg) {
								data.msg=data.error;
							}
							if (data.msg.indexOf('invalid') != -1) {
								myLogin.go();
							} else if(data.msg=='无效的Code：') {
								myLogin.go();
							} else if(data.msg.toLowerCase().indexOf('code') != -1) {
								myLogin.go();
							} else if(data.msg.toLowerCase().indexOf('req_id') != -1) {
								myLogin.go();
							} else if(data.msg.toLowerCase().indexOf('信息异常') != -1) {
								myLogin.go();
							} else if(data.msg.toLowerCase().indexOf('failed') != -1) {
								myLogin.go();
							} else if(data.msg.toLowerCase().indexOf('error') != -1) {
								myLogin.go();
							} else {
								alert(data.msg);
							}
						}
					},
					error:function(){
						alert('网络信号不好，请刷新再试');
					}
				});
			} 
			var dev = myLogin.dev();

			if(!dev) {
				myLogin.def='twitter';//配置当前页面使用哪个平台的授权，可配置值 weixin,qq,weibo,facebook,line,twitter,不配置则自动判断当前所属平台，国内平台判断会正常，海外的判断不了平台，海外的项目需要指定一下
			}
			myLogin.apiUrl = apiUrl+'twitter/request_token';//配置平台提供的获取推特request_token的链接
			if(!myLogin.check()) {
				myLogin.go();
			} else {
				getLoginInfo();
			}
		},
		//登录成功后处理
		loginSuccess(data){
			let $this = this;
			this.isLogin = true;
			this.currentTime = data.curr_time;
        	// this.$store.commit("setUserId",data.user_id);
			// this.$store.commit("setToken",data.weixin_token);
			console.log(data)
        	//授权登录后上报
		    MShare.loginReport({
		        user_id : data.user_id, //一般为用户的openid值
				user_name : data.nickname, //用户的昵称
				login_from : data.login_type
			});
			gtag('send', 'event', `${data.login_type}已登录授权`);

		},
		//分享初始
		mshareInit(){
			//初始化组件
		    MShare.init({
		        product : '', //产品代号名，默认不填为当前页面域名
		        activity : 'hyxd_junxu', //活动名，方便多个URL统计到一起，默认不填为当前页面地址
		        debug : false, //开启调试，则会在左下角显示上报的log
		        hideMoments : false, //隐藏"微信"分享到朋友圈的按钮，默认是false，不隐藏，非微信无作用
		        hideFriend : false //隐藏"微信"分享到朋友的按钮，默认是false，不隐藏，非微信无作用
		    });
		},
		//twitter分享
		twitterShare(){

			//自定义事件上报，比如：按了某个按钮
			MShare.report({
		        monitor : 'twitter-btn', //必填，需要使用英文，上报的关键字
		        type : '点击twitter分享按钮'  //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
		    });
		    gtag('event', '点击twitter分享按钮');
		    //分享信息设置
			let shareConfig = {
				title : '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！',//分享标题
				url : MShare.getShareUrl(`${this.pageUrl}?page_key=${this.$Utils.getUrlParam("page_key")}`),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/twShare2.png'
			}
			//首次点击分享按钮显示分享获奖弹窗
			if(!localStorage.getItem("knivesout.jp-shareclick")){

				localStorage.getItem("knivesout.jp-shareclick",true);
			}
			//非twitter环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareConfig.title) + "&url=" + encodeURIComponent(MShare.getShareUrl());
			MShare.openShare({
		        title : shareConfig.title,
		        desc : shareConfig.title,
		        url : shareConfig.url,
		        imgurl : shareConfig.image,
		        type : 'twitter', //当需要在浏览器中分享，则要指定分享渠道
		        callback : function(ret){
		            //此为打开分享窗口后的回调（非分享成功）
		            //ret.channel为客户端类型
		        }
		    });

		},
		//line分享
		lineShare(){
			let $this = this;
			//自定义事件上报，比如：按了某个按钮
			MShare.report({
		        monitor : 'line-btn', //必填，需要使用英文，上报的关键字
		        type : '点击line分享按钮'  //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
		    });
		    gtag('event', '点击line分享按钮');
		    //分享信息设置
			let shareConfig = {
				title : '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！',//分享标题
				url : MShare.getShareUrl(`${this.pageUrl}?page_key=${this.$Utils.getUrlParam("page_key")}`),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/falineShare2.png'
			}
			//首次点击分享按钮显示分享获奖弹窗
			if(!localStorage.getItem("knivesout.jp-shareclick")){
				localStorage.getItem("knivesout.jp-shareclick",true);
			}
			//非line环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(shareConfig.url)
			MShare.openShare({
		        title : shareConfig.title,
		        desc : shareConfig.title,
		        url : shareConfig.url,
		        imgurl : shareConfig.image,
		        type : 'line', //当需要在浏览器中分享，则要指定分享渠道
		        callback : function(ret){
		            //此为打开分享窗口后的回调（非分享成功）
		            //ret.channel为客户端类型
		        }
		    });

		},
		//facebook分享
		faceShare(){
			let $this = this;
			//自定义事件上报，比如：按了某个按钮
			MShare.report({
		        monitor : 'facebook-btn', //必填，需要使用英文，上报的关键字
		        type : '点击facebook分享按钮'  //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
		    });
		    gtag('event', '点击facebook分享按钮');
		    //分享信息设置
			let shareConfig = {
				title : '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！',//分享标题
				url : MShare.getShareUrl(`${this.pageUrl}?page_key=${this.$Utils.getUrlParam("page_key")}`),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/falineShare2.png'
				
			}
			//首次点击分享按钮显示分享获奖弹窗
			if(!localStorage.getItem("knivesout.jp-shareclick")){

				localStorage.getItem("knivesout.jp-shareclick",true);
			}
			//非facebook环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://www.facebook.com/sharer.php?u="+ encodeURIComponent(shareConfig.url) + "&t="+ encodeURIComponent(shareConfig.title), "sharer","toolbar=0,status=0,width=626,height=436";
			MShare.openShare({
		        title : shareConfig.title,
		        desc : shareConfig.title,
		        url : shareConfig.url,
		        imgurl : shareConfig.image,
		        type : 'facebook', //当需要在浏览器中分享，则要指定分享渠道
		        callback : function(ret){
		            //此为打开分享窗口后的回调（非分享成功）
		            //ret.channel为客户端类型
		        }
		    });

		},
		// 开始战斗
		goBattle(){
			let _this = this
			this.page_state = 'game'
			this.$nextTick(()=>{
				this.bg_box.h = this.$refs.gametarget.offsetHeight
				this.bg_box.w = this.$refs.gametarget.offsetWidth
				this.span_w = (this.bg_box.w/2 - 62.5-40)/90
				this.span_h = (this.bg_box.h/2 - 62.5-40)/90
				this.aimData.coreX = this.bg_box.w/2
				this.aimData.coreY = this.bg_box.h/2

				console.log(this.span_h,this.span_w)
				this.randomTarget();

                var endTime = new Date(new Date().getTime() + 60000)  //下一分钟
				var s = setInterval(function (){
					var dates =  _this.countDown(endTime);
					 if(dates<=0) {
						 clearInterval(s)
					 }
			 },50)
			})
			this.getGyroscope()

		},
		// 进入首页		
		goHome(){              //  0到89 -89到0  0到89 -89到0
			this.start_show = false
		},
		// 获取陀螺仪权限
		getGyroscope(){
			let _this = this
			if ( window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function') {

				window.DeviceOrientationEvent.requestPermission().then( function ( response ) {
					if ( response == 'granted' ) {
						window.addEventListener( 'deviceorientation', _this.onDeviceOrientationChangeEvent, false );
					} else if( response == 'denied' ) {
					}
				} ).catch( function ( error ) {
				} );
			} else {
				window.addEventListener( 'deviceorientation', _this.onDeviceOrientationChangeEvent, false );
			}
		},
		onDeviceOrientationChangeEvent(event){
			// console.log(event)

			if (!this.isTouch) {                                                                                     // 正常  89 - 0 -  -89
				// let isok = true
				let leftData = Math.ceil((event.alpha||0))   // alpha
				let topData = Math.ceil((event.beta||0))
				this.beta = topData
				this.gamma = leftData

				/* 没有边界值
				if (leftData > -90 && leftData < 90 ) {
					this.egammaData = -leftData * this.span_w
					this.ebetaData = -topData * this.span_h
				 }
				 */

                if(Math.abs(leftData - this.start_ealpha) > 50 ){
					// console.log(leftData , this.start_ealpha)
					this.isOk = false
					console.log('false', leftData)
					this.jlu = this.start_ealpha  // 边界值的前数据

				}
				if(!this.isOk){
					if(this.jlu > 88 && this.jlu > 0){  // 左边开始翻
						if(leftData - this.start_ealpha > 0 ){   // 左顺时针 
							
							// this.egammaData = -(90*this.span_w - (90 + leftData)*this.span_w)
							console.log("左顺时针")
							if(leftData == 0) {
								console.log("左0")
								this.isOk = true
							}
						}else if(leftData - this.start_ealpha < 0 ){                                   // 左逆时针
							// this.egammaData = leftData*this.span_w
							console.log("左逆时针")
							// if(leftData == -89){
							// 	console.log("左-89")
							// 	this.isOk = true
							// }
						}
					}else if(this.jlu > -90 && this.jlu < 0){  // 右边开始翻

						if(leftData - this.start_ealpha < 0 ){   // 右逆时针
							console.log("右逆时针")
							// this.egammaData = -(90*this.span_w - (90 + leftData)*this.span_w)
							if(leftData == 0) {
								console.log("右0")
								this.isOk = true
							}
						}else if(leftData - this.start_ealpha > 0 ){                                   // 右顺时针
							// this.egammaData = leftData*this.span_w
							console.log("右顺时针")
							if(leftData == 89){
								console.log("右90")
								this.isOk = true
							}
						}
					}
				}else{
					if(leftData > -70 && leftData < 70){
						this.egammaData = -leftData * this.span_w
					}else{

					}
				    this.ebetaData = -topData * this.span_h + 90					
				}
			    
				this.start_ealpha =leftData
				this.start_ebeta = topData
				
				console.log('left',this.target_core.x - (this.aimData.coreX + Math.ceil(this.egammaData)), 'top',this.target_core.y - (this.aimData.coreY + Math.ceil(this.ebetaData)))
				
				let distanceX = this.target_core.x - (this.aimData.coreX + Math.ceil(this.egammaData)),
					distanceY = this.target_core.y - (this.aimData.coreY + Math.ceil(this.ebetaData))
					if(distanceX < 10 && distanceY < 10){
						this.aimData.effect = true
					}else {
						this.aimData.effect = false
					}
				// if(this.target_core.x > this.aimData.coreX){
				// 	console.log(this.target_core.x - )
				// }
			}
		},
		//射击
		shooting(e){
			// this.$refs.gametarget.offsetLeft = 
			if(this.aimData.effect){  //瞄准了 伤害 30 - 60   
				this.monsterData.blood -= 60   // 血量减少60
				console.log(this.monsterData.blood)
			}
			
		},
		//随机目标
		randomTarget(){
			let max_X = this.bg_box.w/2 + 40,
				max_Y = this.bg_box.h/2 + 40,
				min_X = this.bg_box.w/2 - 40,
				min_Y = this.bg_box.h/2 - 40
			
			let x = Math.floor(Math.random()*(min_X - max_X) + max_X),  // 85 目标的大小
				y = Math.floor(Math.random()*(min_Y - max_Y) + max_Y)    // 85 目标的大小'
			this.$nextTick(()=>{
				// console.log(this.$refs.target1.style.offsetHeight)
			    this.$refs.target1.style.left = x + 'px'
				this.$refs.target1.style.top = y + 'px'
				this.target_core.x = x + 42
				this.target_core.y = y + 42
				
			})
		},
		touchstart() {
			event.preventDefault() //阻止默认事件（长按的时候出现复制）
			this.isTouch = true;
			this.startX = event.changedTouches[0].pageX
			this.startY = event.changedTouches[0].pageY
			// console.log(this.startX , this.startY , this.egammaData, this.ebetaData)
		},
		touchmove() { // 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
			event.preventDefault()
			let moveEndX = event.changedTouches[0].pageX
			let moveEndY = event.changedTouches[0].pageY
			let X = moveEndX - this.startX
			let Y = moveEndY - this.startY
			// this.ealphaData = this.ealphaData + 1 - 0
			// this.ebetaData = this.ebetaData + 1 - 0
			if ( X > 0) {  //右滑
				this.ealphaData = this.ealphaData + 2 - 0
			} else if ( X < 0) {  //左滑
				this.ealphaData = this.ealphaData - 2 - 0
			} else if ( Y > 0) {  // 下滑
				this.ebetaData = this.ebetaData + 2 - 0
			} else if (Y < 0) {  // 上滑
				this.ebetaData = this.ebetaData - 2 - 0
			}
			// this.$nextTick(() => {
			// 	this.$refs.aim.style.transform = `translate(${this.ealphaData}px, ${this.ebetaData}px)`
			// })
			this.startX = moveEndX
			this.startY = moveEndY
		},
		touchend() { // 手释放，如果在500毫秒内就释放，则取消长按事件
			event.preventDefault()
			this.isTouch = false
			// if (this.EndTime - this.StarTime < 500) {
			//   this.EndTime = 0
			//   this.StarTime = 0
			//   clearTimeout(this.timeOutEvent)// 清除定时器
			//   alert('取消')
			// } else {
			//   alert('松手')
			// }
			console.log('松手')
		},
		update(h,v){
			var t, xh, xv;
  var R = 100;
			var ch = 0, cv = 0;
			if (h > 90) {
				h = 180 - h;
			} else if (h < -90) {
				h = -180 - h;
			}
			if (v > 90) {
				v = 180 - v;
			} else if (v < -90) {
				v = -180 - v;
			}
			var r = Math.max(Math.abs(h), Math.abs(v)) / 90;
			var range = Math.round(R * r);
			if (h == 0) {
				cv = range * v / 90;
			} else if (v == 0) {
				ch = range * h / 90;
			} else {
				var a = Math.atan2(v, h);
				ch = range * Math.cos(a);
				cv = range * Math.sin(a);
			}
			ch = Math.round(ch);
			cv = Math.round(cv);
		
			// t.style.webkitTransform = "translate(" + ch + "px," + cv + "px)";
			console.log(ch,cv)
		},
		countDown(time){
			var date = new Date();
			var now = date.getTime();               
			var endDate = time;//设置截止时间
			var end = endDate.getTime();
			var leftTime = end - now; //时间差                        
			var d, h, m, s, ms;
			if(leftTime >= 0) {
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				ms = Math.floor(leftTime % 60);
				if(ms < 10) {
					ms = "0" + ms;
				}
				if(s < 10) {
					s = "0" + s;
				}
				if(m < 10) {
					m = "0" + m;
				}
				this.count =  m + ":" + s + ":"+  ms
				//将倒计时赋值到div中
			} else {
				this.count = "00:00:00"
				console.log('已截止',leftTime)
				//将倒计时赋值到div中
			}
			//递归每秒调用countTime方法，显示动态时间效果
		   return leftTime
		}
	},
	mounted : function(){
		this.$Utils.closeTips();
		// this.login();
		this.mshareInit();
		$(".start-btn").on("click",function(e){
			gtag('event', '点击【启动游戏】按钮');
			MShare.report({
				monitor : 'start_game_btn', // 点击【启动游戏】按钮
				desc : '点击【启动游戏】按钮' // 
			});
		});
		// this.span_w = this.bg_box.w/2 - 62.5
		// this.span_h = this.bg_box.h/2 - 62.5
		// console.log(this.span_w, this.span_h)
		var ua = navigator.userAgent;
        var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
        var isIphone = ua.indexOf("iPhone") != -1 && ua.indexOf("Version") != -1
		var isIPad = isSafari && !isIphone && 'ontouchend' in document; //判断IPad
		if(isIPad){
			document.documentElement.style.backgroundColor = 'black'
			document.getElementsByTagName("body")[0].classList.add("isIPadBody");
		}
	},

});