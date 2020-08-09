const orangesRotting = require("../main/Challenge09_RottingOranges");

test("it should take 4 mins to rotten", () => {
  let arr = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];
  expect(orangesRotting(arr)).toBe(4);
});
