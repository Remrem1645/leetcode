/*

48. Rotate Image

https://leetcode.com/problems/rotate-image/

*/

function rotate (matrix){
    let q = [], s = [];

    tSide = (from, to) => { for(i = from[1]; i <= to[1]; i++) q.push(matrix[from[1]][i]);} 
    bSide = (from, to) => { for(i = from[1]; i <= to[1]; i++) q.push(matrix[from[0]][i]);}
    rSide = (from, to) => { for(i = from[0]; i <= to[0]; i++) s.push(matrix[i][from[1]]);}
    lSide = (from, to) => { for(i = from[0]; i <= to[0]; i++) s.push(matrix[i][from[0]]);}

    tSideInsert = (from, to) => { for(i = from[1]; i <= to[1]; i++) matrix[i][to[1]] = q.shift();} 
    bSideInsert = (from, to) => { for(i = from[1]; i <= to[1]; i++) matrix[i][from[1]] = q.shift();}
    lSideInsert = (from, to) => { for(i = from[0]; i <= to[0]; i++) matrix[to[1]][i] = s.pop();}
    rSideInsert = (from, to) => { for(i = from[0]; i <= to[0]; i++) matrix[from[1]][i] = s.pop();}

    for(let size = matrix.length, i = 0, mSize = matrix.length - 1; size > 1; size -= 2, i++){
        tSide([i,i], [i,mSize - i])
        bSide([mSize - i, i], [mSize - i, mSize - i])
        rSide([i,mSize - i], [mSize - i, mSize - i])
        lSide([i,i], [mSize - i, i])
        
        tSideInsert([i,i], [i,mSize - i])
        bSideInsert([mSize - i, i], [mSize - i, mSize - i])
        lSideInsert([i,i], [mSize - i, i])
        rSideInsert([i,mSize - i], [mSize - i, mSize - i])
    }
}


matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.table(rotate(matrix))





/*

Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

[7,4,1],
[8,5,2],
[9,6,3]


*/