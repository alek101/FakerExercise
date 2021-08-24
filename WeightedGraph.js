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
    const visited = [];
    const queue = new SimplePriorityQueue();
    Object.keys(this.adjacencyList).forEach(node=>
      {
        if (node == start) {
          distances[start]=0;
          queue.enqueue(start, 0);
        } else {
          distances[node]=Infinity;
          queue.enqueue(node, Infinity);
        }
        previous[node]=null;
      }
    );

    let current = queue.dequeue();

    while(current.val != end){
      if(visited.indexOf(current.val)==-1){
        visited.push(current.val);
        for (let node of this.adjacencyList[current.val]){
          let {node: name, weight} = node;
          if(visited.indexOf(name)==-1){
            let distance=distances[current.val];
            distance+=weight;
            if(distance<distances[name]){
              distances[name]=distance;
              previous[name]=current.val;
              queue.enqueue(name,distance);
            }
          }
        }
      }
      current = queue.dequeue();
    }
    // console.log('distances', distances, 'previous', previous, 'vistied',visited, 'queue', queue);
    return distances[end];
  }

}

const g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("F", "E", 1)
g.addEdge("B", "E", 3)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)

// console.log(g.adjacencyList)

console.log(g.dijkstra("A","E"))