/*

43. Multiply Strings

https://leetcode.com/problems/multiply-strings/

*/

var multiply = function(num1, num2) {
    let dict = {'1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '0': 0};

    let intNum1 = 0;
    for(let i = num1.length - 1, multiplier = 1; i >= 0; i--, multiplier *= 10){
        intNum1 += dict[num1[i]] * multiplier;
    }
    
    let intNum2 = 0;
    for(let i = num2.length - 1, multiplier = 1; i >= 0; i--, multiplier *= 10){
        intNum2 += dict[num2[i]] * multiplier;
    }
    
    return `${intNum1 * intNum2}`;   
}

num1 = "123456789", num2 = "987654321"
console.log(multiply(num1, num2))

/*

"123456789"
"987654321"

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

*/