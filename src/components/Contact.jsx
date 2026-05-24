import React, { useState } from "react";

function Contact() {

  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setSuccessMessage("Message Sent Successfully 🚀");

    setTimeout(()=>{

      setSuccessMessage("");

    },3000);

    setFormData({
      name:"",
      email:"",
      message:""
    });

  };

  return (

    <section
      id="contact"
      className="contact"
    >

      <h1>Contact Me</h1>

      {
        successMessage &&

        <div className="success-message">
          {successMessage}
        </div>
      }

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>

  );

}

export default Contact;