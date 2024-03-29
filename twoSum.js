/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const previouslySeenComplements = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (previouslySeenComplements.has(complement)) {
            return [i, previouslySeenComplements.get(complement)];
        }

        previouslySeenComplements.set(nums[i], i);
    }
};

console.log(twoSum([2, 5, 6, 7, 8], 9));

/**
    INPUT: arr of integers (nums) and integer (target)

    OUTPUT: the indices (i, j) of 2 numbers (x, y) where x + y = target

    ASSUMPTIONS:
    Each arr has an answer.

    CONSTRAINTS:
    arr.length > 1
    Each element and the target can be both +ve and -ve

    APPROACH: 
    Create an empty map to keep track of previously seen complements
    Loop through
        Get the current element's complement
        Check whether the complement is present in the map
        Y: Return both indices
        N: Add the current element to the map and repeat
     */
