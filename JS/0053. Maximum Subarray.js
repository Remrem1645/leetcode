/*

53. Maximum Subarray (Easy)

https://leetcode.com/problems/maximum-subarray/

*/

/* 
var maxSubArray = function(nums) {
    out = Number.NEGATIVE_INFINITY;
    for(i = 0; i < nums.length; i++){
        curr = 0;
        x = i;
        while(nums[x]) {
            curr += nums[x]
            out = (curr > out) ? curr : out;
            x++;
        }
    }
    return out;
};
 */

/* 
var maxSubArray = function(nums) {
    out = Number.NEGATIVE_INFINITY;
    while(nums.length > 0){
        for(i = 0, curr = 0; i < nums.length; i++){
            curr += nums[i]
            out = (curr > out) ? curr : out;
        }
        nums.shift();
    }
    return out;
} 
*/

var maxSubArray = (nums) => {
    curr = 0;
    max = Number.NEGATIVE_INFINITY;
    for(i = 0; i < nums.length; i++){
        curr += nums[i];
        max = Math.max(max, curr);
        curr = Math.max(curr, 0);
    }
    return max;
}


nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums))


/*

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]

-2 + 1 = -1 
- 3 = -4 
+ 4 = 0
- 1 = -1

Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

*/