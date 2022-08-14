/*

168. Excel Sheet Column Title

https://leetcode.com/problems/excel-sheet-column-title/

*/



var convertToTitle = function(columnNumber) {
    let dict = {
        1 : 'A', 2 : 'B', 3 : 'C', 
        4 : 'D', 5 : 'E', 6 : 'F',
        7 : 'G', 8 : 'H', 9 : 'I',
        10 : 'J', 11 : 'K', 12 : 'L',
        13 : 'M', 14 : 'N', 15 : 'O',
        16 : 'P', 17 : 'Q', 18 : 'R', 
        19 : 'S', 20 : 'T', 21 : 'U',
        22 : 'V', 23 : 'W', 24 : 'X',
        25 : 'Y', 26 : 'Z',
    }

    let num = columnNumber
    let out = '';
    let power = (columnNumber + '').length - 1;
    while(power > 0){
        let x = Math.floor(num / 26);
        out += dict[x];
        num -= Math.pow(x, power);
        power--;
    }
    console.log(num)
    out += dict[Math.floor(num)];
    return out;
};

console.log(convertToTitle(565))







/*


A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"

*/
