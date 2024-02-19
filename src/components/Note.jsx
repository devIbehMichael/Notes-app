import React from 'react'
// import { MdDeleteForever } from "../../../node_modules/react-icons/io";
const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            {/* <MdDeleteForever  className="delete-icon" size='1.3rem'/>   */}
            <button onClick={()=> handleDeleteNote(id)}>del</button>
        </div>
    </div>
  )
}

export default Note