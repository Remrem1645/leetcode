/*

237. Delete Node in a Linked List

https://leetcode.com/problems/delete-node-in-a-linked-list/

*/


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function (node) {
    node.val = node.next.val; //set next value to current node value
    node.next = node.next.next; //set next node to point to next linked list
};

