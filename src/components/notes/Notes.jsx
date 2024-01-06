import Note from "../note/Note";

function Notes({ notes, refresh }) {
  return notes.map((note) => (
    <Note key={note.id} note={note} refresh={refresh} />
  ));
}
export default Notes;
