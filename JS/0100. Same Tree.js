/*

100. Same Tree

https://leetcode.com/problems/same-tree/

*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function insertNode(tree, value) {
    var node = tree,
        key;
    while (node.value !== value) {
        key = value < node.value ? 'left' : 'right';
        if (!node[key]) {
            node[key] = new TreeNode(value);
            break;
        }
        node = node[key];
    }
    return tree;
}

var inorderTraversal = function (root) {
    let out = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        out.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return out;
};



var isSameTree = function (p, q) {
    if(!p && !q) return true;
    if(!p || !q || (p.val !== q.val)) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

 
p = [1, 2], q = [1, null, 2]

tree1 = p.reduce((t, v) => t ? insertNode(t, v) : new TreeNode(v), null);
tree2 = q.reduce((t, v) => t ? insertNode(t, v) : new TreeNode(v), null);


console.log(isSameTree(tree1, tree2));