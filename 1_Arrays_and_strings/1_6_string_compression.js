const { assert } = require("../lib/assert");

function compressString(str) {
	let newStr = "";
	let i = 0;
	while(i < str.length) {	
		let count = 1;
		newStr += str.charAt(i);
		while(str.charAt(i) === str.charAt(i + 1)) {
			i++;
			count++;
		}
		newStr += count;
		i++;
	}
	return str.length > newStr.length ? newStr : str;
}

assert(compressString("aaabbbccc"), "a3b3c3");
assert(compressString("aaaaaaccc"), "a6c3");
assert(compressString("a"), "a");
assert(compressString("abc"), "abc");