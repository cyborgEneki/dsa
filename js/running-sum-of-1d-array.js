/**
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Input: [1, 2, 3, 4]
    Output: [1, 1+2, 1+2+3, 1+2+3+4]
    Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    sum = 0;
    runningSumContainer = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        runningSumContainer.push(sum);
    }

    return runningSumContainer;
};

console.log(runningSum([1, 2, 3, 4]))