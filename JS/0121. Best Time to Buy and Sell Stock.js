/*

121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/
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

/*

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/