import Notes from "../../components/notes/Notes";
import NotepadTitle from "../../components/notepad/NotepadTitle";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getArchivedNotes } from "../../utils/local-data";

function Archived() {
  const notesSource = getArchivedNotes();
  const [notes, setNotes] = useState(notesSource);
  const [query, setQuery] = useState("");

  const updateNotes = () => setNotes(getArchivedNotes());

  return (
    <>
      <Navbar notes={notes} />
      <main>
        <section>
          <div className="container max-w-screen-md mx-auto">
            <Notes
              notes={notes.filter((note) =>
                new RegExp(query, "i").test(note.title),
              )}
              refresh={updateNotes}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Archived;
