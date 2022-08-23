/*

268. Missing Number.js

https://leetcode.com/problems/missing-number/

*/

var missingNumber = function(nums) {
    let len = nums.length, total = (len * (len + 1)) / 2;
    for(i = 0; i < len; i++) total -= nums[i];
    return total
};

nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))


/*

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

1 = 0 = 0
2 = 0 + 1 = 1
3 = 0 + 1 + 2 = 3
4 = 0 + 1 + 2 + 3 = 6
5 = 0 + 1 + 2 + 3 + 4 = 10
6 = 0 + 1 + 2 + 3 + 4 + 5 = 15  
7 = 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

(n(n + 1))/2
*/