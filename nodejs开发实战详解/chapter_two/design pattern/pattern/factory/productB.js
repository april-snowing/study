var util = require("util");

var Product = require("./product.js");

function ProductB(){
	Product.call(this);
	this.getProduct =function(){
		console.log('product is get from class of ProductB');
	}
}
util.inherits(ProductB,Product);
module.exports = ProductB;
