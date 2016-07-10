////学生，老师，程序员继承人这个类，实现学生学习，老师教书，程序员写代码，创建一个person基类作为人
module.exports = function(){
	this.name = "person";
	this.sleep = function(){
		console.log("sleep in the night");
	};
	this.eat = function(){
		console.log("eat food");
	};
}
