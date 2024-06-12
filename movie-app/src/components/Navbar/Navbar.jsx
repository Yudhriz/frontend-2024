import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";
import Heading from "../ui/Heading/Heading";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <Heading>Movie App</Heading>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/movie/create'>Add Movie</Link>
            </li>
            <li>
              <Link to='/movie/populer'>Populer</Link>
            </li>
            <li>
              <Link to='/movie/now'>Now Playing</Link>
            </li>
            <li>
              <Link to='/movie/top'>Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
