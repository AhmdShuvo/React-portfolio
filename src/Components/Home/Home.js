import * as React from 'react';
import { Container } from '@mui/material';
import BasicModal from './Modal/Modal';
import Name from './Name/Name';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Aboutme/Skils/Skills';

const Home = () => {
    return (
        <> 
      

          <section style={{backgroundColor:'#F7DC6F',padding:"10px"}}>
          <Container className="animate__animated animate__fadeInRight">
             <Name></Name>
          </Container>
       <center> <Container data-aos="fade-up-right" className="animate__animated animate__fadeInLeft" style={{border:"2px solid #C0392B",padding:'20px',marginTop:'10px'}}>
            <div data-aos="fade-up-right" style={{color:'white'}}>
                <h5 style={{fontFamily:'cursive',color:"black"}} >Download my resume </h5>
            <BasicModal></BasicModal>
                </div>        
        </Container></center>
          </section>
                      
                          <Container>
                          <Skills></Skills>
                          </Container>
                          
                       
              <section>
                   <Projects></Projects>
              </section>
        <Contact></Contact>
        </>
    );
};

export default Home;