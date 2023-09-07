require('dotenv').config();
require('./config/database')
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors'); 
const SongModel = require('./models/Song')
const SongNotesModel = require('./models/SongNotes')
const app = express();


// create connection to the database 
// mongoose.connect('mongodb+srv://dougdeckert:Kat0mles1@cluster0.qzeazxt.mongodb.net/');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });



// routes for SongModel 
// Create
app.post('/add', (req, res) => {
    const song = req.body.song; 
    SongModel.create({
        task: song
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
// Read 
app.get('/get', (req, res) => {
    SongModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
// Update
app.put('/update/:id', (req, res) => {
    const {id} = req.params; 
    SongModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
// Delete
app.delete('/delete/:id', (req, res) => {
    const {id} = req.params; 
    SongModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// routes for SongNotesModel
// Create 
app.post('/addsongnote', (req, res) => {
    const songNote = req.body.songNote; 
    const songName = req.body.songName; 
    const songNameId = req.body.songNameId; 
    SongNotesModel.create({
        songNote: songNote, 
        songName: songName,
        songNameId: songNameId
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
// Read 
app.get('/getsongnote', (req, res) => {
    SongNotesModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
//Update 
app.put('/updatesongnote/:id', (req, res) => {
    const {id} = req.params; 
    SongNotesModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
// delete 
app.delete('/deletesongnote/:id', (req, res) => {
    const {id} = req.params; 
    SongNotesModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})





// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});