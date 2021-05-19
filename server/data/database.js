let mongoose = require('mongoose');

const server = 'mongodb+srv://Admin_Ewe:Array2021TeamEwe@team-ewe.rwk2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// `127.0.0.1:27017`;
// const database = `Ewe-count`;

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}`,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
            .then(() => {
                console.log('Database connection successful.')
            })
            .catch(err => {
                console.error('Database connection error.')
            })
    }
}

module.exports = new Database();