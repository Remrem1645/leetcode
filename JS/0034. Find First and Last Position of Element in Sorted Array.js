/*

34. Find First and Last Position of Element in Sorted Array

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

*/

var searchRange = function(nums, target) {
    toggle = true;

    let start = 0, end = (nums.length - 1), mid;
    pos = '';


    while(start <= end){
        mid = Math.floor((end + start) / 2)
        if(nums[mid] >= target) end = mid - 1;
        else start = mid + 1;

    }

    if(nums[start] !== target) return [-1,-1];
    const outstart = start;
    start = 0; end = (nums.length - 1); mid;


    while(start <= end){
        mid = Math.floor((end + start) / 2)
        if(nums[mid] <= target) start = mid + 1;
        else end = mid - 1;
    }

    return [outstart, end]
};


nums = [5,7,7,8,8,10], target = 6
console.log(searchRange(nums,target))

/*

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

*/