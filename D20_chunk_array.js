// Lodash 的 chunk 是開發中經常被用的效用函式，也經常會在面試被問到。 chunk 能將輸入的陣列分割成指定長度的小組。並輸出一個新的陣列，包含原始陣列的元素，並按指定的 size 分組成子陣列。

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 3;

// // 輸出: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const chunkedArray = chunkArray(originalArray, chunkSize);

/**
 * ans.1: 多一個陣列保存 chunk 的結果，每一次遍歷先推入，之後在同一回遍歷檢查是否達成條件，若達成條件就必須在該次遍歷結束前初始化 chunk 的結果供下一回遍歷保存。最後還需檢查，避免最後漏掉資料。
 */
var chunk = function (arr, size) {
	const result = []
	let temp = []

	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i])

		if (temp.length === size) {
			result.push(temp)
			temp = []
		}

		if (i === arr.length - 1 && temp.length > 0) {
			result.push(temp)
		}
	}

	return result
};


/**
 * ans.2: 用 array.slice(startIndex, endIndex]) 淺拷貝陣列，並且在遍歷範圍參照 size
 */
var chunk = function (arr, size) {
	const result = []

	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size))
	}

	return result
};
