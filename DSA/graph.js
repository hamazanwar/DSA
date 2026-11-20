
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Remove an edge
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1].filter(v => v !== vertex2);

        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    // Remove a vertex
    removeVertex(vertex) {

        while (this.adjacencyList[vertex].length) {

            const adjVertex = this.adjacencyList[vertex].pop();

            this.removeEdge(vertex, adjVertex);
        }

        delete this.adjacencyList[vertex];
    }

    // Display graph
    print() {
        for (const vertex in this.adjacencyList) {
            console.log(`${vertex} => ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

// graph.removeEdge("A", "B");

// graph.removeVertex("A");

// graph.print();

console.log(graph);