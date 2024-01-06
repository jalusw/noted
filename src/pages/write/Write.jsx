import Navbar from "../../components/navbar/Navbar";
import NotepadTitle from "../../components/notepad/NotepadTitle";
import Notepad from "../../components/notepad/Notepad";

function Write() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container max-w-screen-md mt-12">
          <Notepad />
        </div>
      </main>
    </>
  );
}
export default Write;
