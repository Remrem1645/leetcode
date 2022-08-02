

var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};

x = 101
console.log(isPalindrome(x))