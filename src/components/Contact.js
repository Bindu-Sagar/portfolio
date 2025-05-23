import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  return (
    <div className="contact-container" id="contact">
      <div className="component-header">
        <p className="header-name">Contact Me</p>
      </div>
      <div className="contact-description">
        <div className="contact-text">
          <h2>Let's Talk</h2>
          <p className="description">
            I would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out. 
            You can contact me through the form below or connect with me on my social media platforms.
          </p>
          <div className='reachout'>
            <img className="reachout-img" alt='email:' src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=228BE6"></img>
            <a className='reachout-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=bindusagarsinganamalla@gmail.com">bindusagarsinganamalla@gmail.com</a>
          </div>
          <div className='reachout'>
            <img className="reachout-img" alt='phone:' src="https://img.icons8.com/?size=100&id=9730&format=png&color=228BE6"></img>
            <a className='reachout-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=bindusagarsinganamalla@gmail.com">bindusagarsinganamalla@gmail.com</a>
          </div>
          <div className='reachout'>
            <img className="reachout-img" alt='address:' src="https://img.icons8.com/?size=100&id=53430&format=png&color=228BE6"></img>
            <a className='reachout-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=bindusagarsinganamalla@gmail.com">bindusagarsinganamalla@gmail.com</a>
          </div>
          
        </div>
        <div className="input-container">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
} 
const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p15etfk', 'template_lkt2noj', form.current, 'p6cY2joqGhQhlRmVC')
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-item">
            <label className='contact-label'>Full Name </label>
            <input type="text" className='contact-input' name="user_name" placeholder="Enter your Name" required />
          </div>
          <div className="form-item">
            <label className='contact-label'>Email </label>
            <input type="text" className='contact-input' name="user_email" placeholder="Enter Your Email" required />
          </div>
          <div className="form-item form-message">
            <label className='contact-label'>Message </label>
            <textarea className='contact-input contact-message' name="message" placeholder="Enter Your Message" required />
          </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
