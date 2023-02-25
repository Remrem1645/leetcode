/*

169. Majority Element

https://leetcode.com/problems/majority-element/

*/


var majorityElement = function(nums) {
    nums = nums.sort((a, b) => a - b);

    let longest = 0, out;
    for(let i = 0, start = 0, end = 0, check = nums[0], leng = 0; i < nums.length; i++){
        if(check === nums[i]){
            end++;
        }else{
            start = i;
            end = i + 1;
            check = nums[i];
        }
        if((end - start) > longest){
            out = i;
            longest = (end - start);
        }
    }
    return nums[out];
}

Input: nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))

/*

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/