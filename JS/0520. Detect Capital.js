/*

520. Detect Capital

https://leetcode.com/problems/detect-capital/

*/

var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
}; 


/*

Example 1:

Input: word = "USA"
Output: true

Example 2:

Input: word = "FlaG"
Output: false

*/