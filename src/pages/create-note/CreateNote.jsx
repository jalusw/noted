import Navbar from "../../components/navbar/Navbar";
import Notepad from "../../components/notepad/Notepad";
import Container from "../../components/container/Container";

function CreateNote() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mt-16">
          <Container size="md">
            <Notepad />
          </Container>
        </section>
      </main>
    </>
  );
}
export default CreateNote;
