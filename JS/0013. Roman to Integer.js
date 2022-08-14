/*

13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/

*/

var romanToInt = (s) => {
    let dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let out = 0

    for(i = 0; i < s.length; i++){
        let a = dict[s[i]]; 
        let b = dict[s[i + 1]];
        (a < b) ? out -= a : out += a;
    }
    
    return out
}


s = "LVIII"
console.log(romanToInt(s));

/*
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/