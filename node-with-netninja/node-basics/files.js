const fs = require('fs');

//  Reading files
fs.readFile('./docs/blog.txt', (err, data) => {
  err && console.log(err);
  data && console.log(data); // This is actually return the buffor of the data.
  data && console.log(data.toString());
});
console.log('Last lines');

// Writing files - With write files we can replace a file with new content
// or create new file with the given content.
fs.writeFile('./docs/blog.txt', 'Hello world', () => {
  console.log('File was written');
});

fs.writeFile('./docs/blogpost2.txt', 'New blog with content', () => {
  console.log('File was written');
});

// Directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder Created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Folder is deleted');
  });
}

// Delete files
if(fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
