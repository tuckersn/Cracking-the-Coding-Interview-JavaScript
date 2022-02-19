const { assert } = require("../lib/assert");

/**
 * I disagree with the book's approach. This is less
 * efficient, but a lot more readable.
 */

function urlify(url) {
	let sanitizedUrl = "";
	for(let c of url.trim()) {
		switch(c) {
			case " ":
				sanitizedUrl += '%20'
				break;
			default:
				sanitizedUrl += c
		}
	}
	return sanitizedUrl;
}

assert(urlify("Mr John Smith", 13), "Mr%20John%20Smith");
assert(urlify("a p p l e"), "a%20p%20p%20l%20e");



