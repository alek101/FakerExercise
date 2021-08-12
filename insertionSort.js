const faker = require('faker');

function makeArray(size, min, max){
  const array = [];
  for (let i=0; i<size; i++) {
    array.push(faker.datatype.number({min, max}));
  }
  return array;
}

function insertionSort (array){
  const len = array.length;
  for(let i=1; i<len; i++){
    let currentValue = array[i];
    for(let j=i-1; j>=0; j--){
      if(currentValue<array[j]){
        array[j+1]=array[j];
      } else {
        array[j+1]=currentValue;
        break;
      }
    }
  }
}

const ar = makeArray(20,1,1000);
console.log(ar);
insertionSort(ar);
console.log(ar);