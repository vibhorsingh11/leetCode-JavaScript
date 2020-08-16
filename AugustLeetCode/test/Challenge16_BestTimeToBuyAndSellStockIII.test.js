const maxProfit = require("../main/Challenge16_BestTimeToBuyAndSellStockIII");

test("it should give a profit of 6", () => {
  let arr = [3, 3, 5, 0, 0, 3, 1, 4];
  expect(maxProfit(arr)).toBe(6);
});
