
/*

51. N-Queens

https://leetcode.com/problems/n-queens/

*/

let out;

function solveNQueens(n) {
    // need to reset, for some reason leetcode doesn't reset the global variable
    out = [];
    // Creates 2d array filled with '.'
    let arr = Array.from({ length: n }, () => Array(n).fill('.'));
    dfs(arr, 0);
    return out;
};

function dfs(arr, row) {
    // push the current board configuration to out
    if(row == arr.length) return out.push(arr.map(row => row.join('')));

    // iterate through the columns
    for(let col = 0; col < arr.length; col++){
        if(check(arr, row, col)){
            arr[row][col] = 'Q';
            dfs(arr, row + 1);
            // clean up the Q after the dfs
            arr[row][col] = '.';
        }
    }
}

function check(arr, row, col) {
    // if the column is already taken
    for(let i = 0; i < row; i++){
        if (arr[i][col] == 'Q') return false;
    }
    // if the diagonal is already taken, goes down left
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (arr[i][j] == 'Q') return false;
    }
    // if the diagonal is already taken, goes down right
    for (let i = row - 1, j = col + 1; i >= 0 && j < arr.length; i--, j++) {
        if (arr[i][j] == 'Q') return false;
    }
    return true;
}

console.log(solveNQueens(1))

/*

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


Example 1:

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:

Input: n = 1
Output: [["Q"]]


*/