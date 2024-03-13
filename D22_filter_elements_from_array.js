// 給定一個整數陣列 `arr` 和一個過濾函式 `fn`，回傳一個過濾後的陣列 `filteredArr`。

// 函式 `fn` 接受一個或兩個參數：

// - `arr[i]`  是來自 `arr` 的數字
// - `i` 是 `arr[i]` 的索引

// `filteredArr` 應該只包含來自 `arr` 的元素，其中表達式 `fn(arr[i], i)` 評估為真值。真值是指 `Boolean(value)` 返回 `true` 的值。此題不得使用 JavaScript 內建的 `Array.filter` 方法來解。

// // 範例一
// 輸入: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// 輸出: [20,30]
// 解說:
// const newArray = filter(arr, fn); // [20, 30]
// 該函式把沒有大於 10 的數字過濾掉

// // 範例二
// 輸入: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// 輸出: [1]
// 解說:
// fn 也可以接受每個元素的索引，在這個案例中，該函式把索引不等於 1 的數字過濾掉

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	const result = [];

	arr.forEach((ele, index) => {
		if (fn(ele, index)) result.push(ele);
	});

	return result;
};

