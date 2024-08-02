// // 編號：CANDY-001
// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如：
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//     //若只用sort()，元素將被轉換為字串並以 Unicode 編碼位置進行比較來排序，造成"19"排在"2"之前。
//     //因此需要利用sort提供的compareFunction功能，進行數值升冪排序。(資料來源mdn)
//     arr.sort(function(a,b){
//        return a - b
//     })                    
    
//     // 回傳sumOfSmallestValues(arr)的值，若沒有return會印出undefined。
//     // arr[0]是排序後陣列中的第一個元素，arr[1]是第二個。
//     return(arr[0] + arr[1])  
    
//   }
  
//   const list1 = [19, 5, 42, 2, 77]
//   const list2 = [23, 15, 59, 4, 17]
  
//   console.log(sumOfSmallestValues(list1)) // 印出 7
//   console.log(sumOfSmallestValues(list2)) // 印出 19

  

// // 編號：CANDY-002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// //先使用join('')將陣列轉換成不包含逗號的字串
// //再利用charCodeAt 方法會得到 UTF-16 碼元，連續字母會得到連續數字的特性。
// //使用for迴圈判斷下一個字的UTF-16 碼元是否等於前一個字的UTF-16 碼元加一
// //若不是，則用fromCharCode回傳前一個字的UTF-16 碼元加一的UTF-16 碼元所對應的文字


// const chars1 = ["a", "b", "c", "d", "f", "g"]
// const chars2 = ["O", "Q", "R", "S"]

// function missingChar(chars) {
//   const charsNew  =  chars.join('')
//   for (var i = 0 ; i < charsNew.length ; i++){
//     if (charsNew.charCodeAt(i) + 1 !== charsNew.charCodeAt(i + 1)){
//         return String.fromCharCode(charsNew.charCodeAt(i) + 1)
//     }
//   } 
// }

// console.log(missingChar(chars1)) // 印出 e
// console.log(missingChar(chars2)) // 印出 P

// // 提示：
// // 可使用字串的 charCodeAt 方法...



// // 編號：CANDY-003
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// //創造出一個空陣列notZero
// //使用第一個for迴圈判斷參數的值是否為0，若不是，則用.push方法將非0的值塞進notZero裡
// //兩個陣列元素個數差異，就是原先陣列中0的個數
// //因此在使用第二個for回全將0補回去
// //因.push會將元素從陣列後方塞入，故0會在最後面

// // let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

// // function moveZerosToEnd(arr) {
// //   const notZero = []
// //   for (let i = 0 ; i < arr.length ; i++){
// //     if (arr[i] !== 0){
// //       notZero.push(arr[i]); 
// //     }
// //   }

// //   for (let n = arr.length - notZero.length ; n > 0 ; n--){
// //     notZero.push(0);
// //   }

// //   return notZero
// // }

// // let result = moveZerosToEnd(list)
// // console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// // 編號：CANDY-003(寫法二)
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// // 使用陣列.filter方法，將陣列中一個一個拿出，並根據條件篩選
// // 篩選出所有元素不為0的陣列，以及為0的陣列
// // 在使用陣列.concat將兩個陣列合併
// // let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

// function moveZerosToEnd(arr) {
//   const notZero = arr.filter((e) => e !==0 )
//   const isZero = arr.filter((e) => e ===0 )
//   return notZero.concat(isZero);
// }

// let result = moveZerosToEnd(list)
// console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// // 編號：CANDY-004
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// // 利用數學計算：
// // 小時 = 秒數 /3600
// // 分鐘 = (秒數 / 3600 的餘數) / 60
// // 秒 = (秒數 / 3600 的餘數) / 60的餘數
// // 用Math.floor()無條件捨去小數點取整數後，用.toString()將數字改換為文字串，再使用文字串.padStart()方法補0
// // .padStart(文字串長度,填充文字)，.padStart(2,'0')則為兩位數字，不足兩位數則從前面開始補0
// // 最後用`${}`寫法將文字接起來

// function humanReadableTimer(seconds) {
//   const hours = Math.floor(seconds / 3600).toString().padStart(2,'0');
//   const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2,'0');
//   const sec = Math.floor((seconds % 3600) % 60).toString().padStart(2,'0');
//   return `${hours}:${mins}:${sec}`
// }

// console.log(humanReadableTimer(0)) // 印出 00:00:00
// console.log(humanReadableTimer(59)) // 印出 00:00:59
// console.log(humanReadableTimer(60)) // 印出 00:01:00
// console.log(humanReadableTimer(90)) // 印出 00:01:30
// console.log(humanReadableTimer(3599)) // 印出 00:59:59
// console.log(humanReadableTimer(3600)) // 印出 01:00:00
// console.log(humanReadableTimer(45296)) // 印出 12:34:56
// console.log(humanReadableTimer(86399)) // 印出 23:59:59
// console.log(humanReadableTimer(86400)) // 印出 24:00:00
// console.log(humanReadableTimer(359999)) // 印出 99:59:59


// // 編號：CANDY-005
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// // 用.toString()將輸入的數字轉換成文字
// // 用字串.split('')將字串拆成陣列
// // 用陣列.map()方法將陣列中的原數一個一個取出後做平方(會發生強制轉型)
// // 最後用.join('')將陣列中的元素組成一個字串

// function squareDigits(num) {
//   return num.toString().split('').map((x) => x * x).join('')
// }

// console.log(squareDigits(3212)) // 印出 9414
// console.log(squareDigits(2112)) // 印出 4114
// console.log(squareDigits(387)) // 印出 96449


// // 編號：CANDY-006
// // 程式語言：JavaScript
// // 題目：找出在數字陣列裡跟其它元素不一樣的值

// // 用陣列.filter方法將元素一個一個拿出篩選
// // 篩選條件:此元素第一個所在的索引值跟它最後所在的索引值相同。
// // 若是滿足此條件，則表示它是陣列中不重複的值。
// // 最後用.join方法將所得到的陣列轉換為字串

// function findDifferent(numbers) {
//     return numbers.filter(
//         (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
//     ).join("")
// }

  
// console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
// console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
// console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8


// // 編號：CANDY-007
// // 程式語言：JavaScript
// // 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// // 先用陣列.filter將奇數和偶數分成兩個陣列，其篩選條件是除於2取餘數是1或是0
// // 再將所得到的兩個陣列做長度比較，回傳較短的陣列轉換成文字後的結果(使用if，能不寫else就不寫)

// function findSomeDifferent(numbers) {
//     const odds = numbers.filter((odd)=> odd % 2 == 1)
//     const evens = numbers.filter((even)=> even % 2 == 0)
//     if(odds.length > evens.length){
//         return evens.join('')
//     }
//     return odds.join('')
// }
  
// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

// // 編號：CANDY-008
// // 程式語言：JavaScript
// // 題目：傳入一字串，計算得分最高的字
// //      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
// //      所有傳入的字都是小寫。

// // 將題目分為兩大步驟：計算單詞分數、比較分數大小
// // 先將字串用.split('')方式分開為單詞
// // 用.map方式將每個單詞一個一個拿出做分數計算並回傳{單詞,分數}
// // 計算方式用[...word]將單詞拆成組成字母的陣列，並用.reduce拿出單詞中的每個字母做加總(累加值+(每個字母的 UTF-16 碼元,與a的 UTF-16 碼元差距 + 1),起始累加值0)
// // 再用.forEach方式，將{單詞,分數}拿出做比較
// // 最後回傳分數較大的單詞




// function highestScoreWord(input) {
//     const words = input.split(' ')
//     const scores = words.map((word) =>{
//         return{
//             word,
//             score:[...word].reduce((total,char) => total + (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1),0)
//         }
//     })

//     let highestWord = ''
//     let highestScore = 0
//     scores.forEach(({ word, score }) => {
//         if (score > highestScore) {
//           highestScore = score
//           highestWord = word
//         }
//     })
      
//     return highestWord
    
// }
  


// console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
// console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
// console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there

// // 編號：CANDY-009
// // 程式語言：JavaScript
// // 題目：移除網址中的錨點（Anchor）

// // 用字串.split("#")方法，以"#"將字串分成兩部分，並回傳所得到的陣列之第一個元素

// function removeAnchor(url) {
//     return url.split("#")[0]
// }

// console.log(removeAnchor("5xcampus.com")) // 印出 5xcampus.com
// console.log(removeAnchor("5xcampus.com/#about")) // 印出 5xcampus.com/
// console.log(removeAnchor("5xcampus.com/courses/?page=1#about")) // 印出 5xcampus.com/courses/?page=1


// // 編號：CANDY-010
// // 程式語言：JavaScript
// // 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// // 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

// // 用數值.toString方法，將數字轉成文字陣列，另外宣告空字串
// // 將numStr陣列中每一個值拿出作為digit
// // 若是digit不是零，則計算它是哪個位數
// // 計算方式：10的(陣列長度 - 索引值 - 1)次方
// // 以148的百位數為例，所得陣列長度是3，其在numStr陣列中的索引值是0，則它的所在位數是10的(3-0-1)次方
// // 若是個位數，則回傳該數值；若是非個位數則回傳(位數) * (數值)
// // 最後用陣列.join(" + ")方法，將結果用+串成字串

// function expandedForm(num) {
//     const numStr = num.toString()
//     const result = []

//     for(let i=0;i<numStr.length;i++){
//         const digit = numStr[i]
//         if(digit !== '0'){
//             const power = numStr.length - i - 1
//             const value = 10 ** power
//             if(value === 1){
//                 result.push(`${digit}`)
//             } else{
//                 result.push(`${value} x ${digit}`)
//             }
//         }
//     }
//     return result.join(" + ")
// }

// console.log(expandedForm(8)) // 印出 8
// console.log(expandedForm(25)) // 印出 10 x 2 + 5
// console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
// console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
// console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8


// // 編號：CANDY-011
// // 程式語言：JavaScript
// // 題目：找出一個數字陣列裡，出現奇數次數的數字
// // 範例：[1, 1, 0]，`0` 只有出現 1 次
// //      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

// // 先宣告一個空物件count，將numbers的元素一個一個拿出判斷
// // 判斷方式：若該元素已在物件中，則將其值(次數)增加1，若尚未出現過則將其值(次數)設為1
// // 使用Object.keys(count)，取出所有的count中所有的key，並回傳第一個次數為奇數的key

// function findOddElm(numbers) {
//     const count={}
//     numbers.forEach((num) => {
//         if (count[num]){
//             count[num] +=1
//         } else{
//         count[num] = 1
//         }
//     });
//     return Object.keys(count).find(num => count[num] % 2 !== 0);
// }


  
// console.log(findOddElm([1, 1, 2])) // 印出 2
// console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
// console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
// console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
// console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5

// // 編號：CANDY-012
// // 程式語言：JavaScript
// // 題目：把數字加總，最終濃縮成個位數
// // 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
// //      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

// // 使用while循環，若num大於10，則重複循環
// // 先將num轉為字串，再用split將其轉為陣列，接著用reduce將陣列中每個元素作加總(起始值為0)
// // 當num小於10(是個位數)時，則停止循環

// const numberReducer = (num) => {
//     while (num > 10){
//         num = num.toString().split('').reduce((total,digit) => total+Number(digit),0)
//     }
//     return num
// }
    
  
// console.log(numberReducer(9527)) // 印出 5
// console.log(numberReducer(1450)) // 印出 1
// console.log(numberReducer(5566108)) // 印出 4
// console.log(numberReducer(1234567890)) // 印出 9

// // 編號：CANDY-013
// // 程式語言：JavaScript
// // 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// // https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

// // 若是vat為八位數字，則開始進行判斷
// // 宣告邏輯乘數為ratio
// // 宣告sum為乘積之和
// // 計算方式：先將vat用.split('')轉換成陣列，運用.reduce(累加值，當前值，當前索引值)方式進行計算
// // sum = 個位數數值 + 十位數數值
// // 個位數為當前值乘上相對應(索引值相同)的邏輯乘數後除以10取餘數
// // 十位數為當前值乘上相對應(索引值相同)的邏輯乘數後除以10無條件捨去取整數
// // 最後半段是否符合乘積之和能被五除盡，或當所傳入之第七位數為7時，乘積之和加一能被五除盡

// function isValidVatNumber(vat) {
//     if (vat.length == 8){
//         const ratio =[1, 2, 1, 2, 1, 2, 4, 1]
//         const sum = vat.split('').reduce((total,num,i)=>
//             total + 
//             ((Number(num)*ratio[i]) % 10 ) +             //個位數
//             Math.floor((Number(num)*ratio[i]) / 10 ),0)  //十位數
        
//         return sum % 5 == 0 || (vat[6] == 7 && (sum+1) % 5 == 0)
//     }
// }

// console.log(isValidVatNumber("10458575")) // true
// console.log(isValidVatNumber("88117125")) // true
// console.log(isValidVatNumber("53212539")) // true
// console.log(isValidVatNumber("88117126")) // false

// // 編號：CANDY-014
// // 程式語言：JavaScript
// // 題目：把鄰近的重複值去除，但仍照原本的順序排序
// // 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

// // 判斷sequence是不是字串，若是字串就用.split('')將其拆開成陣列
// // 再用.filter篩選，篩選條件：array的第一個值，或是與陣列中前一個值不同者

// function uniqueOrder(sequence) {
//     const array = typeof sequence === 'string' ? sequence.split('') : sequence;
//     return array.filter((item, index) => index === 0 || item !== array[index - 1]);
// }

// console.log(uniqueOrder("AABCC")) // [ 'A', 'B', 'C']
// console.log(uniqueOrder("AAABBBCCBCC")) // [ 'A', 'B', 'C', 'B', 'C']
// console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
// console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]

// // 編號：CANDY-015
// // 程式語言：JavaScript
// // 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// // 範例：
// //      "abcdef" -> ['ab', 'cd', 'ef']
// //      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

// // 先判斷傳入是否是空字串，若是則回傳空陣列
// // 若不是空字串，則先用.split方法將其拆成組成字母的陣列
// // 接著跑for迴圈，用.slice(開始,結束後一個)方法，兩個兩個的提取陣列中的元素，用.join將每兩個元素串成字串
// // 再用.push方法將字串放進空陣列中，並用.padEnd(幾個字, 不足則補上)方式，將不足兩個字的補上_

// function splitString(str) {
//     if(str.length === 0){
//         return []
//     } else {
//         const chars = str.split('')
//         const result = []
//         for (let i = 0; i < chars.length; i += 2) {
//             const part = chars.slice(i, i + 2).join('')
//             result.push(part.padEnd(2, '_'))
//         }
//         return result
//     }
// }

// console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
// console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
// console.log(splitString("")) // []


// // 編號：CANDY-016
// // 程式語言：JavaScript
// // 題目：把原本 snake_case 的字轉換成 camelCase 格式
// // 範例："hello_world" -> "helloWorld"

// // 先用.split('_')將傳入的字串以_為界分開，形成一個陣列
// // 再用.map方法，將陣列中的元素一個一個拿出來做判斷
// // 若是陣列中第一個元素則接回傳，若不是則將其第一個字母(用.charAt(0))轉換成大寫(.toUpperCase())後再加上後面的字母(+ word.slice(1))後回傳
// // 再用.join('')將所有元素組成字串

// function toCamelCase(str) {
//     return str
//       .split('_')
//       .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) )
//       .join('') ;
// }

// console.log(toCamelCase("book")) // book
// console.log(toCamelCase("book_store")) // bookStore
// console.log(toCamelCase("get_good_score")) // getGoodScore

// // 編號：CANDY-017
// // 程式語言：JavaScript
// // 題目：計算數字的 2 進位裡有幾個 1
// // 範例：5 -> 101 -> 2 個 1

// // 先用數字.toString(2)將數字轉換成二進位的字串，接著用.split('1')以1為分割元素將其拆成陣列
// // 因所拆成的陣列長度會比1的個數多出1(每個1會在其左右兩邊都產生分割段落)，故需再減1，即為1的個數。
// // 例，5-> 101 ->['','0','']，陣列長度為3，減1即為1 的個數

// function countBits(num) { 
//   return num.toString(2).split('1').length - 1;
// }

// console.log(countBits(1234)) // 5
// console.log(countBits(1450)) // 6
// console.log(countBits(9527)) // 8


// // 編號：CANDY-018
// // 程式語言：JavaScript
// // 題目：實作一個可以印出隨機整數的函數
// // 若是只給一個引數(要產生0~某數之間的數字)，其max會為undefined，所以將max指向給定的引數，將min指向0
// // 接著使用Math.random()產生一個0~10(不包含10)的數字，乘上max -min產生一個介於0~(max -min)之間的數字
// // 若是有給定min值，則需再加上min，產生出介於min~max的值
// // 最後用Math.floor()取整數，並回傳

// function randomNumbers(min, max) {
//     if (max === undefined){
//         max = min
//         min = 0
//     }
//     return Math.floor(Math.random() * (max - min) ) + min 
// }

// console.log(randomNumbers(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
// console.log(randomNumbers(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字


// // 編號：CANDY-019
// // 程式語言：JavaScript
// // 題目：檢查是否為某個數字的平方數
// // 先判斷引數是否為負數，若是則回傳false
// // 接著用Math.sqrt()找出其平方根
// // 最後用Number.isInteger()判斷是否是整數並回傳

// function isSquare(num) {
//     if(num < 0) return false
//     const sqre = Math.sqrt(num)
//     return Number.isInteger(sqre)
// }

// console.log(isSquare(0)) // true
// console.log(isSquare(4)) // true
// console.log(isSquare(5)) // false
// console.log(isSquare(100)) // true
// console.log(isSquare(-4)) // false
// console.log(isSquare(-1)) // false

// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

// 先將字串中所有字母用.toLowerCase()轉換成小寫
// 使用.match(/x/g).match(/o/g)找出字串中所有是x、o的字母(會形成陣列)或空字串(若都沒有也是數量一樣多)
// 最後回傳判斷字母x跟字母y的陣列長度是否相同

// function xxoo(str) {
//     str = str.toLowerCase()
//     return (str.match(/x/g) || []).length === (str.match(/o/g) || []).length
// }

// console.log(xxoo("ooxx")) // true
// console.log(xxoo("xxoo")) // true
// console.log(xxoo("xxooo")) // false
// console.log(xxoo("xoox")) // true
// console.log(xxoo("ooAA")) // false
// console.log(xxoo("xoXoA")) // true

// // 編號：CANDY-021
// // 程式語言：JavaScript
// // 題目：實作 Stack 資料結構

// // 從題目中看出物件中有push、pop函式、size的getter(因題目的.size沒有())
// // 先使用建構子來建構一個items為空陣列(類似宣告)
// // 接著宣告push(item)，當有給引數item(非空值)，則用陣列.push方法將其塞到items裡(從後面)
// // 第二宣告pop()，用陣列.pop方法將items的最後一個元素取出(其會回傳取出的元素)
// // 使用get size 回傳陣列長度
// // get 語法會將物件屬性，綁定到屬性被檢索時，所呼叫的函式。
// // 當我使用stack.size時，並不是呼叫size屬性，而是呼叫size函式

// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(item) {
//       if (item !== undefined) {
//         this.items.push(item)
//       }
//     }

//     pop() {
//       return this.items.pop()
//     }

//     get size() {
//       return this.items.length
//     }
// }

// const stack = new Stack()
// stack.push(123)
// stack.push(456)
// stack.push()
// console.log(stack.size) // 印出 2

// const item = stack.pop() // 取出元素
// console.log(item) // 印出 456

// stack.pop() // 繼續取出元素
// console.log(stack.size) // 印出 0

// // 編號：CANDY-022
// // 程式語言：JavaScript
// // 題目：實作 Queue 資料結構

// // 從題目中看出物件中有enqueue、dequeue方法、length的getter(因題目的.length沒有())
// // 先使用建構子來建構一個items為空陣列(類似宣告)
// // 接著宣告enqueue(item)，當有給引數item(非空值)，則用陣列.push方法將其塞到items裡(從後面)
// // 第二宣告dequeue()，用陣列.shift方法將items的第一個元素取出(其會回傳取出的元素)
// // 使用get length 回傳陣列長度
// // get 語法會將物件屬性，綁定到屬性被檢索時，所呼叫的函式。
// // 當我使用queue.length時，並不是呼叫length屬性，而是呼叫length函式

// class Queue {
//   constructor() {
//     this.items = []
//   }

//   enqueue(item){
//     if(item !== undefined){
//       this.items.push(item)
//     }
//   }

//   dequeue(){
//     return this.items.shift()
//   }

//   get length(){
//     return this.items.length
//   }

// }

// const queue = new Queue()
// queue.enqueue(123)
// queue.enqueue(456)
// queue.enqueue()
// console.log(queue.length) // 印出 2

// const item = queue.dequeue() // 取出元素
// console.log(item) // 印出 123

// queue.dequeue() // 繼續取出元素
// console.log(queue.length) // 印出 0


// // 編號：CANDY-023
// // 程式語言：JavaScript
// // 題目：算出 N 個數字的最大公因數

// // calcGCD(...numbers)會將引數收成一個陣列
// // 使用輾轉相除法，輾轉相除法計算方式：先取兩數相除，再將除數除以餘數，直到餘數為0，最後的除數即為最大公因數(回傳值a)
// // 使用reduce方法，將numbers中的元素依續放到gcd中做運算，將第一、二個元素運算結果跟第三個值作運算...

// function calcGCD(...numbers) {
//   const gcd = (a, b) => {
//     while (b !== 0) {
//       let temp = b
//       b = a % b
//       a = temp
//     }
//     return a
//   }
//   return numbers.reduce(gcd)
// }
// console.log(calcGCD(10)) // 10
// console.log(calcGCD(103, 27)) // 1
// console.log(calcGCD(21, 15, 18)) // 3
// console.log(calcGCD(104, 96, 36, 88)) // 4

// // 編號：CANDY-024
// // 程式語言：JavaScript
// // 題目：算出 N 個數字的最小公倍數
// // 提示：可使用 023 計算最大公因數的函數

// // 最小公倍數計算方式：兩數相乘取絕對值/兩數之最大公因數

// function calcLCM(...numbers) {
//   const gcd = (a, b) => {
//     while (b !== 0) {
//       let temp = b
//       b = a % b
//       a = temp
//     }
//     return a
//   }
//   const lcm = (a,b) =>{
//     return ( a * b ) / gcd(a ,b)
//   }
//   return numbers.reduce(lcm)
// }

// console.log(calcLCM(10)); // 10
// console.log(calcLCM(103, 27)); // 2781
// console.log(calcLCM(21, 15, 18)); // 630
// console.log(calcLCM(104, 96, 36, 88)); // 41184

// // 編號：CANDY-025
// // 程式語言：JavaScript
// // 題目：
// //   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
// //   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
// //   計算方式是「四捨六入五成雙」
// //   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

// // 宣告變數factor為計算因子(進幾位)、變數scaled縮放num、變數rounded為縮放後的四捨五入
// // 進行判斷若rounded-scaled為0.5(捨入計算位數剛好是 5)，若不是則直接回傳rounded/factor
// // 若是則判斷rounded是否為偶數，若是則回傳rounded/factor；若不是則判斷其無條件捨去是否為偶數，若是則回傳floor/factor若不是則回傳無條件進位ceil/factor


// function bankersRounding(num, digits = 0) {
//   const factor = Math.pow(10,digits)
//   const scaled = num * factor
//   const rounded = Math.round(scaled)
//   if (Math.abs(rounded - scaled) == 0.5){
//     const floor = Math.floor(scaled)
//     const ceil = Math.ceil(scaled)
//     return (rounded % 2 == 0 ? rounded:(floor % 2 == 0 ? floor:ceil))/factor
//   }
//   return rounded/factor
// }

// console.log(bankersRounding(0.4)); // 0
// console.log(bankersRounding(0.6)); // 1
// console.log(bankersRounding(0.5)); // 0
// console.log(bankersRounding(1.5)); // 2
// console.log(bankersRounding(1.24, 1)); // 1.2
// console.log(bankersRounding(1.26, 1)); // 1.3
// console.log(bankersRounding(1.25, 1)); // 1.2
