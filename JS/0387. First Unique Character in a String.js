/*

387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string/

*/

var firstUniqChar = function (s) {
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }


    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1

*/