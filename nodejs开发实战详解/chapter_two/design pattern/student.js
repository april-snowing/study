

var Person= require("./person.js");
var util = require("util");

function Student (){
	Person.call(this);
}

util.inherits(Student,Person);

Student.prototype.study = function(){
	console.log("I am learning");
}
Student.prototype.name = "student1";
module.exports = Student;