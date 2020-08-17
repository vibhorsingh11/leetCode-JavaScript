const distributeCandies = require("../main/Challenge17_DistributeCandiesPeople");

test("it should be [1,2,3,1]", () => {
  let arr = [1, 2, 3, 1];
  expect(distributeCandies(7, 4)).toEqual(arr);
});
