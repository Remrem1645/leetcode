var minSubArrayLen = function(target, nums) {
    minSubStart = 0; sum = 0;
    length = Number.POSITIVE_INFINITY;
    for(minSubEnd = 0; minSubEnd < nums.length; minSubEnd++){
        sum += nums[minSubEnd]
        while(sum >= target){
            length = Math.min(length, minSubEnd - minSubStart + 1);
            sum -= nums[minSubStart];
            minSubStart++
        }
    }
    if (length == Number.POSITIVE_INFINITY) return 0;
    return length;
};

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(target, nums));

/*

SLIDING DOOR METHOD!!
https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews/blob/main/%E2%9C%85%20%20Pattern%2001%20:%20Sliding%20Window.md

Given an array of positive integers nums and a 
positive integer target, return the minimal length of a contiguous subarray
of which the sum is greater than or equal to target. If there is no such subarray, 
return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/