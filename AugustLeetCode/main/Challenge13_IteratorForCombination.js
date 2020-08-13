/**
 * Design an Iterator class, which has:
 *
 * A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
 * A function next() that returns the next combination of length combinationLength in lexicographical order.
 * A function hasNext() that returns True if and only if there exists a next combination.
 *
 *
 * Example:
 * CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.
 * iterator.next(); // returns "ab"
 * iterator.hasNext(); // returns true
 * iterator.next(); // returns "ac"
 * iterator.hasNext(); // returns true
 * iterator.next(); // returns "bc"
 * iterator.hasNext(); // returns false
 *
 *
 * Constraints:
 * 1 <= combinationLength <= characters.length <= 15
 * There will be at most 10^4 function calls per test.
 * It's guaranteed that all calls of the function next are valid.
 */
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const populateStore = (str, result, auxStr, combinationLength) => {
  if (auxStr.length === combinationLength) {
    result.push(auxStr);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    populateStore(
      str.substring(i + 1),
      result,
      auxStr + str[i],
      combinationLength
    );
  }
};
var CombinationIterator = function (characters, combinationLength) {
  this.store = [];
  populateStore(characters, this.store, "", combinationLength);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.store.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.store.length !== 0;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

module.exports = CombinationIterator;
