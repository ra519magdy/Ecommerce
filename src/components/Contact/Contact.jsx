import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"
const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jxd8y7v', 'template_ds3gjwf', form.current, 'BaJwn7tjqgVKRmoL1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset()
      };




  return (
    <>

<section className=' contact container '>
     <div className='con_section'>
     <h2>Location in Googel Map</h2>


    <div className='Googel_map'>
    <iframe style={{width:"100%" , height:"800px"}}  id="gmap_canvas" src="https://maps.google.com/maps?q=Egypt,%20Cairo,Nasr%20City&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>


<div class="containerr">

      <h2> Send Your Message <br/> Email js </h2>

  <form ref={form} onSubmit={sendEmail} id="contact" action="#">
            <div className="left">
            <input type="text" placeholder="Full Name" name='user_name' required="required"/>
            <input type="email" placeholder="Email" name='user_Email' required="required"/>
            
            <input type="text" placeholder="Subject" name='subject' required="required"/>
            </div>
            <div className="right">
            <textarea placeholder="Message" name='message' required="required"></textarea>
            </div>
            <div className="send-button cl">
            <button type="submit">Send</button>
            </div>
    </form>

 </div>   
</div>
 </section>
    
    
    </>
  )
}

export default Contact