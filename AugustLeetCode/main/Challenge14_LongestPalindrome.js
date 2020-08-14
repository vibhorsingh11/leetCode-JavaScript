/**
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be
 * built with those letters.
 *
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Note:
 * Assume the length of given string will not exceed 1,010.
 *
 * Example:*
 * Input:
 * "abccccdd"
 *
 * Output:
 * 7
 *
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // map for storing the count of all elements
  let map = new Map();
  // count of longest palindrome
  let ans = 0;
  let odd = false;
  // storing counts of string
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  // looping over the map values
  for (let c of map.values()) {
    if (c % 2 == 0) {
      ans += c;
    } else {
      odd = true;
      ans += c - 1;
    }
  }
  // if odd pattern is found then increament
  if (odd) {
    ans++;
  }
  return ans;
};

module.exports = longestPalindrome;
