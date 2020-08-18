/**
 * Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
 *
 * Note that every number in the answer must not have leading zeros except for the number 0 itself.
 * For example, 01 has one leading zero and is invalid, but 0 is valid.
 *
 * You may return the answer in any order.
 *
 *
 *
 * Example 1:
 * Input: N = 3, K = 7
 * Output: [181,292,707,818,929]
 * Explanation: Note that 070 is not a valid number, because it has leading zeroes.
 *
 * Example 2:
 * Input: N = 2, K = 1
 * Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 *
 *
 * Note:
 * 1 <= N <= 9
 * 0 <= K <= 9
 */
/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
  let prevSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let n = 2; n <= N; n++) {
    const newSet = new Set();

    for (const prevVal of prevSet) {
      const lastDig = prevVal % 10;

      const plusK = lastDig + K;
      const minusK = lastDig - K;

      if (prevVal > 0 && plusK < 10) newSet.add(prevVal * 10 + plusK);
      if (prevVal > 0 && minusK >= 0) newSet.add(prevVal * 10 + minusK);
    }

    prevSet = newSet;
  }

  return [...prevSet];
};

module.exports = numsSameConsecDiff;
