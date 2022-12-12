/*

23. Merge k Sorted Lists

https://leetcode.com/problems/merge-k-sorted-lists/

*/

var mergeKLists = function( lists) {
    let tempArr = [];

    for(let i = 0; i <  lists.length; i++){
        while( lists[i]){
            tempArr.push( lists[i].val)
            lists[i] =  lists[i].next;
        }
    }

    tempArr = tempArr.sort((a, b) => a - b);

    let output = new ListNode();
    let copy = output;

    for(let i = 0; i < tempArr.length; i++){
        copy.next = new ListNode();
        copy = copy.next;
        copy.val = tempArr[i];
    }

    return output.next;
};

/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

*/