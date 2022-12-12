/*

566. Reshape the Matrix

https://leetcode.com/problems/reshape-the-matrix/

*/

var matrixReshape = function (mat, r, c) {
    if (mat[0].length * mat.length !== r * c) return mat;

    let output = [];
    let temp = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            temp.push(mat[i][j]);
            if (temp.length === c) {
                output.push(temp);
                temp = [];
            }
        }
    }
    return output;
};

/*

Example 1:

Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:

Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

*/