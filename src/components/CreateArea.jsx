import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    id: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    setNote(prevNote => {
      return { ...prevNote, id: Math.round(Math.random() * 999) };
    });
    props.onAdd(note);
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
