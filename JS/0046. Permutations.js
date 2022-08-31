/*

46. Permutations

https://leetcode.com/problems/permutations/

*/

var permute = function(nums) {
    out = [];

    function calculate(nums, out, a, b){
        map = {}, temp = [nums[a]], map[a] = a, B = b;
        if(a === b) B++;
        while(!(B in map)){
            if(B === nums.length){ B = 0; continue; } 
            map[B] = B;
            temp.push(nums[B]);
            B++;
        }
        out.push(temp);
        if(b < nums.length) out = calculate(nums, out, a, b + 1);
        if(a < nums.length) out = calculate(nums, out, a + 1, b);
        return out;
        
    }

    return calculate(nums, out, 0, 1)
    
};


Input: nums = [1,2,3]
console.log(permute(nums));

/*

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

*/