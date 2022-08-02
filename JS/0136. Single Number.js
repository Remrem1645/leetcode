var singleNumber = function(nums) {
    output = 0;
    for(let x of nums){
        output ^= x;  //Bitwise XOR assignment (^=) Good for removing similar numbers;
    }
    return output;

};


nums = [4,1,2,1,2]

console.log(singleNumber(nums))
/*

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

xor = 0101 3
xor = 0011 5
^   = 0110
xor = 0011 5 
^   = 0101
xor = 0110 6
^   = 0011
xor = 0101 3
^   = 0110 




*/