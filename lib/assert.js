const _ = require('lodash');

function assert(value,expectedValue) {
	if(!_.isEqual(value, expectedValue)) {
		throw new Error(`TEST FAILED! Received ${JSON.stringify(value)}, but expected ${JSON.stringify(expectedValue)}`);
	}
	return true;
}

module.exports = {
	assert,
	assertStr: (value,expectedValue) => {
		return assert(JSON.stringify(value), JSON.stringify(expectedValue));
	}
}