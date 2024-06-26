import React from 'react'
import Note from "../Note/Note"
import './NoteContainer.css'

function NoteContainer(props) {
    const reverArray =(arr)=>{
        const array=[];
        for(let i= arr.length-1;i>=0;--i){
            array.push(arr[i]);
        }
        return array;
    };

    const notes = reverArray(props.notes);

    return (
        <div className='note-container'> 

            <div className='note_container_notes  custom-scroll'>

                {notes.map((item) => (
                    <Note key={item.id} 
                    note={item}  
                    deleteNote={props.deleteNote}
                    updateText={props.updateText}
                    // updateText2={props.updateText2} 
                    updateTitle={props.updateTitle} 
                    /> 
                    
                ))}
                
            </div>
                
    </div>
  )
}

export default NoteContainer; 