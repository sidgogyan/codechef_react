import React,{useState,useEffect,useRef} from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import './Question.css'
import { useParams} from 'react-router';
import { Link } from 'react-router-dom';
import { BASEDIR } from '../../constant/Links';
const Question = () => {

    const {name,code} =useParams();
   
    const [time, settime] = useState({
        days:"",
        hours:"",
        min:"",
        seconds:""
     })

     const [post, setpost] = useState({})

     useEffect(() => {
  
        const getpost=(async()=>{
          const data=await axios.get(`${BASEDIR}/problem/${name}`)
  
          setpost(data.data.message)
          console.log(data)
          
          
         
          
         })
         
         getpost()
         
         
       }, []);



    //  useEffect(()=>{
       
    //     import(`../../content/${code}/question.md`).then(res => {
    //       fetch(res.default)
    //           .then(res => res.text())
    //           .then(res => setpost({content:res}))
    //           .catch(err => console.log(err));
    //   })
    //   .catch(err => console.log(err));


      
    //    },[])

       

     useEffect(()=>{
         window.scrollTo({
         top:0,
         behavior:'smooth'
         })
     },[])
     
    
    useEffect(() => {
 
     setInterval(() => {
         
         var countDownDate = new Date("Oct 25, 2021 20:00:00").getTime();
         var now = new Date().getTime();
         var distance = countDownDate - now;
     
         var days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours1= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds1 = Math.floor((distance % (1000 * 60)) / 1000);
 
         settime({days:days1,hours:hours1,min:minutes1,seconds:seconds1})}, 1000);
   
 
    })
    return (

        
        <>
           <div className="question_box1">
           <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid'}}>
            <div className="heading_content">
            
              <h1 className="heading_h1">{name}</h1>
              <span style={{margin:"0 18px",height:'10px',width:'1px',backgroundColor:'#4a4a4a'}}></span>
              <span style={{color:'#4a4a4a',fontSize:'16px'}}>Problem Code: <b>{code}</b></span>
              </div>
              <Link to={`/contest/submit/${name}/${code}`} style={{textDecoration:'none',color:'#3b5998'}}>  <button  className="button" style={{marginRight:"20px"}}>Submit</button></Link>
              </div>
           

            <div className="body_content">
            <div className="aq_box2">
            <div className="main_heading">Read problem statements in <span className="fancy">Bengali</span>,  <span className="fancy">Mandarin</span>,  <span className="fancy">Chinese</span>,<span className="fancy">Russian</span> and  <span className="fancy">Vietnamese</span> as well.</div>
           

            <div className="main_content">
           

           
              <ReactMarkdown style={{marginLeft:"10px",marginBottom:"20px"}} >
              { post.description}
            </ReactMarkdown>  
            </div>



            <Link to={`/contest/submit/${name}/${code}`} style={{textDecoration:'none',color:'#3b5998'}}>  <button  className="button" style={{marginLeft:"38%",marginBottom:"20px"}}>Submit</button></Link>
            </div>

            <div className="aq_box3">
             <div className="aq_right_box_1">
           <div className="aq_heading2"><h2 >Contest Ends In</h2></div>
          
          <div className="timer">{time.days}</div>
          <div className="timer">{time.hours}</div>
          <div className="timer">{time.min}</div>
          <div className="timer">{time.seconds}</div>

           </div>

           <div className="aq_right_box_1">
           <div className="aq_heading2"><h2 >Contest Ranks</h2></div>
           <button type="submit" className="button">Go to Contest Ranks</button>
           </div>
            </div>


            </div>
           </div>
        </>
    )
}

export default Question
