import { LinkedList } from './linked-list';

class HashMap {
  constructor() {
    this.map = [];
  }

  put(key, value) {
    const position = HashMap.loseLoseHashMapCode(key);
    this.map[position] = value;
  }

  remove(key) {
    this.map[HashMap.loseLoseHashMapCode(key)] = undefined;
  }

  get(key) {
    return this.map[HashMap.loseLoseHashMapCode(key)];
  }

  static loseLoseHashMapCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class BetterHashMap extends HashMap {
  constructor() {
    super();
  }

  put(key, value) {
    const position = BetterHashMap.loseLoseHashMapCode(key);
    if (this.map[position] === undefined) {
      this.map[position] = new LinkedList();
    }
    this.map[position].append(new ValuePair(key, value));
  }

  get(key) {
    const position = BetterHashMap.loseLoseHashMapCode(key);
    if (this.map[position] !== undefined) {
      let current = this.map[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = BetterHashMap.loseLoseHashMapCode(key);
    if (this.map[position] !== undefined) {
      let current = this.map[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          this.map[position].remove(current.element);
          if (this.map[position].isEmpty()) {
            this.map[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        this.map[position].remove(current.element);
        if (this.map[position].isEmpty()) {
          this.map[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }

  static loseLoseHashMapCode(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i) + hash * 33;
    }
    return hash % 1013;
  }
}

export { HashMap, BetterHashMap };