const faker = require('faker');

function makeArray(size, min, max){
  const array = [];
  for (let i=0; i<size; i++) {
    array.push(faker.datatype.number({min, max}));
  }
  return array;
}

const ar = makeArray(20,1,1000);
console.log(ar);

// function moveArray(array,from,to){
//   if(from<array.length && to<array.length){
//     const movedValue = array[from];
//     array.splice(from,1);
//     if(from < to){
//       array.splice(to,0,movedValue);
//     }
//     else {
//       array.splice(to,0,movedValue);
//     }
//   }
// }

function moveArray(array,from,to){
    ([array[from], array[to]] = [array[to], array[from]])
}

function pivot(array, start=0, end=array.length+1){
  const pivot = array[start];
  let swapInd=start;

  for(let i=start; i<end; i++){
    if(array[i]<pivot){
      moveArray(array,i,start+1);
      swapInd++
    }
  }
  moveArray(array,start,swapInd);
  return swapInd;
}

function quickSort(array, left=0, right=array.length-1){
  if(left < right) {
    const pivotInx = pivot(array, left, right);
    quickSort(array,left,pivotInx-1);
    quickSort(array,pivotInx+1,right);
  }
  return array;
}

quickSort(ar);
console.log(ar);
