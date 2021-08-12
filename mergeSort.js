const faker = require('faker');

const a=[1,3,5,7];

const b=[2,3,6,9,22,76];

function makeArray(size, min, max){
  const array = [];
  for (let i=0; i<size; i++) {
    array.push(faker.datatype.number({min, max}));
  }
  return array;
}

const ar = makeArray(20,1,1000);

console.log(ar);

function mergeTwoArrays(ar1, ar2){
  const arr=[];
  const len1=ar1.length;
  const len2=ar2.length;
  let i=0; let j=0;

  while(i<len1 && j<len2){
    if(ar1[i] && ar2[j] && ar1[i]<=ar2[j]){
      arr.push(ar1[i]);
      i++;
    }
    else {
      arr.push(ar2[j]);
      j++;
    }
  }

  while(i < len1){
    arr.push(ar1[i]);
    i++;
  }

  while(j < len2){
    arr.push(ar2[j]);
    j++;
  }

  return arr;
}

function mergeSort(array){
  
  const len=array.length;
  if(len<=1) return array;
  let lenHalf=Math.floor(len/2);
  let a=mergeSort(array.slice(0, lenHalf));
  let b=mergeSort(array.slice(lenHalf,len));
  return mergeTwoArrays(a, b);
}


console.log(mergeSort(ar))