var util = require('util');

var Decorator = require('./decorator');

function ConcreteDecoratorA(){
	Decorator.call(this);
	this.operation = function(){
		//调用被装饰类的operation方法
		Decorator.operation;
		//添加额外的装饰
		console.log("add some decorator by ConcreteDecoratorA");
	}
}
util.inherits(ConcreteDecoratorA,Decorator);
module.exports = ConcreteDecoratorA;
