import { Queue, QueueElement, PriorityQueue } from '../src/queue';

let queue, priorityQueue;

describe('Queue类的功能测试', () => {
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue('first');
  });

  test('移除队列的第一个元素', () => {
    const firstElement = queue.dequeue();
    expect(firstElement).toBe('first');
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('向队列添加新的元素', () => {
    queue.enqueue(...['second', 'third']);
    expect(queue.dequeue()).toBe('first');
    expect(queue.dequeue()).toBe('second');
    expect(queue.dequeue()).toBe('third');
  });

  test('获取队列的第一个元素', () => {
    expect(queue.front()).toBe('first');
  });

  test('判断队列是否为空', () => {
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('获取队列包含的元素个数', () => {
    expect(queue.size()).toBe(1);
    queue.enqueue('second');
    expect(queue.size()).toBe(2);
  });
});

describe('测试优先队列', () => {
  beforeEach(() => {
    priorityQueue = new PriorityQueue();
    priorityQueue.enqueue('first', 2);
  });
  
  test('向队列中插入元素', () => {
    priorityQueue.enqueue('second', 1);
    expect(priorityQueue.front()).toMatchObject(new QueueElement('second', 1));
    priorityQueue.enqueue('third', 3);
    priorityQueue.dequeue();
    priorityQueue.dequeue();
    expect(priorityQueue.front()).toMatchObject(new QueueElement('third', 3));
  });
});