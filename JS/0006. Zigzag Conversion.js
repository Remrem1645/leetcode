//6. Zigzag Conversion (Medium)

/* 
Version 1
var convert = function(s, numRows) {
    let array = new Array(numRows).fill("");        //creates an empty arr filled with ""
    count = 0; counting = 1;                        //using these to count
    if (numRows === 1) return s;                    //return right away if numsrow is 1

    for(i = 0; i < s.length; i++){                  //loop through every letter in s
        array[count] += s[i]                        //adding onto the 1d array
        count += counting;                          //change the count
        if (count == numRows - 1) counting = (-1);  //if count is the size of s.length - 1, go backwards
        if (count === 0) counting = (1);            //if count is the size of 0; fo forwards
    }
 
    return array.join('')                           //join arr at end
}; */


/* 
var convert = (s, numRows) => {
    if (numRows === 1) return s;
    
    let array = new Array(numRows).fill("");
    for(i = 0, c = 0, ctc = 1; i < s.length; i++, c += ctc){
        array[c] += s[i];
        ctc = (c == numRows - 1) ? (-1) : (c === 0) ? (1) : ctc;
    }

    return array.join('')
}; */


// slower 

var convert = (s, nr) => (nr === 1) ? s : calculate(s,nr);
    
var calculate = (s,nr) => {
    let arr = new Array(nr).fill("");
    for(i = 0, c = 0, ctc = 1; i < s.length; i++, c += ctc, ctc = (c == nr - 1) ? (-1) : (c === 0) ? (1) : ctc) arr[c] += s[i];
    return arr.join('')
}




s = "PAYPALISHIRING", numRows = 4

console.log(convert(s , numRows));





/*

Length = 16, numRows = 4

1     7       13
2   6 8    12 14
3 5   9  11   15
4     10      16

1           7             13
  2       6   8        12    14
    3   5       9   11          15
      4          10               16



= 1,7,13, 2,6,8,12,14, 3,5,9,11,15, 4,10,16

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

let s = "PAYPALISHIRING";
let numRows = 4;
console.log(convert(s , numRows));

/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows)


Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R


Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I


Example 3:
Input: s = "A", numRows = 1
Output: "A"


period = (numRows * 2) - 2

/////
Length = 5, numsRow = 1

1 2 3 4 5

= 1,2,3,4,5

/////
Length = 10, numRows = 2

1 3 5 7 9
2 4 6 8 10

= 1,3,5,7,9, 2,4,6,8,10

/////
Length = 11, numRows = 3

1   5    9
2 4 6 8 10
3   7   11

= 1,5,9, 2,4,6,8,10, 3,7,11

/////
Length = 16, numRows = 4

1     7       13
2   6 8    12 14
3 5   9  11   15
4     10      16

= 1,7,13, 2,6,8,12,14, 3,5,9,11,15, 4,10,16

/////
Length = 21, numRows = 5

1        9          17
2     8 10       16 18
3   7   11    15	19
4 6     12 14	    20
5       13	        21

=1,9,17, 2,8,10,16,18, 3,7,11,15,19, 4,6,12,14,20, 5,13,21

/////
Length = 26, numRows = 6

1           11             21
2        10 12          20 22
3      9    13       19    23
4    8      14    18       24
5  7        15 17          25
6           16             26

=1,11,21, 2,10,12,20,22, 3,9,13,19,23, 4,8,14,18,24, 5,7,15,17,25, 6,16,26

row1 = 
    5
   4 4
  3   3
 2     2
1       1
PINALSIGYAHRPI

row = +7?

*/

