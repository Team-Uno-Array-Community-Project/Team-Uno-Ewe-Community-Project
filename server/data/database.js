let mongoose = require('mongoose');

const server = process.env.DB_CONNECTION;

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