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