// console.log(global);

// global.setTimeout(() => {
//   console.log('In the timeout');
// }, 3000);

// // Here no need to add global object for calling method. We can directly call the method.
setTimeout(() => {
  console.log('In the timeout');
  clearInterval(int);
}, 3000);

// set Interval
const int = setInterval(() => {
  console.log('In the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);
