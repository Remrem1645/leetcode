/*

4. Median of Two Sorted Arrays (Hard)

https://leetcode.com/problems/median-of-two-sorted-arrays/

*/
/* 
var findMedianSortedArrays = function(nums1, nums2) {
    let mid1 = 0;
    let mid2 = 0;

    if(nums1.length !== 0){
        let start1 = 0;
        let end1 = nums1.length - 1;
        if(nums1.length % 2){
            let middle = Math.floor((start1 + end1) / 2)
            mid1 = nums1[middle];
        }else{
            let middle = Math.floor((start1 + end1) / 2);
            mid1 = ((nums1[middle] + nums1[middle + 1]) / 2);
        }
    }

    if(nums2.length !== 0){
        let start2 = 0;
        let end2 = nums2.length - 1;
        
        if(nums2.length % 2){
            let middle = Math.floor((start2 + end2) / 2)
            mid2 = nums2[middle];
        }else{
            let middle = Math.floor((start2 + end2) / 2);
            mid2 = ((nums2[middle] + nums2[middle + 1]) / 2);
        }
    }

    if(nums1.length == 0 && nums2.length == 0) return [];
    if(nums1.length == 0) mid1 = mid2;
    if(nums2.length == 0) mid2 = mid1;

    return ((mid1 + mid2) / 2)
};

nums1 = [], nums2 = [1]

console.log(findMedianSortedArrays(nums1,nums2)); */


/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


comparer for num1 and num2

[5,6,7,8,9]

7

[10,11,12,13,14]

12

12 + 7 = 19

9.5



*/