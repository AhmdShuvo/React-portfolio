import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Project from './Project/Project';

const Projects = () => {
  const [projects,setProjects]=useState([])
  useEffect(()=>{
fetch("./projects.json").then(res=>res.json()).then(data=>setProjects(data))
  },[])

  return (
    <Container className="my-5">
            <h1 style={{color:"goldenrod"}}>My Projects</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} gap= "3" className="my-3">
            {
                projects.map(project=><Project
                key={project._id}
                project={project}
                
                ></Project>)
            }
            </Grid>
        </Container>
  );
};

export default Projects;