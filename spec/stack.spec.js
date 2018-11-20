import Stack from '../src/stack';

const stack = new Stack();

describe('Stack类的功能测试', () => {
  beforeEach(() => {
    stack.clear();
    stack.push('first');
  });
  test('向栈添加新的元素', () => {
    stack.push('second');
    expect(stack.peek()).toBe('second');
  });
  test('删除栈顶元素', () => {
    let stackPop = stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.size()).toBe(0);
    expect(stackPop).toBe('first');
  });
  test('清空栈内元素', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.size()).toBe(0);
  });
  test('检查栈是否为空', () => {
    expect(stack.isEmpty()).toBeFalsy();
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });
  test('查看栈的元素个数', () => {
    expect(stack.size()).toBe(1);
    stack.push('second');
    expect(stack.size()).toBe(2);
    stack.push('third');
    expect(stack.size()).toBe(3);
    stack.pop();
    expect(stack.size()).toBe(2);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
