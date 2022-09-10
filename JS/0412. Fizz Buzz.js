/*

412. Fizz Buzz

https://leetcode.com/problems/fizz-buzz/

*/

var fizzBuzz = function(n) {
    out = [];
    for(let i = 1, temp = ''; i <= n; i++, temp = ''){
        if(i % 3 === 0) temp += 'Fizz';
        if(i % 5 === 0) temp += 'Buzz';
        if(temp.length === 0) temp = `${i}`;
        out.push(temp);
    }
    return out;
};

console.log(fizzBuzz(5))