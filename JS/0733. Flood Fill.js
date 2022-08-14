/*

733. Flood Fill

https://leetcode.com/problems/flood-fill/

*/

var floodFill = function (image, sr, sc, newColor, firstColor = image[sr][sc]){
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length|| image[sr][sc] !== firstColor || image[sr][sc] == newColor){
        return image
    }

    image[sr][sc] = newColor;

    floodFill(image, sr + 1, sc, newColor, firstColor)
    floodFill(image, sr - 1, sc, newColor, firstColor)
    floodFill(image, sr , sc + 1, newColor, firstColor)
    floodFill(image, sr , sc - 1, newColor, firstColor)

    return image
};

image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2

console.table(image)
console.log(floodFill(image,sr,sc,newColor));



/*

Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.


*/