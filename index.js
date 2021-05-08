// console.log("Hello from Node js");

// const Person = require('./person');

// const person1 = new Person('Steve Smith',34);

// person1.greetings();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called listener:`,data));

logger.log('Hellow Word');

logger.log("Hii");

logger.log("There ?")