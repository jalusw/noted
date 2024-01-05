import Home from "../pages/home/Home";
import { getInitialData } from "../utils";

const routes = [
  {
    path: "/",
    element: <Home data={getInitialData()} />,
  },
];
export default routes;
