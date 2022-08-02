//4. Median of Two Sorted Arrays (Hard)


var findMedianSortedArrays = function(nums1, nums2) {


    
};

nums1 = [1,3];
nums2 = [2];

console.log(findMedianSortedArrays(nums1,nums2));


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

1 = [1,6,9]
2 = [2,3,5]

check 1.[x] and 2.[y] : out 1 x++
check 1.[x] and 2.[y] : out 2 y++
check 1.[x] and 2.[y] : out 3 y++
check 1.[x] and 2.[y] : out 5 y++
check 1.[x] and 2.[y] : out 6 x++
check 1.[x] and 2.[y] : out 9 x++


if odd = Math.ceil(numsarray.lenth / 2)
if even = avg of (  (numsarray.lenth / 2) and numsarray.lenth / 2) + 1)


*/