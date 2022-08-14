/*

11. Container With Most Water

https://leetcode.com/problems/container-with-most-water/

*/

/*  too slow

var maxArea = function(height) {
    out = 0;
    for(i = 0; i < height.length; i++){
        for(j = 0; j < height.length; j++){
            if (i !== j) {
                lowestnum = (height[i] < height[j]) ? height[i] : height[j];
                area = lowestnum * (j - i);    
                out = (area > out) ? area : out;
            }
        }
    }
    return Math.abs(out);
}; */



/* still too slow

maxArea = (height) => {
    out = 0;
    for(i = 0, j = 0; i < height.length; i++, j = i){
        while(j < height.length){
            lowestnum = (height[i] < height[j]) ? height[i] : height[j];
            area = lowestnum * (j - i);    
            out = (area > out) ? area : out;
            j++;
        }
    }
    return out;
} */


/* passed

maxArea = (height) => {
    out = 0; l = 0; r = height.length - 1;

    while(l < r){
        lowestnum = (height[l] < height[r]) ? height[l] : height[r];
        area = lowestnum * (r - l);    
        out = (area > out) ? area : out;

        if(height[l] < height[r]) l++;
        else r--;
    }
    return out;


} */

maxArea = (height) => {for(out = 0, l = 0, r = height.length - 1; l < r; (height[l] < height[r]) ? l++ : r--) out = Math.max(out, ((r - l) * (Math.min(height[l], height[r])))); return out}



Input: height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));

/*

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Example 2:
Input: height = [1,1]
Output: 1

*/

