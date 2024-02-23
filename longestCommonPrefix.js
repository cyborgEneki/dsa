/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * @param {string[]} strs 
 * @returns {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) != 0) {
          prefix = prefix.substring(0, prefix.length - 1);
      }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["","flow","flight"]))
console.log(longestCommonPrefix(["dog","flow","racecar"]))