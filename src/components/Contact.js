import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ehmms2z',
      'template_d6hbauq',
      form.current,
      'hnK1C30IZ-miX-rqD'
    ).then(
      () => alert("Message sent successfully!"),
      (error) => alert("Failed to send message: " + error.text)
    );
    e.target.reset(); // clear form
  };

  return (
    <div className="contact" id="contact">
      <h1 className="items-header">Contact</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
            You can contact me through the options below or fill out the form to send a message directly.
          </p>
          <div className="contact-detail">
            <span>📧</span> bindusagar979@gmail.com
          </div>
          <div className="contact-detail">
            <span>📱</span> + (913) 238 4643
          </div>
          <div className="contact-detail">
            <span>📍</span> San Jose, California
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label className="contact-label">Name</label>
          <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
          <label className="contact-label">Email</label>
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
          <label className="contact-label">Message</label>
          <textarea name="message" placeholder="Your Message" className="contact-input" required />
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
