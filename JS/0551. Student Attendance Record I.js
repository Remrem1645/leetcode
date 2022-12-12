/*

551. Student Attendance Record I

https://leetcode.com/problems/student-attendance-record-i/

*/

var checkRecord = function (s) {
    let hash = {};
    hash["A"] = 0;

    for (let i = 0, lateCount = 0; i < s.length; i++) {
        if (s[i] in hash) {
            hash[s[i]] = hash[s[i]] + 1;
            lateCount = 0;
        }
        if (s[i] === "L") lateCount++;
        if (s[i] === "P") lateCount = 0;

        if (hash["A"] === 2) return false;
        if (lateCount === 3) return false;
    }
    return true;
};

/*

Example 1:

Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

Example 2:

Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

*/