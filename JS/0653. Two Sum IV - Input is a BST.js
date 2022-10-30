/*

653. Two Sum IV - Input is a BST

https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var findTarget = function(root, k) {
    let dict = {}, out = false;

    function dfs(node){
        if(!node || out) return;
        if(k - node.val in dict) out = true;
        else{
            dict[node.val] = node.val;
            dfs(node.left);
            dfs(node.right);
        }
    }
    dfs(root);
    return out;
};