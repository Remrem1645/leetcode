/*

61. Rotate List

https://leetcode.com/problems/rotate-list/

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var rotateRight = function(head, k) {
    if(head){
        let len = 0, arr = [], out = new ListNode(), temp = out;

        while(head){
            arr.push(head.val);
            len++;
            head = head.next;
        }

        if(arr.length < k) k -= Math.floor(k / arr.length) * arr.length; 

        for(let i = 1; i <= k; i++) arr.unshift(arr.pop());
        
        for(let i = 0; i < arr.length; i++, temp = temp.next) temp.next = new ListNode(arr[i]);
        
        return out.next;
    }
    return head;
};


l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

console.log(rotateRight(l1, 2000000000));









/*

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]

 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109


*/