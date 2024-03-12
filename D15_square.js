// 想像一下，你正在參與一個高度仰賴陣列操作的項目。你的任務是為陣列原型設計一個新的方法，叫做 square()。這個方法應該有效率地迭代陣列中的每個元素，並返回一個全新的陣列，其中每個元素都是原始元素的平方。假設陣列中只包含數字。

// const numbers = [1, 2, 3, 4, 5];
// const mixedArray = [1, 3.5];
// const emptyArray = [];

// numbers.square()    // [1, 4, 9, 16, 25]
// mixedArray.square() // [1, 12.25] 
// emptyArray.square() // []

/** this 會指向當前叫用此方法的物件（次情況是陣列本身） */
Array.prototype.square = function () {
	return this.map((ele) => ele * ele)
}