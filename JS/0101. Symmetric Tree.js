/*

101. Symmetric Tree

https://leetcode.com/problems/symmetric-tree/

*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function(root) {
    if(root == null) return null;
    function sysmmetric(rootLeft, rootRight){
        if(rootLeft == null && rootRight == null) return true;
        if(rootLeft == null || rootRight == null) return false;
        if(rootLeft.val !== rootRight.val) return false;
        return sysmmetric(rootLeft.left, rootRight.right) && sysmmetric(rootLeft.right, rootRight.left);
    }
    return sysmmetric(root.left, root.right);
};

console.log(isSymmetric(root));


/*

Input: root = [1,2,2,3,4,4,3]
Output: true

*/