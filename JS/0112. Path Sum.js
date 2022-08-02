/*

112. Path Sum

https://leetcode.com/problems/path-sum/


*/



/*
  @param {TreeNode} root
  @param {number} targetSum
  @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right) return targetSum == root.val;
    return(hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val))
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}