const _ = require('lodash');

module.exports = {
	assert: (value,expectedValue) => {
		if(!_.isEqual(value, expectedValue)) {
			throw new Error(`TEST FAILED! Received ${value}, but expected ${expectedValue}`);
		}
		return true;
	}
}