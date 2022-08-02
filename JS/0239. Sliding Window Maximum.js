/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var maxSlidingWindow = function(nums, k) {
    var cycle = (nums.length - k) + 1; 
    var count = 0;
    var output = [];

    while(count < cycle){
        var out = nums[0]
        for(i = 0; i < k; i++){
            var comparer = nums[i];
            out = (comparer > out) ? comparer : out;
        }
        nums.shift();
        output.push(out);
        out = nums[0]
        count++;
    }

    return output;
};



console.log(maxSlidingWindow([1,-1], 1));




/*
var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    
};

*/






/*



Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

 */
