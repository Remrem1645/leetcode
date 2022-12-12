/*

557. Reverse Words in a String III

https://leetcode.com/problems/reverse-words-in-a-string-iii/

*/

var reverseWords = function (s) {
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join("");
    }
    return s.join(" ");
};

/*

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "God Ding"
Output: "doG gniD"

*/