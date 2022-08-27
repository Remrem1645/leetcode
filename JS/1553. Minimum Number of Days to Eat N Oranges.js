/*

1553. Minimum Number of Days to Eat N Oranges

https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/

*/


var minDays = function(n) {

    function findmin(n, min, x){
        if(n <= 0) return x = Math.min(min, x); 
        x = findmin(n - 1, min + 1, x);
        if(n % 2 === 0 ) x = findmin(n - (n / 2), min + 1, x)
        if(n % 3 === 0 ) x = findmin(n - (2 * (n / 3)), min + 1, x)
        return x;
    }

    return findmin(n, 0, Number.MAX_VALUE);
};

n = 673;

console.log(minDays(n))

/*

Example 1:

Input: n = 10
Output: 4
Explanation: You have 10 oranges.
Day 1: Eat 1 orange,  10 - 1 = 9.  
Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. 
Day 4: Eat the last orange  1 - 1  = 0.
You need at least 4 days to eat the 10 oranges.


Example 2:

Input: n = 6
Output: 3
Explanation: You have 6 oranges.
Day 1: Eat 3 oranges, 6 - 6/2 = 6 - 3 = 3. (Since 6 is divisible by 2).
Day 2: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. (Since 3 is divisible by 3)
Day 3: Eat the last orange  1 - 1  = 0.
You need at least 3 days to eat the 6 oranges.

*/  