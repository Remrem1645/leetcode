/*

1332. Remove Palindromic Subsequences

https://leetcode.com/problems/remove-palindromic-subsequences/

*/

/* 
Version 1:
var removePalindromeSub = function(s) {
    if (s.length == 0) return 0;
    checkPalindrome = (s) =>{
        for(i = 0; i < s.length; i++){
            if(s[i] != [s[s.length - i - 1]]) return false
        }
        return true;
    }
    if (checkPalindrome(s) == true) return 1;
    return 2;
};

Version 2:
var removePalindromeSub = function(s) {
    if (s.length == 0) return 0;
    reverse = (s) => {
        return s.split("").reverse().join("");
    }
    if (s == reverse(s)) return 1;
    return 2;
};

Version 3:
var removePalindromeSub = function(s) {
    if (s.length == 0) return 0;
    if (s == [...s].reverse().join('')) return 1;
    return 2;
};
*/

var removePalindromeSub = (s) => (s.length == 0) ? 0 : (s == [...s].reverse().join('')) ? 1 : 2; 

s = "ababa"

console.log(removePalindromeSub(s))


/*
Example 1:
Input: s = "ababa"
Output: 1
Explanation: s is already a palindrome, so its entirety can be removed in a single step.


Example 2:
Input: s = "abb"
Output: 2
Explanation: "abb" -> "bb" -> "". 
Remove palindromic subsequence "a" then "bb".


Example 3:
Input: s = "baabb"
Output: 2
Explanation: "baabb" -> "b" -> "". 
Remove palindromic subsequence "baab" then "b".
*/