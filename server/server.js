

const express = require('express');
const app = express();
const database = require('./data/database');
const PORT = 3003;
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// app.get('*', (req, res) => {
//     res.send('listening on PORT 3003')
//     console.log(res.send)
// });
app.use('/blog', require('./routes/routes'));
app.use('/item', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

