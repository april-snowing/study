//实现重定义父类函数的方法---在子类函数方法中添加被继承类的方法

var util = require("util");
var Person = require("./person.js");

function Overload(){
	Person.call(this);
	this.eat = function(){
		console.log("eat by overload function");
	};
}
util.inherits(Overload,Person);
//这样无法重定义构造函数eat的值
//Overload.prototype.eat = function(){
//		console.log("eat by overload function");
//};
module.exports = Overload;