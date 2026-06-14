import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Portfolio.
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

      <div className="nav-right">

        <a
          href="/resume.pdf"
          download
          className="resume-nav-btn"
        >
          Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;