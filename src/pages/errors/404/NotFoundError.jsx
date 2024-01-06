import Navbar from "../../../components/navbar/Navbar";

function NotFoundError() {
  return (
    <>
      <Navbar />
      <main>
        <div className="prose mx-auto mt-12 text-center">
          <h1 className="m-0 text-sky-500 text-6xl ">404</h1>
          <strong className="block mt-2 text-sky-500 text-3xl">
            Not Found
          </strong>
          <p>
            Uh Oh! Looks like you took a wrong turn. The page you&apos;re
            looking for is playing hide and seek. Let&apos;s get you back on
            track – hit the back button or navigate to a different page. 🚀
          </p>
        </div>
      </main>
    </>
  );
}

export default NotFoundError;
