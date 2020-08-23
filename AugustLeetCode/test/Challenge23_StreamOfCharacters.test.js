const StreamChecker = require("../main/Challenge23_StreamOfCharacters");

test("it should return false for a in stream of characters", () => {
  const response = new StreamChecker(["cd", "f", "kl"]);
  expect(response.query("a")).toBeFalsy();
});
