import { Link } from "react-router-dom";
import ArchiveIcon from "../icons/ArchiveIcon";
import HomeIcon from "../icons/HomeIcon";
import PencilIcon from "../icons/PencilIcon";
import SearchIcon from "../icons/SearchIcon";
import Container from "../container/Container";

function Navbar(props) {
  const { notes } = props;
  return (
    <nav className="py-4 bg-sky-500">
      <Container size="md">
        <div className="flex items-center justify-between">
          <Link className="font-bold text-xl text-white" to={"/"}>
            Noted.
          </Link>
          <ul className="flex items-center space-x-5">
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
              <Link
                className="text-white"
                to={"/note/create"}
                state={{ notes }}
              >
                <PencilIcon color="white" />
              </Link>
            </li>
            <li>
              <Link className="text-white" to={"/search"} state={{ notes }}>
                <SearchIcon color="white" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
