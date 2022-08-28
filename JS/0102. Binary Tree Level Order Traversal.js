/*

102. Binary Tree Level Order Traversal

https://leetcode.com/problems/binary-tree-level-order-traversal/

*/

var levelOrder = function(root) {
    let out = [];
    function order(node, level){
        if(!node) return;
        if(!out[level]) out[level] = []
        out[level].push(node.val)
        order(node.left, level + 1); 
        order(node.right, level + 1);
    }
    order(root, 0);
    return out;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

console.log(levelOrder(root))