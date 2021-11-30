import {  Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [emaildata,setemaildata]=useState({})
    const [status,setStatus]=useState('');
    const [sent,setSent]=useState(false)
      
    const handleChange=e=>{
        const field= e.target.type
        const value=e.target.value
     const newLogindata={...emaildata}
     newLogindata[field]=value;
     setemaildata(newLogindata)
     
       }

    const senndEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_2natv1r', 'template_20aph4l', e.target, 'user_tve3WtBVfEKVjvfrqtDtj').then(res=>{console.log(res)
         setStatus("Email successfully Sent ")
         setSent(true)
        }).catch(err=>console.log(err)).finally(()=>document.querySelector("form").reset());

    }
       
    return (
        <Container id="contact" className="my-5 animate__animated animate__fadeInUp me-3" >
            <center> <h4>Send me An email </h4></center>
            <div style={{position:'relative'}}  >
              <img className="border rounded-3" src="./image/background-2203989_960_720.webp" alt="" width="100%" height="500px" />
              <center><Form onSubmit={senndEmail} className="animate__animated animate__fadeInUp w-75 " style={{position:"absolute" ,top: "10%",
  left:" 4%",
  transform: "translate(-50%, -50%)"}} >
  <Form.Group data-aos="fade-up-right" className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleChange} type="Name" name="name" placeholder="Your name" required />
  </Form.Group >
  <Form.Group data-aos="fade-up-right" className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} type="email" name="email" placeholder="name@example.com" required />
  </Form.Group>
  <Form.Group data-aos="fade-up-right" className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message</Form.Label>
    <Form.Control onChange={handleChange} type="message" name="message" as="textarea" rows={4} required />
  </Form.Group>
 <button data-aos="fade-up-right" className="btn-info container-fluid text-light fs-5 p-2 " type="submit">Send</button><br />
 {sent && <Alert className="my-5 animate__animated animate__fadeInUp me-3" severity="success">Email successfully Sent </Alert>}
 
</Form></center>

            </div>
        </Container>
    );
};

export default Contact;

{/* <Form onSubmit={senndEmail} className="animate__animated animate__fadeInUp p-3" >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleChange} type="Name" name="name" placeholder="Your name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} type="email" name="email" placeholder="name@example.com" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message</Form.Label>
    <Form.Control onChange={handleChange} type="message" name="message" as="textarea" rows={4} required />
  </Form.Group>
 <button className="btn-info container-fluid text-light fs-5 p-2 " type="submit">Send</button>
 
</Form> */}