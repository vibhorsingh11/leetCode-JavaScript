const isPowerOfFour = require('../main/Challenge04_PowerOfFour');

test('it shoulb be false for power of four', () => {
    const res = isPowerOfFour(-2147483648);
    expect(res).toBe(false);
})