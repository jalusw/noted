import Notes from "../../components/notes/Notes";
import NotepadTitle from "../../components/notepad/NotepadTitle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

function Archived({ data }) {
  const location = useLocation();
  const [notes, setNotes] = useState(data || location.state.notes);
  const [query, setQuery] = useState("");

  const titleCharacterLimit = 50;

  const toggleNoteArchive = (target) => {
    setNotes(
      notes.map((note) =>
        note.id === target.id ? { ...note, archived: !note.archived } : note,
      ),
    );
  };

  const deleteNote = (target) => {
    setNotes(notes.filter((note) => note.id !== target.id));
  };

  return (
    <>
      <Navbar notes={notes} />
      <main>
        <section>
          <div className="container max-w-screen-md mx-auto mt-8 mb-4">
            <NotepadTitle
              placeholder="Search A Note"
              onChange={(event) => {
                event.target.value.length <= titleCharacterLimit &&
                  setQuery(event.target.value);
              }}
              value={query}
            />
          </div>
        </section>
        <section>
          <div className="container max-w-screen-md mx-auto">
            <Notes
              data={notes.filter(
                (note) =>
                  new RegExp(query, "i").test(note.title) && note.archived,
              )}
              toggleNoteArchive={toggleNoteArchive}
              deleteNote={deleteNote}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Archived;
