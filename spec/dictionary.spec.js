import {Dict} from '../src/dictionary';

const dict = new Dict();

describe('Dict类的功能测试', () => {
  beforeEach(() => {
    dict.add('123', 123);
    dict.add('1234', 123);
  });
  test('字典添加新的元素', () => {
    expect(dict.find('123')).toBe(123);
    expect(dict.find('1234')).toBe(123);
  });
  test('字典删除元素', () => {
    dict.remove('123');
    expect(dict.find('123')).toBeUndefined();
  });
  test('字典元素数量统计', () => {
    expect(dict.count()).toBe(2);
    dict.add('124', 123);
    expect(dict.count()).toBe(3);
  });
  test('字典清除所有元素', () => {
    dict.clear();
    expect(dict.count()).toBe(0);
  });
  test('字典显示所有元素', () => {
    expect(dict.showAll()).toEqual({
      '123': 123,
      '1234': 123,
    });
  });
});
