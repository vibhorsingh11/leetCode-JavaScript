const eraseOverlapIntervals = require("../main/Challenge15_NonOverlappingIntervals");

test("there should be 2 intervals", () => {
  let arr = [
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  expect(eraseOverlapIntervals(arr)).toBe(2);
});
