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
    // console.log(res);
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
  return getOneArray(array).name;
}

function getOneArray(array){
  const len = array.length;
  const ran = Math.floor(Math.random()*len);
  return array[ran];
}

function getTimes(){
  const f1 = faker.datatype.number({min: 0, max: 23});
  const f2 = faker.datatype.number({min: 0, max: 23});
  const f3 = faker.datatype.number({min:0, max:59});
  const f4 = faker.datatype.number({min:0, max:59});
  let toTime, fromTime;

  if(f1>f2) {
    toTime = f1+':'+f3;
    fromTime = f2+':'+f4;
  } else if (f2>f1) {
    toTime = f2+':'+f3;
    fromTime = f1+':'+f4;
  } else if(f3>f4) {
    toTime = f1+':'+f3;
    fromTime = f2+':'+f4;
  } else {
    toTime = f1+':'+f4;
    fromTime = f2+':'+f3;
  }
  return {toTime, fromTime};
}

async function main(){
  // const web=`http://localhost:3000`;
  const web=`https://partajmer.30hills.com`;
  const locations = await getFetchData(web+'/api/v1/locations');
  const categories = await getFetchData(web+'/api/v1/categories');
  const userRes = await logIn(web+'/api/v1/signin','coyote@gmail.com','coyote');
  const token = await 'Bearer '+ userRes.token;
  const oneLocation = getOneName(locations);
  const oneCategory = getOneName(categories);

  const longLorem='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat';
  const now = new Date();

  const {fromTime, toTime} = getTimes();

  const body={
    // title: faker.lorem.word(),
    title: getOneArray(['Motaj Kablove',"It's Friday then",'Dajem kraljestvo za paginaciju', '6:1']),
    description: faker.lorem.sentence(),
    // description: longLorem,
    category: oneCategory,
    location: oneLocation,
    fromDate: faker.date.past(1, now),
    toDate: faker.date.future(2, now),
    price: faker.datatype.number({min: 100, max: 1000}),
    // price: -1000,
    fromTime,
    toTime,
    type: getOneArray(['job', 'service']),
    priceType: getOneArray(['fixed', 'per hour']),
    tags: faker.lorem.words().split(' '),
  };

  // console.log({body});

  const options = {
    method: 'POST',
    headers: {
      "Content-type":"application/json",
      // "Accept":"application/json",
      "Authorization": token
    },
    body: JSON.stringify(body)
  }

  // console.log(options);

  const job = await fetchData(web+'/api/v1/jobs',options);

  // await console.log(job);
  console.log('novi');

  return new Date();
}

const t1 = new Date();

async function bombardemnt(num=100){
  for (let i=0; i<num-1; i++){
    main();
  }
  const t2 = await main();
  console.log(t2-t1);
}

// bombardemnt(200)

// console.log(main());



function multipleBombardment(numRep, num){
  let repet = 0;
  console.log(`Interval ${repet+1}`);
  bombardemnt(num);
  repet++;

  let interval = setInterval(()=>{
    console.log(`Interval ${repet+1}`);
    bombardemnt(num);
    repet++;
    if(repet>=numRep) clearInterval(interval);
  }, 60000)
}

multipleBombardment(50,200);