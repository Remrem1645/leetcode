/*

404. Sum of Left Leaves

https://leetcode.com/problems/sum-of-left-leaves/

*/

var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function getSum(root, isLeft){
        if(!root) return;
        if(isLeft && !root.left && !root.right) sum += root.val;

        getSum(root.left, true);
        getSum(root.right, false);
    }

    getSum(root, false);
    return sum;
};

/*

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:

Input: root = [1]
Output: 0

*/