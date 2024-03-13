// 請實作一個陣列方法，讓任何陣列都可以呼叫 array.last() 方法，這個方法會回傳陣列最後一個元素。如果陣列中沒有元素，則傳回 -1 。可以假設陣列是 JSON.parse 的輸出結果，以及是一個 JSON 陣列。

// // 範例1 ：
// 輸入： nums = [null, {}, 3]
// 輸出： 3
// 解釋：呼叫 nums.last() 後傳回最後一個元素： 3。

// // 範例2 ：
// 輸入： nums = []
// 輸出： -1
// 解釋：因為此陣列沒有元素，所以應該傳回-1。

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
	// this 會指向當前叫用此方法的 array
	const lastIndex = this.length - 1
	return this[lastIndex] === undefined ? -1 : this[lastIndex]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */