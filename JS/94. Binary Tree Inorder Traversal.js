// 94. Binary Tree Inorder Traversal (Easy)

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// creates Binary Tree from array

var array = [1, null, 2 ,3],
    tree = array.reduce((t, v) => t ? insertNode(t, v) : new TreeNode(v), null);
    
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

var inorderTraversal = function(root) {
    let out = [];
    function inorder(node) {
        if(!node) return;
        inorder(node.left);
        out.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return out;
};

console.log(inorderTraversal((tree)));