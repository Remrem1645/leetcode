var minimumTotal = function(triangle) {
    let sum = triangle[0][0];

    for(i = 1, x = 0; i < triangle.length; i++){
        if(triangle[i][x] < 0 || triangle[i][x + 1] < 0){
            
        }
        next = Math.min(triangle[i][x] , triangle[i][x + 1])
        x = triangle[i].indexOf(next)
        sum += next;
    }

    return sum;
};

triangle =  [[-1],[2,3],[1,-1,-3]]


console.log(minimumTotal(triangle));

/*

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
 
*/