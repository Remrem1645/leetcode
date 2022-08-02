var maxProfit = function(prices) {
    let leastnum = Number.MAX_SAFE_INTEGER;
    let maxnum = 0;

    for(i = 0; i < prices.length; i++){
        leastnum = Math.min(prices[i], leastnum);
        maxnum = Math.max((prices[i] - leastnum), maxnum);
    }
    return maxnum;

};

prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));