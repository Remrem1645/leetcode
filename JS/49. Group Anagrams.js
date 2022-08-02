/*

49. Group Anagrams

https://leetcode.com/problems/group-anagrams/submissions/

*/
var groupAnagrams = function(strs) {
    let map = new Map();
    for(i = 0; i < strs.length; i++){
        let x = strs[i].split('').sort().join();
        if(map.has(x)){
            y = map.get(x);
            y.push(i)
        }else{
            map.set(x, [i])
        }
    }

    let out = [];

    for(value of map.values()){
        let temp = [];
        for(let j = 0; j < value.length; j++){
            temp.push(strs[value[j]])
        }
        out.push(temp);
    }

    return out;
};




Input: strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));


/*




Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

*/