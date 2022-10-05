/*

231. Power of Two

https://leetcode.com/problems/power-of-two/

*/

var isPowerOfTwo = function(n) {
    if(n == 1) return true;
    if(n % 2 === 1) return false;

    x = 1;
    while(Math.pow(2, x) <= n){
        if(n === Math.pow(2, x)) return true;
        x++;
    }
    return false;
};

Input: n = 2147483646

console.log(isPowerOfTwo(n))

/*

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:

Input: n = 3
Output: false

*/