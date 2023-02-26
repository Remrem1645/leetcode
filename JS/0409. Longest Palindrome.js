/*

409. Longest Palindrome

https://leetcode.com/problems/longest-palindrome/

*/


function longestPalindrome(s){
    let set = new Set();
    let total = 0;

    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            total += 2;
            set.delete(s[i]);
        }else{
            set.add(s[i]);
        }
    }
    return total = (set.size > 0) ? total + 1 : total;
}