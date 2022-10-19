/*

59. Spiral Matrix II

https://leetcode.com/problems/spiral-matrix-ii/

*/


var generateMatrix = function(n) {
    let arr = new Array(n).fill(1).map(() => new Array(n).fill(1));
    let topLimit = 0, botLimit = n, leftLimit = 0, rightLimit = n, len = Math.pow(n, 2) + 1;

    for(let i = 2, currPos = [0, 0]; i < len;){
        if(i < len) i = topSide(i, currPos);
        if(i < len) i = rightSide(i, currPos);
        if(i < len) i = botSide(i, currPos);        
        if(i < len) i = leftSide(i, currPos);
    }

    function topSide(i, currPos){
        for(; currPos[0] === topLimit && currPos[1] < rightLimit - 1; i++){
            currPos[1]++;
            arr[currPos[0]][currPos[1]] = i; 
        }
        topLimit++;
        return i;
    }

    function rightSide(i, currPos){
        for(; currPos[1] === rightLimit - 1 && currPos[0] < botLimit - 1; i++){
            currPos[0]++;
            arr[currPos[0]][currPos[1]] = i; 
        }
        rightLimit--;
        return i;
    }

    function botSide(i, currPos){
        for(; currPos[0] === botLimit - 1 && currPos[1] > leftLimit; i++){
            currPos[1]--;
            arr[currPos[0]][currPos[1]] = i; 
        }
        botLimit--;
        return i;
    }

    function leftSide(i, currPos){
        for(; currPos[1] === leftLimit && currPos[0] > topLimit; i++){
            currPos[0]--;
            arr[currPos[0]][currPos[1]] = i; 
        }
        leftLimit++;
        return i;
    }

    return arr;
};

n = 3;
console.table(generateMatrix(n))


/*

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:

Input: n = 1
Output: [[1]]

Constraints:
1 <= n <= 20

*/