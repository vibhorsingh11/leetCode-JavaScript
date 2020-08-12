const getRow = require("../main/Challenge12_Pascal'sTriangleII");

test("it should return an row [1, 3, 3, 1]", () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1]);
});
