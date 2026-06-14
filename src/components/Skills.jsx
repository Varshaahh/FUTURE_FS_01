import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiC,
  SiCplusplus
} from "react-icons/si";

function Skills() {

 const skills = [
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
  { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, name: "React JS" },
  { icon: <FaNodeJs color="#339933" />, name: "Node JS" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
  { icon: <FaJava color="#f89820" />, name: "Java" },
  { icon: <FaPython color="#3776AB" />, name: "Python" },
  { icon: <SiC color="#00599C" />, name: "C" },
  { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  { icon: <FaGithub color="#181717" />, name: "GitHub" }
];
  return (
    <section id="skills" className="skills">

      <h2>SKILLS</h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build modern applications.
      </p>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;