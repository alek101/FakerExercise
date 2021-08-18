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
  

}



const tree = new BinarySearchTree();

// console.log(tree.find(100));
// tree.insert(100);
// tree.insert(50);
// tree.insert(72);
// tree.insert(101);
// // tree.insert(100);
// tree.insert(150);
// tree.insert(20);
// // console.log(tree);
// console.log(tree.find(100));
// console.log(tree.find(20));
// console.log(tree.find(53));

module.exports.BinarySearchTree;