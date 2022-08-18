//7. Reverse Integer (Medium)


var reverse = function(x) {
    x = Math.fround(x) + ''; out = '';
    for(i = (x.length - 1); i >= 0; i--){
        if(x[i] == '-'){
            out = '-' + out;
        } 
        else{
            out += x[i];
        }
    }
    return Math.fround(out);
};

x = -2147483412

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