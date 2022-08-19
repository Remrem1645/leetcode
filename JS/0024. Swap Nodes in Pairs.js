/*

24. Swap Nodes in Pairs

https://leetcode.com/problems/swap-nodes-in-pairs/

*/


//LinkedList Definition 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Solution
var swapPairs = function (head) {
    var output = new ListNode(0);
    let h = output;
    while(head){
        temp1 = head.val;
        head = head.next;
        if(head){
            temp2 = head.val;
            head = head.next;
            h.next = new ListNode(temp2);
            h = h.next;
        }
        h.next = new ListNode(temp1);
        h = h.next;
    }
    return output.next;
};

//Creates LinkedList from array
function createList(a){
    var node;
    var temp;
    for(i = a.length - 2, node = new ListNode(a[i + 1]); i >= 0; i--){
        temp = new ListNode(a[i]);
        temp.next = node;
        node = temp;
    }
    return node;
}

//Inputs
head = [1,2,3,4]
console.log(swapPairs(createList(head)));


/*

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

*/