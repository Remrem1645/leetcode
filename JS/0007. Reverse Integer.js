/*

7. Reverse Integer 

https://leetcode.com/problems/reverse-integer/

*/

var reverse = function(x) {
    let stack = [], out = '', neg = false;

    x = `${x}`

    for(let i = 0; i < x.length; i++){
        stack.push(x[i]);
    }
    while(stack.length !== 0){
        let temp = stack.pop();
        if(temp === '0' && out.length === 0) continue;
        if(temp !== '-') out += temp;
        if(temp === '-') neg = true;
    }
    return (out > 0x7FFFFFFF) ? 0 : neg ? -out : out;
};

x = -2147483648

console.log(reverse(x))

/*

min num = -2,147,483,648
max num = 2,147,483,647


Example 1:
Input: x = 123
Output: 321


Example 2:
Input: x = -123
Output: -321


Example 3:
Input: x = 120
Output: 21
*/