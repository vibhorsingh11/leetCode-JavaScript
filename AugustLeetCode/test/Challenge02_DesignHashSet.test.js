const hSet = require('../main/Challenge02_DesignHashSet');
//jest.mock('../main/Challenge02_DesignHashSet');
//import MyHashSet from '../main/Challenge02_DesignHashSet';


test('return true', () => {
    //MyHashSet.add(1);
    //  this.hashSet = new MyHashSet();
     hSet.add(1);
    expect(hSet.contains(1)).toBe(true);
})