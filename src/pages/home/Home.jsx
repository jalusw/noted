import Header from "../../components/header/Header";
import Notes from "../../components/notes/Notes";

import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getActiveNotes } from "../../utils/local-data";
import Container from "../../components/container/Container";

function Home() {
  const notesSource = getActiveNotes();
  const [notes, setNotes] = useState(notesSource);

  const updateNotes = () => setNotes(getActiveNotes());

  return (
    <>
      <Navbar notes={notes} />
      <Header backgroundColor="primary">
        <h1 className="text-white mb-0">Noted.</h1>
        <p className="text-white">
          Taking notes: because our brains are like leaky buckets, and even
          elephants forget where they left their peanuts!
        </p>
      </Header>
      <main>
        <Container size="md">
          {notes.length === 0 && (
            <p className="text-center mt-16">
              No active notes on the radar at the moment!
            </p>
          )}
          <Notes notes={notes} refresh={updateNotes} />
        </Container>
      </main>
    </>
  );
}

export default Home;
