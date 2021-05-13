

const express = require('express');
const app = express();
const database = require('./data/database');
const PORT = 3003;
const jwt = require('jsonwebtoken');
const cors = require('cors');

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.post('/admin', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'welcome to my domain',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    //admin
    const admin = {
        id: 1,
        username: 'Penny',
        password: '12345'
    }
    jwt.sign({ admin }, 'secretkey', { expiresIn: '3h'}, (err, token) => {
        res.json({
            token
        })
    });
});

// app.get('*', (req, res) => {
//     res.send('listening on PORT 3003')
//     console.log(res.send)
// });
app.use('/blog', require('./routes/routes'));
app.use('/item', require('./routes/routes'));

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

