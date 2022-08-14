/*

867. Transpose Matrix

https://leetcode.com/problems/transpose-matrix/

*/

var transpose = function(matrix) {
    let out = [];
    let output = [];
    for(i = 0; i < matrix[0].length; i++){
        for(j = 0; j < matrix.length; j++){
            out[j] = matrix[j][i];
        }
        output.push(out);
        out = [];
    }
    return output;
};

matrix = [[1,2,3],[4,5,6]];

console.table(matrix);

console.log(transpose(matrix))

/*

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]


Example 2:
Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

*/
