import React,{useState,useEffect} from 'react'
import Slider  from "react-slick";
import './Slider.css'
import axios from "axios"
import { Link } from 'react-router-dom';


const MySlider = () => {

  const [banner,setbanner]=useState([])
  useEffect(() => {
  
   const getbanners=async()=>{
     const data=await axios.get("http://localhost:5000/category")
      setbanner(data.data.message)
    }
    getbanners()
    console.log(banner)
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
  };
   
      return (
        <Slider {...settings} style={{marginTop:"120px",width:"90vw",marginLeft:"5vw"}} >


        {banner.map((cat,key)=>{
          return(
            <div key={key}>
            <div className="slider_complete_box">
            <div className="left_slider"><img src={cat.imageLink} alt=""></img></div>
<div className='right_slider'>
<h1>{cat.categoryName}</h1>
<p>  {cat.description}</p>
<hr className='divider'/>
<Link to={`./${cat.categoryName}`}>Compete Here <span><i class="i-right-arrow-blue"></i></span></Link>

</div>
            </div>
            </div>
          )
        })}
        </Slider>  
  )
}

export default MySlider