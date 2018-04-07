class Dict {
  constructor() {
    this.datastore = [];
  }

  /**
   * 添加
   * @param key
   * @param value
   */
  add(key, value) {
    this.datastore[key] = value;
  }

  /**
   * 查找字典元素
   * @param {*} key 要查找的值
   * @returns {*} 查找结果
   */
  find(key) {
    return this.datastore[key];
  }

  /**
   * 删除元素
   * @param {*} key 要删除的元素的值
   */
  remove(key) {
    delete this.datastore[key];
  }

  /**
   * 显示字典元素
   */
  showAll() {
    const obj = {};
    for (let item of Object.keys(this.datastore).sort()) {
      obj[item] = this.datastore[item];
    }
    return obj;
  }

  /**
   * 统计字典元素数量
   * @returns {number} 字典元素数量
   */
  count() {
    let num = 0;
    Object.keys(this.datastore).forEach(() => num++);
    return num;
  }

  clear() {
    Object.keys(this.datastore).forEach(item => {
      delete this.datastore[item];
    });
  }
}

export { Dict };
