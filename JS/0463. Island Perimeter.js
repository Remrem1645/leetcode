/*

463. Island Perimeter

https://leetcode.com/problems/island-perimeter/

*/

var islandPerimeter = function (grid) {

    let total = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) total += checkSides(i, j);
        }
    }

    function checkSides(i, j) {
        let sides = 4;
        if (i - 1 >= 0) sides = (grid[i - 1][j] === 1) ? sides - 1 : sides;
        if (j - 1 >= 0) sides = (grid[i][j - 1] === 1) ? sides - 1 : sides;
        if (i + 1 < grid.length) sides = (grid[i + 1][j] === 1) ? sides - 1 : sides;
        if (j + 1 < grid[i].length) sides = (grid[i][j + 1] === 1) ? sides - 1 : sides;
        return sides;
    }

    return total;
};


/*

Example 1:

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:

Input: grid = [[1]]
Output: 4

*/