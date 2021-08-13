// const user = require('./people');

// console.log(user.people);
// console.log(user.ages);

const { people, ages } = require('./people');

console.log(people);
console.log(ages);

// // Node created core modules examples
const os = require('os');
console.log(os.platform(), os.homedir());
