const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
const cors = require('cors');


app.use(cookieParser()); 
app.use(cors());

app.use('/blog', require('./routes/blogs.route'));
app.use('/item', require('./routes/items.route'));

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