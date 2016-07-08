var Person = require("./person.js");
var util = require("util");

function Coder (){
	Person.call(this);
}

util.inherits(Coder,Person);

Coder.prototype.code = function(){
	console.log("I am coding");
}

module.exports = Coder;