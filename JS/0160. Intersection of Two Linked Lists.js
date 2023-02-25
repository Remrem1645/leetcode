/*

160. Intersection of Two Linked Lists

https://leetcode.com/problems/intersection-of-two-linked-lists/

*/


var getIntersectionNode = function(headA, headB) {

    if (!headA || !headB) return null;
    var curA = headA;
    var curB = headB;
    while (curA != curB) {
        curA = (curA == null) ? headB : curA.next;
        curB = (curB == null) ? headA : curB.next;
    }
    return curA;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

headA = new ListNode(2);
headA.next = new ListNode(1);
headA.next.next = new ListNode(8);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = new ListNode(8);
headB.next.next.next.next = new ListNode(4);
headB.next.next.next.next.next = new ListNode(5);


console.log(getIntersectionNode(headA, headB));

/*

listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]

listA = [1,9,1,2,4], listB = [3,2,4]

listA = [2,6,4], listB = [1,5]

*/