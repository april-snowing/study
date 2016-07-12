var Single = require("./single_class.js");

//exprots的构造函数
var single1 =new Single("2016-7-11");
var single_class1 = single1.getInstance();
single_class1.show();

var single2 =new Single("2016-7-12");
var single_class2 = single2.getInstance();
single_class2.show();//返回的还是第一次实例化的值