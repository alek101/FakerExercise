class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
    }
    else {
      this.last.next=node;
    }
    this.last=node;
    this.size++;
    return this.size;
  }

  dequeue(){
    if(this.size==0) return undefined;
    if(this.size==1) {
      const res = this.first;
      this.size--;
      this.first=null;
      this.last=null;
      return res;
    }
    if(this.size>1){
      const res = this.first;
      this.first = this.first.next;
      this.size--;
      return res;
    }

  }
}


// const queue = new Queue();

// console.log('enqueue',queue.enqueue("prvi"));
// console.log('enqueue',queue.enqueue("drugi"));
// console.log('enqueue',queue.enqueue("treci"));
// console.log('dequeue',queue.dequeue());
// console.log('dequeue',queue.dequeue());
// console.log('dequeue',queue.dequeue());

module.exports.Queue;