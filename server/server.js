const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 3003;

require("dotenv").config();
require('./data/database');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

app.use('/api/blog', require('./routes/routes'));
app.use('/api/item', require('./routes/routes'));
app.use('/api/admin', require('./routes/admin-route'));


//make a route here to connect to our server and insert the data (insert many)
// Function call
// User.insertMany([
//     { name: 'Gourav', age: 20 },
//     { name: 'Kartik', age: 20 },
//     { name: 'Niharika', age: 20 }
// ]).then(function () {
//     console.log("Data inserted")  // Success
// }).catch(function (error) {
//     console.log(error)      // Failure
// });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});