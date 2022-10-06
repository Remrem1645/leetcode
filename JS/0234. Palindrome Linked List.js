/*

234. Palindrome Linked List

https://leetcode.com/problems/palindrome-linked-list/

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var isPalindrome = function (head) {
    let arr = [];

    while(head){
        arr.push(head.val);
        head = head.next;
    }

    for(let i = 0; i < Math.ceil(arr.length / 2); i++){
        let j = arr.length - i - 1;
        if(arr[i] !== arr[j]) return false;
    }

    return true;
};

function arrToLL(arr){
    let head = new ListNode(arr[0]);
    for(let i = 1; i < arr.length; i++){
        let temp = new ListNode(arr[i]);
        temp.next = head; 
        head = temp;
    }
    return head;
}

head = [1,2,2,1]
console.log(isPalindrome(arrToLL(head)));


/*

Example 1:

Input: head = [1,2,2,1]
Output: true

Example 2:

Input: head = [1,2]
Output: false

*/