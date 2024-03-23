import React from 'react'
import './Sidebar.css'
function Sidebar(props) {
  return (
    <div className='sidebar'>
        {/* <h1>New Note</h1> */}
        <p className='button-33'> <h2> Add Note </h2> <ion-icon name="add-circle-outline" alt="Add" onClick={()=>props.addNote()} className='plus'></ion-icon> </p>
    </div>
  )
}

export default Sidebar