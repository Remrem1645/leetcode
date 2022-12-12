/*

977. Squares of a Sorted Array

https://leetcode.com/problems/squares-of-a-sorted-array/

*/

var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    return nums.sort((a, b) => a - b);
};

/*

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/