var util = require("util");

var Product = require("./product.js");

function ProductA(){
	Product.call(this);
	this.getProduct =function(){
		console.log('product is get from class of ProductA');
	}
}
util.inherits(ProductA,Product);
module.exports = ProductA;
