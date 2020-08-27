const findRightInterval = require("../main/Challenge27_FindRightInterval");

test("it should return the right interval [-1, 2, -1]", () => {
  expect(
    findRightInterval([
      [1, 4],
      [2, 3],
      [3, 4],
    ])
  ).toEqual([-1, 2, -1]);
});
