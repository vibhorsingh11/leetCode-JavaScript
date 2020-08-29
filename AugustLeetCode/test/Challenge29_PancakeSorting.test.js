const pancakeSort = require("../main/Challenge29_PancakeSorting");

test("it should sort the pancake", () => {
  expect(pancakeSort([3, 2, 4, 1])).toEqual([4, 2, 4, 3]);
});
