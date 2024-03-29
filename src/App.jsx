import React,{useState,useEffect} from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

function App() {
 
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('react-notes-app-data')) || []
  );
const [searchText,setSearchText]=useState('')
const [darkMode,setDarkMode] =useState(false)
useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);


const addNote =(text)=>{
  const date = new Date();
  const newNote ={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes =[...notes,newNote];
  setNotes(newNotes);
}
const deleteNote = (id) =>{
  const newNotes = notes.filter((notes)=> notes.id !==id);
  setNotes(newNotes)
}
return (
  <div className="App">
      <div className={`${darkMode && 'dark-mode'}`}> 
        <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
         <Search 
         handleSearchNote={setSearchText} />
          <NotesList 
          notes={notes.filter((notes)=>
            notes.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          />
        </div>

    </div>
    </div>
  );
}

export default App;
