/*

771. Jewels and Stones

https://leetcode.com/problems/jewels-and-stones/

*/

var numJewelsInStones = function (jewels, stones) {
    let hash = {};

    for (let jewel of jewels) {
        hash[jewel] = 0;
    }

    let output = 0;

    for (let stone of stones) {
        if (stone in hash) output++;
    }

    return output;
};

/*

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

*/