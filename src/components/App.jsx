import React, { useState } from 'react';

import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function handleDelete(noteId) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
