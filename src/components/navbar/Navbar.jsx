import { Link } from "react-router-dom";
import ArchiveIcon from "../icons/ArchiveIcon";
import HomeIcon from "../icons/HomeIcon";
import PencilIcon from "../icons/PencilIcon";

function Navbar({ notes }) {
  return (
    <nav className="py-4 bg-sky-500">
      <div className="container max-w-screen-md mx-auto">
        <div className="flex items-center justify-between">
          <Link className="font-bold text-xl text-white" to={"/"}>
            Noted.
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link className="text-white" to={"/"} state={{ notes }}>
                <HomeIcon color="white" />
              </Link>
            </li>
            <li>
              <Link className="text-white" to={"/archived"} state={{ notes }}>
                <ArchiveIcon color="white" />
              </Link>
            </li>
            <li>
              <Link className="text-white" to={"/write"} state={{ notes }}>
                <PencilIcon color="white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
