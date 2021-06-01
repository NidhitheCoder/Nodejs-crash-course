//  To run : npm run dev
const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello world!!</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Init middleware
// app.use(logger);

// Gets all members
app.get('/api/members', (req, res)=> res.json(members) );

// Get single member
app.get('/api/members/:id', (req, res) => {
  // res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member with id ${req.params.id}`}); 
  }
});

// Set a static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));