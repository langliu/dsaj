const _items = Symbol();

export default class Stack {
  constructor() {
    this[_items] = [];
  }

  push(...element) {
    this[_items].push(...element);
  }

  pop() {
    return this[_items].pop();
  }

  peek() {
    return this[_items][this[_items].length - 1];
  }

  clear() {
    this[_items].length = 0;
  }

  isEmpty() {
    return this[_items].length === 0;
  }

  size() {
    return this[_items].length;
  }
}