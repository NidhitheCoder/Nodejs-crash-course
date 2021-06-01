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

// Init middleware
app.use(logger);

// Gets all members
app.get('/api/members', (req, res)=> res.json(members) );

// Set a static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));