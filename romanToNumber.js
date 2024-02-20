/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const singleDigitRoman = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    const doubleDigitRoman = new Map([
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900],
    ]);

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1) {
            let singleRomanCurrent = s[i];
            let doubleRomanCurrent = s[i] + s[i + 1];

            if (doubleDigitRoman.has(doubleRomanCurrent)) {
                sum += doubleDigitRoman.get(doubleRomanCurrent);
                i++;
            } else {
                sum += singleDigitRoman.get(singleRomanCurrent);
            }
        } else {
            sum += singleDigitRoman.get(s[i]);
        }
    }

    return sum;
};

console.log(romanToInt("MCMXCIV"));

/**
INPUT: a string that is a roman numeral (s)
OUTPUT: integer - the hindu-arabic version of the roman numeral
LIMITATIONS: 
1. The value will never be larger than 3999 or less than 1
2. s.length will never be zero
APPROACH:
Create a map with all the predictable numbers
Create a sum variable 
Loop
    Is current + next any of the weird ones? 
    Y: add to sum and incr i by 1 then keep the loop going
    N: add to sum and keep the loop going
Return sum
 */
