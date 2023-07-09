import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../portfolio/portfolio.css"
import cvwopic from "../../assets/cvwo.jpeg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const WorkExperience = () => {
  return (
    <section className="portfolio section">
        <h2 className="section__title">Work Experience</h2>
        <div className='portfolio__content'>
        
        <div className="portfolio__container"> 
      
    
    <div className="portfolio__timeline">
    <Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector
        style={{ minHeight: '410px' }} // Adjust the minHeight to make the connector longer
      />
    </TimelineSeparator>
    <TimelineContent>May 2023 to Present</TimelineContent>
  </TimelineItem>
</Timeline>
        <Card sx={{ maxWidth: 650,maxHeight: 440}}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: 650, maxHeight: 180 }}
        src={cvwopic}
      />
      <CardContent sx={{display:'flex', flexDirection: 'column',rowGap: '0.5rem'}}>
        <Typography gutterBottom variant="h5" component="div">
          Software Engineer
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Computing for Voluntary Welfare Organisations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ported a 10-year Ruby on Rails backend of a case management system to a more efficient Go backend, improving performance and scalability
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Implemented new features according to clients' requirements, enhancing the functionality and usability of the application.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.comp.nus.edu.sg/~vwo/">Learn More</Button>
      </CardActions>
      
    </Card>
    </div>
    

   
        </div>
        </div>
    </section>
  )
}

export default WorkExperience