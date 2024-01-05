import Note from "../note/Note";
import EmptyNotesMessage from "./EmptyNotesMessage";

function Notes({ data: notes, toggleNoteArchive, deleteNote }) {
  if (notes.length === 0) return <EmptyNotesMessage />;
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          data={note}
          toggleNoteArchive={toggleNoteArchive}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
export default Notes;
