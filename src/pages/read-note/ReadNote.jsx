import { useParams } from "react-router-dom";
import { getNote } from "../../utils/local-data";
import { showFormattedDate } from "../../utils";
import parse from "html-react-parser";
import Navbar from "../../components/navbar/Navbar";
import NotFoundError from "../errors/404/NotFoundError";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";

function ReadNote() {
  const { id } = useParams();
  const note = getNote(id);
  if (note === undefined) return <NotFoundError />;
  return (
    <>
      <Navbar />
      <Header>
        <h1 className="mb-2">{note.title}</h1>
        <time>{showFormattedDate(note.createdAt)}</time>
      </Header>
      <main>
        <Container size="md">
          <div className="prose">{parse(note.body)}</div>
        </Container>
      </main>
    </>
  );
}
export default ReadNote;
