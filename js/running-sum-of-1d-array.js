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