import { Button, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Name = () => {
    return (
        <Container  className="d-lg-flex justify-content-between align-items-center animate__animated animate__fadeInRight" >
         
          <div>
            <Typography variant="h3">
             
            </Typography>
           <Typography  className="animate__animated animate__fadeInRight animate__delay-1s "  variant="h4" style={{fontFamily:'cursive'}}>  Hi , my name is <br />  <span><h1 className="animate__animated animate__fadeInRight animate__delay-1s " style={{color:'green'}}>Tanjir Ahmed</h1></span> <br />I am a</Typography>
                 <Typography className="animate__animated animate__fadeInRight animate__delay-1s " variant="h5" style={{fontFamily:'cursive',color:"black"}} >Junior level front-end developer</Typography>
                 <button className="btn-info p-3 border rounded-3 m-3"> <NavLink className="navbar-brand text-light" to="/about">About Me</NavLink></button>
                 <button className="btn-info p-3 border rounded-3 m-3">  <NavLink className="navbar-brand text-light" to="/myprojects">My projects</NavLink></button>
          </div>
          <div ><img className="img-thumb animate__animated animate__backInDown animate__delay-1s" style={{borderRadius:"50%"}} src="./image/profile-1.png" alt="Tanjir Ahmed"  /> <br />
           <a style={{fontSize:'40px'}} href="https://www.facebook.com/ahmed.shuvo.0"><i class="fab fa-facebook"></i></a>
           <a style={{fontSize:'40px',marginLeft:'20px'}} href="https://www.linkedin.com/in/tanjir-ahmed-a4216a199/"><i class="fab fa-linkedin-in"></i></a>
           <a style={{fontSize:'40px',marginLeft:'20px'}} href="https://github.com/AhmdShuvo"><i class="fab fa-github"></i></a>
          </div>
           
        </Container>
    );
};

export default Name;