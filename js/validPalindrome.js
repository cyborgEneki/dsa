/**
 * 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 1) return true;

    let reversedStr = "";

    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");

    for (let i = s.length - 1; i >= 0; i--) {
        reversedStr += s[i];
    }

    return reversedStr === s;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
