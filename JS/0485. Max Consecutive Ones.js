/*

485. Max Consecutive Ones

https://leetcode.com/problems/max-consecutive-ones/

*/

var findMaxConsecutiveOnes = function (nums) {
    let maxLen = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            start = i;
            end = i;

            while (nums[i] === 1) {
                i++;
                end++;
            }
        }
        maxLen = Math.max(maxLen, end - start);
    }
    return maxLen
};

/*

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/