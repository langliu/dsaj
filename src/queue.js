const _items = Symbol();

// const priorityQueueItems = Symbol();

class Queue {
  /**
   * 创建一个队列
   */
  constructor() {
    this[_items] = [];
  }

  /**
   * 向队列尾部添加一个（或多个）新的项
   * @param {*} elements 新的项
   */
  enqueue(...elements) {
    this[_items].push(...elements);
  }

  /**
   * 移除队列的第一项
   * @returns {*} 队列的第一项
   */
  dequeue() {
    return this[_items].shift();
  }

  /**
   * 获取队列的第一项
   * @returns {*} 队列的第一项
   */
  front() {
    return this[_items][0];
  }

  /**
   * 判断队列是否为空
   * @return {boolean} 队列是否为空
   */
  isEmpty() {
    return this[_items].length === 0;
  }

  /**
   * 获取队列包含的元素个数
   * @return {number} 队列包含的元素个数
   */
  size() {
    return this[_items].length;
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  /**
   * 创建优先队列
   */
  constructor() {
    super();
  }

  /**
   * 向队列添加新的项
   * @param {*} element 要添加的值
   * @param {number} priority 优先级
   */
  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < this[_items].length; i++) {
      if (queueElement.priority < this[_items][i].priority) {
        this[_items].splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this[_items].push(queueElement);
    }
  };
}

export {
  Queue,
  PriorityQueue,
  QueueElement,
};