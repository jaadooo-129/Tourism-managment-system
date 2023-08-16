import React ,{useState,useRef} from 'react'
import "../styles//Contact.css";
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import Back from "../assets/contact.mp4";
const Contact = () => {
    const form = useRef();
    const[done,setDone]=useState(false)
const sendEmail=(e) =>{
    e.preventDefault();
    emailjs.sendForm('service_ue0u59e', 'template_zrwiudc', form.current, '2KztcqQEUl1eLvMMh' ).then((result) => {
    
    alert('Thanks For Contacting');
    setDone(true);
    
   },(error) => {
    console.log(error.text);
   });
};
  return (
    <div className="contact">
      <video src={Back} loop muted autoPlay/>
      <div className="Container">
             <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder="Enter your name"/>
         <input type="text" name="adress" id="adress" placeholder="Enter your adress"/>
        <input type="text" name="phone number" id="phone number" placeholder="Enter your phone number"/>
         <input type="email" name="email" id="email" placeholder="Enter your email"/>
        <input type="text-area" name="area" id="area" placeholder="leave message for us"/>
        <button id='btn2'>Submit</button>
        <span>{done}</span>
        </form>
        <Footer/>
        </div>
        </div>
  )
}

export default Contact
