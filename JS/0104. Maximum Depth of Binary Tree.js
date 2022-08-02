/*

104. Maximum Depth of Binary Tree

https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/

/* var maxDepth = function(root) {
    let md = 0;
    function dfs(root, depth){
        if(!root){
            md = Math.max(depth, md);
            return md;
        }
        dfs(root.left, depth++);
        dfs(root.right, depth++);
    }
    dfs(root, 0);
    return md
};


 */


var maxDepth = (root) => {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}