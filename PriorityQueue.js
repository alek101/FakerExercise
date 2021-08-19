class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.queue=[];
  }

  bubleUp(){
    let index = this.queue.length-1;
    let parentIndex = Math.floor((index-1)/2);
    while(parentIndex>=0 && this.queue[index].priority<this.queue[parentIndex].priority){
      let temp = this.queue[index];
      this.queue[index] = this.queue[parentIndex];
      this.queue[parentIndex] = temp;
      index=parentIndex;
      parentIndex = Math.floor((index-1)/2);
    }
  }

  enqueue(val,priority){
      const node = new Node (val, priority);
      this.queue.push(node);
      this.bubleUp();
      return this.queue;
   
  }

  returnBiggestChild(index){
    const ch_1_indx = 2 * index + 1;
    const ch_2_indx = 2 * index + 2;

    if(this.queue[ch_1_indx]){
      if(this.queue[ch_2_indx]){
        if(this.queue[ch_1_indx].priority<this.queue[ch_2_indx].priority && this.queue[ch_1_indx].priority<this.queue[index].priority) return ch_1_indx;
        if(this.queue[ch_2_indx].priority<this.queue[ch_1_indx].priority && this.queue[ch_2_indx].priority<this.queue[index].priority) return ch_2_indx;
      } else {
        if(this.queue[ch_1_indx].priority<this.queue[index].priority) return ch_1_indx;
      }
    }

    return false;
  }

  dequeue(){
    const len = this.queue.length;
    if (len == 0) return false;
    if (len == 1) return this.queue.pop();
    let temp = this.queue[0];
    this.queue[0] = this.queue[len-1];
    this.queue[len-1] = temp;
    const max = this.queue.pop();
    let currentIndex = 0;
    let bigestChildIndex=this.returnBiggestChild(currentIndex);
    while(bigestChildIndex) {
      let temp = this.queue[currentIndex];
      this.queue[currentIndex] = this.queue[bigestChildIndex];
      this.queue[bigestChildIndex] = temp;
      currentIndex=bigestChildIndex;
      bigestChildIndex=this.returnBiggestChild(currentIndex);
    }
    return max;
  }
}

const kju = new PriorityQueue();

kju.enqueue('value',10);
kju.enqueue('value',23);
kju.enqueue('value',45);
kju.enqueue('value',7);
kju.enqueue('value',9);
kju.enqueue('value',86);
kju.enqueue('value',43);
kju.enqueue('value',45);
kju.enqueue('value',100);
kju.enqueue('value',9);

console.log(kju.queue);
console.log(kju.dequeue());
console.log(kju.queue);