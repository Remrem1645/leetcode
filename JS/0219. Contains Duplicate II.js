/*

219. Contains Duplicate II

https://leetcode.com/problems/contains-duplicate-ii/

*/

var containsNearbyDuplicate = function (nums, k) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            if (i - hash[nums[i]] <= k) return true;
            else {
                hash[nums[i]] = i;
            }
        } else {
            hash[nums[i]] = i;
        }
    }
    return false;
};

/*

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

*/