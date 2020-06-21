class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  /**
   * 简单散列函数
   * @param {string} data
   */
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  /**
   * 霍纳算法的散列函数
   * @param {string} data
   */
  betterHash(data) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += total * H + data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  /**
   * 将数据存入散列表
   * @param {string} data 存入的数据
   */
  put(data) {
    const pos = this.simpleHash(data);
    this.table[pos] = data;
  }

  get(data) {
    const pos = this.simpleHash(data);
    return this.table[pos];
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }

  /**
   * 获取取值范围内的随机整数
   * @param {number} min 最小值
   * @param {number} max 最大值
   */
  getRandomInt(min, max) {
    return Math.floor((max - min + 1) * Math.random() + min);
  }

  /**
   *
   * @param {any[]} arr
   */
  getStuData(arr) {
    for (let i = 0; i < arr.length; i++) {
      let studentId = "";
      for (let j = 0; j < 9; j++) {
        studentId += Math.floor(Math.random() * 10);
      }
      const student = studentId + this.getRandomInt(50, 100);
      arr[i] = student;
    }
    return arr;
  }
}

class HashTableLinearDetection {
  constructor() {
    this.table = new Array(137);
    this.values = new Array(137);
  }

  /**
   *
   * @param {string} data
   */
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  /**
   * 散列函数
   * @param {string} data
   */
  betterHash(data) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += total * H + data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  /**
   * 将数据存入散列表
   * @param {string} key 存入的数据的键
   * @param {any} value 存入的数据的值
   */
  put(key, value) {
    let pos = this.betterHash(key);
    if (this.table[pos] !== undefined) {
      this.table[pos] = value;
      this.values[pos] = value;
    } else {
      while (this.table[pos] !== undefined);
      {
        pos++;
      }
      this.table[pos] = key;
      this.values[pos] = value;
    }
  }

  /**
   * 根据数据的键获取值
   * @param {string|undefined} key 数据的键
   */
  get(key) {
    let pos = this.betterHash(key);
    for (let i = pos; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        return this.values[i];
      }
    }
    return undefined;
  }
}

class HashTableOpenChainMethod extends HashTable {
  constructor() {
    super();
    this.buildChins();
  }

  buildChins() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  /**
   * 将数据存入散列表
   * @param {string} key 存入的数据的键
   * @param {any} value 存入的数据的值
   */
  put(key, value) {
    let pos = this.betterHash(key);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index] = key;
      this.table[pos][index + 1] = value;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined) {
        ++index;
      }
      this.table[pos][index] = key;
      this.table[pos][index + 1] = value;
    }
  }

  /**
   * 根据数据的键获取值
   * @param {string} key 存入的数据的键
   */
  get(key) {
    let [index, pos] = [0, this.betterHash(key)];
    if (this.table[pos][index] === key) {
      return this.table[pos][index + 1];
    } else {
      index += 2;
      while (this.table[pos][index] !== key) {
        if (this.table[pos][index] === undefined) {
          return undefined;
        }
        index += 2;
      }
      return this.table[pos][index + 1];
    }
  }
}

export { HashTable, HashTableOpenChainMethod, HashTableLinearDetection };
