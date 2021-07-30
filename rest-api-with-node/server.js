require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection; // mongodb connection started
db.on('error', (error) => console.error(erro));
db.once('open', () => console.log('Connected to the database'));

app.use(express.json());
const subscribersRouter = require('./routes/subscribers.js');
app.use('/subscribers', subscribersRouter);

app.listen(8000, () => console.log('Server started'));
