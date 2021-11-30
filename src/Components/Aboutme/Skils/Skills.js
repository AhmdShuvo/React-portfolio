import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

const Skills = () => {
    return (
      <section style={{backgroundColor:"#FCF3CF "}} className="m-5">
         <div className="bg-dark p-3 text-light">
         <h4> my Skills</h4>
           <h6 data-aos="fade-left">HTML5<BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6 data-aos="fade-left">CSS3<BorderLinearProgress variant="determinate" value={90} /> </h6>
           <h6 data-aos="fade-left">JAVASCRIPT <BorderLinearProgress variant="determinate" value={80} /> </h6>
           <h6 data-aos="fade-left">React.Js<BorderLinearProgress variant="determinate" value={97} /> </h6>
           <h6 data-aos="fade-left">MONGODB<BorderLinearProgress variant="determinate" value={85} /> </h6>
           <h6 data-aos="fade-left">FIREBASE AUTHENTICATION<BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6 data-aos="fade-left">Next.Js<BorderLinearProgress variant="determinate" value={50} /> </h6>
         </div>
         <div className="bg-dark p-3 text-light mt-3">
         <h4> Comfortable With </h4>
           <h6 data-aos="fade-left">Bootstrap<BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6 data-aos="fade-left">Tailwind<BorderLinearProgress variant="determinate" value={60} /> </h6>
           <h6 data-aos="fade-left">Material ui<BorderLinearProgress variant="determinate" value={65} /> </h6>
           <h6 data-aos="fade-left">React Native<BorderLinearProgress variant="determinate" value={50} /> </h6>
           <h6 data-aos="fade-left">FIREBASE AUTHENTICATION<BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6 data-aos="fade-left">Next.Js<BorderLinearProgress variant="determinate" value={50} /> </h6>
           <h6 data-aos="fade-left">Express.Js<BorderLinearProgress variant="determinate" value={55} /> </h6>
           <h6 data-aos="fade-left">Sass<BorderLinearProgress variant="determinate" value={50} /> </h6>
         </div>

         {/* <div  className="bg-dark p-3 text-light mt-5 w-50">
         <h4> Comfortable With </h4>
           <h6>HTML5  <BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6>CSS3<BorderLinearProgress variant="determinate" value={90} /> </h6>
           <h6>JAVASCRIPT <BorderLinearProgress variant="determinate" value={80} /> </h6>
           <h6>MONGODB<BorderLinearProgress variant="determinate" value={85} /> </h6>
           <h6>FIREBASE AUTHENTICATION<BorderLinearProgress variant="determinate" value={95} /> </h6>
           <h6>Next.Js<BorderLinearProgress variant="determinate" value={50} /> </h6>
         </div> */}

      </section>
    );
};

export default Skills;