/*

434. Number of Segments in a String

https://leetcode.com/problems/number-of-segments-in-a-string/

*/

var countSegments = function (s) {

    let trigger = false;
    let output = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            output = (!trigger) ? output + 1 : output;
            trigger = true;
        } else {
            trigger = false;
        }
    }
    return output;
};


/*

Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:

Input: s = "Hello"
Output: 1

*/