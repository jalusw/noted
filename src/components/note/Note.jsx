import { showFormattedDate } from "../../utils";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/local-data";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ArchiveIcon from "../icons/ArchiveIcon";
import UnArchiveIcon from "../icons/UnArchiveIcon";
import TrashIcon from "../icons/TrashIcon";
import Button from "../button/Button";

function Note(props) {
  const { note, refresh } = props;
  const toggleArchiveButtonClickHandler = () => {
    if (note.archived) {
      unarchiveNote(note.id);
      refresh();
      return;
    }
    archiveNote(note.id);
    refresh();
  };

  const deleteButtonClickHandler = () => {
    deleteNote(note.id);
    refresh();
  };
  return (
    <article>
      <div className="prose">
        <header>
          <h3>
            <Link className="font-bold no-underline" to={`/note/${note.id}`}>
              {note.title}
            </Link>
          </h3>
          <time>{showFormattedDate(note.createdAt)}</time>
        </header>
        <section>
          <p>{parse(note.body)}</p>
        </section>
        <footer className="space-x-4">
          <Button
            variant="bordered"
            type="button"
            title={note.archived ? "unarchive this note" : "archive this note"}
            onClick={toggleArchiveButtonClickHandler}
          >
            {note.archived ? <UnArchiveIcon /> : <ArchiveIcon />}
          </Button>
          <Button
            variant="bordered"
            type="button"
            onClick={() => deleteButtonClickHandler(note)}
          >
            <TrashIcon />
          </Button>
        </footer>
      </div>
    </article>
  );
}
export default Note;
