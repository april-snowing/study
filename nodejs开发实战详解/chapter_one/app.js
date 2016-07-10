//node基础知识
//
//node.js是一个javascript运行环境
//实际上是对GooleV8引擎的进行了封装,使得其在非浏览器环境下运行的更好
//
//优点:处理高并发,并且由于nodejs是事件驱动,所以更好的节约服务器资源

var http = require("http");//获取nodejs的原生模块提供的HTTP模块对象
http.createServer(function(request,response){
	//编写HTTP响应的头信息，并设定Content-Type指定返回的类型为文本text,也可以是其他
	response.writeHead(200,{'Content-Type' : 'text/plain'});
	response.end('Hello World\n')
}).listen(1337,'127.0.0.1')
console.log('Server running at http ://127.0.0.1:1337/')

//常见问题
//
//出现Error:Cannot find module----在当前目录没有找到要执行的文件
//
//出现Error:listen EACCES------	监听的端口被其他应用程序占用
//       window下通过netstat-aon|findstr '1337' 查看该端口被哪个程序占用
//       linux    ps-ef|grep 1337
//       这种异常情况很多时候是因为上一次服务器启动监听后非正常的退出,导致上一个端口未被释放
//        例如在linux下  ctrl+z退出
//正常退出监听端口的方法是:ctrl+c(window,linux)
//
//更改nodejs文件,希望服务器立即响应更改,而不需要重新运行文件,需要一些开源模块
//同步调用
//
//是一种阻塞式调用,一段代码调用另一段代码的时候,必须等待另一段代码执行结束并返回结果后,代码才能继续执行下去
//
//异步调用
//是一种非阻塞式调用,一段代码未执行完,可以继续执行下一段代码逻辑,当代码执行完后通过回调返回继续执行相应的逻辑,不耽误其他代码的执行		