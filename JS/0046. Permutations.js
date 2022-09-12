/*

46. Permutations

https://leetcode.com/problems/permutations/

*/

var permute = function(nums) {
    let out = [];
    
    if(nums.length > 2){
        for(let count = 0; count < nums.length; count++){
            out.push([...nums]);
            let numsCopy = [...nums];
            let map = {}, i = 1;
            while(!(numsCopy in map)){
                map[numsCopy] = [...numsCopy];
                if(i >= numsCopy.length - 1) i = 1;
                let temp = numsCopy[i];
                numsCopy[i] = numsCopy[i + 1];
                numsCopy[i + 1] = temp;
                out.push([...numsCopy]);
                i++;
            }
    
            out.pop();
            let temp = nums.shift();
            nums.push(temp);
        }
    } else{
        for(let count = 0; count < nums.length; count++){
            out.push([...nums]);
            let numsCopy = [...nums];
            let temp = nums.shift();
            nums.push(temp);
        }
    }
    return out;
};


Input: nums = [1]
console.log(permute(nums));

/*

Example 1:
Input: nums = [1,2,3]
Output: 
[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

[[5,4,6,2],[5,4,2,6],[5,6,4,2],[5,6,2,4],[5,2,4,6],[5,2,6,4],    [4,5,6,2],[4,5,2,6],[4,6,5,2],[4,6,2,5],[4,2,5,6],[4,2,6,5],[6,5,4,2],[6,5,2,4],[6,4,5,2],[6,4,2,5],[6,2,5,4],[6,2,4,5],[2,5,4,6],[2,5,6,4],[2,4,5,6],[2,4,6,5],[2,6,5,4],[2,6,4,5]]

[
  [ 5, 4, 6, 2 ], [ 5, 6, 4, 2 ],
  [ 5, 6, 2, 4 ], [ 5, 4, 2, 6 ], 
  [ 5, 2, 4, 6 ], [ 5, 2, 6, 4 ]
  
  [ 4, 6, 2, 5 ],
  [ 4, 2, 6, 5 ], [ 4, 2, 5, 6 ],

  [ 6, 2, 5, 4 ], [ 6, 5, 2, 4 ],
  [ 6, 5, 4, 2 ], [ 2, 5, 4, 6 ],
  [ 2, 4, 5, 6 ], [ 2, 4, 6, 5 ]
]


[[6,3,2,7,4,-1],[6,2,3,7,4,-1],[6,2,7,3,4,-1],[6,2,7,4,3,-1],[6,2,7,4,-1,3],[6,7,2,4,-1,3],[6,7,4,2,-1,3],[6,7,4,-1,2,3],[6,7,4,-1,3,2],[6,4,7,-1,3,2],[6,4,-1,7,3,2],[6,4,-1,3,7,2],[6,4,-1,3,2,7],[6,-1,4,3,2,7],[6,-1,3,4,2,7],[6,-1,3,2,4,7],[6,-1,3,2,7,4],[6,3,-1,2,7,4],[6,3,2,-1,7,4],[6,3,2,7,-1,4],[3,2,7,4,-1,6],[3,7,2,4,-1,6],[3,7,4,2,-1,6],[3,7,4,-1,2,6],[3,7,4,-1,6,2],[3,4,7,-1,6,2],[3,4,-1,7,6,2],[3,4,-1,6,7,2],[3,4,-1,6,2,7],[3,-1,4,6,2,7],[3,-1,6,4,2,7],[3,-1,6,2,4,7],[3,-1,6,2,7,4],[3,6,-1,2,7,4],[3,6,2,-1,7,4],[3,6,2,7,-1,4],[3,6,2,7,4,-1],[3,2,6,7,4,-1],[3,2,7,6,4,-1],[3,2,7,4,6,-1],[2,7,4,-1,6,3],[2,4,7,-1,6,3],[2,4,-1,7,6,3],[2,4,-1,6,7,3],[2,4,-1,6,3,7],[2,-1,4,6,3,7],[2,-1,6,4,3,7],[2,-1,6,3,4,7],[2,-1,6,3,7,4],[2,6,-1,3,7,4],[2,6,3,-1,7,4],[2,6,3,7,-1,4],[2,6,3,7,4,-1],[2,3,6,7,4,-1],[2,3,7,6,4,-1],[2,3,7,4,6,-1],[2,3,7,4,-1,6],[2,7,3,4,-1,6],[2,7,4,3,-1,6],[2,7,4,-1,3,6],[7,4,-1,6,3,2],[7,-1,4,6,3,2],[7,-1,6,4,3,2],[7,-1,6,3,4,2],[7,-1,6,3,2,4],[7,6,-1,3,2,4],[7,6,3,-1,2,4],[7,6,3,2,-1,4],[7,6,3,2,4,-1],[7,3,6,2,4,-1],[7,3,2,6,4,-1],[7,3,2,4,6,-1],[7,3,2,4,-1,6],[7,2,3,4,-1,6],[7,2,4,3,-1,6],[7,2,4,-1,3,6],[7,2,4,-1,6,3],[7,4,2,-1,6,3],[7,4,-1,2,6,3],[7,4,-1,6,2,3],[4,-1,6,3,2,7],[4,6,-1,3,2,7],[4,6,3,-1,2,7],[4,6,3,2,-1,7],[4,6,3,2,7,-1],[4,3,6,2,7,-1],[4,3,2,6,7,-1],[4,3,2,7,6,-1],[4,3,2,7,-1,6],[4,2,3,7,-1,6],[4,2,7,3,-1,6],[4,2,7,-1,3,6],[4,2,7,-1,6,3],[4,7,2,-1,6,3],[4,7,-1,2,6,3],[4,7,-1,6,2,3],[4,7,-1,6,3,2],[4,-1,7,6,3,2],[4,-1,6,7,3,2],[4,-1,6,3,7,2],[-1,6,3,2,7,4],[-1,3,6,2,7,4],[-1,3,2,6,7,4],[-1,3,2,7,6,4],[-1,3,2,7,4,6],[-1,2,3,7,4,6],[-1,2,7,3,4,6],[-1,2,7,4,3,6],[-1,2,7,4,6,3],[-1,7,2,4,6,3],[-1,7,4,2,6,3],[-1,7,4,6,2,3],[-1,7,4,6,3,2],[-1,4,7,6,3,2],[-1,4,6,7,3,2],[-1,4,6,3,7,2],[-1,4,6,3,2,7],[-1,6,4,3,2,7],[-1,6,3,4,2,7],[-1,6,3,2,4,7]]
[[6,3,2,7,4,-1],[6,3,2,7,-1,4],[6,3,2,4,7,-1],[6,3,2,4,-1,7],[6,3,2,-1,7,4],[6,3,2,-1,4,7],[6,3,7,2,4,-1],[6,3,7,2,-1,4],[6,3,7,4,2,-1],[6,3,7,4,-1,2],[6,3,7,-1,2,4],[6,3,7,-1,4,2],[6,3,4,2,7,-1],[6,3,4,2,-1,7],[6,3,4,7,2,-1],[6,3,4,7,-1,2],[6,3,4,-1,2,7],[6,3,4,-1,7,2],[6,3,-1,2,7,4],[6,3,-1,2,4,7],[6,3,-1,7,2,4],[6,3,-1,7,4,2],[6,3,-1,4,2,7],[6,3,-1,4,7,2],[6,2,3,7,4,-1],[6,2,3,7,-1,4],[6,2,3,4,7,-1],[6,2,3,4,-1,7],[6,2,3,-1,7,4],[6,2,3,-1,4,7],[6,2,7,3,4,-1],[6,2,7,3,-1,4],[6,2,7,4,3,-1],[6,2,7,4,-1,3],[6,2,7,-1,3,4],[6,2,7,-1,4,3],[6,2,4,3,7,-1],[6,2,4,3,-1,7],[6,2,4,7,3,-1],[6,2,4,7,-1,3],[6,2,4,-1,3,7],[6,2,4,-1,7,3],[6,2,-1,3,7,4],[6,2,-1,3,4,7],[6,2,-1,7,3,4],[6,2,-1,7,4,3],[6,2,-1,4,3,7],[6,2,-1,4,7,3],[6,7,3,2,4,-1],[6,7,3,2,-1,4],[6,7,3,4,2,-1],[6,7,3,4,-1,2],[6,7,3,-1,2,4],[6,7,3,-1,4,2],[6,7,2,3,4,-1],[6,7,2,3,-1,4],[6,7,2,4,3,-1],[6,7,2,4,-1,3],[6,7,2,-1,3,4],[6,7,2,-1,4,3],[6,7,4,3,2,-1],[6,7,4,3,-1,2],[6,7,4,2,3,-1],[6,7,4,2,-1,3],[6,7,4,-1,3,2],[6,7,4,-1,2,3],[6,7,-1,3,2,4],[6,7,-1,3,4,2],[6,7,-1,2,3,4],[6,7,-1,2,4,3],[6,7,-1,4,3,2],[6,7,-1,4,2,3],[6,4,3,2,7,-1],[6,4,3,2,-1,7],[6,4,3,7,2,-1],[6,4,3,7,-1,2],[6,4,3,-1,2,7],[6,4,3,-1,7,2],[6,4,2,3,7,-1],[6,4,2,3,-1,7],[6,4,2,7,3,-1],[6,4,2,7,-1,3],[6,4,2,-1,3,7],[6,4,2,-1,7,3],[6,4,7,3,2,-1],[6,4,7,3,-1,2],[6,4,7,2,3,-1],[6,4,7,2,-1,3],[6,4,7,-1,3,2],[6,4,7,-1,2,3],[6,4,-1,3,2,7],[6,4,-1,3,7,2],[6,4,-1,2,3,7],[6,4,-1,2,7,3],[6,4,-1,7,3,2],[6,4,-1,7,2,3],[6,-1,3,2,7,4],[6,-1,3,2,4,7],[6,-1,3,7,2,4],[6,-1,3,7,4,2],[6,-1,3,4,2,7],[6,-1,3,4,7,2],[6,-1,2,3,7,4],[6,-1,2,3,4,7],[6,-1,2,7,3,4],[6,-1,2,7,4,3],[6,-1,2,4,3,7],[6,-1,2,4,7,3],[6,-1,7,3,2,4],[6,-1,7,3,4,2],[6,-1,7,2,3,4],[6,-1,7,2,4,3],[6,-1,7,4,3,2],[6,-1,7,4,2,3],[6,-1,4,3,2,7],[6,-1,4,3,7,2],[6,-1,4,2,3,7],[6,-1,4,2,7,3],[6,-1,4,7,3,2],[6,-1,4,7,2,3],[3,6,2,7,4,-1],[3,6,2,7,-1,4],[3,6,2,4,7,-1],[3,6,2,4,-1,7],[3,6,2,-1,7,4],[3,6,2,-1,4,7],[3,6,7,2,4,-1],[3,6,7,2,-1,4],[3,6,7,4,2,-1],[3,6,7,4,-1,2],[3,6,7,-1,2,4],[3,6,7,-1,4,2],[3,6,4,2,7,-1],[3,6,4,2,-1,7],[3,6,4,7,2,-1],[3,6,4,7,-1,2],[3,6,4,-1,2,7],[3,6,4,-1,7,2],[3,6,-1,2,7,4],[3,6,-1,2,4,7],[3,6,-1,7,2,4],[3,6,-1,7,4,2],[3,6,-1,4,2,7],[3,6,-1,4,7,2],[3,2,6,7,4,-1],[3,2,6,7,-1,4],[3,2,6,4,7,-1],[3,2,6,4,-1,7],[3,2,6,-1,7,4],[3,2,6,-1,4,7],[3,2,7,6,4,-1],[3,2,7,6,-1,4],[3,2,7,4,6,-1],[3,2,7,4,-1,6],[3,2,7,-1,6,4],[3,2,7,-1,4,6],[3,2,4,6,7,-1],[3,2,4,6,-1,7],[3,2,4,7,6,-1],[3,2,4,7,-1,6],[3,2,4,-1,6,7],[3,2,4,-1,7,6],[3,2,-1,6,7,4],[3,2,-1,6,4,7],[3,2,-1,7,6,4],[3,2,-1,7,4,6],[3,2,-1,4,6,7],[3,2,-1,4,7,6],[3,7,6,2,4,-1],[3,7,6,2,-1,4],[3,7,6,4,2,-1],[3,7,6,4,-1,2],[3,7,6,-1,2,4],[3,7,6,-1,4,2],[3,7,2,6,4,-1],[3,7,2,6,-1,4],[3,7,2,4,6,-1],[3,7,2,4,-1,6],[3,7,2,-1,6,4],[3,7,2,-1,4,6],[3,7,4,6,2,-1],[3,7,4,6,-1,2],[3,7,4,2,6,-1],[3,7,4,2,-1,6],[3,7,4,-1,6,2],[3,7,4,-1,2,6],[3,7,-1,6,2,4],[3,7,-1,6,4,2],[3,7,-1,2,6,4],[3,7,-1,2,4,6],[3,7,-1,4,6,2],[3,7,-1,4,2,6],[3,4,6,2,7,-1],[3,4,6,2,-1,7],[3,4,6,7,2,-1],[3,4,6,7,-1,2],[3,4,6,-1,2,7],[3,4,6,-1,7,2],[3,4,2,6,7,-1],[3,4,2,6,-1,7],[3,4,2,7,6,-1],[3,4,2,7,-1,6],[3,4,2,-1,6,7],[3,4,2,-1,7,6],[3,4,7,6,2,-1],[3,4,7,6,-1,2],[3,4,7,2,6,-1],[3,4,7,2,-1,6],[3,4,7,-1,6,2],[3,4,7,-1,2,6],[3,4,-1,6,2,7],[3,4,-1,6,7,2],[3,4,-1,2,6,7],[3,4,-1,2,7,6],[3,4,-1,7,6,2],[3,4,-1,7,2,6],[3,-1,6,2,7,4],[3,-1,6,2,4,7],[3,-1,6,7,2,4],[3,-1,6,7,4,2],[3,-1,6,4,2,7],[3,-1,6,4,7,2],[3,-1,2,6,7,4],[3,-1,2,6,4,7],[3,-1,2,7,6,4],[3,-1,2,7,4,6],[3,-1,2,4,6,7],[3,-1,2,4,7,6],[3,-1,7,6,2,4],[3,-1,7,6,4,2],[3,-1,7,2,6,4],[3,-1,7,2,4,6],[3,-1,7,4,6,2],[3,-1,7,4,2,6],[3,-1,4,6,2,7],[3,-1,4,6,7,2],[3,-1,4,2,6,7],[3,-1,4,2,7,6],[3,-1,4,7,6,2],[3,-1,4,7,2,6],[2,6,3,7,4,-1],[2,6,3,7,-1,4],[2,6,3,4,7,-1],[2,6,3,4,-1,7],[2,6,3,-1,7,4],[2,6,3,-1,4,7],[2,6,7,3,4,-1],[2,6,7,3,-1,4],[2,6,7,4,3,-1],[2,6,7,4,-1,3],[2,6,7,-1,3,4],[2,6,7,-1,4,3],[2,6,4,3,7,-1],[2,6,4,3,-1,7],[2,6,4,7,3,-1],[2,6,4,7,-1,3],[2,6,4,-1,3,7],[2,6,4,-1,7,3],[2,6,-1,3,7,4],[2,6,-1,3,4,7],[2,6,-1,7,3,4],[2,6,-1,7,4,3],[2,6,-1,4,3,7],[2,6,-1,4,7,3],[2,3,6,7,4,-1],[2,3,6,7,-1,4],[2,3,6,4,7,-1],[2,3,6,4,-1,7],[2,3,6,-1,7,4],[2,3,6,-1,4,7],[2,3,7,6,4,-1],[2,3,7,6,-1,4],[2,3,7,4,6,-1],[2,3,7,4,-1,6],[2,3,7,-1,6,4],[2,3,7,-1,4,6],[2,3,4,6,7,-1],[2,3,4,6,-1,7],[2,3,4,7,6,-1],[2,3,4,7,-1,6],[2,3,4,-1,6,7],[2,3,4,-1,7,6],[2,3,-1,6,7,4],[2,3,-1,6,4,7],[2,3,-1,7,6,4],[2,3,-1,7,4,6],[2,3,-1,4,6,7],[2,3,-1,4,7,6],[2,7,6,3,4,-1],[2,7,6,3,-1,4],[2,7,6,4,3,-1],[2,7,6,4,-1,3],[2,7,6,-1,3,4],[2,7,6,-1,4,3],[2,7,3,6,4,-1],[2,7,3,6,-1,4],[2,7,3,4,6,-1],[2,7,3,4,-1,6],[2,7,3,-1,6,4],[2,7,3,-1,4,6],[2,7,4,6,3,-1],[2,7,4,6,-1,3],[2,7,4,3,6,-1],[2,7,4,3,-1,6],[2,7,4,-1,6,3],[2,7,4,-1,3,6],[2,7,-1,6,3,4],[2,7,-1,6,4,3],[2,7,-1,3,6,4],[2,7,-1,3,4,6],[2,7,-1,4,6,3],[2,7,-1,4,3,6],[2,4,6,3,7,-1],[2,4,6,3,-1,7],[2,4,6,7,3,-1],[2,4,6,7,-1,3],[2,4,6,-1,3,7],[2,4,6,-1,7,3],[2,4,3,6,7,-1],[2,4,3,6,-1,7],[2,4,3,7,6,-1],[2,4,3,7,-1,6],[2,4,3,-1,6,7],[2,4,3,-1,7,6],[2,4,7,6,3,-1],[2,4,7,6,-1,3],[2,4,7,3,6,-1],[2,4,7,3,-1,6],[2,4,7,-1,6,3],[2,4,7,-1,3,6],[2,4,-1,6,3,7],[2,4,-1,6,7,3],[2,4,-1,3,6,7],[2,4,-1,3,7,6],[2,4,-1,7,6,3],[2,4,-1,7,3,6],[2,-1,6,3,7,4],[2,-1,6,3,4,7],[2,-1,6,7,3,4],[2,-1,6,7,4,3],[2,-1,6,4,3,7],[2,-1,6,4,7,3],[2,-1,3,6,7,4],[2,-1,3,6,4,7],[2,-1,3,7,6,4],[2,-1,3,7,4,6],[2,-1,3,4,6,7],[2,-1,3,4,7,6],[2,-1,7,6,3,4],[2,-1,7,6,4,3],[2,-1,7,3,6,4],[2,-1,7,3,4,6],[2,-1,7,4,6,3],[2,-1,7,4,3,6],[2,-1,4,6,3,7],[2,-1,4,6,7,3],[2,-1,4,3,6,7],[2,-1,4,3,7,6],[2,-1,4,7,6,3],[2,-1,4,7,3,6],[7,6,3,2,4,-1],[7,6,3,2,-1,4],[7,6,3,4,2,-1],[7,6,3,4,-1,2],[7,6,3,-1,2,4],[7,6,3,-1,4,2],[7,6,2,3,4,-1],[7,6,2,3,-1,4],[7,6,2,4,3,-1],[7,6,2,4,-1,3],[7,6,2,-1,3,4],[7,6,2,-1,4,3],[7,6,4,3,2,-1],[7,6,4,3,-1,2],[7,6,4,2,3,-1],[7,6,4,2,-1,3],[7,6,4,-1,3,2],[7,6,4,-1,2,3],[7,6,-1,3,2,4],[7,6,-1,3,4,2],[7,6,-1,2,3,4],[7,6,-1,2,4,3],[7,6,-1,4,3,2],[7,6,-1,4,2,3],[7,3,6,2,4,-1],[7,3,6,2,-1,4],[7,3,6,4,2,-1],[7,3,6,4,-1,2],[7,3,6,-1,2,4],[7,3,6,-1,4,2],[7,3,2,6,4,-1],[7,3,2,6,-1,4],[7,3,2,4,6,-1],[7,3,2,4,-1,6],[7,3,2,-1,6,4],[7,3,2,-1,4,6],[7,3,4,6,2,-1],[7,3,4,6,-1,2],[7,3,4,2,6,-1],[7,3,4,2,-1,6],[7,3,4,-1,6,2],[7,3,4,-1,2,6],[7,3,-1,6,2,4],[7,3,-1,6,4,2],[7,3,-1,2,6,4],[7,3,-1,2,4,6],[7,3,-1,4,6,2],[7,3,-1,4,2,6],[7,2,6,3,4,-1],[7,2,6,3,-1,4],[7,2,6,4,3,-1],[7,2,6,4,-1,3],[7,2,6,-1,3,4],[7,2,6,-1,4,3],[7,2,3,6,4,-1],[7,2,3,6,-1,4],[7,2,3,4,6,-1],[7,2,3,4,-1,6],[7,2,3,-1,6,4],[7,2,3,-1,4,6],[7,2,4,6,3,-1],[7,2,4,6,-1,3],[7,2,4,3,6,-1],[7,2,4,3,-1,6],[7,2,4,-1,6,3],[7,2,4,-1,3,6],[7,2,-1,6,3,4],[7,2,-1,6,4,3],[7,2,-1,3,6,4],[7,2,-1,3,4,6],[7,2,-1,4,6,3],[7,2,-1,4,3,6],[7,4,6,3,2,-1],[7,4,6,3,-1,2],[7,4,6,2,3,-1],[7,4,6,2,-1,3],[7,4,6,-1,3,2],[7,4,6,-1,2,3],[7,4,3,6,2,-1],[7,4,3,6,-1,2],[7,4,3,2,6,-1],[7,4,3,2,-1,6],[7,4,3,-1,6,2],[7,4,3,-1,2,6],[7,4,2,6,3,-1],[7,4,2,6,-1,3],[7,4,2,3,6,-1],[7,4,2,3,-1,6],[7,4,2,-1,6,3],[7,4,2,-1,3,6],[7,4,-1,6,3,2],[7,4,-1,6,2,3],[7,4,-1,3,6,2],[7,4,-1,3,2,6],[7,4,-1,2,6,3],[7,4,-1,2,3,6],[7,-1,6,3,2,4],[7,-1,6,3,4,2],[7,-1,6,2,3,4],[7,-1,6,2,4,3],[7,-1,6,4,3,2],[7,-1,6,4,2,3],[7,-1,3,6,2,4],[7,-1,3,6,4,2],[7,-1,3,2,6,4],[7,-1,3,2,4,6],[7,-1,3,4,6,2],[7,-1,3,4,2,6],[7,-1,2,6,3,4],[7,-1,2,6,4,3],[7,-1,2,3,6,4],[7,-1,2,3,4,6],[7,-1,2,4,6,3],[7,-1,2,4,3,6],[7,-1,4,6,3,2],[7,-1,4,6,2,3],[7,-1,4,3,6,2],[7,-1,4,3,2,6],[7,-1,4,2,6,3],[7,-1,4,2,3,6],[4,6,3,2,7,-1],[4,6,3,2,-1,7],[4,6,3,7,2,-1],[4,6,3,7,-1,2],[4,6,3,-1,2,7],[4,6,3,-1,7,2],[4,6,2,3,7,-1],[4,6,2,3,-1,7],[4,6,2,7,3,-1],[4,6,2,7,-1,3],[4,6,2,-1,3,7],[4,6,2,-1,7,3],[4,6,7,3,2,-1],[4,6,7,3,-1,2],[4,6,7,2,3,-1],[4,6,7,2,-1,3],[4,6,7,-1,3,2],[4,6,7,-1,2,3],[4,6,-1,3,2,7],[4,6,-1,3,7,2],[4,6,-1,2,3,7],[4,6,-1,2,7,3],[4,6,-1,7,3,2],[4,6,-1,7,2,3],[4,3,6,2,7,-1],[4,3,6,2,-1,7],[4,3,6,7,2,-1],[4,3,6,7,-1,2],[4,3,6,-1,2,7],[4,3,6,-1,7,2],[4,3,2,6,7,-1],[4,3,2,6,-1,7],[4,3,2,7,6,-1],[4,3,2,7,-1,6],[4,3,2,-1,6,7],[4,3,2,-1,7,6],[4,3,7,6,2,-1],[4,3,7,6,-1,2],[4,3,7,2,6,-1],[4,3,7,2,-1,6],[4,3,7,-1,6,2],[4,3,7,-1,2,6],[4,3,-1,6,2,7],[4,3,-1,6,7,2],[4,3,-1,2,6,7],[4,3,-1,2,7,6],[4,3,-1,7,6,2],[4,3,-1,7,2,6],[4,2,6,3,7,-1],[4,2,6,3,-1,7],[4,2,6,7,3,-1],[4,2,6,7,-1,3],[4,2,6,-1,3,7],[4,2,6,-1,7,3],[4,2,3,6,7,-1],[4,2,3,6,-1,7],[4,2,3,7,6,-1],[4,2,3,7,-1,6],[4,2,3,-1,6,7],[4,2,3,-1,7,6],[4,2,7,6,3,-1],[4,2,7,6,-1,3],[4,2,7,3,6,-1],[4,2,7,3,-1,6],[4,2,7,-1,6,3],[4,2,7,-1,3,6],[4,2,-1,6,3,7],[4,2,-1,6,7,3],[4,2,-1,3,6,7],[4,2,-1,3,7,6],[4,2,-1,7,6,3],[4,2,-1,7,3,6],[4,7,6,3,2,-1],[4,7,6,3,-1,2],[4,7,6,2,3,-1],[4,7,6,2,-1,3],[4,7,6,-1,3,2],[4,7,6,-1,2,3],[4,7,3,6,2,-1],[4,7,3,6,-1,2],[4,7,3,2,6,-1],[4,7,3,2,-1,6],[4,7,3,-1,6,2],[4,7,3,-1,2,6],[4,7,2,6,3,-1],[4,7,2,6,-1,3],[4,7,2,3,6,-1],[4,7,2,3,-1,6],[4,7,2,-1,6,3],[4,7,2,-1,3,6],[4,7,-1,6,3,2],[4,7,-1,6,2,3],[4,7,-1,3,6,2],[4,7,-1,3,2,6],[4,7,-1,2,6,3],[4,7,-1,2,3,6],[4,-1,6,3,2,7],[4,-1,6,3,7,2],[4,-1,6,2,3,7],[4,-1,6,2,7,3],[4,-1,6,7,3,2],[4,-1,6,7,2,3],[4,-1,3,6,2,7],[4,-1,3,6,7,2],[4,-1,3,2,6,7],[4,-1,3,2,7,6],[4,-1,3,7,6,2],[4,-1,3,7,2,6],[4,-1,2,6,3,7],[4,-1,2,6,7,3],[4,-1,2,3,6,7],[4,-1,2,3,7,6],[4,-1,2,7,6,3],[4,-1,2,7,3,6],[4,-1,7,6,3,2],[4,-1,7,6,2,3],[4,-1,7,3,6,2],[4,-1,7,3,2,6],[4,-1,7,2,6,3],[4,-1,7,2,3,6],[-1,6,3,2,7,4],[-1,6,3,2,4,7],[-1,6,3,7,2,4],[-1,6,3,7,4,2],[-1,6,3,4,2,7],[-1,6,3,4,7,2],[-1,6,2,3,7,4],[-1,6,2,3,4,7],[-1,6,2,7,3,4],[-1,6,2,7,4,3],[-1,6,2,4,3,7],[-1,6,2,4,7,3],[-1,6,7,3,2,4],[-1,6,7,3,4,2],[-1,6,7,2,3,4],[-1,6,7,2,4,3],[-1,6,7,4,3,2],[-1,6,7,4,2,3],[-1,6,4,3,2,7],[-1,6,4,3,7,2],[-1,6,4,2,3,7],[-1,6,4,2,7,3],[-1,6,4,7,3,2],[-1,6,4,7,2,3],[-1,3,6,2,7,4],[-1,3,6,2,4,7],[-1,3,6,7,2,4],[-1,3,6,7,4,2],[-1,3,6,4,2,7],[-1,3,6,4,7,2],[-1,3,2,6,7,4],[-1,3,2,6,4,7],[-1,3,2,7,6,4],[-1,3,2,7,4,6],[-1,3,2,4,6,7],[-1,3,2,4,7,6],[-1,3,7,6,2,4],[-1,3,7,6,4,2],[-1,3,7,2,6,4],[-1,3,7,2,4,6],[-1,3,7,4,6,2],[-1,3,7,4,2,6],[-1,3,4,6,2,7],[-1,3,4,6,7,2],[-1,3,4,2,6,7],[-1,3,4,2,7,6],[-1,3,4,7,6,2],[-1,3,4,7,2,6],[-1,2,6,3,7,4],[-1,2,6,3,4,7],[-1,2,6,7,3,4],[-1,2,6,7,4,3],[-1,2,6,4,3,7],[-1,2,6,4,7,3],[-1,2,3,6,7,4],[-1,2,3,6,4,7],[-1,2,3,7,6,4],[-1,2,3,7,4,6],[-1,2,3,4,6,7],[-1,2,3,4,7,6],[-1,2,7,6,3,4],[-1,2,7,6,4,3],[-1,2,7,3,6,4],[-1,2,7,3,4,6],[-1,2,7,4,6,3],[-1,2,7,4,3,6],[-1,2,4,6,3,7],[-1,2,4,6,7,3],[-1,2,4,3,6,7],[-1,2,4,3,7,6],[-1,2,4,7,6,3],[-1,2,4,7,3,6],[-1,7,6,3,2,4],[-1,7,6,3,4,2],[-1,7,6,2,3,4],[-1,7,6,2,4,3],[-1,7,6,4,3,2],[-1,7,6,4,2,3],[-1,7,3,6,2,4],[-1,7,3,6,4,2],[-1,7,3,2,6,4],[-1,7,3,2,4,6],[-1,7,3,4,6,2],[-1,7,3,4,2,6],[-1,7,2,6,3,4],[-1,7,2,6,4,3],[-1,7,2,3,6,4],[-1,7,2,3,4,6],[-1,7,2,4,6,3],[-1,7,2,4,3,6],[-1,7,4,6,3,2],[-1,7,4,6,2,3],[-1,7,4,3,6,2],[-1,7,4,3,2,6],[-1,7,4,2,6,3],[-1,7,4,2,3,6],[-1,4,6,3,2,7],[-1,4,6,3,7,2],[-1,4,6,2,3,7],[-1,4,6,2,7,3],[-1,4,6,7,3,2],[-1,4,6,7,2,3],[-1,4,3,6,2,7],[-1,4,3,6,7,2],[-1,4,3,2,6,7],[-1,4,3,2,7,6],[-1,4,3,7,6,2],[-1,4,3,7,2,6],[-1,4,2,6,3,7],[-1,4,2,6,7,3],[-1,4,2,3,6,7],[-1,4,2,3,7,6],[-1,4,2,7,6,3],[-1,4,2,7,3,6],[-1,4,7,6,3,2],[-1,4,7,6,2,3],[-1,4,7,3,6,2],[-1,4,7,3,2,6],[-1,4,7,2,6,3],[-1,4,7,2,3,6]]

*/