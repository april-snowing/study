
//在不改变基类的情况下，为基类新增属性和方法

var ConcreteDecoratorB = require("./concreteDecoratorB.js");

var concreteDecoratorB = new ConcreteDecoratorB();

concreteDecoratorB.operation();
concreteDecoratorB.addBehavior()