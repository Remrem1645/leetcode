/*

1002. Find Common Characters

https://leetcode.com/problems/find-common-characters/

*/

var commonChars = function (words) {
    let prevMap = new Map();
    let currMap = new Map();

    for (let i = 0; i < words[0].length; i++) {
        prevMap.set(words[0][i], (prevMap.get(words[0][i]) || 0) + 1);
    }

    for (let i = 1; i < words.length; i++) {
        let currMap = new Map();
        let currStr = words[i];

        for (let j = 0; j < currStr.length; j++) {
            if (prevMap.has(currStr[j])) {
                currMap.set(currStr[j], (currMap.get(currStr[j]) || 0) + 1);
                (prevMap.get(currStr[j]) > 1) ? prevMap.set(currStr[j], prevMap.get(currStr[j]) - 1) : prevMap.delete(currStr[j]);
            }
        }
        prevMap = currMap;
    }
    
    let output = [];

    prevMap.forEach((val, key) => {
        while (val > 0) {
            output.push(key);
            val--;
        }
    });
    return output;
};
