const isPalindrome = require('../main/Challenge03_ValidPalindrome');

test('it should be a palindrome', () => {
    const response = isPalindrome("A man, a plan, a canal: Panama");
    expect(response).toBe(true);
})