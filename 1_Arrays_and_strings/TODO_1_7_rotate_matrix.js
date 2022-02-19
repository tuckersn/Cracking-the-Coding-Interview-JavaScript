const { assert } = require("../lib/assert");

function rotateMatrix90Degrees(matrix) {
	let height = matrix.length - 1;
	let width = matrix[0].length - 1;

	console.log("MATRIX:", matrix)
	// 2x2
	// 0,0 -> 1,0
	// 0,1 -> 0,0
	// 1,1 -> 0,1

	// 3x3
	// 0,0 -> 1,0
	// 0,1 -> 0,0
	// 0,2 -> 0,1



	for(let y = 0; y < Math.floor(height / 2); y++) {
		for(let x = 0; x < Math.floor(width / 2); x++) {
			matrix[y][x] = matrix[height - y][width - x];
		}
	}
	return matrix;
}

assert(rotateMatrix90Degrees([
	[[0,0,0,0], [1,1,1,1]],
	[[2,2,2,2], [3,3,3,3]],
]), [
	[[2,2,2,2], [0,0,0,0]],
	[[3,3,3,3], [1,1,1,1]],
]);

assert(rotateMatrix90Degrees([
	[[0,0,0,0], [1,1,1,1], [2,2,2,2]],
	[[3,3,3,3], [4,4,4,4], [5,5,5,5]],
	[[6,6,6,6], [7,7,7,7], [8,8,8,8]],
]), [
	[[3,3,3,3], [0,0,0,0], [1,1,1,1]],
	[[6,6,6,6], [4,4,4,4], [2,2,2,2]],
	[[7,7,7,7], [8,8,8,8], [5,5,5,5]],
]);
