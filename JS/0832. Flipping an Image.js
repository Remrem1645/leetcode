/*

832. Flipping an Image

https://leetcode.com/problems/flipping-an-image/

*/

var flipAndInvertImage = function (image) {
    let dict = { 1: 0, 0: 1 };

    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();

        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = dict[image[i][j]];
        }
    }
    return image;
};

/*

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

*/