/*

884. Uncommon Words from Two Sentences

https://leetcode.com/problems/uncommon-words-from-two-sentences/

*/

var uncommonFromSentences = function (s1, s2) {
    let hash = {};
    let total = s1.split(" ").concat(s2.split(" "));

    for (let item of total) {
        if (!(item in hash)) hash[item] = 0;
        hash[item]++;
    }

    let output = [];

    for (let item of total) {
        if (hash[item] === 1) output.push(item);
    }
    return output;
};

/*

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

*/