//静态类-----好处：避免代码冗余，动态调用必须每次new一个对象，静态调用直接使用require返回的对象调用
//如果每次调用都需要初始化一些参量时。选择使用动态调用
var Person= require("./person.js");
var util = require("util");

function Student (){
	Person.call(this);
	util.inherits(Student,Person);

	this.study = function(){
		console.log("study~~~~~~");//和上面的相比，每次new一个对象的时候，要重新初始化study，而上面不一样，所有对象公用那个方法
	}
}

var student = new Student();

exports.study = student.study;
exports.eat = student.eat;
exports.sleep = student.sleep;