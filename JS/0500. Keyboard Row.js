/*

500. Keyboard Row

https://leetcode.com/problems/keyboard-row/

*/

var findWords = function (words) {
    let firstRow = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0, 'T': 0, 'Y': 0, 'U': 0, 'I': 0, 'O': 0, 'P': 0 }
    let secondRow = { 'A': 0, 'S': 0, 'D': 0, 'F': 0, 'G': 0, 'H': 0, 'J': 0, 'K': 0, 'L': 0 }
    let thirdRow = { 'Z': 0, 'X': 0, 'C': 0, 'V': 0, 'B': 0, 'N': 0, 'M': 0 }

    let out = [];
    let copyArr = [...words];

    for (let i = 0; i < words.length; i++) {
        copyArr[i] = copyArr[i].toUpperCase();
        if (canBeTyped(copyArr[i])) out.push(words[i]);
    }

    function canBeTyped(words) {
        let first = true;
        let second = true;
        let third = true;

        for (let i = 0; i < words.length; i++) {
            first = (words[i] in firstRow && first) ? true : false;
            second = (words[i] in secondRow && second) ? true : false;
            third = (words[i] in thirdRow && third) ? true : false;
        }
        return first || second || third;
    }
    return out;
};