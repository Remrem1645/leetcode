/*


https://leetcode.com/problems/longest-common-prefix/

*/

var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs[0].length == 0) return '';
    prefixLength = 0;
    for(i = 0, j = 1; i < strs[0].length; i++, j = 1){      
        while(j < strs.length && strs[0][i] == strs[j][i]) j++;
        if(j != strs.length) break;
        prefixLength++;
    }
    return strs[0].slice(0, prefixLength)
};


Input: strs = ["flower","flower","flower","flower"]

console.log(longestCommonPrefix(strs))



/*

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/