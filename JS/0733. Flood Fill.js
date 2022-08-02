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



var floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {

    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor ||image[sr][sc] === newColor) {
        return image; 
    }

    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
    return image;

};




*/