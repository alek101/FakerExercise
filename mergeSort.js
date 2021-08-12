const a=[1,3,5,7];

const b=[2,3,6,9,22];

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

    if(ar1[i] && !ar2[j]){
      arr.push(ar1[i]);
      i++;
    }

    if(!ar1[i] && ar2[j]){
      arr.push(ar2[j]);
      j++;
    }
  }

  return arr;
}

console.log(mergeTwoArrays(a,b));