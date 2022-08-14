/*

226. Invert Binary Tree

https://leetcode.com/problems/invert-binary-tree/

*/

var invertTree = function(root) {
    if (!root) return root;
    
    let temp = root.left
    root.left = root.right
    root.right = temp
    
    invertTree(root.left)
    invertTree(root.right)
    
    return root
};



/*


 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }





 * */