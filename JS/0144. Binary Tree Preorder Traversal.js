/*

144. Binary Tree Preorder Traversal

https://leetcode.com/problems/binary-tree-preorder-traversal/

*/

var preorderTraversal = function (root) {
    function preorder(root, out) {
        if (!root) return out;
        out.push(root.val);
        if (root.left) out = preorder(root.left, out);
        if (root.right) out = preorder(root.right, out);
        return out;
    }
    return preorder(root, []);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
