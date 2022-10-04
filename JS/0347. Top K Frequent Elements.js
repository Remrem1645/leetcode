/*

347. Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/

*/


var topKFrequent = function(nums, k) {
    let out = [];
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            c = map.get(nums[i]);
            map.set(nums[i], c + 1) ;
        }else{
            map.set(nums[i], 1);
        }
    }

    console.log(map)


    return map;


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