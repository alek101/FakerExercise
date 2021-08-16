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
    if (!this.head) {
      this.head = node;
    }
    else {
      this.tail.next=node;
    }
    this.tail=node;
    this.length++;
    return this;
  }

  // traverse(){
  //   let current=this.head;
  //   while(current){
  //     console.log(current);
  //     current=current.next;
  //   }
  // }

  pop(){
    if(this.length==0) return undefined;
    if(this.length==1) {
      this.length--;
      this.head=null;
      this.tail = null;
    }
    if(this.length>1) {
      let pre_current = this.head;
      let current = pre_current.next;
      while(current){
        pre_current=pre_current.next;
        current=current.next;
      }
      this.tail=pre_current;
      this.tail.next=null;
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
    this.head=node;
    this.length++;
    return this;
  }

}

const list = new SinglyLinkedList()

list.push("hello")
list.push("goodbye")
list.push("next")
list.push("next")
console.log(list);
list.unshift("1st")
console.log(list);