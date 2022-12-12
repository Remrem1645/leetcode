/*

415. Add Strings

https://leetcode.com/problems/add-strings/

*/

var addStrings = function (num1, num2) {

    let num1Len = num1.length - 1;
    let num2Len = num2.length - 1;
    let total = "";
    let carry = 0;

    while (num1Len >= 0 || num2Len >= 0 || carry === 1) {
        let temp = 0;

        x = (num1Len >= 0) ? parseInt(num1[num1Len]) : 0;
        y = (num2Len >= 0) ? parseInt(num2[num2Len]) : 0;

        if (x + y + carry > 9) {
            temp = (x + y + carry) - 10;
            carry = 1;
        } else {
            temp = (x + y + carry);
            carry = 0;
        }
        total = `${temp}${total}`;
        num1Len--;
        num2Len--;
    }
    return total;
};

/*

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"

*/
