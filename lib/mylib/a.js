var mylib = require("./index");

module.exports = {
	b: function() {
		return mylib.a.c();
	},
	
	c: function() {
		return "c";
	}
}