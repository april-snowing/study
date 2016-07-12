
var util = require("util");
var Target = require('./target.js');
var Adaptee = require('./adaptee');

function Adapter(){
	Target.call(this);
	//重定义父类中的request方法
	this.request =function(){
		//创建Adaptee实例
		var adapteeobj = new Adaptee();
		//执行adapteeobj的specialRequest方法
		adapteeobj.specialRequest();
	}
}
util.inherits(Adapter,Target);
module.exports = Adapter;
