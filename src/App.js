import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import './App.css';
import defaultNotes from './data/notes'

function App() {
  const [notes, setNotes] = useState(defaultNotes);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function delNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {
        notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={delNote}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;

