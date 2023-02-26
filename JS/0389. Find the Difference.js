/*

389. Find the Difference

https://leetcode.com/problems/find-the-difference/

*/


var findTheDifference = function(s, t) {
    let hash = {};

    for(let i = 0; i < s.length; i++){
        if(s[i] in hash) hash[s[i]]++;
        else hash[s[i]] = 1;
    }

    let out = "";

    for(let i = 0; i < t.length; i++){
        if(hash[t[i]] < 1 || !(t[i] in hash)) out += t[i];
        else hash[t[i]]--;
    }

    return out;
};

