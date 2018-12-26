import { HashMap, BetterHashMap } from '../src/hash-map';

const hashMap = new HashMap();
const betterHashMap = new BetterHashMap();
describe('测试HashMap', () => {
  describe('测试HashMap', () => {
    test('测试put方法', () => {
      hashMap.put('key', '123');
      expect(hashMap.get('key')).toBe('123');
    });
    test('测试remove方法', () => {
      hashMap.remove('key');
      expect(hashMap.get('key')).toBeUndefined();
    });
    test('测试get方法', () => {
      hashMap.put('123', '1234');
      expect(hashMap.get('123')).toBe('1234');
      expect(hashMap.get('123234')).toBeUndefined();
    });
  });
  describe('测试BetterHashMap类', () => {
    test('测试put方法', () => {
      betterHashMap.put('123', '1234');
      expect(betterHashMap.get('123')).toBe('1234');
    });
    test('测试remove方法', () => {
      expect(betterHashMap.remove('key')).toBeFalsy();
      expect(betterHashMap.remove('123')).toBeTruthy();
    });
    test('测试get方法', () => {
      betterHashMap.put('123', '1234');
      expect(betterHashMap.get('123')).toBe('1234');
      expect(betterHashMap.get('123234')).toBeUndefined();
    });
  });
});