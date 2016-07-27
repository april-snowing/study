var http = require('http'),
	url = require('url'),
	fs = require('fs'),
	querystring = require('querystring');
	
//创建http服务	
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	switch(pathname){
		case '/add' : resAdd(req,res);//显示提交的表单内容到控制台
		break;
		default : resDefault(res);//显示index页面
		break;
	}

	
}).listen(1337);
console.log("Server running at http://127.0.0.1:1337");

function resAdd(req,res){
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
		console.log(postData);
		console.log(param);
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end('success');
	})
}

function resDefault(res){
	var readPath = './'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(indexPage);
}