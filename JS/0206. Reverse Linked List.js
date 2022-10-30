/*

206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var reverseList = function (head) {
    let curr = head, prev = null;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};


head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


console.log(reverseList(head))




/*

null => 1 => 2 => 3 => 4
prev  curr

curr = head(input)
prev = null


temp = curr.next
curr.next = prev
prev = curr
curr = temp



Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/