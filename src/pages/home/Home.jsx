import Header from "../../components/header/Header";
import Notes from "../../components/notes/Notes";
import NotepadTitle from "../../components/notepad/NotepadTitle";

import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getActiveNotes } from "../../utils/local-data";
import { titleCharacterLimit } from "../../utils/constants.js";

function Home() {
  const notesSource = getActiveNotes();
  const [notes, setNotes] = useState(notesSource);
  const [query, setQuery] = useState("");

  const updateNotes = () => setNotes(getActiveNotes());

  return (
    <>
      <Navbar notes={notes} />
      <Header />
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

export default Home;
