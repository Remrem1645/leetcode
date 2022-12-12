/*

350. Intersection of Two Arrays II

https://leetcode.com/problems/intersection-of-two-arrays-ii/

*/

var intersect = function (nums1, nums2) {
    let hash = {};

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in hash) {
            hash[nums1[i]]++;
        } else {
            hash[nums1[i]] = 1;
        }
    }

    let out = [];

    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] in hash) {
            if (hash[nums2[i]] >= 1) {
                out.push(nums2[i]);
                hash[nums2[i]]--;
            }
        }
    }
    return out;
};

/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/