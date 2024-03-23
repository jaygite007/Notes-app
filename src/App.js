
import React, { useEffect,useState } from 'react';
import NoteContainer from './components/NoteContainer/NoteContainer';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [notes,setNotes]   = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNote = ()=>{
    const tempNotes = [...notes]; 

    tempNotes.push({
      title:"",
      id   :  Date.now() +""+(Math.random()*78),
      text : "",
      time : Date.now(),
    });
    setNotes(tempNotes);
  }

const deleteNote =(id)=> {
  const tempNotes =[...notes]
  const index = tempNotes.findIndex(item=>item.id === id)
  if(index < 0) return;
  tempNotes.splice(index,1);
  setNotes(tempNotes);
}



const updateText=(text,id)=>{
  const tempNotes =[...notes]
  const index = tempNotes.findIndex(item=>item.id === id)
  if(index < 0) return;
  tempNotes[index].text=text;
  setNotes(tempNotes); 
};
const updateTitle=(title,id)=>{
  const tempNotes =[...notes]
  const index = tempNotes.findIndex(item=>item.id === id)
  if(index < 0) return;
  tempNotes[index].title=title;
  setNotes(tempNotes); 
};




useEffect(() => {
  localStorage.setItem('notes-app',JSON.stringify(notes))
}, [notes])



  return (
   <div className='App'>
    
      <h2 className='t'>Notes App</h2>
      
      <div className='content'>
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText} updateTitle={updateTitle} />
      </div>
   </div>
  );
}

export default App;
