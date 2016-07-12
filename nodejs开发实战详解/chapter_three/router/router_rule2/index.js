var  res ,req,
	http = require('http'),
    fs = require("fs"),
    url = require("url");
    
//创建初始变量函数

exports.init = function(request,response){
	res = response;
	req = request;
}
exports.index = function(){
	//获取当前index的路径
	var readPath = './'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(indexPage);
}
