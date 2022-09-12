/*

283. Move Zeroes

https://leetcode.com/problems/move-zeroes/

*/

var moveZeroes = function(nums) {
    for(let i = 0, zeros = 0; i < nums.length; i++){
        if(nums.length - i - 1 === zeros) nums[i] = 0;
        if(nums[i] === 0){
            zeros++;
            j = lookForNextNum(nums, i);
            nums[i] = nums[j];
            i += i - j;
        }else{
            j = lookForNextNum(nums, i);
            nums[i] = nums[lookForNextNum(nums, i)];
            i += i - j;
        }
    }
    return nums;
};


function lookForNextNum(nums, i){
    j = i;
    while(nums[j] <= 0 && j < nums.length) j++;
    return j;

}

Input: nums = [0,1,0,3,12]
console.log(moveZeroes(nums))