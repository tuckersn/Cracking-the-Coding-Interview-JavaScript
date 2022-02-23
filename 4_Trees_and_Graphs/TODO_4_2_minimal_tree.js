const { assertStr } = require("../lib/assert");

// let's find the middle element as our root
// we could recursively find the middle element till there is no more middle
// if the length of a side is 0, return undefined/null
// if the length is 1, return a node with a value and no left/right

function minimalTree(arr) {

	function generateTree(arr) {
		
		if(arr.length === 1) {
			return {
				value: arr[0]
			}
		} else if (arr.length === 0) {
			return;
		}

		let index = Math.ceil((arr.length - 1) / 2);
		return {
			value: arr[index],
			left: generateTree(arr.slice(0, index)),
			right: generateTree(arr.slice(index + 1))
		}
	}

	return generateTree(arr);
}


assertStr(minimalTree([0,1,2,3]), {
	value: 2,
	left: {
		value: 1,
		left: {
			value: 0
		}
	},
	right: {
		value: 3
	}
});


assertStr(minimalTree([1,10,100,1000,10000]), {
	value: 100,
	left: {
		value: 10,
		left: {
			value: 1
		}
	},
	right: {
		value: 1000,
		right: {
			value: 10000
		}
	}
});