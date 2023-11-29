import { useState } from "react";
import NotepadBody from "./NotepadBody";
import NotepadTitle from "./NotepadTitle";

function Notepad(props) {
  const titleCharacterLimit = props.titleCharacterLimit || 50;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const note = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    props.insertNote(note);
  };

  return (
    <form onSubmit={submitHandler}>
      <NotepadTitle
        onChange={(event) =>
          event.target.value.length <= titleCharacterLimit &&
          setTitle(event.target.value)
        }
        value={title}
      />
      <p className="mt-1 mb-4">
        There are still {titleCharacterLimit - title.length} characters left.
      </p>
      <NotepadBody onChange={(event) => setBody(event.target.value)} />
      <button className=" p-2 px-4 mt-2 text-white bg-sky-600 rounded">
        Save
      </button>
    </form>
  );
}
export default Notepad;
