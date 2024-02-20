/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let reversedStr = "";

    const stringifiedInt = x.toString();

    const length = stringifiedInt.length;

    for (let i = length - 1; i >= 0; i--) {
        reversedStr += stringifiedInt[i];
    }

    return parseInt(reversedStr) === parseInt(stringifiedInt);
};

// Input: integer (whole numbers, possible -ve numbers)
// Output: boolean
/* Aproach: 
- -ve numbers get eliminated first 
- single digits numbers get eliminated next
- create a reversed str var
- convert the int into a str
- loop through in reverse
- concatenate
- convert both reversed and original strings to integers
- return the comparison
*/
