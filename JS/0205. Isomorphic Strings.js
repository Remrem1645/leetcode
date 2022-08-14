/*

205. Isomorphic Strings

https://leetcode.com/problems/isomorphic-strings/

*/
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let map1 = new Map(); let map2 = new Map();
    let check1 = ''; let check2 = '';

    for(i = 0; i < s.length ; i++){
        if(map1.has(s[i]) == false) map1.set(s[i], i + '');
        if(map2.has(t[i]) == false) map2.set(t[i], i + '');
        check1 += map1.get(s[i]) + " "; check2 += map2.get(t[i]) + " ";
    }
    
    return check1 == check2
};

Input: s = "abcdefghijklmnopqrstuvwxyzva", t = "abcdefghijklmnopqrstuvwxyzck"
console.log(isIsomorphic(s,t));
 

/*

"abcdefghijklmnopqrstuvwxyzva"
"abcdefghijklmnopqrstuvwxyzck"

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

*/