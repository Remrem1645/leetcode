/*

2095. Delete the Middle Node of a Linked List

https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteMiddle = function (head) {
    let temp, headcopy = head, headref = head;
    if(headref.next === null) return head.next;

    while(headcopy.next !== null){
        temp = head;
        head = head.next;
        headcopy = headcopy.next;
        if(headcopy.next !== null) headcopy = headcopy.next;
    }
    temp.next = head.next;
    return headref;
};

nums = [1]

let head = nums.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
  
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null); 

console.log(deleteMiddle(head))


/*

Example 1:

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

 

Constraints:

The number of nodes in the list is in the range [1, 105].
1 <= Node.val <= 105


*/