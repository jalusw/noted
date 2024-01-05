import Archived from "../pages/archived/Archived";
import Home from "../pages/home/Home";
import { getInitialData } from "../utils";

const routes = [
  {
    path: "/",
    element: <Home data={getInitialData()} />,
  },
  {
    path: "/archived",
    element: <Archived />,
  },
];
export default routes;
