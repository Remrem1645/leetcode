/*

20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

*/

var isValid = function(s) {
    if(s.length % 2) return false;

    let stack = []; count = 0;
    for(i = 0; i < s.length; i++){
        let c = s[i];
        if (c === "(") stack.push(")");
        if (c === "{") stack.push("}");
        if (c === "[") stack.push("]");
        else if( c === stack[stack.length - 1]){
            stack.pop();
            count++;
        }
    };

    return stack.length === 0 && count === s.length / 2;
};



s =  "(([]){})"
console.log(isValid(s));

/*


true

""

stack = 



















*/