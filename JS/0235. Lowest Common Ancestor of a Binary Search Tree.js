/*

235. Lowest Common Ancestor of a Binary Search Tree

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

*/

var lowestCommonAncestor = function(root, p, q) {
    if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return root;
};

/*

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


*/