const { assert } = require("../lib/assert");

function isPalindrome(str) {
	for(let i = 0; i < Math.floor(str.length/2); i++) {
		if(str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

assert(isPalindrome("taco cat"), true);
assert(isPalindrome("atco cta"), true);
assert(isPalindrome("a"), true);
assert(isPalindrome("aba"), true);
assert(isPalindrome("aa"), true);
assert(isPalindrome("cdf"), false);
assert(isPalindrome("eree"), false);