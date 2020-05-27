const express = require('express'); // import express , export function
const app = express(); // create express aplication, initialize new object
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');
const PORT = 5000;
const cors = require('cors')
// app => valid request handler


require('./models/user'); // mongoose model
require('./models/post'); // mongoose model

app.use(cors()); //Access-Control-Allow-Origin 

app.use(express.json()); // every request has to be json request
app.use(require('./routes/auth'));
app.use(require('./routes/post'));


mongoose.connect(MONGOURI, {
   useUnifiedTopology: true,
   useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
   console.log('connected to mongo db');
});

mongoose.connection.on('error', (err) => {
   console.log(err);
});

app.listen(PORT, () => {
   console.log('server is running on', PORT)
})