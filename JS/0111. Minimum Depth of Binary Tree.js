/*

111. Minimum Depth of Binary Tree

https://leetcode.com/problems/minimum-depth-of-binary-tree/

*/


var minDepth = function(root) {
    if (!root) return 0;
    
    let min = Infinity;
    
    function dfs(node, depth){
        if (!node.left && !node.right) min = Math.min(depth, min)
        if (node.left) dfs(node.left, depth + 1);
        if (node.right) dfs(node.right, depth + 1);
    }
    
    dfs(root, 1);
    return min;
};


/*

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

*/