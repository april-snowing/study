var http = require('http'),
	url = require('url'),
	querystring = require('querystring');
	
//创建http服务	
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;//获取url请求路径
	var paramStr = url.parse(req.url).query;//获取url请求的参数
	var param = querystring.parse(paramStr);//将url请求参数转换为json对象
	
	if(pathname == '/favicon.ico'){//去除浏览器自带请求/favicon.ico
		return;
	}
	
	console.log(pathname);
	console.log(paramStr);
	console.log(param);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('success');
}).listen(1337);
console.log("Server running at http://127.0.0.1:1337");
