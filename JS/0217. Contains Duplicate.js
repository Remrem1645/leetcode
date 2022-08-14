/*

217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

*/

var containsDuplicate = function(nums) {
    let dict = {};
    for(i = 0; i < nums.length; i++){
        if(nums[i] in dict) return true;
        else dict[nums[i]] = nums[i];
    }
    return false;
};


nums = [3,3]

console.log(containsDuplicate(nums));


/*

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/