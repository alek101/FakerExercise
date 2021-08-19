class MaxBinaryHeap {
  constructor(){
    this.values=[];
  }

  bubleUp(){
    let index = this.values.length-1;
    let parentIndex = Math.floor((index-1)/2);
    while(this.values[index]>this.values[parentIndex] && parentIndex>=0){
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index=parentIndex;
      parentIndex = Math.floor((index-1)/2);
    }
  }

  insert(val){
    if(this.values.indexOf(val)==-1){
      this.values.push(val);
      this.bubleUp();
      return this.values;
    }
    else{
      return false;
    }
  }

  returnBiggestChild(index){
    const ch_1_indx = 2 * index + 1;
    const ch_2_indx = 2 * index + 2;

    if(this.values[ch_1_indx]){
      if(this.values[ch_2_indx]){
        if(this.values[ch_1_indx]>this.values[ch_2_indx] && this.values[ch_1_indx]>this.values[index]) return ch_1_indx;
        if(this.values[ch_2_indx]>this.values[ch_1_indx] && this.values[ch_2_indx]>this.values[index]) return ch_2_indx;
      } else {
        if(this.values[ch_1_indx]>this.values[index]) return ch_1_indx;
      }
    }

    return false;
  }

  removeMax(){
    const len = this.values.length;
    if (len == 0) return false;
    if (len == 1) this.values.pop();
    let temp = this.values[0];
    this.values[0] = this.values[len-1];
    this.values[len-1] = temp;
    this.values.pop();
    let currentIndex = 0;
    let bigestChildIndex=this.returnBiggestChild(currentIndex);
    while(bigestChildIndex) {
      let temp = this.values[currentIndex];
      this.values[currentIndex] = this.values[bigestChildIndex];
      this.values[bigestChildIndex] = temp;
      currentIndex=bigestChildIndex;
      bigestChildIndex=this.returnBiggestChild(currentIndex);
    }
    return this.values;
  }
}

const mbh = new MaxBinaryHeap();

mbh.insert(10);
mbh.insert(23);
mbh.insert(45);
mbh.insert(7);
mbh.insert(9);
mbh.insert(86);
mbh.insert(43);
mbh.insert(45);
mbh.insert(100);

console.log(mbh.values);
console.log(mbh.removeMax());
