/*

290. Word Pattern

https://leetcode.com/problems/word-pattern/

*/

var wordPattern = function(pattern, s) {
    let dict = {}, dict2 = {}, arr = s.split(" ");
    if(arr.length !== pattern.length) return false;
    for(let i = 0; i < arr.length; i++){
        if( !(pattern[i] in dict) && !(arr[i] in dict2)) dict[pattern[i]] = arr[i], dict2[arr[i]] = pattern[i];
        else{ if(dict[pattern[i]] !== arr[i] && dict2[arr[i]] !== pattern[i]) return false; }
    }
    return true;
};

/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/