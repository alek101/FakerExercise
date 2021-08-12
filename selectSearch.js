const faker = require('faker');

function makeArray(size, min, max){
  const array = [];
  for (let i=0; i<size; i++) {
    array.push(faker.datatype.number({min, max}));
  }
  return array;
}

function selectSort(array){
  const len=array.length;
  for(let i=0; i<len; i++){
    let minIndex = i;
    for (let j=i+1; j<len; j++){
      if(array[j]<array[minIndex]){
        minIndex=j;
      }
    }
    if(i!=minIndex)
    {
      // let temp = array[i];
      // array[i] = array [minIndex];
      // array[minIndex]= temp;
      ([array[i], array[minIndex]] = [array[minIndex], array[i]])
    }
  }
}

const ar = makeArray(20,1,1000);
console.log(ar);
selectSort(ar);
console.log(ar);