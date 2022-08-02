/*

169. Majority Element

https://leetcode.com/problems/majority-element/

*/


var majorityElement = function(nums) {z 
    nums.sort()
    out = 0;

    for(i = 1, start = 0, end = 0, check = nums[0], biggestlength = 0; i < nums.length; i++){
        if (check == nums[i]) end = i;
        else{
            check = nums[i];
            start = i;
        }
        if ((end - start) > biggestlength){
            biggestlength = (end - start);
            out = start;
        }
    }
    return nums[out]
};

Input: nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))

/*


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/