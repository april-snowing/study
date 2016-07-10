
exports.name = "april";//exports是给module.exports添加属性和方法

exports.showName = function(){
	console.log('my name is april');
};

//当使用了module.exports关键词返回其他数据类型的时候，该模块中所有的exports对象执行的属性和方法都将忽略
//module.exports = ["jia","you","april"];//module.exports可以单独返回一个数据类型，exoports只能返回一个object对象
module.exports.ignore = "ignore";
module.exports.ignoreFun = function(){
	console.log("ignoreFun");
}
console.log("module.exports");//module.exports和require返回的对象数据是相同的
console.log(module.exports);