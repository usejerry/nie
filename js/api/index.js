// import Login from './login.js'
// const allApi = Object.assign(Login);
// export default allApi

import {apiBase} from "./base.js"

export default{
	/**
	*	开宝箱
	*/
	help : (params) => apiBase('/help',params),

	/**
		开宝箱记录
	*/
	helpLog : (params) => apiBase('/help_log',params),

	/**
		查询游戏角色
	*/
	queryRole :(params) =>apiBase('/query_uidinfo',params),

	/**
		绑定角色
	*/
	bindRole :(params) =>apiBase('/bind_character',params),
	
	/**
		查询全服福袋数
	*/
	queryHelpnum :(params) =>apiBase('/query_helpnum',params),

	/**
	*	twitter授权拉取request_token
	*/
	twitterRequestToken :(params) =>apiBase('/twitter/request_token',params),
	/**
	*	 twitter授权登录
	*/
	twitterLogin :(params) =>apiBase('/twitter/login',params),
	/**
	*	 line授权登录
	*/
	lineLogin :(params) =>apiBase('/line/login',params),
	/**
	*	获取群列表
	*/
	lineGroupList :(params) =>apiBase('/line/group_list',params),
	/**
	*	获取好友列表
	*/
	lineFriendList :(params) =>apiBase('/line/friend_list',params),
	/**
	*	 line发送flexmessage
	*/
	lineFlexSend :(params) =>apiBase('/line/flex/send',params),
	/**
	*	分享回调（废弃）
	*/
	share :(params) =>apiBase('/sharing',params)
	
}
