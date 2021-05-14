const os = require('os');

// platform
console.log(os.platform());

// To get CPU architech
console.log(os.arch());

// To get CPU core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// To get Uptime
console.log(os.uptime());