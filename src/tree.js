class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  /**
   * 获取该节点的值
   */
  show() {
    return this.data;
  }
}

// 二叉查找树
class BinarySortTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);
    // 判断树是否有根节点，如果不存在根节点则将当前插入的节点设置为根节点
    if (this.root === null) {
      this.root = node;
    } else {
      let [current, parent] = [this.root];
      while (true) {
        // 将父节点设为当前节点
        parent = current;
        // 比较当前节点的值与插入的值
        if (data < current.data) {
          // 设置当前节点为当前节点的左节点
          current = current.left;
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          // 设置当前节点为当前节点的右节点
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
}
