function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


Input: root = [3,9,20,null,null,15,7]


function insertLevelOrder(arr, i){
    let root = null;
    if (i < arr.length) {
        root = new TreeNode(arr[i]);
        root.left = insertLevelOrder(arr, 2 * i + 1);
        root.right = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}

tree = insertLevelOrder(root, 0)


var isBalanced = function(root) {

};


function checklength(root, l){
    while(root){
        
    }
}



console.log(isBalanced(tree));



/*


0,          3
2,          




*/