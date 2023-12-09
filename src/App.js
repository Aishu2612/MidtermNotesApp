import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './auth/auth'
import './App.css';
import defaultNotes from './data/notes'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesColRef = query(collection(db, 'Notes'));
    console.log(notesColRef);
    onSnapshot(notesColRef, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

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
        console.log(notes)
      }
      {
      
        notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              id={index}
              title={note.data.title}
              content={note.data.content}
              onDelete={delNote}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;

