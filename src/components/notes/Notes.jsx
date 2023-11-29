import Note from "../note/Note";
function Notes(props) {
  const { data: notes, toggleNoteArchive, deleteNote } = props;
  return (
    <div>
      {notes.length === 0 ? (
        <p>You currently do not have any notes.</p>
      ) : (
        notes.map((note) => (
          <Note
            key={note.id}
            data={note}
            toggleNoteArchive={toggleNoteArchive}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
}
export default Notes;
