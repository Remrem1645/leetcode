/*

448. Find All Numbers Disappeared in an Array

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

*/

var findDisappearedNumbers = function(nums) {
    let hash = {};

    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in hash)) hash[nums[i]] = 0;   
    }

    let out = [];

    for(let i = 1; i <= nums.length; i++){
        if(!(i in hash)) out.push(i); 
    }

    return out;
};

/*

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

*/