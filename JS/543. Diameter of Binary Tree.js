/*

543. Diameter of Binary Tree

https://leetcode.com/problems/diameter-of-binary-tree/


*/


var diameterOfBinaryTree = function(root) {
    maxdist = 0 

    function dfs(root){
        if (!root) return 0;
        let right = dfs(root.right);
        let left = dfs(root.left);
        let total = right + left;
        maxdist = Math.max(total, maxdist);
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return maxdist;
};