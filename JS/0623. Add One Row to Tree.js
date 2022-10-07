/*

623. Add One Row to Tree

https://leetcode.com/problems/add-one-row-to-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
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



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

