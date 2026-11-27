class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex + "->" + this.list[vertex]);
    }
  }
}

let graph = new Graph();

