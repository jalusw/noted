import Archived from "../pages/archived/Archived";
import Home from "../pages/home/Home";
import NotFoundError from "../pages/errors/404/NotFoundError.jsx";

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
    path: "/*",
    element: <NotFoundError />,
  },
];
export default routes;
