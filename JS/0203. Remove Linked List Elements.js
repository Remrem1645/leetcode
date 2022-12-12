/*

203. Remove Linked List Elements

https://leetcode.com/problems/remove-linked-list-elements/

*/

var removeElements = function (head, val) {
    if (!head) return head;

    let curr = head.next;
    let prev = head;

    while (curr) {
        if (curr.val === val) {
            curr = curr.next;
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return (head.val === val) ? head.next : head;
};

/*

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:

Input: head = [], val = 1
Output: []

Example 3:

Input: head = [7,7,7,7], val = 7
Output: []

*/