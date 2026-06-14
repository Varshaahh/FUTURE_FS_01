
import {
 FaGithub,
 FaLinkedin,
 FaInstagram
} from "react-icons/fa";function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img src="/profile.jpeg" alt="Varsha Sri" />
        </div>

        <div className="about-content">
          <h2>ABOUT ME</h2>

          <p>
            I am <strong>Varsha Sri</strong>, a B.Tech AI & ML student
            and aspiring Full Stack Developer. I have hands-on experience
            in building responsive web applications using React.js,
            Node.js, Express.js and MongoDB.
          </p>

          <p>
            I have developed projects like a restaurant reservation system,
            task management app, portfolio website and AI/ML based plant
            disease detection project.
          </p>

         <div className="about-socials">

  <a
    href="https://www.linkedin.com/in/varshasri-chityala-494b44353/"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/Varshaahh"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.instagram.com/varshaahhh__02/"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

</div>

          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;