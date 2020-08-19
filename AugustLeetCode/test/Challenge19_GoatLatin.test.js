const toGoatLatin = require("../main/Challenge19_GoatLatin");

test("it should it Imaa peaksmaaa oatGmaaaa atinLmaaaaa", () => {
  let str = "I speak Goat Latin";
  let res = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa";
  expect(toGoatLatin(str)).toBe(res);
});
