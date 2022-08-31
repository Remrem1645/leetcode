function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function buildTreeFromArr(arr) {
    let root = new TreeNode(arr.shift()), queue = [root];
    while (queue.length > 0 && arr.length > 0) {
        let currNode = queue.shift(), lVal = arr.shift(), rVal = arr.shift();
        if (lVal !== null) {
            currNode.left = new TreeNode(lVal);
            queue.push(currNode.left);
        }
        if (rVal !== null) {
            currNode.right = new TreeNode(rVal);
            queue.push(currNode.right);
        }
    }
    return root;
}

var isBalanced = function (root) {
    let out = true;
    function checkBalance(root){
        if(!root) return 0;
        let left = checkBalance(root.left), right = checkBalance(root.right);
        if(left - right > 1 || right - left > 1) out = false;
        return 1 + Math.max(left, right);
    }
    checkBalance(root);
    return out;
};

root = [1,2,2,3,null,null,3,4,null,null,4]
console.log(isBalanced(buildTreeFromArr(root)));


/*

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

*/