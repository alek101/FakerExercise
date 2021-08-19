class Node {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor (){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let checkNode=this.root;
    let whileCondition = true;
    while(whileCondition) {
      if (value>checkNode.value){
        if(!checkNode.right){
          checkNode.right=newNode;
          whileCondition=false;
        } else {
          checkNode = checkNode.right;
        }
      }
      if(value<checkNode.value){
        if(!checkNode.left){
          checkNode.left=newNode;
          whileCondition=false;
        } else {
          checkNode = checkNode.left;
        }
      }
      if(value==checkNode.value){
        console.log("same");
        whileCondition=false;
      }
    }
    return this;
  }

  find(value){
    let checkNode = this.root;
    while(checkNode){
      if(value == checkNode.value) return checkNode;
      if(value>checkNode.value) {
          checkNode=checkNode.right;
      }
      if(value<checkNode.value) {
        checkNode=checkNode.left;
      } 
    }  
      return undefined;
    }
  
    bfs(){
      let node = this.root,
          data = [],
          queue = [];
      queue.push(node);

      while(queue.length){
        node = queue.shift();
        data.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data;
    }

}



const tree = new BinarySearchTree();

tree.insert(100);
tree.insert(50);
tree.insert(72);
tree.insert(101);
tree.insert(150);
tree.insert(20);

function bfs(tree){
  const queue=[];
  const visited=[];

  if(tree.root) {
    queue.push(tree.root)
  }
  else{
    return visited;
  }

  while(queue.length>0) {
    let oldQueue = queue.slice();
    for (let node of oldQueue) {
      visited.push(node);
      if(node.left!=null) queue.push(node.left);
      if(node.right!=null) queue.push(node.right);
      queue.shift();
    }
  }

  return visited;
}

// console.log(bfs(tree));
// console.log(tree.bfs());

function dfs_pre_order(tree){
  const visited=[];

  function reccursive(node,visited){
    if(node==null) return visited;
    visited.push(node);
    reccursive(node.left,visited);
    reccursive(node.right,visited);
  }

  reccursive(tree.root,visited)

  return visited;
}

console.log(dfs_pre_order(tree));