import { showFormattedDate } from "../../utils";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/local-data";

function Note({ note, refresh }) {
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
          <h3>{note.title}</h3>
          <time>{showFormattedDate(note.createdAt)}</time>
        </header>
        <section>
          <p>{note.body}</p>
        </section>
        <footer className="space-x-4">
          <button
            className="p-2 border-2 border-slate-600 rounded  "
            type="button"
            title={note.archived ? "unarchive this note" : "archive this note"}
            onClick={toggleArchiveButtonClickHandler}
          >
            {note.archived ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-560 320-400l56 56 64-64v168h80v-168l64 64 56-56-160-160Zm-280-80v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
              </svg>
            )}
          </button>
          <button
            className="p-2 border-2 border-slate-600 rounded  "
            type="button"
            onClick={() => deleteButtonClickHandler(note)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </footer>
      </div>
    </article>
  );
}
export default Note;
