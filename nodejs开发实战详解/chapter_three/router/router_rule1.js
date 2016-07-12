
var http = require('http'),
    fs = require("fs"),
    url = require("url");

//创建http服务器
//特定规则请求路径
http.createServer(function(req , res){
	//获取客户端请求路径
	var pathname = url.parse(req.url).pathname;
-
	var param = pathname.substr(2);
	//获取客户端请求的url路径，并获取第一个字母，将其转换成大写
	var firstParam = pathname.substr(1,1).toUpperCase();
	//根据pathname获取其需要执行的函数名
	var functionName = 'res'+firstParam + param;
	
	if (pathname=='/'){
		resDefault(res)
	}else if(pathname == '/favicon.ico'){
		return;		//过滤浏览器默认请求/favicon.ico
	}else{
		eval(functionName+'(res)')
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