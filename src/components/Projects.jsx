import React, { useState } from "react";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      title:"Event Management System",

      short:"Full stack event registration platform",

      details:
      "Developed a full stack Event Management System with separate Admin and User modules. Admin can create and manage events while users can browse events and register online. Implemented QR/Scanner based verification system for ticket validation and attendee tracking. The platform also monitors participant count and event registrations efficiently.",

      tech:"React.js | Spring Boot | MySQL"
    },

    {
      title:"Travel Buddy",

      short:"Smart travel assistance platform",

      details:
      "Travel Buddy is an intelligent travel planning platform designed to help users explore nearby festivals, cultural places, restaurants, hotels, and local events. The system provides ratings, reviews, descriptions, and recommendations to improve travel experience. Built with focus on personalized and culture-oriented travel guidance.",

      tech:"React.js | Spring Boot | MySQL"
    },

    {
      title:"Plant Leaf Disease Detection",

      short:"AI powered crop disease prediction system",

      details:
      "Developed a Deep Learning based application using Neural Networks and CNN models to detect plant leaf diseases from images. The system helps farmers identify crop diseases at an early stage and supports improved agricultural productivity using Artificial Intelligence techniques.",

      tech:"Python | CNN | Deep Learning"
    }

  ];

  return (

    <section
      id="projects"
      className="projects"
    >

      <h1>My Projects</h1>

      <div className="project-container">

        {
          projects.map((project,index)=>(

            <div
              className="project-card"
              key={index}
            >

              <h2>{project.title}</h2>

              <p>{project.short}</p>

              <h4>{project.tech}</h4>

              <button
                onClick={()=>setSelectedProject(project)}
              >
                View Details
              </button>

            </div>

          ))
        }

      </div>

      {
        selectedProject &&

        <div className="modal-overlay">

          <div className="modal">

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.details}</p>

            <h4>
              Technologies Used
            </h4>

            <p>{selectedProject.tech}</p>

            <button
              onClick={()=>setSelectedProject(null)}
            >
              Close
            </button>

          </div>

        </div>
      }

    </section>

  );

}

export default Projects;