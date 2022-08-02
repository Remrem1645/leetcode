
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    for(i = 0; i < s.length; i++){
        if(s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
};

s = "0P";
console.log(isPalindrome(s));

/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/