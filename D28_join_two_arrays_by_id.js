// 給定兩個陣列 `arr1` 和 `arr2`，回傳一個新的陣列 `joinedArray`。兩個輸入陣列中的每個物件都包含一個 `id` 欄位。`joinedArray` 會透過 `id` 將`arr1` 和 `arr2` 合併。`joinedArray`的長度應為唯一值`id`的長度。回傳的陣列應按`id` 升冪排序。

// 如果一個 `id` 存在於一個陣列中，但不存在於另一個陣列中，則該物件應包含在被合併的陣列中。如果兩個物件共用一個`id`，則它們的屬性應進行合併：

// - 如果一個鍵只存在於一個物件中，則該鍵值對應該包含在物件中。
// - 如果一個鍵在兩個物件中都包含，則 `arr2` 中的值應覆寫 `arr1` 中的值。

// // 範例ㄧ
// 輸入：
// arr1 = [
//     {"id"：1，"x"：1}，
//     {"id"：2，"x"：9}
// ],
// arr2 = [
//     {"id"：3，"x"：5}
// ]
// 輸出：
// [
//     {"id"：1，"x"：1}，
//     {"id"：2，"x"：9}，
//     {"id"：3，"x"：5}
// ]
// 解釋：沒有共同的 id，因此將 arr1 與 arr2 直接合併起來。

// // 範例二
// 輸入：
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6} // ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// 輸出：
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// 解釋：共同的 id 為 2，因此將 arr2 的 id 2 會蓋過 arr1 的 id 2。

/**
 * ans1: 用 arr1 組成一個以 arr1 element id 為 key 的 map，之後再遍歷 arr2 查找需要合併的 pair。因為物件的 key 預設就會按照數字大小排序，因此最後用 Object.values() 取得物件的值就會按照 id 順序大小排序。
 */
var join = function (arr1, arr2) {
	const map = arr1.reduce((acc, val) => {
		const key = val.id.toString()
		acc[key] = val

		return acc
	}, {})

	for (let ele of arr2) {
		const arr2Key = ele.id.toString()
		if (arr2Key in map) {
			map[arr2Key] = {
				...map[arr2Key],
				...ele
			}
		} else {
			map[arr2Key] = ele
		}
	}

	return Object.values(map)
};