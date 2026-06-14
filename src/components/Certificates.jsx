function Certificates() {
const certificates = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    year: "2025",
    file: "/oracle.pdf"
  },
  {
    title: "HackerRank Certification",
    issuer: "HackerRank",
    year: "2026",
    file: "/hackerrank.pdf"
  }
];

  return (
    <section
      id="certificates"
      className="certificates"
    >
      <h2>
        CERTIFICATIONS & ACHIEVEMENTS
      </h2>

      <p className="cert-subtitle">
        Professional certifications earned through
        continuous learning and hands-on experience.
      </p>

      <div className="cert-grid">

        {certificates.map((cert, index) => (

          <div
            className="cert-card"
            key={index}
          >

            <h3>{cert.title}</h3>

            <p>
              <strong>Issued By:</strong>{" "}
              {cert.issuer}
            </p>

            <p>
              <strong>Year:</strong>{" "}
              {cert.year}
            </p>

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Certificates;