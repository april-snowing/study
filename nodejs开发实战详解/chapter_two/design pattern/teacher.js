var Person= require("./person.js");
var util = require("util");

function Teacher (){
	Person.call(this);
}
util.inherits(Teacher,Person);

Teacher.prototype.teach = function(){
	console.log("I am teaching");
}

module.exports = Teacher;