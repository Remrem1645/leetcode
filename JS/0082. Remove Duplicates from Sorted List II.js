/*

82. Remove Duplicates from Sorted List II

https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

*/

var deleteDuplicates = function (head) {
    if (!head) return head;

    let arr = [];
    let hash = {};

    while (head) {
        arr.push(head.val)
        head = head.next;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hash) {
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1;
        }
    }

    let output = new ListNode();
    let curr = output;

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === 1) {
            curr.next = new ListNode()
            curr = curr.next;
            curr.val = arr[i];
        }
    }
    return output.next;
};

/*

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]


*/