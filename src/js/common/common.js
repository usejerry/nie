export default {
    //打开弹层
    popWindow : function(popID){
        var obj=$("#"+popID);
        var width=obj.width();
        var height=obj.height();
        var popTop=obj.height()/2;
        var popLeft=obj.width()/2; 
        obj.css({"margin-top":-popTop,"margin-left":-popLeft}).fadeIn();
        if($("#fade").length<1) $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter':'alpha(opacity=80)'}).fadeIn();
    },
    //关闭弹层
    popClose : function(popID){
        $('#fade ,.dialog ,#'+popID).fadeOut();
    },
    //打开第二层弹层
    popWindow2 : function(popID){
        var obj=$("#"+popID);
        var width=obj.width();
        var height=obj.height();
        var popTop=obj.height()/2;
        var popLeft=obj.width()/2; 
        obj.css({"margin-top":-popTop,"margin-left":-popLeft}).fadeIn();
    },
    //关闭第二层弹层
    popClose2 : function(popID){
        $('.dialog ,#'+popID).fadeOut();
    },
    stopDefault : function(event){
        if(event && event.preventDefault){
            event.preventDefault();
        }else{
            window.event.returnValue = false;
        }
    },
    //检测号码正确性
    checkPhone : function(phonenum){
        return /^(13|14|15|17|18|19)\d{9}$/.test(phonenum);
    },
    checkEmail: function(email){
        return /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
    },
    picPreload : function(src,cb){
        var img = new Image();
        img.onload = function(){
            // console.log(src+':加载好了，请享用');
        }
        img.src = src;
    },
    getUrlParam : function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return r[2];
        if (r != null){
            var reg2 = new RegExp("\\+","g");
            var r2 = r[2].replace(reg2, "%20");
            // return decodeURIComponent(r[2]);
            return decodeURIComponent(r2);
        }
        return "";
    },
    getUrlHash : function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var index = window.location.hash.indexOf("?");
        var r = window.location.hash.substr(index+1).match(reg);
        // if (r != null) return r[2];
        if (r != null){
            var reg2 = new RegExp("\\+","g");
            var r2 = r[2].replace(reg2, "%20");
            // return decodeURIComponent(r[2]);
            return decodeURIComponent(r2);
        }
        return "";
    },
    hostUrl : function(){
        return __CDNPATH
    },
    openTips : function(msg){
        let $pop = $(".pop-tips").parents(".popup");
        $pop.css("display","block");
        $pop.find(".msg").html(msg);
        setTimeout(function(){
            $pop.find(".popup-mask").addClass("show");
            $pop.find(".popup-box").addClass("show");
        },300);
        // $("#JtipsPop .msg").html(msg);
        // this.popWindow("JtipsPop");
    },
    closeTips : function(){
        let $pop = $(".pop-tips").parents(".popup");
        $pop.find(".close").click(function(){
            $pop.find(".popup-mask").removeClass("show");
            $pop.find(".popup-box").removeClass("show");
            setTimeout(function(){
                $pop.css("display","none");
                $pop.find(".msg").html("");
            },300);
        });
    },
    openTips2 : function(msg){
        $("#JtipsPop2 .msg").html(msg);
        this.popWindow("JtipsPop2");
    },
    failCallback : function(msg){
        if(typeof(msg) == "string"){
            $("#JtipsPop .msg").html(msg);
            this.popWindow("JtipsPop");
        }else{
            $("#JtipsPop .msg").html(JSON.stringify(msg));
            this.popWindow("JtipsPop");
        }
    },
    isTwitter : function(){
        return  /twitter/i.test(navigator.userAgent.toLowerCase());
    },
    isLine : function(){
        return /line/i.test(navigator.userAgent.toLowerCase());
    }
}