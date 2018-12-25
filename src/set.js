const _items = Symbol();

class Set {
  constructor() {
    this[_items] = {};
  }

  /**
   * 判断值值集合中是否存在
   * @param {*} value  要判断的值
   * @returns {boolean} 该值是否存在于集合中
   */
  has(value) {
    return this[_items].hasOwnProperty(value);
  }

  /**
   * 向集合中添加一个新的项
   * @param {*} value 新的项
   */
  add(value) {
    this[_items][value] = value;
  }

  /**
   * 从集合中移除一个值
   * @param {*} value 要移除的值
   * @returns {boolean} 是否成功移除要移除的值
   */
  delete(value) {
    if (this.has(value)) {
      delete this[_items][value];
      return true;
    }
    return false;
  }

  /**
   * 获取集合所包含元素的数量
   * @returns {number} 集合所包含元素的数量
   */
  size() {
    return Object.keys(this[_items]).length;
  }

  /**
   * 移除集合中的所有项
   */
  clear() {
    this[_items] = {};
  }

  /**
   * 获取集合中所有的值
   * @returns {*[]} 集合中所有的值
   */
  values() {
    return Object.keys(this[_items]);
  }

  /**
   * 求与另一个集合的并集
   * @param {Set} set 集合
   * @returns {Set} 并集
   */
  union(set) {
    const newSet = new Set();
    for (let item of set.values()) {
      newSet.add(item);
    }
    for (let item of this.values()) {
      newSet.add(item);
    }
    return newSet;
  }

  /**
   * 获取与另一个集合的交集
   * @param {Set} otherSet 另一个集合
   * @returns {Set} 交集
   */
  intersection(otherSet) {
    const newSet = new Set();
    for (let item of otherSet.values()) {
      if (this.has(item)) {
        newSet.add(item);
      }
    }
    return newSet;
  }

  /**
   * 获取与另一个集合的差集
   * @param {Set} otherSet 另一个集合
   * @returns {Set} 差集
   */
  difference(otherSet) {
    let newSet = new Set();
    for (let item of this.values()) {
      if (!otherSet.has(item)) {
        newSet.add(item);
      }
    }
    return newSet;
  }

  /**
   * 判断该集合是否为另一个集合的子集
   * @param {Set} otherSet 另一个集合
   * @returns {boolean} 是否是子集
   */
  subset(otherSet) {
    if (otherSet.size() < this.size()) {
      return false;
    } else {
      for (let item of this.values()) {
        if (!otherSet.has(item)) {
          return false;
        }
      }
      return true;
    }
  }
}

export default Set;
