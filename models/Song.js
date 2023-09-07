// server model  
const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    // id: String,
    task: String, 
    done: {
        type: Boolean, 
        default: false
    }
})

const SongModel = mongoose.model("Songs", SongSchema)
module.exports = SongModel