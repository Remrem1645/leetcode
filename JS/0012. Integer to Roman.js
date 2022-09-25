//12. Integer to Roman (Medium)


var intToRoman = function(num) {
    dict = {'I' : 1, 'V' : 5, 'X' : 10, 'L': 50, 'C' : 100, 'D' : 500, 'M' : 1000}

    return dict.get(nums);


}


num = 5;
console.log(intToRoman(num))








/*

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/