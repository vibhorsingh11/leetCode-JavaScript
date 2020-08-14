const longestPalindrome = require("../main/Challenge14_LongestPalindrome");

test("the longest palindrome is of length 7", () => {
  const response = longestPalindrome("abccccdd");
  expect(response).toBe(7);
});
