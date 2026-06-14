function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Contact Me
      </h2>

      <div className="contact-wrapper">

        <div className="contact-left">

          <h3>Let's Connect</h3>

          <p>
            Feel free to reach out to me for project discussions,
            collaborations, internships, or any professional
            opportunities. I'm always open to meaningful
            conversations and new ideas.
          </p>

          <div className="contact-info">
            <strong>Email:</strong>
            <span>varshasrichityala49@gmail.com</span>
          </div>

          <div className="contact-info">
            <strong>Phone:</strong>
            <span>+91 XXXXXXXXXX</span>
          </div>

          <div className="contact-info">
            <strong>Location:</strong>
            <span>Andhra Pradesh & Telangana, India</span>
          </div>

        </div>

        <div className="contact-right">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;