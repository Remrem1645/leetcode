/*

54. Spiral Matrix.js

https://leetcode.com/problems/spiral-matrix/

*/


var spiralOrder = function(matrix) {
    let out = [];

    for(let posX = 0, posY = 0, count = 0, x = 0, length = matrix.length * matrix[0].length; count < length; x++){
        while(posX < matrix[0].length - x && count < length){
            out.push(matrix[posY][posX]); 
            posX++; count++;
        }
        posX--; posY++;
        while(posY < matrix.length - x && count < length){
            out.push(matrix[posY][posX]);
            posY++; count++;
        }
        posX--; posY--;
        while(posX >= 0 + x && count < length){
            out.push(matrix[posY][posX]);
            posX--; count++;
        }
        posX++; posY--;
        while(posY >= 1 + x && count < length){
            out.push(matrix[posY][posX]);
            posY--; count++;
        }
        posX++; posY++;
    }
    return out;
};

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix));


/*

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/