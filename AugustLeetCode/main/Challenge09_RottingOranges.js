/**
 * In a given grid, each cell can have one of three values:
 *
 * the value 0 representing an empty cell;
 * the value 1 representing a fresh orange;
 * the value 2 representing a rotten orange.
 * Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1 instead.
 *
 *
 *
 * Example 1:
 * Input: [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 * Example 2:
 * Input: [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 * Example 3:
 * Input: [[0,2]]
 * Output: 0
 * Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 *
 * Note:
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * grid[i][j] is only 0, 1, or 2.
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // sets to store fresh and rotten oranges
  let fresh = new Set();
  let rotten = new Set();
  // looping through the grid to get the coordinates
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        fresh.add("" + i + j);
      } else if (grid[i][j] == 2) {
        rotten.add("" + i + j);
      }
    }
  }
  // time taken to rotten the oranges
  let minutes = 0;
  // directions
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  // Loop until we have fresh oranges
  while (fresh.size > 0) {
    // set to store the
    let infected = new Set();
    for (let s of rotten) {
      let x = s.charAt(0) - "0";
      let y = s.charAt(1) - "0";
      // check in all direction
      for (let direction of directions) {
        let nextX = x + direction[0];
        let nextY = y + direction[1];
        if (fresh.has("" + nextX + nextY)) {
          fresh.delete("" + nextX + nextY);
          infected.add("" + nextX + nextY);
        }
      }
    }
    // if not infected orange is found the return
    if (infected.size == 0) {
      return -1;
    }
    // otherwise update it
    rotten = infected;
    minutes++;
  }
  return minutes;
};

module.exports = orangesRotting;
