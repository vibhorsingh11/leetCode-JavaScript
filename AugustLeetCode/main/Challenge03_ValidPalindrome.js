/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
* Note: For the purpose of this problem, we define empty string as valid palindrome.
* 
* Example 1:
* Input: "A man, a plan, a canal: Panama"
* Output: true
* Example 2:
* Input: "race a car"
* Output: false
*  
* 
* Constraints:
* s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    for (let i = 0;i<s.length;i++){
        if(s[i] != s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;