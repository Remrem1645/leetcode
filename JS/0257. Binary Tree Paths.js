/*

257. Binary Tree Paths

https://leetcode.com/problems/binary-tree-paths/

*/


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
    

var binaryTreePaths = function(root) {
    out = [];

    function dfs(root, temp){
        if(!root) return;

        temp += `->${root.val}`;

        if(!root.left && !root.right) out.push(temp);

        dfs(root.left, temp);
        dfs(root.right, temp);
    }

    if(!root.left && !root.right) return [`${root.val}`]

    dfs(root.left, root.val);
    dfs(root.right, root.val);

    return out;
};


/*

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:

Input: root = [1]
Output: ["1"]


*/