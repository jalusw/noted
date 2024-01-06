import { useState } from "react";
import { titleCharacterLimit } from "../../utils/constants";
import NotepadBody from "./NotepadBody";
import NotepadTitle from "./NotepadTitle";
import SaveIcon from "../icons/SaveIcon";
import { addNote } from "../../utils/local-data";

function Notepad(props) {
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

    addNote(note);
  };

  return (
    <form className="shadow-border p-8" onSubmit={submitHandler}>
      <section>
        <NotepadTitle
          onChange={(event) =>
            event.target.value.length <= titleCharacterLimit &&
            setTitle(event.target.value)
          }
          value={title}
        />
      </section>
      <section>
        <NotepadBody
          onChange={(event) => setBody(event.target.innerHTML)}
          value={body}
        />
      </section>
      <button className="p-2 px-4 mt-8 flex items-center space-x-2 text-white bg-sky-600 rounded">
        <SaveIcon />
        <span>Save</span>
      </button>
    </form>
  );
}
export default Notepad;
