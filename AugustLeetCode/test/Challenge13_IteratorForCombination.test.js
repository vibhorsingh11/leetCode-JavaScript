const CombinationIterator = require("../main/Challenge13_IteratorForCombination");

test("it should give combinations", () => {
  let res = new CombinationIterator("abc", 2);
  expect(res.next()).toBe("ab");
  expect(res.next()).toBe("ac");
});
