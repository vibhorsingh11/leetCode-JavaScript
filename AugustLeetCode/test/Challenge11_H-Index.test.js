const hIndex = require("../main/Challenge11_H-Index");

test("it should have 3 citations", () => {
  let citations = [3, 0, 6, 1, 5];
  expect(hIndex(citations)).toBe(3);
});
