import * as React from 'react';
import { Container } from '@mui/material';
import BasicModal from './Modal/Modal';
import Name from './Name/Name';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <> 
      

          <Container className="animate__animated animate__fadeInRight">
             <Name></Name>
          </Container>
        <Container className="animate__animated animate__fadeInLeft" style={{border:"2px solid #C0392B",padding:'20px',marginTop:'10px'}}>
            <div style={{color:'white'}}>
                <h5>Download my resume </h5>
            <BasicModal></BasicModal>
                </div>        
        </Container>

        <Contact></Contact>
        </>
    );
};

export default Home;