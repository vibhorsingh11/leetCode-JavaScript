const fizzBuzz = require("../main/Challenge26_FizzBuzz");

test("it should be equal to Fizz array", () => {
  let res = [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ];
  expect(fizzBuzz(15)).toEqual(res);
});
