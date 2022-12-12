/*

844. Backspace String Compare

https://leetcode.com/problems/backspace-string-compare/

*/

var backspaceCompare = function (s, t) {
    let stackS = [];
    let stackT = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') stackS.pop();
        else {
            stackS.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') stackT.pop();
        else {
            stackT.push(t[i]);
        }
    }
    return stackS.join() == stackT.join();
};

/*

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

*/