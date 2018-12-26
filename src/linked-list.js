class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 添加元素到列表末尾
   * @param {*} element 要添加的元素
   */
  append(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  /**
   * 将元素插入到列表中的某个位置
   * @param {number} position 位置
   * @param {*} element 要插入的元素
   * @returns {boolean} 是否插入成功
   */
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let [node, index, current, previous] = [new Node(element), 0, this.head];
      if (previous === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  /**
   * 根据位置删除列表中的元素
   * @param {number} position 位置
   * @returns {*} 删除的元素
   */
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let [current, index, previous] = [this.head, 0];
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  /**
   * 移除元素
   * @param {*} element 要移除的元素
   * @returns {*} 移除的元素
   */
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * 查找元素在列表中的位置
   * @param {*} element 要查找的元素
   * @returns {number} 元素在列表中的位置，如果元素不存在则返回-1
   */
  indexOf(element) {
    let [current, index] = [this.head, -1];
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  /**
   * 判断列表是否为空
   * @returns {boolean} 列表是否为空
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 获取列表中元素的个数
   * @returns {number} 元素个数
   */
  size() {
    return this.length;
  }

  /**
   * 获取列表第一个元素
   * @returns {*} 列表第一个元素
   */
  getHead() {
    return this.head;
  }

  /**
   * 将LinkedList对象转换为一个字符串
   * @returns {string} 字符串
   */
  toString() {
    let [current, string] = [this.head, ''];
    while (current) {
      string += current.element + (current.next ? 'n' : '');
      current = current.next;
    }
    return string;
  }
}

/**
 * 双向链表节点
 */
class DoublyLinkedListNode {
  /**
   * 双向链表节点类构造函数
   * @param {*} element 元素值
   */
  constructor(element) {
    // 当前节点值
    this.element = element;
    // 指向下一个节点的指针
    this.next = null;
    // 指向上一个节点的指针
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * 向双向链表指定位置插入元素
   * @param {number} position 指定位置
   * @param {*} element 要插入的元素
   * @returns {boolean} 是否成功插入
   */
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let [node, current, index, previous] = [new DoublyLinkedListNode(element), this.head, -1];
      if (position === 0) {
        if (!this.head) {
          [this.head, this.tail] = [node, node];
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  /**
   * 从给定的位置移除元素
   * @param {number} position 位置
   */
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let [current, previous, index] = [this.head, undefined, 0];
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        [current, this.tail, this.tail.next] = [this.tail, current.prev, null];
      } else {
        while (index++ < position) {
          [previous, current] = [current, current.next];
        }
        [previous.next, current.next.prev] = [current.next, previous];
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
}

export {
  LinkedList,
  DoublyLinkedList
};