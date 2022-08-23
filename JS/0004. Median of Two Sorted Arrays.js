/*

4. Median of Two Sorted Arrays (Hard)

https://leetcode.com/problems/median-of-two-sorted-arrays/

*/

var findMedianSortedArrays = function(nums1, nums2) {
    let len = (Math.floor((nums1.length + nums2.length)/2)) + 1;
    let arr = [], a = 0, b = 0;
    while(arr.length !== len){
        if(nums1[a] <= nums2[b] && nums1[a] !== undefined || nums2[b] === undefined){
            arr.push(nums1[a]);
            a++;
        } else{
            arr.push(nums2[b]);
            b++;
        }
    }

    if((nums1.length + nums2.length) % 2 == 1){
        return arr[len - 1];
    }else{
        return (arr[len - 1] + arr[len - 2])/2;
    }
};

nums1 = [], nums2 = [1,2,3,4,5]

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

[2,5,8,9]

[1,4,6,7]


*/