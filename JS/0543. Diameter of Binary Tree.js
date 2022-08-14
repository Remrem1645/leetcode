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

/*

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1

*/