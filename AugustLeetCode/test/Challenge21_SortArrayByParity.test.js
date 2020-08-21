const sortArrayByParity = require("../main/Challenge21_SortArrayByParity");

test("it should return the even elements followed by odd", () => {
  let arr = [3, 1, 2, 4];
  let res = [2, 4, 3, 1];
  expect(sortArrayByParity(arr)).toEqual(res);
});
