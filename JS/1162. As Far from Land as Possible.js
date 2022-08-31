/*

1162. As Far from Land as Possible

https://leetcode.com/problems/as-far-from-land-as-possible/

*/

var maxDistance = function(grid) {
    
};

function bfs(grid) {
    let lenX = grid.length, lenY = grid[0].length;
    if(grid[0][0] !== 0){
        for(let i = 0; i < lenX; i++){

        }
    }
}

grid = [[1,0,1],[0,0,0],[1,0,1]]
console.log(maxDistance(grid))

/*

[
[1,0,1],
[0,0,0],
[1,0,1]
]

Example 1:
Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:
Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

*/