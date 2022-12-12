/*

819. Most Common Word

https://leetcode.com/problems/most-common-word/

*/

var mostCommonWord = function (paragraph, banned) {
    let wordCount = {};
    let bannedSet = new Set(banned);
    paragraph = paragraph.toLowerCase();
    paragraph = paragraph.split(/\W+/);
    let anw = { count: 0, word: "" };

    console.log(paragraph)


    for (let i = 0; i < paragraph.length; i++) {
        if (!bannedSet.has(paragraph[i])) {
            if (!(paragraph[i] in wordCount)) {
                wordCount[paragraph[i]] = 0;
            }
            wordCount[paragraph[i]]++;

            if (wordCount[paragraph[i]] > anw.count) {
                anw.word = paragraph[i];
                anw.count = wordCount[paragraph[i]];
            }
        }
    }
    return anw.word;
};