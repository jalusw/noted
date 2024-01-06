import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getAllNotes } from "../../utils/local-data";
import { useSearchParams } from "react-router-dom";
import Notes from "../../components/notes/Notes";
import Container from "../../components/container/Container";
import Input from "../../components/input/Input";

function Search() {
  const notesSource = getAllNotes();
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const filterNotes = (query, notes) =>
    notes.filter((note) => new RegExp(query, "i").test(note.title));

  const [notes, setNotes] = useState(filterNotes(query, notesSource));

  const updateNotes = () => setNotes(getAllNotes());

  const searchChangeHandler = (event) => {
    setQuery(event.target.value);
    setSearchParams(`q=${event.target.value}`);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="my-8">
          <Container size="md">
            <form className="flex space-x-4 w-full">
              <Input
                className="w-full p-2 rounded"
                type="text"
                placeholder="Search Something.."
                onChange={searchChangeHandler}
                value={query}
              />
            </form>
          </Container>
        </section>
        <section>
          {notes.length === 0 && (
            <p className="text-center mt-16">
              The notes you&apos;re seeking are currently not within our scope!
            </p>
          )}
          <Container size="md">
            <Notes notes={filterNotes(query, notes)} refresh={updateNotes} />
          </Container>
        </section>
      </main>
    </>
  );
}
export default Search;
