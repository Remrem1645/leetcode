
var longestStrChain = function(words) {

    if(words.length == 0) return 0;
    if(words.length == 1) return 1;

    sortedWords = words.sort(function(a, b){return a.length - b.length});

    checkForPredecessor = (w1 , w2) => {
        check1 = w2.slice(0, w2.length - 1);
        check2 = w2.slice(1, w2.length);
        for(u = 1; u < w2.length - 1; u++){check3 = w2.slice(0, u) + w2.slice(u + 1); if(check3 == w1) return true}
        if (check1 == w1 || check2 == w1) return true;
        return false;
    }

    let i = 0, maxcount = 0, k = 0;
    while(sortedWords[i].length == sortedWords[k].length){
        count = 1;
        for(j = 1, word1 = sortedWords[i]; j < sortedWords.length; j++){
            if(checkForPredecessor(word1, sortedWords[j])){
                word1 = sortedWords[j];
                count++
            }
        }
        maxcount = (maxcount < count) ? count : maxcount;
        i++;
        if (sortedWords[i].length !== sortedWords[k].length) k++;
    }

    return maxcount;
};



words = ["a","ab","ac","bd","abc","abd","abdd"]
console.log(longestStrChain(words)) 




/*

[ 'xb', 'xbc', 'cxbc', 'pcxbc', 'pcxbcf' ]



Example 1:

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
Example 2:

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
Example 3:

Input: words = ["abcd","dbqca"]
Output: 1
Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.
*/