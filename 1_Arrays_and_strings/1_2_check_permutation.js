const { assert } = require("../lib/assert");

function stringCountMap(str) {
	let map = {};
	for(let c of str) {
		if(!(c in map))
			map[c] = 1
		else
			map[c]++;
	}
	return map;
}


function checkPermutation(a, b) {
	let aMap = stringCountMap(a);
	let bMap = stringCountMap(b);
	for(let key in aMap) {
		if(aMap[key] !== bMap[key])
			return false
	}
	return true;
}

assert(checkPermutation('abc', 'cba'), true);
assert(checkPermutation('abc', 'abc'), true);
assert(checkPermutation('aaa', 'aba'), false);
assert(checkPermutation('abc', 'xyz'), false);
assert(checkPermutation('abc', 'abz'), false);




