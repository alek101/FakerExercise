const fetch = require('node-fetch');
const faker = require('faker');

async function getFetchData(url){
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

async function logIn(url,email,password){
  let result;
  
  let options={
    method: 'POST',
    headers: {
      "Content-type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }
  await fetch(url,options)
  .then(res=>res.json())
  .then(res=> {
    result = res;
  }).catch((err) =>
  {
    console.log(err);
  })
  return result;
}

async function fetchData(url,options){
  let result;
  await fetch(url,options)
  .then(res=>res.json())
  .then(res=> {
    result = res;
  }).catch((err) =>
  {
    console.log(err);
  })
  return result;
}

function getOneName(array){
  const len = array.length;
  const ran = Math.floor(Math.random()*len);
  return array[ran].name;
}

async function main(){
  // const web=`http://localhost:8011`;
  const web=`https://partajmer.30hills.com`;
  const locations = await getFetchData(web+'/api/v1/locations');
  const categories = await getFetchData(web+'/api/v1/categories');
  const userRes = await logIn(web+'/api/v1/signin','alekp111@gmail.com','123456');
  const token = await 'Bearer '+ userRes.token;
  const oneLocation = getOneName(locations);
  const oneCategory = getOneName(categories);

  const options = {
    method: 'POST',
    headers: {
      "Content-type":"application/json",
      "Accept":"application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      title: faker.lorem.word(),
      type: 'job',
      description: faker.lorem.sentence(),
      category: oneCategory,
      location: oneLocation,
      fromDate: Date.now(),
      toDate: Date.now()
    })
  }

  // console.log(options);

  const job = await fetchData(web+'/api/v1/jobs',options);

  // await console.log(job);
  console.log('novi');
}

function bombardemnt(num=100){
  for (let i=0; i<num; i++){
    main();
  }
}

bombardemnt()

// console.log(main());