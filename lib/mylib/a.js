var mylib = require("./index");

module.exports = {
	useB: function() {
		return mylib.b.somethingFromB();
	}
}