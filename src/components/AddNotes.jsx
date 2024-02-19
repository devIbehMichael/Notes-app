import React, { useState } from 'react'

const AddNotes = ({handleAddNote}) => {
  const [noteText,setNotesText]=useState('')
 const characterLimit = 200;
  const handleChange =(event)=>{
    if(characterLimit - event.target.value.length >= 0)
    setNotesText(event.target.value)
  }
  const handleSaveClick =()=>{
    if(noteText.trim().length >0){
        handleAddNote(noteText);
        setNotesText('')
    }
    
    handleAddNote(noteText)
  }
    return (
  <div className='note new'>
<div className="notes">
    <textarea name="" id="" cols="10" rows="8" placeholder='type to add a note...'
    onChange={handleChange}
    value={noteText}
    >

    </textarea>
    <div className="note-footer">
        <small>{characterLimit - noteText.length}Remaining</small>
        <button className='save'
        onClick={handleSaveClick}
        >Save</button>
    </div>
  </div>
  </div>
  
  )
}

export default AddNotes