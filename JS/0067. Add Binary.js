/*

67. Add Binary

https://leetcode.com/problems/add-binary/

*/

var addBinary = function(a, b) {
    let lenA = a.length - 1;
    let lenB = b.length - 1;
    let carry = 0;
    let output = '';

    while(lenA >= 0 || lenB >= 0){

        let sum = carry;
        if(lenA >= 0) sum += parseInt(a[lenA]);
        if(lenB >= 0) sum += parseInt(b[lenB]);
        carry = (sum > 1) ? 1 : 0;
        output = (sum % 2) + output;

        lenA--;
        lenB--;
    }

    if(carry != 0) output = carry + output;
    return output;
};

/*

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/