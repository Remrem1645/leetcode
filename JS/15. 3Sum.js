/*

15. 3Sum
https://leetcode.com/problems/3sum/

*/



var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let output = [];

    nums.sort((a, b) => a - b)

    for(i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue

        while (j < k) {
            if(nums[i] + nums[j] + nums[k] == 0){
                output.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
                k--;
                j++;
            }
            else if(nums[i] + nums[j] + nums[k] < 0) j++;
            else if(nums[i] + nums[j] + nums[k] > 0) k--;
        }
    }
    return output
};


nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))


/*


Given an integer array nums, return all the triplets 

[nums[i], nums[j], nums[k]] 
such that 
i != j, i != k, and j != k,  //basicually u cannot use that same vaule at that position
and 
nums[i] + nums[j] + nums[k] == 0.   //must add up to 0

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Notice that the order of the output and the order of the triplets does not matter.


Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.





*/