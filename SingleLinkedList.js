// piece of data - val
// reference to next node - next

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }


}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let node = new Node(val);
    this.length++;
    if (this.tail != null) {
      this.tail.next=node;
    }
    
    this.tail=node;
    if (this.head == null) {
      this.head = node;
    }

  }
}


// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")

// console.log(first)

const list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("next")
console.log(list)