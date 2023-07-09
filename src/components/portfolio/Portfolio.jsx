import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./portfolio.css"
import forum1 from "../../assets/forum1.png";
import forum2 from "../../assets/forum2.png";
import forum3 from "../../assets/forum3.png";
import forum4 from "../../assets/forum4.png";
import { Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Portfolio = () => {
  return (
    <section className="portfolio section">
        <h2 className="section__title">Portfolio</h2>
        <div className='portfolio__content'>
        
        <div className="portfolio__container"> 
      
        <Card sx={{ maxWidth: 650}}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: 650, maxHeight: 280 }}
        src={forum1}
      /></SwiperSlide>
      <SwiperSlide><CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: 650, maxHeight: 280 }}
        src={forum2}
      /></SwiperSlide>
      <SwiperSlide><CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: 650, maxHeight: 280 }}
        src={forum3}
      /></SwiperSlide>
      <SwiperSlide><CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: 650, maxHeight: 280 }}
        src={forum4}
      /></SwiperSlide>
      </Swiper>
      
      <CardContent sx={{display:'flex', flexDirection: 'column',rowGap: '0.5rem'}}>
        <Typography gutterBottom variant="h5" component="div">
          Post It Forum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A dynamic web forum using the React framework and Ruby on Rails, fostering online discussions and user engagement
        </Typography>
        <div className='techstack'>
        <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp"> 
            
        <img alt="ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" height="30" width="30" />
          
          </Avatar>
        <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp"> 
            
        <img alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          
            </Avatar>
            </div>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://postit123.netlify.app/">Link</Button>
        <Button size="small" href="https://github.com/post-it-fo-rum">Github</Button>
      </CardActions>
      
    </Card>
    
  
  
    

   
        </div>
        </div>
    </section>
  )
}

export default Portfolio