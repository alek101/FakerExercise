const faker = require('faker');

function makeArray(size, min, max){
  const array = [];
  for (let i=0; i<size; i++) {
    array.push(faker.datatype.number({min, max}));
  }
  return array;
}

const ar = makeArray(20,1,100000);
console.log(ar);

function numDigits(number){
  number = Math.abs(number);
  return String(number).length;
}

// console.log(numDigits(199), numDigits(-1234));

function getDigit(num, indexBack){
  num = Math.abs(num);
  const size = numDigits(num);
  if(indexBack>size-1) return 0;
  return String(num)[size-indexBack-1] * 1;
}

// console.log(
//   getDigit(1234,0),
//   getDigit(1234,1),
//   getDigit(1234,5)
//   )

function radexSort(array){
  const len = array.length;
  const maxNum=Math.max(...array);
  const maxDig = numDigits(maxNum);

  for(let k=0; k<maxDig; k++){
    const buckets = Array.from({length: 10}, ()=>[]);
    for (let i=0; i<len; i++) {
      buckets[getDigit(array[i],k)].push(array[i]);
    }
    array = buckets.flat();
  }

  return array;
}


console.log(radexSort(ar));