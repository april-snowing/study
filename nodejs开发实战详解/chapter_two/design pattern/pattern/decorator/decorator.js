var util = require("util");

var Component = require("./component.js");

function Decorator(){
	Component.call(this);

}
util.inherits(Decorator,Component);
module.exports = Decorator;
