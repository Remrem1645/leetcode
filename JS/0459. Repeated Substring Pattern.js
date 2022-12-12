/*

459. Repeated Substring Pattern

https://leetcode.com/problems/repeated-substring-pattern/

*/

var repeatedSubstringPattern = function(s) {
    let pattern = "";
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        pattern += s[i];
        if (pattern.repeat(s.length / pattern.length) === s) return true;
    }
    return false;
};

/*

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

*/