/*

2. Add Two Numbers (Medium)

https://leetcode.com/problems/add-two-numbers/

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    var output = new ListNode(0);
    let head = output;
    let carry = 0;
    
    while(l1 || l2 || carry != 0){
        head.next = new ListNode()
        head = head.next;
        
        let x = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = (x >= 10) ? 1 : 0;
        head.val = x % 10;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return output.next;
};

l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2));

/*

Input: 
l1 = [2,4,3]
l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807 reverse is 708


Input: 
l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Explanation: 9999999 + 9999 = 10009998 reverse is 89990001

Using Carry:

l1  l2  Carry

2 + 5            = 7  = 7 with 0 carry
4 + 6            = 10 = 0 with 1 carry
3 + 4 + 1(carry) = 8  = 8 with 0 carry


9 + 9            = 18 = 8 with 1 carry
9 + 9 + 1(carry) = 19 = 9 with 1 carry
9 + 9 + 1(carry) = 19 = 9 with 1 carry
9 + 9 + 1(carry) = 19 = 9 with 1 carry
9 +     1(carry) = 10 = 0 with 1 carry
9 +     1(carry) = 10 = 0 with 1 carry
9 +     1(carry) = 10 = 0 with 1 carry
        1(carry) = 1  = 1 with 0 carry

console.log(l1.val);
l1 = l1.next;
console.log(l1.val);
l1 = l1.next;
console.log(l1.val);


*/