const fetch = require('node-fetch');

const url = `https://partajmer.30hills.com/api/v1/locations`;

async function getLocations(url){
  let result = [];
  await fetch(url)
  .then(res=>res.json())
  .then(res=> {
    result = res.results;
  }).catch((err) =>
  {
    console.log(err);
  })
  return result;
}

// async function mihailo1(fn, repetitionNumber, url){
//   const bigArray = [];
//   for (let i=0; i<repetitionNumber; i++){
//     let smallArray = await fn(url);
//     await bigArray.push(smallArray);
//     console.log(`server called ${i+1} time`);
//   }
//   console.log(bigArray);
//   return bigArray;
// }

async function mihailo2(fn, repetitionNumber, url){
  const bigArray = [];
  for (let i=0; i<repetitionNumber; i++){
    let smallArray = fn(url);
    bigArray.push(smallArray);
    console.log(`server called ${i+1} time`);
  }
  const result = await Promise.all(bigArray);
  // console.log(result);
  return result;
}

mihailo2(getLocations, 399, url);
