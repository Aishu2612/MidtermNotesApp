import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

import {collection, query,  onSnapshot} from "firebase/firestore";

import { doc, deleteDoc} from "firebase/firestore";
import {db} from './auth/auth'
import './App.css';

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


  async function handleDelete (note)  {
    console.log(note);
    const noteDocRef = doc(db, 'Notes', note.id)
    try{
      await deleteDoc(noteDocRef)
    } catch (err) {
      alert(err)
    }
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
              title={note.data.title}
              content={note.data.content}
              onDelete={()=>handleDelete(note)}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;

