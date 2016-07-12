var util = require('util');

var Decorator = require('./decorator');

function ConcreteDecoratorB(){
	Decorator.call(this);
	this.operation = function(){
		//调用被装饰类的operation方法
		Decorator.operation;
		//添加额外的装饰,新的计算规则或者输出数据
		console.log("add some decorator by ConcreteDecoratorB");
	};
	//在基类的基础上添加额外的方法
	this.addBehavior = function(){
		console.log(" add new method by ConcreteDecoratorB");
	};
}
util.inherits(ConcreteDecoratorB,Decorator);
module.exports = ConcreteDecoratorB;
