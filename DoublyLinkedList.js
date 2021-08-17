// piece of data - val
// reference to next node - next -prev

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let node = new Node(val);
    if(this.length == 0){
      this.head = node;
    }
    if(this.length > 0){
      this.tail.next=node;
      node.prev = this.tail; 
    }
    this.tail=node;
    this.length++;
    return this;
  }

  pop(){
    if(this.length==0) return undefined;
    if(this.length==1) {
      this.length--;
      this.head = null;
      this.tail = null;
    }
    if(this.length>1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }

  shift(){
    if(this.length==0) return undefined;
    if(this.length==1) {
      this.length--;
      this.head=null;
      this.tail=null;
    }
    if(this.length>1){
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    return this;
  }

  unshift(val){
    let node = new Node(val);
    if(this.length==0){
      this.head=node;
      this.tail=node;
      return this;
    }
    node.next=this.head;
    this.head.prev=node;
    this.head=node;
    this.length++;
    return this;
  }

}


const list = new DoublyLinkedList()

function cll() { console.log(list)};

list.push("hello");
console.log(list);
list.push("world");
cll();
list.push("uraa");
cll();
list.push("uraa2");
cll();
list.pop();
cll();
list.unshift('1st');
cll();
list.shift();
cll();
