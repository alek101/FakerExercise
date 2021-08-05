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
  .then(res=>{
    // console.log(res)
    return res.json()})
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

  const longLorem='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat';

  const options = {
    method: 'POST',
    headers: {
      "Content-type":"application/json",
      // "Accept":"application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      title: faker.lorem.word(),
      type: 'service',
      description: faker.lorem.sentence(),
      // description: longLorem,
      category: oneCategory,
      location: oneLocation,
      fromDate: Date.now(),
      toDate: Date.now(),
      price: faker.datatype.number({min: 100, max: 1000}),
      fromTime: faker.lorem.word(),
      toTime: faker.lorem.word()
    })
  }

  // console.log(options);

  const job = await fetchData(web+'/api/v1/jobs',options);

  await console.log(job);
  console.log('novi');
}

function bombardemnt(num=100){
  for (let i=0; i<num; i++){
    main();
  }
}

bombardemnt(1)

// console.log(main());