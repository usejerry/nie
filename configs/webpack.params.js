const os = require("os").platform();

module.exports = {
	"require_path" : os == "linux" ? "/usr/local/lib/node_modules/" : "",
	"sprite_limit" : 8192,
	"include_host" : "http://www.knives-out.com",
	"encode" : "utf-8",
	"cdn_path_dist" : "https://test.nie.163.com/test_cdn/nie/m/zt/20200701154743/",
	"cdn_path_release" : "https://nie.res.netease.com/nie/m/zt/20200701154743/"
}