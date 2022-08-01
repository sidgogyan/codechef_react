import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Grid from '../Grid/Grid';
import './Events.css'

const responsive={
    desktop:{
        breakpoint:{max:3000,min:1024},
        items:2
    },
    tablet:{
        breakpoint:{max:1024,min:464},
        items:2
    },
    mobile:{
        breakpoint:{max:464,min:0},
        items:1
    }

}

const Events = () => {
  return (
    <div className="events" style={{width:"90vw",marginTop:"70px",marginLeft:"5vw"}}>
   <h1 style={{marginBottom:"50px",marginTop:"50px"}}>Explore Data Structure</h1>
   <Carousel
   responsive={responsive}
   swipeable={true}
   draggable={false}
   infinite={true}
   autoPlay={true}
   keyBoardControl={true}
   centerMode={true}
   >

   <Grid/>
   <Grid/>
   <Grid/>
   <Grid/>
   <Grid/>
  
  
   </Carousel>

   <h1 style={{marginBottom:"50px",marginTop:"50px"}}>Explore Algorithums</h1>
   <Carousel
   responsive={responsive}
   swipeable={true}
   draggable={false}
   infinite={true}
   autoPlay={true}
   keyBoardControl={true}
   centerMode={true}
   >

   <Grid/>
   <Grid/>
   <Grid/>
   <Grid/>
   <Grid/>
  
  
   </Carousel>

    
    </div>
  )
}

export default Events