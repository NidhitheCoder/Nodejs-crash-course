//  To run : npm run dev
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello world!!</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // If we need to pass form then you can add it inside the object.

// Set a static folder
app.use(express.static(path.join(__dirname,'public')));

// Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));