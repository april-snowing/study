

var Person= require("./person.js");
var util = require("util");

function Student (){
	Person.call(this);
}

util.inherits(Student,Person);

Student.prototype.study = function(){
	console.log("I am learStudent.prototypening");
}

//function Student (){
//	Person.call(this);
//	util.inherits(Student,Person);
//
//	this.study = function(){
//		console.log("I am learStudent.prototypening");//和上面的相比，每次new一个对象的时候，要重新初始化study，而上面不一样，所有对象公用那个方法
//	}
//}

module.exports = Student;