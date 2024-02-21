/**
 * @param {string} s
 * @return {boolean}
 */
var parentheses = function (s) {
  /**
      Approach:
      - if length is odd, return false
      - create an arr to act as a stack for the opening brackets
      - loop
        - if opening add to stack
        - if closing, peek into stack and compare
        - if they match, pop from stack
        - if not, return false
        - when string is empty, return true
      - if the opening brackets is empty, return true
      - otherwise return false
   */

  if (s.length % 2 !== 0) return false;

  const openingBrackets = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (current === "(" || current === "{" || current === "[") {
      openingBrackets.push(current);
    } else {
      let recentlyAddedOpening = openingBrackets[openingBrackets.length - 1];

      if (recentlyAddedOpening === "(" && current === ")") {
        openingBrackets.pop();
      } else if (recentlyAddedOpening === "{" && current === "}") {
        openingBrackets.pop();
      } else if (recentlyAddedOpening === "[" && current === "]") {
        openingBrackets.pop();
      } else return false;
    }
  }

  if (openingBrackets.length === 0) return true;
  else return false;
};

console.log(parentheses("(("));
console.log(parentheses("]]"));
console.log(parentheses("()"));
console.log(parentheses("[)"));
console.log(parentheses("}"));
console.log(parentheses("()[]{}"));
