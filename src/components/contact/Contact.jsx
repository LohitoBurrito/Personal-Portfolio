import React from 'react'
import { useRef } from 'react';
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01mi7a2', 'template_xk5830q', form.current, 'QInhW4dt5mYp2ELT-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Contact" id="Contact">
      <div className="ContactHeader">
        <h1>Wanna talk?</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="BigContainer">
        <div className="SocialContact">
          <div className="Email">
            <h3><HiOutlineMail/>&nbsp;</h3>
            <h2>lohit308@gmail.com <br></br> lohitm2@illinois.edu</h2>
          </div>
          <div className="Phone">
            <h3><BsTelephoneFill/>&nbsp;</h3>
            <h2>630-383-9246</h2>
          </div>
        </div>
        <div className="ContactForm" id="ContactForm">
          <input type="text" placeholder="Name" name="user_name"/>
          <input type="text" placeholder="Subject" name="user_subject"/>
          <input type="text" placeholder="Email" name="user_email"/>
        </div>
        <div className="MessageContainer" id="MessageContainer">
          <textarea placeholder="Message" name="user_message"></textarea>
        </div>
        <div className="SubmitButton">
          <input type="Submit" value="Send"/>
        </div>
      </form>
    </div>
  )
}

export default Contact