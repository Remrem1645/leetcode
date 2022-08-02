/*

1. Two Sum (easy)

https://leetcode.com/problems/two-sum/

*/

var twoSum = function(nums, target) {
    let dictionary = {};
    for(i = 0; i < nums.length; i++){
        if(target - nums[i] in dictionary){
            return [dictionary[target - nums[i]], i]
        }
        else{
            dictionary[nums[i]] = i; 
        }
    }  
};

console.log(twoSum([2,7,11,15], 26))

/*

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/