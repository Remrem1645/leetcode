/*

36. Valid Sudoku

https://leetcode.com/problems/valid-sudoku/

*/

var isValidSudoku = function(board) {
    let map = {};

    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            
            if(board[i][j] === '.') continue;

            let num = board[i][j];
            let x = Math.floor(i / 3);
            let y = Math.floor(j / 3);

            let err = (map[`r${i}${num}`] || map[`c${j}${num}`] || map[`b${x}${y}${num}`]);  

            if (err) return false; 

            map[`r${i}${num}`] = 1;
            map[`c${j}${num}`] = 1;
            map[`b${x}${y}${num}`] = 1;
        }
    }
    return true;
};





Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))


/*

9 by 9 board

add value to map, if value is in map, return false;

reset map every row , column and grid 

row = [#,0] to [#,8];

column = [0,#] to [8,#];

grid = 

[0,0] [0,1] [0,2]       [0,# + 3]
[1,0] [1,1] [1,2]   =>  [1,# + 3]   => etc
[2,0] [2,1] [2,2]       [2,# + 3]

       \/
[# + 3, 0] [# + 3, 1] [# + 3, 2]


x = 0 => 3 => 6
y = 0 => 3 => 6

when x == 6, reset to 0, increase y by 3.
keep going until y == 6;

pass all 3 test to return valid.

very slow tho


x = i % 3
y = j % 3


using maps, 

'r' + i + num
'c' + j + num
'b' + x + y + num,

*/