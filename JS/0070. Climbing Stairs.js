/*

70. Climbing Stairs

https://leetcode.com/problems/climbing-stairs/

*/

var climbStairs = function(n) {
    a = 0; b = 1; c = 0;
    for(i = 0; i < n; i++){
        c = a;
        a = b;
        b += c;
    }
    return b;
};

/*

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/