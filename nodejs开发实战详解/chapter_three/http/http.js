
var http = require('http'),
    fs = require("fs"),
    url = require("url");

//创建http服务器

http.createServer(function(req , res){
	//获取客户端请求路径
	var pathname = url.parse(req.url).pathname;
	//打印客户端请求req对象中的url，method，和headers属性
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	//根据pathname，路由调用不同的逻辑
	switch(pathname){
		case '/index' : resIndex(res); //响应HTML页面到客户端
		break;
		case '/img' : resImage(res); //响应图片数据到客户端
		break;
		default     : resDefault(res); //响应默认文字信息到web客户端
		break;
	}
}).listen('1337');


function resIndex(res){
	//获取当前index的路径
	var readPath = './'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(indexPage);
}

function resImage(res){
	//获取当前image的路径
	var readPath = './images/'+url.parse('logo.png').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'image/png'});
	res.end(indexPage);
}

function resDefault(res){
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.end('can not find source');
}