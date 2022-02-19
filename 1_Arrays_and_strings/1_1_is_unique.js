const { assert } = require("../lib/assert");

function isUnique(input) {
	let map = {};
	for(let i = 0; i < input.length; i++) {
		if(input.charAt(i) in map) {
			return false;
		}
		map[input.charAt(i)] = true;
	}
	return true;
}

assert(isUnique('abc'), true);
assert(isUnique('abdefghijklmnop'), true);
assert(isUnique('aaa'), false);
assert(isUnique('abcdeghijklmnopa'), false);
assert(isUnique('xyazabc'), false);




