import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import Login from './auth/Login'

import { collection, query, onSnapshot } from "firebase/firestore";

import { doc, deleteDoc } from "firebase/firestore";
import { db,auth } from './auth/auth'
import './App.css';


//import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [notes, setNotes] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const notesColRef = query(collection(db, 'Notes'));
    console.log(notesColRef);
    onSnapshot(notesColRef, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }


  async function handleDelete(note) {
    console.log(note);
    const noteDocRef = doc(db, 'Notes', note.id)
    try {
      await deleteDoc(noteDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    !user ?  <Login/> :

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
              onDelete={() => handleDelete(note)}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;

