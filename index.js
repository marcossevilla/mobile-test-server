// publicPath config
const path = require('path');
const express = require('express');

// Create express app
const app = express();

// Get port to use from .env file
require('dotenv').config();

// Connect to database
const { connect } = require('./database/db.js');
connect();

// Setup document read & parsing
app.use(express.json());

// Expose publicPath
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Server routes
app.use('/api/seed', require('./routes/seed'));

app.listen(process.env.PORT, (error) => {
    if (error) throw new Error(error);
    console.log('Server running on port', process.env.PORT);
});