import React, {useState} from 'react'
import "./CreateSongNote.css"
import axios from 'axios'
import SongNoteContainer from '../SongNoteContainer/SongNoteContainer'

function CreateSongNote( {currentSong, trigger, setTrigger} ) {
    // const [currentSong, setCurrentSong] = useState(currentSong); 
    const [songNote, setSongNote] = useState()
    const [trigger2, setTrigger2] = useState(0); 
    const songName = currentSong.task
    const songNameId = currentSong._id

    // good place for console.logs
   
    const handleAdd = () => {
        // pass this data to the server side route 
        axios.post('http://localhost:3001/addsongnote', 
        {
          songNote: songNote, 
          songName: songName,
          songNameId: songNameId
        })

        // .then(result => {
        //   location.reload()
        // })
        // .catch(err => console.log(err))
      }

  return ( 
    <div>
        <p>Enter note for... {currentSong.task}</p> 
        <div className="create_form">
            <input  type="text" placeholder="Song Note" onChange={(e) => setSongNote(e.target.value)} />
            <button type="button" onClick={()=> {
                handleAdd();
                setTrigger2((trigger2) => trigger2 + 1)
             
            }
           
                
            }>Add</button>
        </div>
        <SongNoteContainer 
            currentSong={currentSong} 
            trigger={trigger} 
            trigger2={trigger2}/>
    </div>
  )
}

export default CreateSongNote