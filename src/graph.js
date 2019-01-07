class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  /**
   * 向图添加一个新的顶点
   * @param {*} v 新的顶点
   */
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  /**
   * 向顶点v添加到顶点w的边
   * @param v 顶点v
   * @param w 顶点w
   */
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  /**
   * 获取图的字符串表示
   * @returns {string} 图的字符串表示
   */
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

export { Graph };