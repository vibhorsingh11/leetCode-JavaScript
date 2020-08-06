const findDuplicates = require('../main/Challenge06_DuplicatesInArray');

let arr = [4,3,2,7,8,2,3,1];

test('it should be [2, 3]', () => {
    const response = findDuplicates(arr);
    expect(response).toEqual([2,3]);
})