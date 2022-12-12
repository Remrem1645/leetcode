/*

86. Partition List

https://leetcode.com/problems/partition-list/

*/

var partition = function (head, x) {
    let lessThan = [];
    let greaterThan = [];

    while (head) {
        if (head.val < x) {
            lessThan.push(head.val);
        } else {
            greaterThan.push(head.val);
        }
        head = head.next;
    }

    let output = new ListNode();
    let curr = output;

    for (let i = 0; i < lessThan.length; i++) {
        curr.next = new ListNode();
        curr = curr.next;
        curr.val = lessThan[i];
    }

    for (let i = 0; i < greaterThan.length; i++) {
        curr.next = new ListNode();
        curr = curr.next;
        curr.val = greaterThan[i];
    }
    return output.next;
};


/*

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:

Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:

Input: head = [2,1], x = 2
Output: [1,2]


*/