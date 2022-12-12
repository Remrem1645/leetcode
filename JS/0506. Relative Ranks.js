/*

506. Relative Ranks

https://leetcode.com/problems/relative-ranks/

*/

var findRelativeRanks = function (score) {
    let copy = [...score];
    score.sort((a, b) => b - a);
    let hash = {};

    for (let i = 0; i < score.length; i++) {
        hash[score[i]] = i;
    }

    let output = [];
    for (let i = 0; i < copy.length; i++) {
        let curr = hash[copy[i]];
        if (curr === 0) output.push("Gold Medal");
        else if (curr === 1) output.push("Silver Medal");
        else if (curr === 2) output.push("Bronze Medal");
        else output.push(`${curr + 1}`);
    }
    return output;
};

/*

Example 1:

Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Example 2:

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

*/