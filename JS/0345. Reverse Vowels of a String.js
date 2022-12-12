/*

345. Reverse Vowels of a String

https://leetcode.com/problems/reverse-vowels-of-a-string/

*/

var reverseVowels = function (s) {
    let pointerA = 0;
    let pointerB = s.length - 1;
    let hash = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }

    s = s.split('');

    while (pointerA < pointerB) {
        while (!(s[pointerA].toLowerCase() in hash) && pointerA < pointerB) {
            pointerA++;
        }
        while (!(s[pointerB].toLowerCase() in hash) && pointerA < pointerB) {
            pointerB--;
        }
        if (pointerA >= pointerB) break;

        let temp = s[pointerA];
        s[pointerA] = s[pointerB];
        s[pointerB] = temp;

        pointerA++;
        pointerB--;
    }
    return s.join('');
};

/*

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"

*/