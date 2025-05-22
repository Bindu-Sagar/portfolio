import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  return (
    <div className="contact-container" id="contact">
      <div className="component-header">
        <p className="header-name">Contact Me</p>
      </div>
      <ContactComponent />
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
      <div className="form-items">
        <div className="form-details">
          <div className="form-item">
            <label className='contact-label'>Full Name </label>
            <input type="text" className='contact-input' name="user_name" placeholder="Enter your Name" required />
          </div>
          <div className="form-item">
            <label className='contact-label'>Email </label>
            <input type="text" className='contact-input' name="user_email" placeholder="Enter Your Email" required />
          </div>
        </div>
        <div className="form-item form-message">
          <label className='contact-label'>Message </label>
          <textarea className='contact-input contact-message' name="message" placeholder="Enter Your Message" required />
        </div>
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
