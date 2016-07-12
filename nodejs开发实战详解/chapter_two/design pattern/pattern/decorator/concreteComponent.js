var util = require("util");

var Component = require("./component.js");

function Concretecomponent(){
	Component.call(this);
	this.operation =function(){
		console.log('output by the concrete component');
	}
}
util.inherits(Concretecomponent,Component);
module.exports = Concretecomponent;
