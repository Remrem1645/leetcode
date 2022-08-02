var generate = function(numRows) {

    out = [[1]]; if(numRows == 1) return out;
    out.push([1,1]); if(numRows == 2) return out;

    for(i = 3; i <= numRows; i++){
        nextArray = []; x = 0;
        while(nextArray.length !== (i - 2)){                        
            nextArray.push(out[i - 2][x] + out[i - 2][x + 1]);      
            x++;
        }
        nextArray.push(1); nextArray.unshift(1)
        out.push(nextArray);
    }

    return out;
};

console.log(generate(5))

/*

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]



Example 2:
Input: numRows = 1
Output: [[1]]

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


*/