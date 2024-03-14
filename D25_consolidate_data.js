// 假設你正在開發一款閱讀 App，該 App 追蹤用戶的閱讀相關紀錄，會有以下格式記錄的資料：

const sessions = [
	{ user: 8, duration: 50, books: ['The Hobbit'] },
	{ user: 7, duration: 150, books: ['Pride and Prejudice'] },
	{ user: 1, duration: 10, books: ['The Lord of the Rings'] },
	{ user: 7, duration: 100, books: ['The Great Gatsby', 'Animal Farm'] },
	{ user: 7, duration: 200, books: ['The Great Gatsby'] },
	{ user: 2, duration: 200, books: ['1984'] },
	{ user: 2, duration: 200, books: ['The Great Gatsby'] },
];

// 每個物件都有以下欄位：

// - `user`：讀者的用戶 ID。
// - `duration`：閱讀的持續時間，以分鐘為單位。
// - `books`：閱讀的書籍標題，以陣列形式按字母排序。

// 現在你需要實作一個 `consolidateData` 函式，來合併每個用戶的閱讀資料，合併規則如下：

// 1. 將相同用戶的資料合併為單一物件。
// 2. 將合併的 `duration` 欄位相加。
// 3. 合併 `books` 陣列，移除重複書名，並按字母順序排序。
// 4. 保持結果的原始順序。
// 5. 如果多筆資料屬於同一用戶，合併後的應取代原始集合中該用戶最早出現的位置。
// 6. 不要修改輸入物件。

// 上述的範例輸入，預期會有以下輸出
// [
//   { user: 8, duration: 50, books: ['The Hobbit'] },
//   { user: 7, duration: 450, books: ['Animal Farm', 'Pride and Prejudice', 'The Great Gatsby'] },
//   { user: 1, duration: 10, books: ['The Lord of the Rings'] },
//   { user: 2, duration: 400, books: ['1984', 'The Great Gatsby'] },
// ];

const consolidateData = (sessions = []) => {
	// 這個 map 保存已有記錄的使用者 index，供直接拿 index 修改列表資料
	const map = {}
	// 這個 array 為最後的結果
	const list = []

	for (let session of sessions) {
		const userKey = session.user.toString()
		const targetListIndex = map[userKey]

		// 若 map 無當前使用者資料則代表是新的，因此存其 index（按照順序所以直接加入最後一個）
		if (targetListIndex === undefined) {
			map[userKey] = list.length
			list.push(session)
			continue
		}

		list[targetListIndex] = {
			...list[targetListIndex],
			duration: list[targetListIndex].duration + session.duration,
			books: Array.from(new Set([...list[targetListIndex].books, ...session.books])).sort()
		}
	}

	return list
}