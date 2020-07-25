import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    id: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value, // dig into how this really works
        // id: Math.round(Math.random() * 999), <-- this works as the random id is always generated onchange
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    // Why doesn't this work? The random ID is a step behind
    // setNote(prevNote => {
    //   return { ...prevNote, id: Math.round(Math.random() * 999) };
    // });

    // This sets state and renders correct state
    setNote(prevNote => {
      const randId = Math.round(Math.random() * 999);
      return (prevNote.id = randId);
    });
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
      id: 0,
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
