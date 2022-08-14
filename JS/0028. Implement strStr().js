/*

28. Implement strStr()

https://leetcode.com/problems/implement-strstr/

*/

var strStr = function (haystack, needle) {
    haystack = haystack + "12345";
    output = 0; toggle = Boolean(false);
    for (i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            toggle = Boolean(true);
            for (x = 0; x < needle.length; x++) {
                if (haystack.charAt(i + x) !== needle.charAt(x)) {
                    toggle = Boolean(false);
                }
            }
            if (toggle == Boolean(true)) {
                return i;
            }
        }
    }
    return -1;
};

/*

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/