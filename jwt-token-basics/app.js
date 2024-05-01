require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();


// middleware
console.log("Hello welcome home...");

app.use(express.json())