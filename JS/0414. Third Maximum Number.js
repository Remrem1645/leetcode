/*

414. Third Maximum Number

https://leetcode.com/problems/third-maximum-number/

*/

var thirdMax = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let distinct = [];
    let hash = {};

    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in hash)) distinct.push(nums[i]), hash[nums[i]] = 1;
    }

    console.log(distinct)

    if(distinct.length < 3) return distinct[distinct.length - 1];
    else{
        return distinct[distinct.length - 3];
    }
};

/*

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

*/