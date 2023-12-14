import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u74jwsa', 'template_i4epixp', form.current, 'OtSgXDjhHGAdfJkWd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
     <>
     <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="contact"></div>
    <form ref={form} onSubmit={sendEmail} className='fobtnrm-'>
      <label>Name</label>
      <input type="text" name="from_name" className='contact-input' placeholder='username'/>
      <label>Email</label>
      <input type="email" name="from_email" className='contact-input' placeholder='Email'/>
      <label>Message</label>
      <textarea name="message" className='contact-textarea'/>
      <input type="submit" value="Send" className='fobtnrm '/>
      After you submit your contact details there is no submission message is came So give it  Once the sent 
    </form>
    </>
  );
};

export default Contact