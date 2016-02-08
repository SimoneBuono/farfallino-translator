var symbols = require('symbols');

module.exports = {
	transform: function(str) {
		return str.replace(/[aieouAEIOU]/g,function(a,b){return a + 'f' + a});
	}
}
