
var http = require('http'),
    fs = require("fs"),
    querystring = require("querystring"),
    url = require("url");

//创建http服务器
//利用附带参数来实现路由处理
http.createServer(function(req , res){
	//获取客户端请求路径也就是请求模块
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/favicon.ico'){//过滤浏览器默认请求/favicon.ico
		return;
	}
//	根据用户请求的url路径截取其中的module和controller
    var module = pathname.substr(1),
    	str = url.parse(req.url).query,
    	controller = querystring.parse(str).c,//获取请求参数c也就是请求模块的方法
    	classObj ='';

    try{//应用try catch来require一个模块，并捕获其异常
    	classObj = require('./'+module)
    }catch(e){
    	console.log('chdir:'+err);
    }
    if(classObj){
    	classObj.init(req,res);
    	classObj[controller].call();
    }else{//调用不存在的模块的时候返回404信息
    	res.writeHead(404,{'Content-Type':'text/plain'});
		res.end('can not find source');
    }
}).listen('1338');



