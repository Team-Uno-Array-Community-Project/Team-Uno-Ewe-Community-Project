let mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true, 
        lowercase:false
    },
    text: {
        type:String,
        required:true,
        unique:true, 
        lowercase:false
    }

})
module.exports = mongoose.model('blog', blogSchema);