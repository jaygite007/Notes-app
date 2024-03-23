import React from 'react'
import './Note.css'
function Note(props) {

  let timer = 500, timeout;

  const formateDate = (value) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(value)
    if (!value) return "";
    let hrs = date.getHours();
    let ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;


    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min

    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${ampm} [ ${month} , ${day} ]`
  }


  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  }
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id))
  }
  const updateTitle = (title, id) => {
    debounce(() => props.updateTitle(title, id))
  }




  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea
        className='note_title'
        placeholder='Enter Title'
        defaultValue={props.note.title}
        onChange={(event) => updateTitle(event.target.value, props.note.id)}
      />

      <div className='line' style={{ width: '105%', height: '1px', backgroundColor: 'black' }}></div>
      <br />

      <textarea
        className='note_text custom-scroll'
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />

      <div className='note_footer'>

        <p>{formateDate(props.note.time)}</p>
        <ion-icon name="trash-outline" onClick={() => props.deleteNote(props.note.id)}></ion-icon>

      </div>
    </div>
  )
}

export default Note