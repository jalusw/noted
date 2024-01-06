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
            <Notes notes={notes} refresh={updateNotes} />
          </Container>
        </section>
      </main>
    </>
  );
}

export default Archived;
