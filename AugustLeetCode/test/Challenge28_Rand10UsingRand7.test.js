const rand10 = require("../main/Challenge28_Rand10UsingRand7");

test("it should return a random rand values", () => {
  expect(rand10(3)).toBe([8, 1, 10]);
});
