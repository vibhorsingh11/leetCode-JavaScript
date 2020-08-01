const detectCapitalUse = require('../main/Challenge01_DetectCapital');

test('should output true', () => {
    const result = detectCapitalUse('USA');
    expect(result).toBe(true);
    const result2 = detectCapitalUse('FlaG');
    expect(result2).toBe(false);
})