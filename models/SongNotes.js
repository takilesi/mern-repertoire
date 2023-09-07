// server model  
const mongoose = require('mongoose')

const SongNotesSchema = new mongoose.Schema({
    songName: String, 
    songNameId: String, 
    songNote: String, 
    done: {
        type: Boolean, 
        default: false
    }
})

const SongNotesModel = mongoose.model("songnotes", SongNotesSchema)
module.exports = SongNotesModel