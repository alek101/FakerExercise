class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let node = new Node(val);
    if(this.size==0){
      this.first=node;
      this.last=node;
      this.size++;
      return this.size;
    }
    node.next=this.first;
    this.first.prev=node;
    this.first=node;
    this.size++;
    return this.size;
  }

  pop(){
    if(this.size==0) return undefined;
    if(this.size==1) {
      const res = this.last;
      this.size--;
      this.first = null;
      this.last = null;
      return res;
    }
    if(this.size>1) {
      const res = this.last;
      this.last = this.last.prev;
      this.last.next = null;
      this.size--;
      return res;
    }
  }
}

module.exports.Queue;
// const stack = new Queue();

// console.log('push',stack.push("prvi"));
// console.log('push',stack.push("drugi"));
// console.log('push',stack.push("treci"));
// console.log('pop',stack.pop());
// console.log('pop',stack.pop());
// console.log('pop',stack.pop());