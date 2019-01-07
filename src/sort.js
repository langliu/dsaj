const arr = [1, 2, 3, 45, 4, 234, 234, 12, 345, 232, 65];
console.log(arr.toLocaleString());

/**
 * 冒泡排序
 * @param {Array} array 要排序的数组
 * @param {boolean} desc 升序排序
 */
function bubbleSort(array, desc = true) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  if (!desc) {
    array = array.reverse();
  }
  return array;
}

export { bubbleSort };