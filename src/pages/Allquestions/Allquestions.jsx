import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Allquestions.css'
import { Link,useParams } from 'react-router-dom'
import { BASEDIR } from '../../constant/Links'

const Allquestions = () => {

    const [time, settime] = useState({
       days:"",
       hours:"",
       min:"",
       seconds:""
    })
   
    const [questions,setquestion]=useState([])
    const [category,setcategory]=useState({})
    const [endTime,setendTime]=useState("2023-07-25,8:00:00")
    

    const {categoryName}=useParams()

    useEffect(() => {
  
      const getcategory=async()=>{
        const data=await axios.get(`${BASEDIR}/category/${categoryName}`)

        await setcategory(data.data.message)
        // console.log(data.data.message.categoryID)
        const res=  await  axios.get(`${BASEDIR}/problem/category/${data.data.message.categoryID}`)

        setquestion(res.data.message);
        // console.log(`http://localhost:5000/problem/category/${data.data.message.categoryId}`)
        
        // //  setendTime(data.data.message.endTime)
        // setendTime(data.data.message.endTime.substring(0,10))
        
       }
       
       getcategory()
       
       
     }, []);

   useEffect(() => {
   
    setInterval(() => {
      
        var countDownDate = new Date(`${endTime}, 8:00:00`).getTime();
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
        <div className="aq_box1">
        <div className="aq_box2">
         <img  style={{width:'100%',height:"230px"}}src={category.imageLink}/>
         <h3 className="aq_heading" >{category.categoryName} Top Interview Questions</h3>

         <table id="aq_table">
  <tr>
    <th>Name</th>
    <th>Code</th>
    <th>Difficulty</th>
    <th>Accuracy</th>
  </tr>
  {questions.map((question)=>{
   
   return  <tr>

<td  className="fancy"><Link to={`contest/problem/${question.problemName}/${question.problemCode}`} style={{textDecoration:'none',color:'#3b5998'}}>{question.problemName}</Link></td>
<td className="fancy">{question.problemCode}</td>
<td>{question.difficulty}</td>
<td className="fancy">{66.66}</td>
</tr> 
  })
  
  }
 
</table>

<h4 className="color_heading" >ANNOUNCEMENTS</h4>
  <p className="aq_text">
<b>4th Oct 13:10 IST:</b> Problem <b>HIDDENPTS</b> has been added.</p>
<p className="aq_text">
<b>3rd Oct 20:00 IST:</b> In Problem  <b>OLYMRANK,</b> you can choose atmost K medals and change their color. The same has been updated in problem statement.</p>
<p className="aq_text">
<b>1st Oct 17:20 IST:</b> Problem <b>OLYMRANK</b> has been added.</p>
<p className="aq_text">
<b>1st Oct 15:00 IST:</b> We will be adding two more problems to the contest.
  </p>
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
        </>
    )
}

export default Allquestions
