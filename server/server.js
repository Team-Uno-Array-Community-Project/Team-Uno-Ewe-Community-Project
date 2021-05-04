const express = require('express');
const app = express();
// const database = require('./database');
const PORT = 3003;

app.get('*', (req, res) => {
    res.send('listening on PORT 3003')
    console.log(res.send)
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});
