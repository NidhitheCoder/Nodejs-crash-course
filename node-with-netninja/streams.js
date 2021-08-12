const fs = require('fs');

const readStream = fs.createReadStream('./node-with-netninja/docs/blog3.txt', {encoding: 'utf8' });
readStream.on('data', (chunk) => {
  console.log('+++++++++New Chunk+++++++++++');
  // console.log(chunk.toString());
  console.log(chunk);
});