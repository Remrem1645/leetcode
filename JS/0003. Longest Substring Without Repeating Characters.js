
var lengthOfLongestSubstring = function(s) {
    maxlength = 0;

    for(i = 0; i < s.length; i++){
        let j = 0;
        dict = {};
        while(s[i + j]){
            if(s[i + j] in dict) break; 
            dict[s[i + j]] = s[i + j];
            j++;
        }
        maxlength = (maxlength < j) ? j : maxlength;
    }
    return maxlength;
};

Input: s = "pwwkew"
console.log(lengthOfLongestSubstring(s));

/* 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/