/*

57. Insert Interval

https://leetcode.com/problems/insert-interval/

*/

var insert = function(intervals, newInterval) {
    let left = [];
    let right = [];
    let min = newInterval[0];
    let max = newInterval[1];

    for(let i = 0; i < intervals.length; i++){
        let interval = intervals[i];

        if(interval[1] < newInterval[0]){
            left.push(interval);
        }else if(interval[0] > newInterval[1]){
            right.push(interval);
        }else{
            min = Math.min(min, interval[0]);
            max = Math.max(max, interval[1]);
        }
    }
    
    return [...left, [min, max], ...right];
};

/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/