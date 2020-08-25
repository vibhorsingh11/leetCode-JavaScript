const mincostTickets = require("../main/Challenge25_MinimumCostForTickets");

test("it should take minimun 11 $", () => {
  const days = [1, 4, 6, 7, 8, 20];
  const costs = [2, 7, 15];
  expect(mincostTickets(days, costs)).toBe(11);
});
