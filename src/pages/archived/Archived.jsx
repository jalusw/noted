import Notes from "../../components/notes/Notes";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getArchivedNotes } from "../../utils/local-data";
import Container from "../../components/container/Container";

function Archived() {
  const notesSource = getArchivedNotes();
  const [notes, setNotes] = useState(notesSource);

  const updateNotes = () => setNotes(getArchivedNotes());

  return (
    <>
      <Navbar notes={notes} />
      <main>
        <section>
          <Container size="md">
            {notes.length === 0 && (
              <p className="text-center mt-16">
                No archive notes on the radar at the moment!
              </p>
            )}
            <Notes notes={notes} refresh={updateNotes} />
          </Container>
        </section>
      </main>
    </>
  );
}

export default Archived;
