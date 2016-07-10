var util = require("util");
var events = require("events");

//使用MyStream来继承events.EventEmitter的属性和方法
function MyStream(){
 	//ECMAScript规范给所有函数都定义了Call()与apply()两个方法，
 	//call与apply的第一个参数都是需要调用的函数对象，在函数体内这个参数就是this的值，
 	//剩余的参数是需要传递给函数的值，call与apply的不同就是call传的值可以是任意的，而apply传的剩余值必须为数组
 	//语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
 	//call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
	events.EventEmitter.call(this);
}


//MyStream的原型将被设置为使用events.EventEmitter构造函数所创建的一个新对象
util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write = function(data){
	this.emit("data",data)
}

var stream = new MyStream();

console.log(stream instanceof events.EventEmitter);//true
console.log(MyStream.super_ === events.EventEmitter);//true


stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // 输出结果：Received data: "It works!"


//学生，老师，程序员继承人这个类，实现学生学习，老师教书，程序员写代码

var Person= require("./person");
//实现动态类
var Stdudent = require("./student.js");
var Teacher = require("./teacher.js");
var Coder = require("./coder.js");
var Overload = require("./overload.js");

var personObj = new Person();
var stdudentObj = new Stdudent();
var teacherObj = new Teacher();
var coderObj = new Coder();
var overloadObj = new Overload();

console.log('--------for class of preson------------');
personObj.sleep();
personObj.eat();
console.log('--------------------');

console.log('--------for class of Stdudent------------');
stdudentObj.sleep();
stdudentObj.eat();
stdudentObj.study();
console.log('--------------------');

console.log('--------for class of Teacher------------');
teacherObj.sleep();
teacherObj.eat();
teacherObj.teach();
console.log('--------------------');

console.log('--------for class of Coder------------');
coderObj.sleep();
coderObj.eat();
coderObj.code()
console.log('--------------------');



console.log('--------for class of Overload------------');
overloadObj.sleep();
overloadObj.eat();//重定义父函数eat

console.log('--------------------');



//实现静态类

var student_static = require('./student_static.js')

student_static.study();
student_static.eat();
student_static.sleep();



