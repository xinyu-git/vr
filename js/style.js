

$(function(){
	//关闭 弹窗
	$(document).on("click","#alertInfo .close",dialog.closeDiv);

	
})

var Tips; if (!Tips) Tips = {};
/**
 * 显示隐藏 登陆框
 */
Tips.showLogin = function(){
	//显示登陆框的时候刷新验证码
	//Util.verifyImg();
	dialog.alertLog('请登录','dialog.closeDiv()');
    // dialog.alertLog("请登录","dialog.alertMsg(\"提示\",\"签到失败！\",\"dialog.closeDiv()\",\"d\")");
}
/**
 * 显示隐藏 提示弹窗
 */
Tips.showTips = function(){
	dialog.alertMsg("恭喜您",'领取成功',"dialog.closeDiv()","s");
}
/**
 * 显示隐藏 提示未登录弹窗
 */
Tips.showLoginTwo = function(){
	 dialog.alertLogTwo("dialog.alertLog(\"请登录\",\"dialog.closeDiv()\")","dialog.closeDiv()");
}
/**
 * 显示隐藏 个人动态弹窗
 */
Tips.showPerDt = function(){
	 dialog.alertPerDt();
	 $('#alertInfo .close').show();
}
/**
 * 显示隐藏  二次确认购买
 */
Tips.showConfirm = function(){
	 dialog.alertConfirm('签到需要花费600军功，是否继续签到？','dialog.closeDiv()','d');
	$('#alertInfo .close').show();
}
/**
 * 显示 活动规则
 */
Tips.showRule = function(){
	 showHide('.ruleOpa','.ruleWrap');
}
/**
 * 隐藏 活动规则
 */
Tips.hideRule = function(){
	 hide('.ruleOpa','.ruleWrap');
}

/*----------------------------------------------------------*/
//点击显示隐藏
function showHide(Ele,iTaget){
		$(Ele).show();
		$(iTaget).show();
	}

//点击显示隐藏
function hide(Ele,iTaget){
		$(Ele).hide();
		$(iTaget).hide();
	}
//弹出居中
function showDiv(obj) {
	center(obj);
	$(window).scroll(function() {
		center(obj);
	});
	$(window).resize(function() {
		center(obj);
	});
}

function center(obj) {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"position": "absolute",
		"top": (windowHeight - popupHeight) / 2 + $(document).scrollTop(),
		"left": (windowWidth - popupWidth) / 2
	});
}

