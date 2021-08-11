const faker = require('faker');

const maxArryNumber = faker.datatype.number({min: 100, max: 1000});

const target = faker.datatype.number({min: 100, max: maxArryNumber});

function createArray(maxArryNumber){
  const array = [];
  for(let i = 1; i <= maxArryNumber; i++) array.push(i);
  return array;
}

const array = createArray(maxArryNumber);

function binarySearch (array, value) { 
  const len = array.length;
  let left = 0; let right = len-1; let middle;
  console.log('len', len, 'value', value);
  while(true) {
    middle = Math.floor((left+right)/2);
    if (array[middle] === value) return middle;
    if (array[right] === value) return right;
    if (array[middle] < value) left = middle;
    if (array[middle] > value) right = middle;
    if (right-left <=1 ) return -1;
  }
}

console.log('index is', binarySearch(array, target), 'for target ', target);

console.log('index is', binarySearch(array, 1005), 'for target ', 1005);

console.log('index is', binarySearch([1,2], 2), 'for target ', 2);

console.log('index is', binarySearch([1,2], 1), 'for target ', 1);