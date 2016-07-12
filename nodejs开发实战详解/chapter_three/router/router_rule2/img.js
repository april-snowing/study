var  res ,req,
	http = require('http'),
    fs = require("fs"),
    url = require("url");
    
//创建初始变量函数

exports.init = function(request,response){
	res = response;
	req = request;
}
exports.img = function(){
	//获取当前image的路径
	var readPath = './images/'+url.parse('logo.png').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'image/png'});
	res.end(indexPage);
}