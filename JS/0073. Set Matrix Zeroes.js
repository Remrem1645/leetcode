/*

73. Set Matrix Zeroes

https://leetcode.com/problems/set-matrix-zeroes/

*/

var setZeroes = function(matrix) {
    function setRowColumn(x, y){
        countX = 0;
        countY = 0;

        while(countX < matrix.length){
            matrix[countX][y] = 0;
            countX++;
        }

        while(countY < matrix[0].length){
            matrix[x][countY] = 0;
            countY++;
        }
    }

    let arr = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                arr.push([i, j]);
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        setRowColumn(arr[i][0], arr[i][1])
    }
};