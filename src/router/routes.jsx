import Archived from "../pages/archived/Archived";
import Home from "../pages/home/Home";
import NotFoundError from "../pages/errors/404/NotFoundError.jsx";
import Write from "../pages/write/Write.jsx";

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
    path: "/write",
    element: <Write />,
  },
  {
    path: "/*",
    element: <NotFoundError />,
  },
];
export default routes;
