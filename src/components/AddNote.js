import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onTextChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={onTextChange}
          value={note.title}
          placeholder="Note Title"
        />
        <textarea
          name="content"
          onChange={onTextChange}
          value={note.content}
          placeholder="Add note  ..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
