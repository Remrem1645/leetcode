/*

704. Binary Search

https://leetcode.com/problems/binary-search/

*/

var search = function (nums, target) {
    let startingIndex = 0, endingIndex = nums.length - 1;


    while(startingIndex <= endingIndex){
        let middleIndex = Math.floor((startingIndex+endingIndex)/2)
        if(nums[middleIndex] == target) return middleIndex;
        if(nums[middleIndex] < target) startingIndex = middleIndex + 1;
        if(nums[middleIndex] > target) endingIndex = middleIndex - 1;
    }
    return -1
};



nums = [-1, 0, 3, 5, 9, 12], target = 9

console.log(search(nums, target))

/*
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4


Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
var search = function(nums, target) {
    let start = 0,end = nums.length-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] < target){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    return -1
};

*/