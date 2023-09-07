import React from 'react'
import CreateSong from '../../components/CreateSong/CreateSong'
import SongContainer from '../../components/SongContainer/SongContainer'
// import css? 

function NewOrderPage() {
    
  return (
    <div className="home">
        <h2>Repertoire List</h2>
        <CreateSong />
        <SongContainer  /> 
      
    </div>
  )
}

export default NewOrderPage