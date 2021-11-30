import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route,useParams,Link } from 'react-router-dom';

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
    const {about,name,picture,_id,Visit}=project
    return (
        <div style={{backgroundColor:'#D6EAF8'}} className="border rounded-2 mb-5 p-3"  sx={{
            boxShadow: 0,
            bgcolor: 'black',
            m: 1,
            p: 1,
            width: '8rem',
            height: '5rem',
          }}>
            <center>
  <div className="animate__animated animate__backInUp">
  <img  className="img-fluid " src={picture} alt=""/>            
         <h4 className="animate__animated animate__fadeInUp animate__delay-1s">  {name}</h4> 
         <a className=" animate__animated animate__fadeInUp animate__delay-1s navbar-brand border border p-2 my-3 fs-3 rounded-3 " href={Visit}>Visit website</a>
         <p className="animate__animated animate__fadeInUp animate__delay-1s">{about}</p>
  </div>
            </center>
        </div>
    );
};

export default Details;