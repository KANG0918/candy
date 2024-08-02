# #  編號：CANDY-001
# #  程式語言：Python
# #  題目：找出陣列裡最小的兩個值的總和
# #  例如：
# #    [15, 28, 4, 2, 43] 印出 6
# #    [23, 71, 33, 82, 1] 印出 24

# # 利用sorted將串列排序(預設值是由小到大)
# # 回傳串列前兩個元素加總(最小的兩個值的總和)


# def sumOfSmallestValues(list):
#     return sorted(list)[0] + sorted(list)[1]


# list1 = [19, 5, 42, 2, 77]
# list2 = [23, 15, 59, 4, 17]

# print(sumOfSmallestValues(list1))  # 印出 7
# print(sumOfSmallestValues(list2))  # 印出 19

# #  編號：CANDY-002
# #  程式語言：Python
# #  題目：請寫一小段程式，印出連續陣列裡缺少的字元

# #  使用ord()將字母轉換成ASCII
# #  使用for迴圈判斷下一個字的ASCII是否等於前一個字的ASCII加一
# #  若不是(非連續)則將前一字的ASCII加上1後，再利用chr()將其轉換回字母，並回傳

# chars1 = ["a", "b", "c", "d", "f", "g"]
# chars2 = ["O", "Q", "R", "S"]


# def missing_char(chars):
#     for i in range(len(chars)):
#         if ord(chars[i + 1]) != ord(chars[i]) + 1:
#             return chr(ord(chars[i]) + 1)
#     return None


# print(missing_char(chars1))  # 印出 e
# print(missing_char(chars2))  # 印出 P

# # 編號：CANDY-003
# # 程式語言：Python
# # 題目：完成函數的內容，把陣列裡的 0 都移到最後面

# # 用串列推導式將元素轉成字串後為0的宣告為zeros串列，不為0的宣告為not_zeros串列
# # 因False會被視為0，因此需要將元素都先轉成字串再判斷
# # 再將兩串列組起來並回傳

# list = [False, 1, 0, -1, 2, 0, 1, 3, "a"]


# def move_zeros_to_end(arr):
#     zeros = [x for x in arr if str(x) == "0"]
#     not_zeros = [x for x in arr if str(x) != "0"]
#     return not_zeros + zeros


# result = move_zeros_to_end(list)
# print(result)  # 印出 [False, 1, -1, 2, 1, 3, "a", 0, 0]

# # 編號：CANDY-004
# # 程式語言：Python
# # 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

# # 小時 = 秒數 /3600
# # 分鐘 = (秒數 / 3600 的餘數) / 60
# # 秒 = (秒數 / 3600 的餘數) / 60的餘數
# # 使用//作除法結果會無條件捨去
# # 利用f字串。hours、mins、sec為二位數，若不足二位數則在前面補0


# def human_readable_timer(seconds):
#     hours = seconds // 3600
#     mins = (seconds % 3600) // 60
#     sec = (seconds % 3600) % 60
#     return f"{hours:02}:{mins:02}:{sec:02}"


# print(human_readable_timer(0))  # 印出 00:00:00
# print(human_readable_timer(59))  # 印出 00:00:59
# print(human_readable_timer(60))  # 印出 00:01:00
# print(human_readable_timer(90))  # 印出 00:01:30
# print(human_readable_timer(3599))  # 印出 00:59:59
# print(human_readable_timer(3600))  # 印出 01:00:00
# print(human_readable_timer(45296))  # 印出 12:34:56
# print(human_readable_timer(86399))  # 印出 23:59:59
# print(human_readable_timer(86400))  # 印出 24:00:00
# print(human_readable_timer(359999))  # 印出 99:59:59

# #  編號：CANDY-005
# #  程式語言：Python
# #  題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

# # 使用串列推導式，將num轉成字串(可迭代)，一個一個拿出計算平方(**2)後轉成字串，串列推導式結果會形成一個串列
# # 最後用join將串列裡的元素組成字串


# def square_digits(num):
#     return "".join([str(int(n) ** 2) for n in str(num)])


# print(square_digits(3212))  # 印出 9414
# print(square_digits(2112))  # 印出 4114
# print(square_digits(387))  # 印出 96449

# # 編號：CANDY-006
# # 程式語言：Python
# # 題目：找出在數字陣列裡跟其它元素不一樣的值

# # 使用串列推導式，判斷串列中只出現過1次的元素，會產生單一元素串列，再利用索引值[0]將其取出


# def find_different(numbers):
#     return [num for num in numbers if numbers.count(num) == 1][0]


# print(find_different([1, 1, 1, 1, 3, 1, 1, 1]))  # 印出 3
# print(find_different([2, 2, 2, 4, 2, 2]))  # 印出 4
# print(find_different([8, 3, 3, 3, 3, 3, 3, 3]))  # 印出 8

# # 編號：CANDY-007
# # 程式語言：Python
# # 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

# # 使用串列推導式作出偶數串列和奇數串列
# # 若偶數串列中只有一個元素，則回傳該元素，若不是，則回傳奇數陣列中的元素


# def find_some_different(numbers):
#     even = [num for num in numbers if num % 2 == 0]
#     odd = [num for num in numbers if num % 2 != 0]
#     return even[0] if len(even) == 1 else odd[0]


# print(find_some_different([2, 4, 0, 100, 4, 11, 2602, 36]))  # 印出 11
# print(find_some_different([160, 3, 1719, 19, 11, 13, -21]))  # 印出 160

# #  編號：CANDY-008
# #  程式語言：Python
# #  題目：傳入一字串，計算得分最高的字
# #   英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
# #   所有傳入的字都是小寫。

# # 使用max(可迭代參數,key=排序函數)找出分數最大的字
# # 計算分數：使用lambda expression，參數為將input拆開後的單詞(input.split())，計算每個字母與a的ASCII差距後加1，使用sum加總每個字母分數，即為每個單詞分數


# def highest_score_word(input):
#     return max(
#         input.split(), key=lambda word: sum(ord(char) - ord("a") + 1 for char in word)
#     )


# # 測試案例
# print(highest_score_word("lorem ipsum dolor sit amet"))  # 輸出: ipsum
# print(highest_score_word("heyn i need a rubygem up to build this"))  # 輸出: rubygem
# print(highest_score_word("in time machine there are some bugs"))  # 輸出: there

# # 編號：CANDY-009
# # 程式語言：Python
# # 題目：移除網址中的錨點（Anchor）

# # 使用.split("#")已#為分界將字串拆成兩部分，形成一串列，再將第一部分(索引值為0)取出


# def remove_anchor(url):
#     return url.split("#")[0]


# print(remove_anchor("5xcampus.com"))  # 印出 5xcampus.com
# print(remove_anchor("5xcampus.com/#about"))  # 印出 5xcampus.com/
# print(
#     remove_anchor("5xcampus.com/courses/?page=1#about")
# )  # 印出 5xcampus.com/courses/?page=1

# # 編號：CANDY-010
# # 程式語言：Python
# # 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# # 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

# # 宣告一空串列
# # 將num轉成字串後用enumerate()取出其索引值及元素
# # 若是該元素不為零，則計算它是哪個位數
# # 計算方式：10的(字串長度 - 索引值 - 1)次方
# # 若是個位數，則將該數值直接用.append()塞進空串列；若是非個位數則將(位數) * (數值)用.append()塞進空串列
# # 最後用" + ".join()，將結果用+串成字串


# def expanded_form(num):
#     result = []
#     for i, digit in enumerate(str(num)):
#         if digit != "0":
#             power = len(str(num)) - i - 1
#             if power == 0:
#                 result.append(f"{digit}")
#             else:
#                 result.append(f"{10**power} x {digit}")
#     return " + ".join(result)


# print(expanded_form(8))  # 印出 8
# print(expanded_form(25))  # 印出 10 x 2 + 5
# print(expanded_form(148))  # 印出 100 x 1 + 10 x 4 + 8
# print(expanded_form(1450))  # 印出 1000 x 1 + 100 x 4 + 10 x 5
# print(expanded_form(60308))  # 印出 10000 x 6 + 100 x 3 + 8

# #  編號：CANDY-011
# #  程式語言：Python
# #  題目：找出一個數字陣列裡，出現奇數次數的數字
# #  範例：[1, 1, 0]，`0` 只有出現 1 次
# #   [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

# # 使用串列推導式，判斷串列中只出現過奇數次的元素，會產生單一元素串列，再利用索引值[0]將其取出


# def find_odd_elm(numbers):
#     return [num for num in numbers if numbers.count(num) % 2 != 0][0]


# print(find_odd_elm([1, 1, 2]))  # 印出 2
# print(find_odd_elm([5, 4, 2, 1, 5, 4, 2, 10, 10]))  # 印出 1
# print(find_odd_elm([0, 1, 0, 1, 0]))  # 印出 0
# print(find_odd_elm([1, 1, 2, -2, 5, 2, -1, -2, 5]))  # 印出 -1
# print(find_odd_elm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))  # 印出 5

# #  編號：CANDY-012
# #  程式語言：JavaScript
# #  題目：把數字加總，最終濃縮成個位數
# #  範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
# #   1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1


# def number_reducer(num):
#     while num >= 10:
#         num = sum(int(digit) for digit in str(num))
#     return num


# print(number_reducer(9527))  # 印出 5
# print(number_reducer(1450))  # 印出 1
# print(number_reducer(5566108))  # 印出 4
# print(number_reducer(1234567890))  # 印出 9

# #  編號：CANDY-013
# #  程式語言：Python
# #  題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
# #  https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

# # 先判斷傳入參數是否為8為整數，入不是則回傳False
# # 宣告邏輯乘數為ratio
# # 用推導式的方式寫，enumerate()得到字串中的元素及索引值
# # check_num 使用sum()加總 ， 個位數數值 + 十位數數值
# # 個位數為當前值乘上相對應(索引值相同)的邏輯乘數後除以10取餘數
# # 十位數為當前值乘上相對應(索引值相同)的邏輯乘數後除以10無條件捨去取整數
# # 最後判斷是否符合乘積之和能被五整除，或當所傳入之第七位數為7時，乘積之和加一能被五整除


# def is_valid_vat_number(vat):
#     if not vat.isdigit() or len(vat) != 8:
#         return False
#     ratio = [1, 2, 1, 2, 1, 2, 4, 1]
#     check_num = sum(
#         (int(num) * ratio[i] // 10) + (int(num) * ratio[i] % 10)
#         for i, num in enumerate(vat)
#     )
#     return check_num % 5 == 0 or (vat[6] == 7 and (check_num + 1) % 5 == 0)


# print(is_valid_vat_number("10458575"))  # true
# print(is_valid_vat_number("88117125"))  # true
# print(is_valid_vat_number("53212539"))  # true
# print(is_valid_vat_number("88117126"))  # false


# #  編號：CANDY-014
# #  程式語言：Python
# #  題目：把鄰近的重複值去除，但仍照原本的順序排序
# #  範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

# # 宣告一個空串列，用for迴圈加上if進行判斷
# # 當item 不為空串列，並且與前一個元素(result最後一個元素)不同時，則使用append()將其塞進空串列
# # 最後回傳result


# def unique_order(sequence):
#     result = []
#     for item in sequence:
#         if not result or item != result[-1]:
#             result.append(item)
#     return result


# print(unique_order("AABCC"))  # [ 'A', 'B', 'C']
# print(unique_order("AAABBBCCBCC"))  # [ 'A', 'B', 'C', 'B', 'C']
# print(unique_order([1, 2, 1, 2, 1]))  # [ 1, 2, 1, 2, 1 ]
# print(unique_order([1, 1, 1, 2, 2, 2, 1]))  # [1, 2, 1]


# #  編號：CANDY-015
# #  程式語言：Python
# #  題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# #  範例：
# #   "abcdef" -> ['ab', 'cd', 'ef']
# #   "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

# # 使用串列推導式，範圍在字串長度裡，每次隔兩隔
# # 得到的值：用切片取出當前字串片段(i 跟 i+1，不含 i+2)，並用.ljust(2, "_")向左靠齊，不足部分補"_"


# def split_string(str):
#     return [str[i : i + 2].ljust(2, "_") for i in range(0, len(str), 2)]


# print(split_string("abcdef"))  # ["ab", "cd", "ef"]
# print(split_string("abcdefg"))  # ["ab", "cd", "ef", "g_"]
# print(split_string(""))  # []


# # 編號：CANDY-016
# # 程式語言：Python
# # 題目：把原本 snake_case 的字轉換成 camelCase 格式
# # 範例："hello_world" -> "helloWorld"

# # 先將傳入字串以"_"為界分開形成一串列str
# # 接著用推導式及切片，取出串列str中索引值為1到最後的單詞，再用.title()將首字母變成大寫
# # 最後回傳參數中第一個單詞(str[0])+合併camel(用.join())後的字串


# def to_camel_case(str):
#     str = str.split("_")
#     camel = [word.title() for word in str[1:]]
#     return str[0] + "".join(camel)


# print(to_camel_case("book"))  # book
# print(to_camel_case("book_store"))  # bookStore
# print(to_camel_case("get_good_score"))  # getGoodScore

# # 編號：CANDY-017
# # 程式語言：Python
# # 題目：計算數字的 2 進位裡有幾個 1
# # 範例：5 -> 101 -> 2 個 1

# # 用bin()將參數轉換成二進位，再用.count("1")算出其中有多少個1


# def count_bits(num):
#     return bin(num).count("1")


# print(count_bits(1234))  # 5
# print(count_bits(1450))  # 6
# print(count_bits(9527))  # 8


# # 編號：CANDY-018
# # 程式語言：Python
# # 題目：實作一個可以印出隨機整數的函數


# # 使用random.randint()取出範圍中的隨機整數
# # 若是只傳入一個參數，則從0開始取
# # 若是傳入兩個參數，則用參數當範圍


# def random_number(min, max=None):
#     import random

#     if max is None:
#         return random.randint(0, min)
#     return random.randint(min, max)


# print(random_number(50))  # 隨機印出 0 ~ 49 之間的任何一個數字
# print(random_number(5, 30))  # 隨機印出 5 ~ 29 之間的任何一個數字

# # 編號：CANDY-019
# # 程式語言：JavaScript
# # 題目：檢查是否為某個數字的平方數

# # 先判斷傳入引數是否為負數，若是則直接回傳False
# # 若不是，則用math.isqrt()將數字取平方根後無條件捨去到整數square_num
# # 接著判斷square_num的平方是否會等於傳入引數


# def is_square(num):
#     import math

#     if num < 0:
#         return False

#     square_num = math.isqrt(num)
#     return square_num**2 == num


# print(is_square(0))  # True
# print(is_square(4))  # True
# print(is_square(5))  # False
# print(is_square(100))  # True
# print(is_square(-4))  # False
# print(is_square(-1))  # False

# #  編號：CANDY-020
# #  程式語言：JavaScript
# #  題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

# # 先將傳入字串用.lower()轉換成小寫
# # 再用.count()計算"o"跟"x"數量是否相同


# def xxoo(str):
#     str = str.lower()
#     return str.count("o") == str.count("x")


# print(xxoo("ooxx"))  # true
# print(xxoo("xxoo"))  # true
# print(xxoo("xxooo"))  # false
# print(xxoo("xoox"))  # true
# print(xxoo("ooAA"))  # false
# print(xxoo("xoXoA"))  # true

# #  編號：CANDY-021
# #  程式語言：JavaScript
# #  題目：實作 Stack 資料結構


# class Stack:
#     def __init__(self):
#         self.items = []

#     def push(self, item=None):
#         if item is not None:
#             self.items.append(item)

#     def pop(self):
#         return self.items.pop()

#     @property
#     def size(self):
#         return len(self.items)


# stack = Stack()
# stack.push(123)
# stack.push(456)
# stack.push()
# print(stack.size)  # 印出 2

# item = stack.pop()  # 取出元素
# print(item)  # 印出 456

# stack.pop()  # 繼續取出元素
# print(stack.size)  # 印出 0

# #  編號：CANDY-022
# #  程式語言：JavaScript
# #  題目：實作 Queue 資料結構


# class Queue:
#     def __init__(self):
#         self.items = []

#     def enqueue(self, item=None):
#         if item is not None:
#             self.items.append(item)

#     def dequeue(self):
#         return self.items.pop(0)

#     @property
#     def length(self):
#         return len(self.items)


# queue = Queue()
# queue.enqueue(123)
# queue.enqueue(456)
# queue.enqueue()
# print(queue.length)  # 印出 2

# item = queue.dequeue()  # 取出元素
# print(item)  # 印出 123

# queue.dequeue()  # 繼續取出元素
# print(queue.length)  # 印出 0

# #  編號：CANDY-023
# #  程式語言：JavaScript
# #  題目：算出 N 個數字的最大公因數

# # 使用math模組中的gcd計算最大公因數
# # 先將參數的第一個值取出當作當前的最大公因數，接著跑for迴圈，範圍是第二個值到最後一個值(切片)
# # 每跑一次會更新當前的最大公因數，最後回傳最大公因數


# def calc_gcd(*numbers):
#     import math

#     gcd = numbers[0]
#     for number in numbers[1:]:
#         gcd = math.gcd(gcd, number)
#     return gcd


# print(calc_gcd(10))  # 10
# print(calc_gcd(103, 27))  # 1
# print(calc_gcd(21, 15, 18))  # 3
# print(calc_gcd(104, 96, 36, 88))  # 4

# #  編號：CANDY-024
# #  程式語言：Python
# #  題目：算出 N 個數字的最小公倍數
# #  提示：可使用 023 計算最大公因數的函數
# #   使用math模組中的lcm計算最小公倍數
# #   先將參數的第一個值取出當作當前的最小公倍數，接著跑for迴圈，範圍是第二個值到最後一個值(切片)
# #   每跑一次會更新當前的最小公倍數，最後回傳最小公倍數


# def calc_lcm(*numbers):
#     import math

#     lcm = numbers[0]
#     for number in numbers[1:]:
#         lcm = math.lcm(lcm, number)
#     return lcm


# print(calc_lcm(10))  # 10
# print(calc_lcm(103, 27))  # 2781
# print(calc_lcm(21, 15, 18))  # 630
# print(calc_lcm(104, 96, 36, 88))  # 41184

# # 編號：CANDY-025
# # 程式語言：Python
# # 題目：
# #   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
# #   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
# #   計算方式是「四捨六入五成雙」
# #   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

# # python的round()就是使用銀行家捨入法
# # 判斷是否有給digits，若沒給(digits == 0)則回傳round(num)，若有則回傳round(num, digits)


# def bankers_rounding(num, digits=0):
#     if digits == 0:
#         return round(num)
#     return round(num, digits)


# print(bankers_rounding(0.4))  # 0
# print(bankers_rounding(0.6))  # 1
# print(bankers_rounding(0.5))  # 0
# print(bankers_rounding(1.5))  # 2
# print(bankers_rounding(1.24, 1))  # 1.2
# print(bankers_rounding(1.26, 1))  # 1.3
# print(bankers_rounding(1.25, 1))  # 1.2
