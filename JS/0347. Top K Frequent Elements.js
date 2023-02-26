/*

347. Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/

*/


var topKFrequent = function(nums, k) {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in map)) map[nums[i]] = 0;
        map[nums[i]]++;
    }

    let arr = [];

    for(let i in map){
        arr.push({i, count: map[i]});
    }

    arr.sort((a, b) => b.count - a.count);

    let out = [];

    for(let i = 0; i < k; i++){
        out.push(arr[i].i);
    }
    return out
};


Input: nums = [7,10,11,5,2,5,5,7,11,8,9], k = 4;
console.log(topKFrequent(nums, k));

/*

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

*/