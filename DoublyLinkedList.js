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

  get(index){
    if(index>=this.length || index<0 || isNaN(index)) return undefined;
    const maxIndex = this.length-1;
    let current;
    if((maxIndex-index)>=(index)) {
      current=this.head;
      if (index == 0) return current;
      for (let i=0; i<index; i++){
        current=current.next;
      }
    } else {
      current=this.tail;
      if (index == maxIndex) return current;
      for (let i=maxIndex; i>index; i--){
        current=current.prev;
      }
    }

    return current;
  }

  set(val,index){
    let current = this.get(index);
    console.log('current',current)
    if(current){
      current.val=val;
      return current;
    }
    return false;
  }

  insert(val,index){
    if(index<0 || index>this.length || isNaN(index)) return false;
    if(index==0) return this.unshift(val);
    if(index==this.length) return this.push(val);
    let node = this.get(index);
    if(node){
      let newNode = new Node(val);
      newNode.next = node;
      newNode.prev = node.prev;
      node.prev = newNode;
      node.prev.next = newNode;

      this.length++;
      return newNode;
    }
    
    return false;
  }

  remove(index){
    if(index<0 || index>=this.length || isNaN(index)) return false;
    if(index==0) return this.shift();
    if(index==this.length-1) return this.pop();
    let node = this.get(index);
    if(node){
      // const prevNode = node.prev;
      // const nextNode = node.next;
      // prevNode.next=nextNode;
      // nextNode.prev=prevNode;
      node.prev.next=node.next;
      node.next.prev=node.prev;
      this.length--;
      return true;
    }
    return false;
  }


}


const list = new DoublyLinkedList()

function cll() { console.log(list)};

list.push("hello");
// console.log(list);
list.push("world");
// cll();
list.push("uraa");
// cll();
list.push("uraa2");
// cll();
// list.pop();
// cll();
// list.unshift('1st');
// cll();
// list.shift();
// cll();
// console.log(list.get(0))
// console.log(list.get(2))
list.push('12');
list.push('24');
// console.log('0',list.get(0))
// console.log('1',list.get(1))
// console.log('2',list.get(2))
// console.log('3',list.get(3))
// console.log('4',list.get(4))
// console.log('5',list.get(5))
// console.log('6',list.get(6))
console.log(list.get(4))
list.insert('insert',4);
console.log(list.get(4))
list.remove(4);
console.log(list.get(4))
