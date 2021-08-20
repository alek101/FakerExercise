class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      const i1 = this.adjacencyList[vertex1].indexOf(vertex2);
      const i2 = this.adjacencyList[vertex2].indexOf(vertex1);
      this.adjacencyList[vertex1].splice(i1,1);
      this.adjacencyList[vertex2].splice(i2,1);
    }
  }

  removeVertex(vertex){
    const list = this.adjacencyList[vertex];
    if(list.length > 0){
      for(const connection in list){
        this.removeEdge(vertex,connection);
      }
    } 
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addEdge("Tokyo","Dallas");
g.addEdge("Tokyo","Aspen");
g.removeEdge("Tokyo","Aspen");
g.addVertex("Delete");
g.addEdge("Tokyo","Delete");
g.addEdge("Dallas","Delete");
g.removeVertex("Delete");

console.log(g.adjacencyList);