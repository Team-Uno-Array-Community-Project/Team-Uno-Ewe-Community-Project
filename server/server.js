//setting up callback points for necessary dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 3003;
const mongoose = require('mongoose');

// configuring the dotenv code to be used
require("dotenv").config();

//setting up the app to have access to called dependencies
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

//setting the respective routes for fetch requests to the server
app.use('/api/blog', require('./routes/blogs.route'));
app.use('/api/item', require('./routes/items.route'));
app.use('/api/admin', require('./routes/admin-route'));
app.use('/api/contact', require('./routes/contact-form.route'));

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("CONNECTED to DB!")
  );

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});