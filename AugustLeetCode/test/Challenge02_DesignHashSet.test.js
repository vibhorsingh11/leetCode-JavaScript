const MyHashSet = require("../main/Challenge02_DesignHashSet");

test("return true", () => {
  let res = new MyHashSet();
  res.add(1);
  expect(res.contains(1)).toBe(true);
});
