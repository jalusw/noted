import { useState } from "react";
import { titleCharacterLimit } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import NotepadBody from "./NotepadBody";
import NotepadTitle from "./NotepadTitle";
import SaveIcon from "../icons/SaveIcon";
import { addNote } from "../../utils/local-data";
import Button from "../button/Button";

function Notepad() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const validateInput = () => title.trim().length > 0;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validateInput()) return;

    const note = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote(note);
    navigate("/");
  };

  return (
    <form className="shadow-border p-6 rounded" onSubmit={submitHandler}>
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
      <Button variant="primary" className=" mt-8 flex items-center space-x-2">
        <SaveIcon />
        <span>Save</span>
      </Button>
    </form>
  );
}
export default Notepad;
