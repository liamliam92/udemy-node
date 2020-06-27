// Modules
const express = require('express');
const pug = require('pug');
const db = require('./models/dbconnection');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'pug');

// Require Routes 

require('./routes/index.js')(app);
require('./routes/contact.js')(app);

app.listen(port);
