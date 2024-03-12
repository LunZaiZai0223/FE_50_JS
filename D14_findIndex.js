// 手寫 `findIndex` 的函式，它會接受三個參數：

// - array：要搜索的陣列
// - predicate：測試函數，用於判斷元素是否符合所需條件
// - `fromIndex`：搜索的起始索引，如果未指定，則默認為 0

// `findIndex` 函式，會返回陣列中第一個滿足 `predicate` 函式的元素的索引。如果找不到符合條件的元素，則返回 `-1`。

// findIndex(array, predicate, [(fromIndex = 0)]);

// findIndex([1, 13, 7, 54], (num: number) => num > 10)) // 1
// findIndex([1, 13, 7, 54], (num: number) => num > 200)) // -1

const findIndex = (arr, predicate, index = 0) => {
	/** 檢查 index 為負數的條件，因為 index 起始是 0，若為負數則是倒著數，為了得到正確的 index 必須加回去 */
	/** [1, 2, 3] => length = 3，若 index -1 => 則代表取最後一個 => 取得最後一個值的 index 就是 -1 + length(3) = 2，所以若為負數則是用 index + arr.length 即可  */
	const startIndex = index < 0 ? index + arr.length : index

	for (let i = startIndex; i < arr.length; i++) {
		if (predicate(arr[i])) {
			return i
		}
	}

	return -1
}