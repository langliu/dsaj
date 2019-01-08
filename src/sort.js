const arr = [1, 2, 3, 45, 4, 234, 234, 12, 345, 232, 65];
console.log(arr.toLocaleString());

/**
 * 冒泡排序
 * @param {Array} array 要排序的数组
 * @param {boolean} desc 升序排序
 */
function bubbleSort(array, desc = true) {
  const length = array.length;
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

/**
 * 选择排序
 * @param {Array} array 要排序的数组
 * @param {boolean} desc 升序排序
 * @returns {Array} 排序后的数组
 */
function selectSort(array, desc) {
  const length = array.length;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (array[minIndex] < array[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [i, minIndex] = [minIndex, i];
    }
  }
  if (!desc) {
    array = array.reverse();
  }
  return array;
}

/**
 * 插入排序
 * @param {Array} array 要排序的数组
 * @param {boolean} desc 升序排序
 * @returns {Array} 排序后的数组
 */
function insertSort(array, desc) {
  const length = array.length;
  let j, currentValue;
  for (let i = 0; i < length - 1; i++) {
    j = i;
    currentValue = array[i];
    while (j > 0 && array[j - 1] > currentValue) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = currentValue;
  }
  if (!desc) {
    array = array.reverse();
  }
  return array;
}

function mergeSortRec(array) {
  const length = array.length;
  if (length === 1) {
    return array;
  }
  let mid = Math.floor(length / 2);
  let [left, right] = [array.slice(0, mid), array.slice(mid, length)];
  return merge(mergeSortRec(left), mergeSortRec(right));
}

/**
 * 归并排序合并数组
 * @param {Array} left 第一个数组
 * @param {Array} right 第二个数组
 * @returns {Array} 合并后的数组
 */
function merge(left, right) {
  let [result, il, ir] = [[], 0, 0];
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}

/**
 * 归并排序
 * @param {Array} array 要排序的数组
 * @param {boolean} desc 升序排序
 * @returns {Array} 排序后的数组
 */
function mergeSort(array, desc) {
  return desc ? mergeSortRec(array) : mergeSortRec(array).reverse();
}

function quickSort(array) {
  quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
}

function partition(array, left, right) {
  let [pivot, i, j] = [array[Math.floor((right + left) / 2)], left, right];
  while (i <= j) {
    while (array[j] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

export { bubbleSort, selectSort, insertSort, mergeSort, quickSort };