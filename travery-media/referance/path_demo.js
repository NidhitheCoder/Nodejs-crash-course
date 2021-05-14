const path = require('path');

//  Base file name method
console.log(__filename);
console.log(path.basename(__filename));

// Directory name method
console.log(path.dirname(__filename));

// File extension method
console.log(path.extname(__filename)) ;

// Create path object
console.log(path.parse(__filename));

// need specific property then use like this
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hellow.html
console.log(path.join(__dirname,'test','hello.html'));