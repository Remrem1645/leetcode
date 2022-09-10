/*

141. Linked List Cycle

https://leetcode.com/problems/linked-list-cycle/

*/

var hasCycle = function(head) {
    let map = new Set();
    
    function check(head){
        if(map.has(head)) return true;
        if(!head) return false;
        map.add(head);
        return check(head.next);
    }
    return check(head);
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

