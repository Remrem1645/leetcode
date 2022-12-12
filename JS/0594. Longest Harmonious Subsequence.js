/*

594. Longest Harmonious Subsequence

https://leetcode.com/problems/longest-harmonious-subsequence/

*/

var findLHS = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let max = 0;

    for (let key of map.keys()) {
        if (map.has(key + 1)) {
            max = Math.max(max, map.get(key) + map.get(key + 1));
        }
    }
    console.log(map)
    return max;
};

/*

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Example 2:

Input: nums = [1,2,3,4]
Output: 2

Example 3:

Input: nums = [1,1,1,1]
Output: 0

*/