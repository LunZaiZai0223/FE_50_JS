// 請實作 Array.prototype.at，該方法會接受一個整數作為輸入，並從陣列中檢索相應元素。除了正整數外，也要能夠處理負整數，負整數會從陣列末尾計算。以下為使用範例

// const arr = ["Explain", "This"];
// arr.at(0); // Explain
// arr.at(1); // This
// arr.at(2); // undefined

// arr.at(-1); // This
// arr.at(-2); // Explain
// arr.at(-3); // undefined

Array.prototype.at = function (index) {
	// index 從 0 開始數，-1 則是從最尾端數；所以在 [1, 2, 3] index 為 -1 的話，其實是整數 index 2，因此在負數的情況下，從 index + array.length 就可以得到正數時的 index
	return index >= 0 ? this[index] : this[index + this.length]
}