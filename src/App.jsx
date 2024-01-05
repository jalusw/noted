import Header from "./components/header/Header";
import Notepad from "./components/notepad/Notepad";
import Notes from "./components/notes/Notes";
import { useState } from "react";
import { getInitialData } from "./utils";
import NotepadTitle from "./components/notepad/NotepadTitle";

function App() {
  const initialData = getInitialData();
  const titleCharacterLimit = 50;
  const [notes, setNotes] = useState(initialData);
  const [query, setQuery] = useState("");

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
      <Header />
      <main>
        <section className="py-10">
          <div className="container max-w-screen-md">
            <h2 className="font-bold text-2xl text-sky-600 mb-4">
              Write A Note
            </h2>
            <Notepad
              titleCharacterLimit={titleCharacterLimit}
              insertNote={(note) => {
                setNotes([...notes, note]);
              }}
            />
          </div>
        </section>
        <section className="">
          <div className="container max-w-screen-md">
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
        <section className="py-10">
          <div className="container max-w-screen-md">
            <h2 className="font-bold text-2xl text-sky-600">
              Your Active Notes
            </h2>
            <Notes
              data={notes.filter(
                (note) =>
                  new RegExp(query, "i").test(note.title) && !note.archived,
              )}
              toggleNoteArchive={toggleNoteArchive}
              deleteNote={deleteNote}
            />
          </div>
        </section>
        <section className="py-10">
          <div className="container max-w-screen-md">
            <h2 className="font-bold text-2xl text-sky-600">
              Your Archived Notes
            </h2>
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

export default App;
