const faker = require('faker');
const {pickFromArray} = require('./lib/randomEnums');
const {locations} = require('./lib/locations')

// let randomName = faker.name.findName();

// let image = faker.image.avatar();

console.log(pickFromArray(locations));