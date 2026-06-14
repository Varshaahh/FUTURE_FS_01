function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>
          Hello, I'm <span>Varsha Sri</span>
        </h1>

        <h2>
          AI & ML Engineer | Full Stack Developer
        </h2>

        <p>
          Passionate about building modern, responsive and
          user-friendly web applications using React, Node.js,
          MongoDB, and AI/ML technologies.
        </p>

        <div className="skill-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>AI/ML</span>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="black-btn">
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="white-btn"
          >
            Download CV
          </a>

          <a href="#projects" className="black-btn">
            View Projects
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/Varshaahh"
            target="_blank"
            rel="noreferrer"
          >
            G
          </a>

          <a
            href="https://linkedin.com/in/varshasri-chityala-494b44353"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
        </div>
      </div>

      <div className="hero-right">
   <img
  src="/profile2.jpeg"
  alt="Varsha Sri"
/>
      </div>
    </section>
  );
}

export default Home;