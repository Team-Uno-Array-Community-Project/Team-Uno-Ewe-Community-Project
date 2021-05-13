const express = require('express');
const app = express();
const database = require('./data/database');
const PORT = 3003;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


app.use('/api/blog', require('./routes/routes'));
app.use('/api/item', require('./routes/routes'));
app.use('/api/admin', require('./routes/admin-route'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

