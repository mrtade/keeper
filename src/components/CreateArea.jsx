import React, { useState } from 'react';

function CreateArea() {
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const [notes, setNotes] = useState('');

  function handleTitleChange(event) {
    // const newTitleText = event.target.value;
    setTitleText(event.target.value);
  }

  function handleContentChange(event) {
    // const newContentText = event.target.value;
    setContentText(event.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    const id = Math.round(Math.random() * 999);
    const entry = {
      title: titleText,
      content: contentText,
      id: id,
    };
    setNotes(prevNotes => [...prevNotes, entry]);
    // console.log(notes);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={titleText}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={contentText}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
