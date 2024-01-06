import PropTypes from "prop-types";
import Note from "../note/Note";

function Notes(props) {
  const { notes, refresh } = props;
  return notes.map((note) => (
    <Note key={note.id} note={note} refresh={refresh} />
  ));
}
Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default Notes;
