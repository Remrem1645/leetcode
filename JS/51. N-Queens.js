var solveNQueens = function(n) {
    if(n == 1){
        return [["Q"]];
    }
    if(n == 2 || n == 3){
        return [];
    }
    let out = []; let x1;
    x1 = calc1(n);
    x2 = flipArray(x1);
    out.push(x1,x2)
    return out;
};

function flipArray (arr){
    let out = [];
    for(i = arr.length - 1; i >= 0; i--){
        out.push(arr[i]);
    }
    return out;
}

function calc1(n){ 
    let out = [];
    let j = (n < 5) ? 1 : 0;

    for(i = 0; i < n; i++){
        for(j; j < n; j += 2){
            out.push(".".repeat(j) + "Q" + ".".repeat(n - j - 1));
            i++;
        }
        j = (n < 5) ? 0 : 1;
    }
    return out;
}



console.table(solveNQueens(1))


/*
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]



Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above






Example 2:

Input: n = 1
Output: [["Q"]]
*/