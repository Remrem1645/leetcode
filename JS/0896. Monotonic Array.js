/*

896. Monotonic Array

https://leetcode.com/problems/monotonic-array/

*/

var isMonotonic = function (nums) {
    let lessThan = true;
    let greaterThan = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1] && lessThan) { }
        else {
            lessThan = false;
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1] && greaterThan) { }
        else {
            greaterThan = false;
        }
    }
    return greaterThan || lessThan;
};

/*

Example 1:

Input: nums = [1,2,2,3]
Output: true

Example 2:

Input: nums = [6,5,4,4]
Output: true

Example 3:

Input: nums = [1,3,2]
Output: false

*/