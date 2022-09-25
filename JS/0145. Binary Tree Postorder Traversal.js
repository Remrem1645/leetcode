/*

145. Binary Tree Postorder Traversal

https://leetcode.com/problems/binary-tree-postorder-traversal/

*/

var postorderTraversal = function(root) {
    function postorder(root, out){
        if(!root) return out;
        if(root.left) out = postorder(root.left, out);
        if(root.right) out = postorder(root.right, out);
        out.push(root.val);
        return out;
    }
    return postorder(root, []);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
