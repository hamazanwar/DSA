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

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdges("A", "B");
graph.addEdges("A", "C")
graph.addEdges("B", "C");
graph.display();





//Adjacency List
const graph1 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"]
};
// console.log(graph1["A"]);


// Adjacency Matrix
const matrix = [
    // A  B  C  D
    [0, 1, 1, 0], // A
    [1, 0, 0, 1], // B
    [1, 0, 0, 1], // C
    [0, 1, 1, 0]  // D
];
// console.log(matrix[0][3]);



