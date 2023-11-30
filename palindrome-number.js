/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const originalString = x.toString();

    if (originalString.length === 1) return true;

    if (originalString[0] === "-") return false;

    const reversedArr = [];

    for (let i = originalString.length - 1; i >= 0; i--) {
        reversedArr.push(originalString[i]);
    }

    const reversedString = reversedArr.join("");

    return originalString === reversedString;
};

console.log(isPalindrome('omamou'));

/**
INPUT: integer (x)

OUTPUT: boolean if it is actually

NOTES:
1. The input could be -ve
2. Solve without converting to a string
3. Input could be a single digit
4. If it is a negative number, it's false
5. Leading zeros need to be maintained

APPROACH:
Transform to string
If length is 1 => true
If first character is - => false
Create holding arr
Loop in reverse:
    Push into arr
Convert 2nd arr to str
Compare str and return boolean
 */
