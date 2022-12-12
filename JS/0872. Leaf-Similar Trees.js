/*

872. Leaf-Similar Trees

https://leetcode.com/problems/leaf-similar-trees/

*/

var leafSimilar = function (root1, root2) {
    let arr1 = [];
    let arr2 = [];

    function traversal(head, arr) {
        if (!head) return;

        traversal(head.left, arr);
        traversal(head.right, arr);

        if (head.right === null && head.left === null) {
            arr.push(head.val);
            return;
        }
    }

    traversal(root1, arr1);
    traversal(root2, arr2);

    return arr1.join(' ') === arr2.join(' ');
};

/*

Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

*/