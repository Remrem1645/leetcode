/*

1046. Last Stone Weight

https://leetcode.com/problems/last-stone-weight/

*/

var lastStoneWeight = function(stones) {

    while(stones.length > 1){
        stones = stones.sort((a, b) => b - a);
        stones[1] = stones[0] - stones[1];
        stones.shift();
    }

    return stones[0];

};

/*

Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:

Input: stones = [1]
Output: 1


*/