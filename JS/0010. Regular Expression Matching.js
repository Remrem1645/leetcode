/*

10. Regular Expression Matching


*/

let count = 0;

var isMatch = function(s, p) {
    let dict = {};
    for(i = 0; i < p.length; i++){
        if(p[i] === '.'){
            if(p[i + 1] === '*'){
                if (!checkUniqueChara(s)) return false;
                i++;
            }else{
                if (!checkForOneUniqueChara(s)) return false;
            }
        }else{
            if(p[i + 1] === '.'){
                if (!checkForOneCharaIsUnique(s, p[i])) return false;
                i++;
            }
            if(p[i + 1] === '*'){
                i++
            }else{
                if(p[i + 1] !== '.' && p[i + 1] !== '*'){
                    if(p[i] in dict){
                        dict[p[i]]++;
                    }else{
                        dict[p[i]] = 0;
                    }
                }
            }
        }
    }
    if (!checkUniqueString(s, dict)) return false;
    return true;
};

function checkUniqueChara(s){
    let dict = {};
    for(j = 0; j < s.length; j++){
        if(s[j] in dict) return false;
        else dict[s[j]] = s[j];    
    }
    return true;
}

function checkForOneUniqueChara(s){
    if(s.length === 0) return true;
    let dict = {};
    for(j = 0; j < s.length; j++){
        if(s[j] in dict) dict[s[j]]++ ;
        else dict[s[j]] = 0;
    }
    for(let letter in dict) {
        let value = dict[letter];
        if(value === 0) return true;
    }
    return false;
}

function checkForOneCharaIsUnique(s, l){
    if(s.length === 0) return true;
    let dict = {};
    for(j = 0; j < s.length; j++){
        if(s[j] in dict) dict[s[j]]++ ;
        else dict[s[j]] = 0;
    }
    let value = dict[l];
    return value === 0;
}

function checkUniqueString(s, m){
    let dict = {};
    for(j = 0; j < s.length; j++){
        if(s[j] in dict) dict[s[j]]++ ;
        else dict[s[j]] = 0;
    }
    for(let l in m) {
        let v1 = dict[l];
        let v2 = m[l]
        if(v1 !== v2) return false;
    }
    return true;
}






Input: s = "mississippi", p = "mis*is*ip*."
console.log(isMatch(s,p));






/*

aabbcc

"mississippi"
"mis*is*ip*."
Expected:
true


Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).


Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".












*/