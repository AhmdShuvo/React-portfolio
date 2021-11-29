import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Project = ({project}) => {
    
    const handleDetail=()=>{
           
   
    }
    const {about,name,picture,_id}=project
    return (
        <>
             <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }} className='animate__animated animate__backInUp'>
      <CardMedia
        component="img"
        height="140"
        image={picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Link to = {`project/${_id}`}><Button onClick={handleDetail} >Learn More</Button></Link>
      </CardActions>
    </Card>
    </Grid>
        </>
    );
};

export default Project;