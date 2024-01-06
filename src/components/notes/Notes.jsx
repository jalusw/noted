import Note from "../note/Note";

function Notes(props) {
  const { notes, refresh } = props;
  return notes.map((note) => (
    <Note key={note.id} note={note} refresh={refresh} />
  ));
}
export default Notes;
