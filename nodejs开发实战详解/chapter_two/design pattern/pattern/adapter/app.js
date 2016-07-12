var Adapter = require("./adapter.js");

var targer = new Adapter();
//通过适配器调用了Adaptee下的specialRequest方法，实现nodejs的适配器模式
targer.request();
