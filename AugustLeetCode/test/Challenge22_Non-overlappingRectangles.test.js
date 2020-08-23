const Solution = require("../main/Challenge22_Non-overlappingRectangles");

test("it will give random point in Non-overlapping Rectangles", () => {
  expect(
    Solution(
      ["Solution", "pick", "pick", "pick"][([[[1, 1, 5, 5]]], [], [], [])]
    )
  ).toEqual([null, [4, 1], [4, 1], [3, 3]]);
});
