/*

69. Sqrt(x)

https://leetcode.com/problems/sqrtx/

*/

var mySqrt = function (x) {
    if (x == 1) {
        return 1;
    }
    for (i = 1; i < x; i++) {
        lowerLimit = (i * i);
        upperLimit = ((i + 1) * (i + 1)) - 1;
        if (lowerLimit <= x && upperLimit >= x) {
            return i;
        }
    }
    return 0;
};


/*

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 
*/
