/*

349. Intersection of Two Arrays

https://leetcode.com/problems/intersection-of-two-arrays/

*/

var intersection = function(nums1, nums2) {
    let hash1 = {};
    let dupe = [];
    let hash2 = {};

    for(let i = 0; i < nums1.length; i++){
        hash1[nums1[i]] = i;
    }

    for(let i = 0; i < nums2.length; i++){
        if(nums2[i] in hash1 && !(nums2[i] in hash2)){
            dupe.push(nums2[i]);
            hash2[nums2[i]] = 1;
        }
    }

    return dupe;
};

/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/