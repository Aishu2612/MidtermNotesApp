import React, { useState } from "react";
import {db} from '../auth/auth';
import {collection, addDoc} from 'firebase/firestore';
function AddNote(props) {
  //const [note, setNote] = useState('');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


 

  const add_submitNote = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'Notes'), {
        title: title,
        content:content
      });

      setTitle('');setContent('');
     
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={(e) => setContent(e.target.value)} 
          value={content}
          placeholder="Add note  ..."
          rows="3"
        />
        <button onClick={add_submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
