import { useParams } from "react-router-dom";
import { getNote } from "../../utils/local-data";
import Navbar from "../../components/navbar/Navbar";
import parse from "html-react-parser";
import { showFormattedDate } from "../../utils";

function ReadNote(props) {
  const { id } = useParams();
  const note = getNote(id);
  return (
    <>
      <Navbar />
      <header>
        <div className="container max-w-screen-md mx-auto py-10">
          <div className="prose">
            <h1 className="mb-2">{note.title}</h1>
            <time>{showFormattedDate(note.createdAt)}</time>
          </div>
        </div>
      </header>
      <main>
        <div className="container max-w-screen-md mx-auto">
          <div className="prose">{parse(note.body)}</div>
        </div>
      </main>
    </>
  );
}
export default ReadNote;
