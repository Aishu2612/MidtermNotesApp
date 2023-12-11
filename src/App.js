import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import { collection, query, onSnapshot } from "firebase/firestore";

import { doc, deleteDoc } from "firebase/firestore";
import { db, auth, googleProvider } from './config/auth';
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

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

    user ?
      (<div>
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
      </div>) :
      (<div>
        <Header />
        <div class="center">
          <button type="button" onClick={signInWithGoogle} class="login-with-google-btn" >
            Sign in with Google
          </button>
        </div>
      </div>
      )
  );
}

export default App;

