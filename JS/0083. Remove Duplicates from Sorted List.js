//83. Remove Duplicates from Sorted List (easy)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function(head) {
    var output = new ListNode(0); 
    let heads = output;
    check = -Infinity;

    while(head){
        if(head.val != check){
            heads.next = new ListNode(head.val)
            heads = heads.next;
            check = head.val;
        }
        head = head.next;
    }
    return output.next;
};

head = new ListNode(0);
head.next = new ListNode(0);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(0);
head.next.next.next.next = new ListNode(0);


console.log(deleteDuplicates(head));





/*

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/