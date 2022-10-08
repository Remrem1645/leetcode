/*

623. Add One Row to Tree

https://leetcode.com/problems/add-one-row-to-tree/

*/


var addOneRow = function (root, val, depth) {
    if(depth === 1) return new TreeNode(val, root, null);
    
    dfs = (currNode, val, depth, currDepth) => {
        if(!currNode) return;
        if(currDepth + 1 === depth){
            currNode.left = new TreeNode(val, currNode.left, null);
            currNode.right = new TreeNode(val, null, currNode.right);
        }
        dfs(currNode.left, val, depth, currDepth + 1);
        dfs(currNode.right, val, depth, currDepth + 1);
    }
    
    dfs(root, val, depth, 1)
    return root;
};


function addOneRow(root, val, depth, currDepth = 1){
    if(depth === 1) return new TreeNode(val, root, null);
    if(!root) return;
    if(currDepth + 1 === depth){
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    }
    addOneRow(root.left, val, depth, currDepth + 1);
    addOneRow(root.right, val, depth, currDepth + 1);
    return root;
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/*

Example 1:

Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]

Example 2:

Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]

*/