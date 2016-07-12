var ProductA = require("./productA.js");
var ProductB = require("./productB.js");


exports.createProduct = function(type){
	switch(type){
		case 'ProductA': return new ProductA();
		break;
		default:
		case 'ProductB': return new ProductB();
		break;
	}
	 	
}
