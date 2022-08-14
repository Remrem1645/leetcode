/*

58. Length of Last Word

https://leetcode.com/problems/length-of-last-word/

*/

var lengthOfLastWord = function(s) {
    s = s.trim(); s = s.replace(/  +/g, ' ');
    var sarray = s.split(' ');
    return sarray[(sarray.length - 1)].length;
};

/*

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/