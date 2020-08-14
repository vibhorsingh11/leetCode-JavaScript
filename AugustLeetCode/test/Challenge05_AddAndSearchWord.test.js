const WordDictionary = require("../main/Challenge05_AddAndSearchWord");

test("Word Dictionary returns false", () => {
  const response = new WordDictionary();
  response.addWord("bad");
  response.addWord("dad");
  response.addWord("mad");
  expect(response.search("pad")).toBe(false);
});
