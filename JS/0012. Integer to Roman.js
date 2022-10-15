/*

12. Integer to Roman

https://leetcode.com/problems/integer-to-roman/

*/


var intToRoman = function(num) {
    let dict = { 1 : 'I', 4 : 'IV', 5 : 'V', 9 : 'IX', 10 : 'X', 40 : 'XL',  50 : 'L', 90 : 'XC', 100 : 'C', 400: 'CD', 500 : 'D', 900 : 'CM', 1000 : 'M'} , out = '';

    for(let i = 0, currBiggest = 1000; i < 3; i++, currBiggest /= 10){
        let temp = currBiggest;
        if(num >= temp) toRoman(temp);
        temp = temp - temp / 10;
        if(num >= temp) toRoman(temp);
        temp = currBiggest / 2;
        if(num >= temp) toRoman(temp);
        temp = temp - temp / 5;
        if(num >= temp) toRoman(temp);
    }

    if(num >= 1) toRoman(1);


    function toRoman(currBiggest){
        let temp = Math.floor(num / currBiggest);
        out += `${ dict[currBiggest].repeat(temp)}`;
        num -= temp * currBiggest;
    }

    return out;
}


num = 1994;
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