var _res,_req,
	url = require('url'),
	querystring = require('querystring');
	
//初始化res和req参量

exports.init = function(res,req){
	_res = res;
	_req = req;
}
//获取get参数方法
exports.GET = function(key){
	var paramStr = url.parse(_req.url).query,
		param = querystring.parse(paramStr);
		
	return param[key] ? param[key]:'';	
}

//获取POST参数方法
exports.POST = function(key,callback){
	var postData = '';
	//设置接收数据编码格式为UTF-8
	req.setEncoding('utf-8');
	//接收数据块并将其赋值给postData
	req.addListener('data',function(postDataChunk){
		postData += postDataChunk;
	});
	req.addListener('end',function(){
		//数据接收完毕，执行回调函数
		var param = querystring.parse(postData);
	
		var value = param[key] ? param[key]:'' ;
		//addListener异步函数，利用回调获取异步函数返回的结果
		callback(value);
	})	
}
