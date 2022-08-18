/*

22. Generate Parentheses

https://leetcode.com/problems/generate-parentheses/

*/

var generateParenthesis = function(n) {
    let out = [];

    function dfs(string, open, close){
        if(open < close) return;

        if(string.length / 2 === n){
            out.push(string);
            return;
        }
        if(open < n) dfs(string + '(', open + 1, close);
        if(close < n) dfs(string + ')', open, close + 1);
    }
    dfs('', 0 , 0);
    return out;
};

Input: n = 3

console.log(generateParenthesis(n))



/*

33, 21 -> 33, 22 -> 33, 11 -> 33, 11 -> 22 -> 33

Example 1:
Input: n = 3
Output: 
["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

n = 2
["()()","(())"]

n = 4

["(((())))", "((()()))", "(()()())", "()()()()", "()((()))", "((()))()", "(())(())",""]

1 <= n <= 8

*/