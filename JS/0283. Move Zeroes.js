/*

283. Move Zeroes

https://leetcode.com/problems/move-zeroes/

*/

var moveZeroes = function(nums) {
    let len = nums.length;

    for(let i = 0; i < len - 1; i++){
        if(nums[i] === 0) {
            for(j = i; j < len; j++){
                if(nums[j] !== 0){
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
    return nums;
};

Input: nums = [0,1,0,3,12]
console.log(moveZeroes(nums))

/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


*/