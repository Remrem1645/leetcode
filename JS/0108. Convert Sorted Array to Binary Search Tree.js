/*

108. Convert Sorted Array to Binary Search Tree

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/

var sortedArrayToBST = function(nums) {
    if(!nums) return null;

    function convert(low, high){
        if(low > high) return null;

        let mid = Math.floor((high + low) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = convert(low, mid - 1);
        root.right = convert(mid + 1, high);

        return root;
    }  

    return convert(0, nums.length - 1);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

nums = [-10,-3,0,5,9]

console.log(sortedArrayToBST(nums));