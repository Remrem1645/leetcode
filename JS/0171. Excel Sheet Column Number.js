/*

171. Excel Sheet Column Number

https://leetcode.com/problems/excel-sheet-column-number/

*/

var titleToNumber = function(columnTitle) {
    let dict = {
        'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5, 'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10, 'K' : 11, 'L' : 12, 
        'M' : 13, 'N' : 14, 'O' : 15, 'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20, 'U' : 21,
        'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26,
    }

    let sum = 0;

    for(let i = columnTitle.length - 1, power = 1; i >= 0; i--, power *= 26 ){
        sum += power * dict[columnTitle[i]];
    }

    return sum;
};

/*

Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701

*/