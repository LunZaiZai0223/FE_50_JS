// 給定一個含有數字的陣列，例如 [10, 20, 30, 40, 50]，寫一個函式來計算這個陣列的平均數。

const getAverage = (arr) => {
	return arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / arr.length
}