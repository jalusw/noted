import Navbar from "../../components/navbar/Navbar";
import Notepad from "../../components/notepad/Notepad";

function CreateNote() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container max-w-screen-lg mt-12">
          <Notepad />
        </div>
      </main>
    </>
  );
}
export default CreateNote;
