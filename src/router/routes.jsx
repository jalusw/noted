import Archived from "../pages/archived/Archived";
import Home from "../pages/home/Home";
import NotFoundError from "../pages/errors/404/NotFoundError.jsx";
import CreateNote from "../pages/create-note/CreateNote.jsx";
import ReadNote from "../pages/read-note/ReadNote.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archived",
    element: <Archived />,
  },
  {
    path: "/note/create",
    element: <CreateNote />,
  },
  {
    path: "/note/:id",
    element: <ReadNote />,
  },
  {
    path: "/*",
    element: <NotFoundError />,
  },
];
export default routes;
