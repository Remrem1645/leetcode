// 21. Merge Two Sorted Lists (Easy)


var mergeTwoLists = function(list1, list2) {
    var output = new ListNode(0);
    let head = output;

    while(list1 && list2){

        if(list1.val > list2.val) {
            head.next = list2;
            list2 = list2.next;
            console.log('x')
        } 
        else {
            console.log('y')
            head.next = list1;
            list1 = list1.next;
        }
        head = head.next;
    }

    head.next = list1 || list2;
    return output.next;
};

l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

l2 = new ListNode(1);
l2.next = new ListNode(4);
l2.next.next = new ListNode(5);


console.log(mergeTwoLists(l1,l2));

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/*
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


Example 2:
Input: list1 = [], list2 = []
Output: []


Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/