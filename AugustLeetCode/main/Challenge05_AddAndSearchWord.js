/**
 * You should design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 * WordDictionary() Initializes the object.
 * void addWord(word) adds word to the data structure, it can be matched later.
 * bool search(word) returns true if there is any string in the data structure that matches word or false otherwise.
 * word may contain dots '.' where dots can be matched with any letter.
 *
 *
 * Example:
 * Input
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output
 * [null,null,null,null,false,true,true,true]
 *
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 *
 *
 * Constraints:
 * 1 <= word.length <= 500
 * word in addWord consists lower-case English letters.
 * word in search consist of  '.' or lower-case English letters.
 * At most 50000 calls will be made to addWord and search .
 */
/**
 * Initialize your data structure here.
 */
let Node = function () {
  this.keys = new Map();
  this.isWord = false;
};
var WordDictionary = function () {
  this.root = new Node();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (word.length == 0) {
    return;
  }
  let node = this.root,
    i = 0;
  while (i < word.length) {
    if (!node.keys.has(word.charAt(i))) {
      node.keys.set(word.charAt(i), new Node());
    }
    node = node.keys.get(word.charAt(i));
    i++;
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function find(word, i = 0, curr) {
    if (!curr) {
      return false;
    }

    // console.log('1',curr,i)
    if (i == word.length) {
      return curr.isWord;
    }
    if (word.charAt(i) == ".") {
      for (let j = 0; j < 26; j++) {
        let s = String.fromCharCode(97 + j);
        if (word == ".at") {
          console.log(s, curr);
        }
        if (curr.keys.has(s)) {
          if (word == ".at") {
            console.log(s, curr.keys);
          }

          if (find(word, i + 1, curr.keys.get(s))) {
            return true;
          }
        }
      }
    } else {
      if (curr.keys.has(word.charAt(i))) {
        curr = curr.keys.get(word.charAt(i));
        if (find(word, i + 1, curr)) {
          return true;
        }
      }
    }
    return false;
  }
  // console.log(this.root.keys)
  return find(word, 0, this.root);
};

module.exports = WordDictionary;
