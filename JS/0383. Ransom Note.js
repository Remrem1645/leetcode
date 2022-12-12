/*

383. Ransom Note

https://leetcode.com/problems/ransom-note/

*/

var canConstruct = function(ransomNote, magazine) {
    let hash = {};

    for(let i = 0; i < magazine.length; i++){
        if(magazine[i] in hash){
            hash[magazine[i]]++;
        }else{
            hash[magazine[i]] = 1;
        }
    }
    let correct = 0;
    for(let i = 0; i < ransomNote.length; i++){
        if(ransomNote[i] in hash){
            if(hash[ransomNote[i]] > 0){
                hash[ransomNote[i]]--;
                correct++;
            }else{
                return false;
            }
        }
    }
    return correct === ransomNote.length;
};


/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/