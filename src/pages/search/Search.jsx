import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getAllNotes } from "../../utils/local-data";
import { useSearchParams } from "react-router-dom";
import Notes from "../../components/notes/Notes";
import SearchIcon from "../../components/icons/SearchIcon";
import Container from "../../components/container/Container";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

function Search() {
  const notesSource = getAllNotes();
  let [searchParams, setSearchParams] = useSearchParams();

  const filterNotes = (query, notes) =>
    notes.filter((note) => new RegExp(query, "i").test(note.title));

  console.log(filterNotes(searchParams.get("q"), notesSource));

  const [notes, setNotes] = useState(
    filterNotes(searchParams.get("q") || "", getAllNotes()),
  );

  const updateNotes = () =>
    setNotes(filterNotes(searchParams.get("q") || "", notesSource));

  const searchChangeHandler = (event) => {
    setSearchParams(`q=${event.target.value}`);
    updateNotes();
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
              />
            </form>
          </Container>
        </section>
        <section>
          <Container size="md">
            <Notes notes={notes} refresh={updateNotes} />
          </Container>
        </section>
      </main>
    </>
  );
}
export default Search;
