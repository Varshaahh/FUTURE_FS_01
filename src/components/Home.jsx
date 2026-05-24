function Home() {
  return (

    <section
      id="home"
      className="home"
      data-aos="fade-right"
    >

      <h1>
        Hi, I'm Varsha Sri 😊
      </h1>

      <h2>
        AI & ML Engineer | Full Stack Developer
      </h2>

      <p>
        Passionate about Artificial Intelligence,
        Full Stack Development,
        and building modern web applications.
      </p>

      <div className="home-buttons">

        <a href="#projects">

          <button>
            View Projects
          </button>

        </a>

        <a
          href="/resume.pdf"
          download
        >

          <button>
            Download Resume
          </button>

        </a>

      </div>

      <div className="social-links">

        <a
          href="https://github.com/Varshaahh"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/varshasri-chityala-494b44353"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </section>

  );
}

export default Home;