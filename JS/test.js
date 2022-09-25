const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let N = readline(), input = [];
    for(let j = 0; j < N; j++){
        input.push(readline().split(' '));
    }
    console.log(`Case #${i}: ${solve(input, N)}`);
}

function solve(input, N){
    if(N === 0) return 1;
    
    let out = 0;

    let colorSorted = [...input];
    colorSorted.sort(colorSort);

    let durabilitySorted = [...input];
    durabilitySorted.sort(durabilitySort);

    let uniqueSorted = [...input];
    uniqueSorted.sort(uniqueSort);

    console.Console(colorSort)

    for(let j = 0; j < N; j++){
        if(colorSorted[0][j] === durabilitySorted[0][j] || colorSorted[0][j] === uniqueSorted[0][j] || durabilitySorted[0][j] === uniqueSorted[0][j]) out++;
    }

    return out;
}

function colorSort(a, b){
    if (a[0].length === b[0].length) return 0;
    else return (a[0].length < b[0].length) ? -1 : 1;
}

function durabilitySort(a, b){
    if (a[1] === b[1]) return 0;
    else return (a[1] < b[1]) ? -1 : 1;
}

function uniqueSort(a, b){
    if (a[2] === b[2]) return 0;
    else return (a[2] < b[2]) ? -1 : 1;
}



/* [ 'blue 2 1', 'yellow 1 2' ]
[ 'blue 2 1', 'brown 2 2' ]
[ 'red 1 1' ]
 */
