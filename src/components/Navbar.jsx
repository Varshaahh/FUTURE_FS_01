import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Varshasri
      </h2>

      <ul className="nav-links">

        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;