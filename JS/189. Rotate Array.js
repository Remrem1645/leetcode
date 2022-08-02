/*

189. Rotate Array

https://leetcode.com/problems/rotate-array/

*/


var rotate = function(nums, k) {
    temp = [];
    for(i = 0; i < k; i++){
        temp.push(nums[i])
    }
    temp.push(...nums);

    for(j = k - 1; j >= 0; j--){
        temp[j] = temp.pop();
    }  

    for(k = 0; k < nums.length; k++){
        nums[k] = temp[k];
    }
    
    return nums;
};

Input: nums = [1,2,3,4,5,6,7], k = 3
console.log(rotate(nums, k));




/*

temp = 1,2,3,1,2,3,4,5,6,7

5,6,7,1,2,3,4


*/