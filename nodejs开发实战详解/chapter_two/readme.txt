①模块分为 ：

	原生模块----nodejs API提供的原生模块，启动时已被加载
	           require加载相应的模块，加载成功会返回一个模块对象，该对象拥有这个模块的所有属性和方法
	           var  http = require('http');
	           http.createServer(function(resquest,response){}).listen(8080,'127.0.0.1')
	           
	           
	文件模块----动态加载模块，由原生模块  module 来实现和完成加载工作，通过require方法实现加载
	           var test =  require('./path/test.js')相对路径或者绝对路径，后缀名.js可以省略
	           test（外部对象）对象只能调用和访问test.js文件模块中的exports和module.exports对象暴露给该模块外部对象的属性和方法
           
           
	两种模块都会进行缓存，第二次require该模块的时候，不会重复开销去加载模块，只需要从缓存中读取相应模块数据


	exports和module.exports
	
	作用：将文件模块的方法和属性暴露给require返回的对象进行调用
	
	区别：exports的属性和方法都可以被module.exports代替 -----exports.name = 'gao'和module.exports.name = 'gao'作用一致
	exports是给module.exports添加属性和方法,module.exports和require返回的对象数据是相同的
	module.exports可以单独返回一个数据类型，exoports只能返回一个object对象
	module.exports = ["jia","you","april"],require返回的是array数组，
	当使用了module.exports关键词返回其他数据类型的时候，该模块中所有的exports对象执行的属性和方法都将忽略


②npm

	nodejs的包管理器，nodejs的一个库，基本的模块难以满足开发者需求，需要使用npm来管理开发者自我研发的一些模块，并使其能够公用于其他开发者
	开发者可以通过npm提交个人Nodejs模块成果，其他开发者可以使用npm下载模块包，应用到项目中
	npm -h
	npm-install module   安装模块
	npm-uninstall module 卸载模块
	全局安装
	npm-install -g module   安装模块
	
	npm模块安装时会在当前文件夹中产生node_modules目录，并在该目录中下载npm模块，当nodejs项目require一个模块的时候，会自动在当前目录的node_modules目录中
	加载所需的npm模块，因此也可以直接去github下载相应的模块。并将其放入项目中的node_modules文件夹
	
	本地安装 
	1. 将安装包放在 ./node_modules 下（运行npm时所在的目录） 
	2. 可以通过 require() 来引入本地安装的包
	
	全局安装 
	1. 将安装包放在 /usr/local 下 
	2. 可以直接在命令行里使用
	
	express---快速搭建WEB项目开发的框架，主要集成了web http服务器的创建，静态文件管理，服务器url请求处理，GET和POST请求分发，session处理等功能
	
	jade----

	forever模块（https://github.com/foreverjs/forever）
	
		nodejs作为HTTP服务器，需要确保项目正常运行，需要注意两点：
		-----后台服务运行，监控运行日志，以及HTTP请求日志
		-----确保项目的正常安全运行
		同时其拥有监控文件更改，自动重启等功能
		
		两种使用方法：
		-----命令行中使用
		-----require forever模块使用
	
	
	socket.io模块（https://github.com/LearnBoost/socket.io    http://socket.io/）
	
		作用：将WebSocket协议应用到所有的浏览器，主要用于实时的长连接多请求项目中，例如：在线联网游戏，实时聊天，实时股票查看，二维码扫描登录等
	
	
	
	request模块

		为开发者提供了一种简单访问http请求的方法，支持HTTPS的访问方法-----涵盖的请求方式GET POST HEAD DEL等
		GET-----用于信息获取，向服务器索取数据的一种请求，请求的数据会附在url后面（就是把协议放在url请求头里面），提交的数据最多1024字节
		http://test.holdfun.cn/portal/api/common/versioncheck?dev=gaoxueling&_=1467871857029&callback=commonApiVersionHandler
		POST----安全性比GET高，向服务器提交数据的一种请求
	
	
	Formidable模块------解决文件的上传




③nodejs设计模式

	模块与类
	
		模块---为完成某一功能所需的一段程序或子程序，简单意义上的一个对象，该对象拥有多个方法和属性，类似一个“类”，但不是
		             拥有私有成员和公有成员exports和module.exports的成员为公有成员，其他则为私有成员
	             
	             
	nodejs的继承
	
		util模块（http://nodeapi.ucdok.com/#/api/util.html）
		
		util.inherits(constructor, superConstructor)通过构造函数，继承原型对象上的方法。构造函数的原型将被设置为一个新的 从超类创建的对象。
		onstructor.super_来访问到superConstructor


