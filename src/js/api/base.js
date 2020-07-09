// import Axios from 'axios'
// import axiosJsonpAdapter from 'axios-jsonp'
const apiHost = 'https://interact2.webapp.easebar.com/g83military';


export async function apiBase(url,params){

	let axioUrl = apiHost+url;
	// let axioUrl = url;

	// params = Object.assign(params,{
	// 	random: new Date().getTime()
	// });


	return axios({
		method : 'get',
	    url: axioUrl,
	    params : params,
	    withCredentials : true,
	    adapter: axiosJsonpAdapter
	}).then(result => {
		// console.log(result.data);
		return result.data
	});

	
}
