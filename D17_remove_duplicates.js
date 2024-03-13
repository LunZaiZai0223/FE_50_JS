// 給定一個陣列，裡面有重複的數字。請實踐一個 removeDuplicate 函式，函式會接收一個參數，此參數是一個陣列，最後函式會輸出去除重複數字後的陣列。

// const originalArr = [9,1,2,2,3,4,2,4,8,1,9]

// const ans = removeDuplicate(originalArr);
// console.log(ans) // [9,1,2,3,4,8]

/**
 * ans.1: 組 map 後再轉回陣列，但是就會按照數字大小排列，而不是依照原本陣列排列，因為物件 key 會自動以數字小到大排列
 */
const removeDuplicate = (arr) => {
	const map = arr.reduce((accumulator, currentVal) => {
		const key = currentVal.toString()

		if (key in accumulator) {
			accumulator[key] += 1
		} else {
			accumulator[key] = 1
		}

		return accumulator
	}, {})

	return Object.keys(map).map((key) => Number(key))
}

/**
 * ans.2: 原陣列跑遍歷，新增一個陣列存放及比對是否存在 -> O(n^2)
 */
const removeDuplicate = (arr) => {
	const result = []

	for (let ele of arr) {
		if (!result.includes(ele)) {
			result.push(ele)
		}
	}

	return result
}

/**
 * ans.3: 用兩個 for loop -> O(n^2)
 */
const removeDuplicate = (arr) => {
	// 內層迴圈跑完才會跑外層，因為重新更動原陣列，所以每次遍歷都會從原先的陣列取得對應的資訊
	for (let i = 0; i < arr.length; i++) {
		const currentOut = arr[i]
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] === arr[i]) {
				// 直接更動原陣列
				arr.splice(j, 1)
			}
		}
	}

	return arr
}

/** 
 * ans.4: 用 map 但保留原始順序，所以建立一個陣列存需要的結果
 */
const removeDuplicate = (arr) => {
	const map = {}
	const newArr = []

	for (let ele of arr) {
		const key = ele.toString()

		if (!(key in map)) {
			newArr.push(ele)
			map[key] = true
		}
	}

	return newArr
}

/**
 * ans.5: 用 Set 處理，Set 只允許唯一的值存入，會自動剃掉重複的值
 */
const removeDuplicate = (arr) => {
	return Array.from(new Set(arr))
	// 或者使用 spread operator
	// return [...new Set(arr)]
}