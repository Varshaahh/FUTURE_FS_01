import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiCplusplus
} from "react-icons/si";

function Skills() {
  return (

    <section
      id="skills"
      className="skills"
      data-aos="zoom-in"
    >

      <h1>My Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <FaReact className="icon" />
          <h2>React.js</h2>
        </div>

        <div className="skill-card">
          <SiSpringboot className="icon" />
          <h2>Spring Boot</h2>
        </div>

        <div className="skill-card">
          <FaJava className="icon" />
          <h2>Java</h2>
        </div>

        <div className="skill-card">
          <FaPython className="icon" />
          <h2>Python</h2>
        </div>

        <div className="skill-card">
          <SiMysql className="icon" />
          <h2>MySQL</h2>
        </div>

        <div className="skill-card">
          <FaHtml5 className="icon" />
          <h2>HTML</h2>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon" />
          <h2>CSS</h2>
        </div>

        <div className="skill-card">
          <SiCplusplus className="icon" />
          <h2>C++</h2>
        </div>

      </div>

    </section>

  );
}

export default Skills;