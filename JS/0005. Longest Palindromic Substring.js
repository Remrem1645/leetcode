//5. Longest Palindromic Substring (Medium)

var longestPalindrome = function(s) {
    finalStartPos = 0; finalEndPos = 0;
    if(s.length < 2) return s;

    function spreadcheck(string, start, end){
        while(start >= 0 && end <= s.length && string[start] == string[end]){
            start--;
            end++;
        }

        if(finalEndPos < end - start - 1){
            finalStartPos = start + 1;
            finalEndPos = end - start - 1;
        }
    }
    
    for(startPos = 0; startPos < s.length - 1; startPos++){
        spreadcheck(s, startPos, startPos);
        spreadcheck(s, startPos, startPos + 1);
    }

    return s.slice(finalStartPos, finalStartPos + finalEndPos);;
};

s = "a"

console.log(longestPalindrome(s))


/*

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


Example 2:

" abba"
Input: s = "cbbd"
Output: "bb"

*/