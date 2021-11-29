import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';

const Details = () => {
    const {id}=useParams()
    console.log(id);

    const [project,setproject]=useState({})

    useEffect(()=>{
        fetch("/projects.json").then(res=>res.json()).then(data=>{
            const match=data.find(plc=>plc._id==id)
         setproject(match);
        })

    },[id])
    const {about,name,picture,_id}=project
    return (
        <Container className="border border-info rounded-2 my-5 p-3">
            <center>
  <div className="animate__animated animate__backInUp">
  <img  className="img-fluid " src={picture} alt=""/>            
         <h4> Name : {name}</h4>
         <p>{about}</p>
  </div>
            </center>
        </Container>
    );
};

export default Details;