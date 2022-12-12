/*

109. Convert Sorted List to Binary Search Tree

https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

*/

var sortedListToBST = function (head) {
    if (!head) return head;

    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    console.log(arr)

    function arrToTrees(low, high) {
        if (low > high) return null;

        let mid = Math.floor((high + low) / 2);
        let root = new TreeNode(arr[mid]);

        root.left = arrToTrees(low, mid - 1);
        root.right = arrToTrees(mid + 1, high);

        return root;
    }

    return arrToTrees(0, arr.length - 1);
};

/*

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

Example 1:

Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:

Input: head = []
Output: []

*/