import { Container } from '@mui/material';
import React from 'react';
import Name from '../Home/Name/Name';

const AboutMe = () => {
    return (
       <Container>
           <section className="my-5">
              <center> <h1 style={{fontFamily:'fantasy',fontSize:"56px"}}>Tanjir Ahmed</h1></center>
              <center><p style={{fontFamily:'fantasy'}} className="fs-3">I am In Entry level  web programming and developing. Also, I have gathered Some knowledge about using coding, designing, markup languages and other things that are related to this sector. I love learning and implementing according to time.</p>
               
              </center>
              <h3>Education</h3>
              <center>
                  <p style={{fontFamily:'fantasy'}} className="fs-3"> I am currently studying bachelor of Computer science and engineering at central university of science and technology <small>Mirpur, Dhaka ,Bangladesh</small></p>
              </center>
           </section>
       </Container>
    );
};

export default AboutMe;