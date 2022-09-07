/*

19. Remove Nth Node From End of List

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

*/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var removeNthFromEnd = function (head, n) {
    let x = 0, temp = [], out = new ListNode(), rtnhead = out;

    while(head){
        temp.push(head.val);
        head = head.next;
    }
    temp = temp.slice(0, temp.length - n).concat(temp.slice(temp.length - n + 1, temp.length))
    while(temp.length !== 0){     
        out.next = new ListNode(temp.shift());
        out = out.next;
    }
    return rtnhead.next;
};

l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

console.log(removeNthFromEnd(l1, 2));



/*



l- l- l- l l l l


*/