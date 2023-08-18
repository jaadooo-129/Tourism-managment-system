import React, { useState, useRef } from 'react';
import "../styles/Contact.css";
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import Back from "../assets/contact.mp4";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      // Basic validation
      const name = form.current.name.value;
      const address = form.current.address.value;
      const phoneNumber = form.current.phoneNumber.value;
      const email = form.current.email.value;

      if (!name || !address || !phoneNumber || !email) {
          alert('Please fill in all required fields.');
          return;
      }

      emailjs.sendForm('service_ue0u59e', 'template_zrwiudc', form.current, '2KztcqQEUl1eLvMMh').then((result) => {
          alert('Thanks For Contacting');
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="contact">
            <video src={Back} loop muted autoPlay />
            <div className="container">
                <h1 className="text-center">Contact Us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" className="form-control" placeholder="Enter your address" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phoneNumber" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <textarea name="area" className="form-control" placeholder="Leave a message for us" rows="4" />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
                {done && <div className="success-message">Form submitted successfully!</div>}
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
