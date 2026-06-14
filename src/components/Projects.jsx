import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Event Management System",
      image: "/event-management.png",
      type: "Academic Project",
      status: "Completed",
      role: "Full Stack Developer",
      overview:
        "A full-stack event management platform where administrators can create events and users can register online. The system helps manage event registrations, attendance, and event status.",
      tech: "React.js | Spring Boot | MySQL",
      features:
        "Admin Login, Event Creation, User Registration, Attendance Tracking, Event Status Management, User Dashboard",
      outcome:
        "Improved event organization by automating registration and attendance tracking."
    },
    {
      title: "Travel Buddy",
      image: "/travel-buddy.png",
      type: "Academic Project",
      status: "Completed",
      role: "Frontend / Full Stack Developer",
      overview:
        "A smart travel planning application that helps users discover destinations, plan trips, and manage travel schedules efficiently.",
      tech: "React.js | Spring Boot | MySQL",
      features:
        "Destination Search, Trip Planning, Hotel Details, Travel Schedule Management, User Dashboard",
      outcome:
        "Provides travelers with an organized platform for planning trips and managing itineraries."
    },
    {
      title: "Restaurant Reservation System",
      image: "/restaurant-website.png",
      type: "Internship Project",
      status: "Completed",
      role: "Full Stack Developer",
      overview:
        "A full-stack restaurant reservation platform developed to simplify table booking and restaurant management. Customers can reserve tables online and track booking status, while admins manage reservations using a dedicated dashboard.",
      tech: "React.js | Node.js | Express.js | MongoDB",
      features:
        "Reservation Form, Admin Dashboard, Approve/Reject Reservations, QR Code Ticket, Customer Dashboard, Excel Export, Analytics Charts, Admin Login",
      outcome:
        "Reduced manual booking work by digitizing table reservations and providing real-time booking management."
    },
    {
      title: "CRM System",
      image: "/crm-system.png",
      type: "Academic Project",
      status: "Completed",
      role: "Full Stack Developer",
      overview:
        "A Customer Relationship Management system designed to manage customer information, sales leads, and business interactions in one place.",
      tech: "React.js | Node.js | MongoDB",
      features:
        "Customer Database, Lead Tracking, Sales Reports, Customer Analytics, Dashboard",
      outcome:
        "Helps businesses improve customer engagement and manage sales activities efficiently."
    },
    {
      title: "Task Management App",
      image: "/task-management.png",
      type: "Internship Project",
      status: "Completed",
      role: "Full Stack Developer",
      overview:
        "A productivity-focused task management application that allows users to create, update, delete, and track tasks with status monitoring.",
      tech: "React.js | Node.js | Express.js | MongoDB",
      features:
        "User Authentication, CRUD Operations, Task Status Tracking, Dashboard, Responsive Design",
      outcome:
        "Improves productivity by providing an organized way to manage daily tasks."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">MY PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
              <h4>{project.tech}</h4>

              <button
                className="project-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="project-modal">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>

            <h4>Project Type</h4>
            <p>{selectedProject.type}</p>

            <h4>Status</h4>
            <p>{selectedProject.status}</p>

            <h4>My Role</h4>
            <p>{selectedProject.role}</p>

            <h4>Project Overview</h4>
            <p>{selectedProject.overview}</p>

            <h4>Technologies Used</h4>
            <p>{selectedProject.tech}</p>

            <h4>Key Features</h4>
            <p>{selectedProject.features}</p>

            <h4>Outcome</h4>
            <p>{selectedProject.outcome}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;