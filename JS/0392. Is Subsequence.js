/*

392. Is Subsequence

https://leetcode.com/problems/is-subsequence/

*/

var isSubsequence = function (s, t) {
    for (let i = 0, j = 0; i < s.length; i++, j++) {
        let sameChar = false
        for (; j < t.length; j++) {
            if (s[i] === t[j]) {
                sameChar = true;
                break;
            }
        }
        if (!sameChar) return false;
    }
    return true;
};


/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/