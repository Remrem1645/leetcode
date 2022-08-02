/*

17. Letter Combinations of a Phone Number

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

*/


var letterCombinations = function(digits) {
    if (digits === '') return []
    let map = {
        1 : '',
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz',
    }
    
    out = [];
    let arr = new Array(digits.length).fill(0)

    while(arr[0] < map[parseInt(digits[0])].length){
        s = ''

        for(i = 0; i < digits.length; i++){
            s += map[parseInt(digits[i])][arr[i]]
        }

        out.push(s); arr[digits.length - 1]++;

        if(digits.length >= 4 && arr[3] == map[parseInt(digits[3])].length) {
            arr[2]++;
            arr[3] = 0;
            
        }
        if(digits.length >= 3 && arr[2] == map[parseInt(digits[2])].length) {
            arr[1]++;
            arr[2] = 0;

        }
        if(digits.length >= 2 && arr[1] == map[parseInt(digits[1])].length ) {
            arr[0]++;
            arr[1] = 0;
        }

    }
    return out;
};


Input: digits = "2456"

console.log(letterCombinations(digits))


/*

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/