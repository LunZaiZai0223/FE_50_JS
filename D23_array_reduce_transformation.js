// 給定一個整數陣列 `nums` 、一個縮減函式 `fn` 和一個初始值 `init`，請實作 `reduce` 函式，該函式會依序對陣列中的每個元素執行 `fn` 函式，並將前一個執行的返回值，當作下一次執行的輸入。

// 具體來說會這樣：`val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...`，直到陣列中的所有元素都被處理完畢，最後返回 `val` 的最終值。

// 如果陣列長度為 0，則函數應返回 `init`。請不要用 JavaScript 內建的 `Array.reduce` 方法解決此問題。

// // 範例一
// 輸入: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// 輸出: 10
// 解說：
// 最開始的值 init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// 所以最後會是 10.

// // 範例二
// 輸入: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// 輸出: 130
// 解說：
// 最開始的值 init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// 所以最後會是 130.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let result = init

	nums.forEach((num) => {
		result = fn(result, num)
	})

	return result
};