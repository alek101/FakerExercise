class SimplePriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort(){
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({node: vertex2, weight} );
      this.adjacencyList[vertex2].push({node: vertex1, weight} );
  }

  dijkstra(start, end){
    const distances={};
    const previous={}
    Object.keys(this.adjacencyList).forEach(node=>
      {
        distances[node]=Infinity;
        previous[node]=null;
      }
    );
    distances[start]=0;
    
    const queue = 
    



    console.log(distances,previous)
  }

}

const g = new WeightedGraph();

g.addVertex("A")

g.addVertex("B")

g.addVertex("C")

g.addEdge("B", "C", 7)

g.addEdge("A", "C", 5)

g.addEdge("A", "B", 9)

// console.log(g.adjacencyList)

g.dijkstra("A","C")