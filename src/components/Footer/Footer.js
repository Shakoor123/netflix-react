import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react/cjs/react.development';
import './footer.css'
function Footer() {
    const [val, setVal] = useState();

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_c4qiton', 'template_8cguh79', form.current, '1L09-AOe966pqeyvm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='container'>
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="boxes">
      <label className='text'>Name</label>
      <input className='box' value={val} type="text" name="name" /><br></br><br/>
      <label className='text'>Email</label>
      <input className='box' value={val} type="email" name="email" /><br></br><br/>
      <label className='text'>Message</label>
      <input type="text" className='box' value={val} name="message" /><br></br><br/>
      </div>
      <input type="submit" onClick={()=>{
          setVal(()=>"")
          return(alert("mesage send successfully")
          
          )
      }} className='button' value="Send" />
    </form>
        </div>
    );
}

export default Footer