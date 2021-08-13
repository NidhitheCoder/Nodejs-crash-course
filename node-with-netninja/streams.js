const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// without pipe
readStream.on('data', (chunk) => {
  console.log('+++++++++New Chunk+++++++++++');
  // console.log(chunk.toString());
  console.log(chunk);
  writeStream.write('\n NEW CHUNK \n');
  writeStream.write(chunk);
});

// with pipe we can write a stream with less code 
readStream.pipe(writeStream);
