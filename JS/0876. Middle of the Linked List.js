/*

876. Middle of the Linked List

https://leetcode.com/problems/middle-of-the-linked-list/

*/

var middleNode = function(head) {
    let map = new Map();
    let len = 0;

    while(head){
        map.set(len, head);
        head = head.next;
        len++;
    }    
    return map.get(Math.floor(len/2));
};

/*

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/