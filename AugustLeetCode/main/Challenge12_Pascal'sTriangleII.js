/**
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 *
 * Example:
 * Input: 3
 * Output: [1,3,3,1]
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [[1], [1, 1]];
  for (let i = 2; i <= rowIndex; i++) {
    let tempArr = [1];
    for (let j = 0; j < rowIndex - 1; j++) {
      if (arr[i - 1][j + 1]) {
        tempArr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
      }
    }
    tempArr.push(1);
    arr.push(tempArr);
  }
  return arr[rowIndex];
};

module.exports = getRow;
