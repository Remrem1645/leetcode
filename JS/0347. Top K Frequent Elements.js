/*

347. Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/

*/


var topKFrequent = function(nums, k) {
    let out = [];
    for(let i = 0, map = {}; i < nums.length; i++){
        if(nums[i] in map){
            map[nums[i]] = map[nums[i]] + 1;
            if(map[nums[i]] >= 2){
                out.push(nums[i]);
                map[nums[i]] = Number.NEGATIVE_INFINITY;
            }
        } 
        else if(k === 1){
            out.push(nums[i]);
            map[nums[i]] = Number.NEGATIVE_INFINITY;
        } else map[nums[i]] = 1;
    }
    return out;
};


Input: nums = [1], k = 1
console.log(topKFrequent(nums, k));

/*

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

*/