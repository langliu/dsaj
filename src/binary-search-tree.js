class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  /**
   * 搜索二叉树
   */
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      BinarySearchTree.insertNode(this.root, newNode);
    }
  }

  static insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        BinarySearchTree.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        BinarySearchTree.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * 中序遍历树
   * @param {function} callback 回调函数
   */
  inOrderTraverse(callback) {
    BinarySearchTree.inOrderTraverseNode(this.root, callback);
  }

  /**
   * 中序遍历辅助函数
   * @param {Node} node 树的节点
   * @param {function} callback 回调函数
   */
  static inOrderTraverseNode(node, callback) {
    if (node !== null) {
      BinarySearchTree.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      BinarySearchTree.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 先序遍历树
   * @param {function} callback 回调函数
   */
  preOrderTraverse(callback) {
    BinarySearchTree.preOrderTraverseNode(this.root, callback);
  }

  /**
   * 先序遍历辅助函数
   * @param {Node} node 树的节点
   * @param {function} callback 回调函数
   */
  static preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      BinarySearchTree.preOrderTraverseNode(node.left, callback);
      BinarySearchTree.preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 后序遍历树
   * @param {function} callback 回调函数
   */
  postOrderTraverse(callback) {
    BinarySearchTree.postOrderTraverseNode(this.root, callback);
  }

  /**
   * 后序遍历辅助函数
   * @param {Node} node 树的节点
   * @param {function} callback 回调函数
   */
  static postOrderTraverseNode(node, callback) {
    if (node !== null) {
      BinarySearchTree.postOrderTraverseNode(node.left, callback);
      BinarySearchTree.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /**
   * 获取树的最小节点
   * @returns {*} 树的最小节点
   */
  min() {
    return BinarySearchTree.minNode(this.root);
  }

  static minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  /**
   * 获取树的最大节点
   * @returns {*} 树的最大节点
   */
  max() {
    return BinarySearchTree.maxNode(this.root);
  }

  /**
   * 获取树的最大值
   * @param node
   * @returns {*}
   */
  static maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
}