/*

242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

*/

/*
ver 1:
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let arr1 = []; let arr2 = [];
    for(i = 0; i < s.length; i++){
        arr1.push(s[i]);
        arr2.push(t[i])
    }
    arr1 = arr1.sort(); arr2 = arr2.sort();
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) return true;
    return false;
};is it that

*/


var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('');
};

s = "anagram", t = "nagaram"
console.log(isAnagram(s,t));


/*

function reverse(s){
    return s.split("").reverse().join("");
}


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true


Example 2:
Input: s = "rat", t = "car"
Output: false
 */