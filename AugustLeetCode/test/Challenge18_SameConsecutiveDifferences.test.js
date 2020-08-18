const numsSameConsecDiff = require("../main/Challenge18_SameConsecutiveDifferences");

test("it should be [181,292,707,818,929]", () => {
  let arr = [181, 292, 707, 818, 929];
  expect(numsSameConsecDiff(3, 7)).toEqual(arr);
});
