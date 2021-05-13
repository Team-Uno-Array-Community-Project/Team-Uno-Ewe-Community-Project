const express = require('express');
const app = express();
const PORT = 3001;

require('./data/database');

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

//format of token


//verify token
function verifyToken(req, res, next) {
    // get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
        //split at the space
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //next middleware
        next();

    } else {
        res.sendStatus(403);
    }

}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});