/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split = s.split(" ");

    for (let i = split.length - 1; i >= 0; i--) {
        if (split[i].length !== 0) {
            return split[i].length
        }
    }
};