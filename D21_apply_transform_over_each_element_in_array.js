// 給定一個只有整數的陣列 arr ，以及一個函式 fn；要返回一個新的陣列，新陣列的每個元素都需要套用 fn ，讓回傳的陣列會成為 returnedArray[i] = fn(arr[i], i)。本題不得使用 JavaScript 內建的 Array.map 方法來解。

// // 範例一
// 輸入: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// 輸出: [2,3,4]
// 解說:
// const newArray = map(arr, plusone); // [2,3,4]
// 該函式將陣列中的每個值都增加一

// // 範例二
// 輸入: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// 輸出: [1,3,5]
// 解說: 該函式將陣列中的每個值都增加其索引的量

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(fn(arr[i], i));
	}

	return result;
};


