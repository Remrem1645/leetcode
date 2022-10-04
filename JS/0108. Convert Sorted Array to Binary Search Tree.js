/*

108. Convert Sorted Array to Binary Search Tree

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/

var sortedArrayToBST = function(nums) {
    if(nums.length <= 2){

    }   
    let center = Math.floor(nums.length / 2);

    let output = new TreeNode();

    for(let i = 0; i < center; i++){
        let temp = new TreeNode();
        temp.val = nums[i];
        
    }
    
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

nums = [-10,-3,0,5,9]

console.log(sortedArrayToBST(nums));