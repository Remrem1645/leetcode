/*

1091. Shortest Path in Binary Matrix

https://leetcode.com/problems/shortest-path-in-binary-matrix/

*/


var shortestPathBinaryMatrix = function (grid) {
    if(grid[0][0] === 1) return -1;
    return bfs(grid);
};

function valid(X, Y, lenX, lenY, grid){return (X >= 0 && Y >= 0 && X < lenX && Y < lenY && grid[X][Y] === 0)}

function bfs(grid){
    let lenY = grid.length, lenX = grid[0].length, q = [[0, 0]]
    arr = new Array(lenY).fill().map(() => new Array(lenX).fill(-1));
    arr[0][0] = 1;

    while(q.length){
        let [x, y] = q.shift(), t = arr[x][y];
        if(x === lenX - 1 && y === lenY - 1) return t;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                if(i === 0 && j === 0) continue;
                let X = x + i, Y = y + j;
                if(valid(X, Y, lenX, lenY, grid)){
                    grid[X][Y] = 1;
                    q.push([X, Y])
                    arr[X][Y] = t + 1;
                }
            }
        }
    }
    return arr[lenX - 1][lenY - 1];
}


[[0,0,0],[1,1,0],[1,1,0]]

/* 

[
[0,0,0,0,1],
[1,0,0,0,0],
[0,1,0,1,0],
[0,0,0,1,1],
[0,0,0,1,0]]







*/

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
console.log(shortestPathBinaryMatrix(grid))
/*

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

*/