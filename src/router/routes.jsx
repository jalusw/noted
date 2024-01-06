import Archived from "../pages/archived/Archived";
import Home from "../pages/home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archived",
    element: <Archived />,
  },
];
export default routes;
