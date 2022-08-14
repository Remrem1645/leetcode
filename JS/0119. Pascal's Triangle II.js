/*

119. Pascal's Triangle II

https://leetcode.com/problems/pascals-triangle-ii/

*/

var getRow = function(numRows) {
    numRows++;
    out = [[1]]; if(numRows == 1) return out[0];
    out.push([1,1]); if(numRows == 2) return out[1];

    for(i = 3; i <= numRows; i++){
        nextArray = []; x = 0;
        while(nextArray.length !== (i - 2)){                        
            nextArray.push(out[i - 2][x] + out[i - 2][x + 1]);      
            x++;
        }
        nextArray.push(1); nextArray.unshift(1)
        out.push(nextArray);
    }

    return nextArray;
};


console.log(getRow(4))



/*
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
*/