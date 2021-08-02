const faker = require('faker');
const {pickFromArray} = require('./lib/randomEnums');
const {locations} = require('./lib/locations')

// let randomName = faker.name.findName();

// let image = faker.image.avatar();

// console.log(pickFromArray(locations));

// const {filterJobs}=require('./lib/filterJobs');


// const {filterJobsB}=require('./lib/filterJobsB');

// console.log(filterJobsB({query: {
//     title:'nesto',
//     creator: 'neko',
//     type: 'job',
//     minPrice: 20,
//     maxPrice: 30,
//     category: 'casovi',
//     location: 'Beograd',
//     tags: ['tag1','tag2'],
//     sortTimeAsc: true,
//     sortTimeDec: true,
// }},true))

console.log(faker.internet.password());
console.log(faker.datatype.number({'min': 1, 'max': 5},));
console.log(faker.address.city());
