const { assert } = require("../lib/assert");

function isOneAway(strA, strB) {
	console.log("COMARPING:", strA, strB)

	if(Math.abs(strA.length - strB.length) > 1)
		return false;

	// Tracks if an incorrect character has already been found
	let incorrectCharacter = false;
	let offsetB = 0;
	for(let i in strA) {
		// Incorrect character found
		if(strA[i] !== strB[i + offsetB]) {
			// More than one edit required
			if(incorrectCharacter) {
				return false;
			} else {
				incorrectCharacter = true;
				if(strA[i + 1] === strB[i]) {
					offsetB = 1;
				} else if(strA[i] === strB[i + 1]) {
					offsetB = -1;
				}
			}
		}
	}
	return true;
}

assert(isOneAway("aba", "aca"), true);
assert(isOneAway("aaa", "aaa"), true);
assert(isOneAway("abc", "aca"), false);
assert(isOneAway("apple", "aple"), true);
assert(isOneAway("aple", "apple"), true);
assert(isOneAway("aaaaaaa", "aaabaaa"), true);
assert(isOneAway("aaaaaaa", "aaa"), false);
