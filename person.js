// // Module wrapper function
//  (function(exports,require,module,_filename,_dirname){});

// console.log(__filename,__dirname);  // These things return file pathname  and directory path of this specific file

class Person {
  constructor(name,age){
    this.name = name,
    this.age = age
  }

  greetings (){
    console.log(`My name is ${this.name} and I am ${this.age} Years old.`)
  }

};

module.exports = Person
