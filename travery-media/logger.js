const eventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());

class Logger extends eventEmitter {
  log(msg) {
    // call event 
    this.emit('message', {id : uuid.v4(), msg});
  }
}

module.exports = Logger;