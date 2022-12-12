/*

148. Sort List

https://leetcode.com/problems/sort-list/

*/

var sortList = function(head) {
    temp = [];
    while(head){
        temp.push(head.val);
        head = head.next;
    }
    temp.sort((a, b) => (a - b));

    out = new ListNode();
    outtemp = out;

    for(let i = 0; i < temp.length; i++){
        outtemp.next = new ListNode()
        outtemp = outtemp.next;
        outtemp.val = temp[i];
    }
    return out.next
};


/*

Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]


*/