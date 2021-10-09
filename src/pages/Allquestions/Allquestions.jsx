import React,{useEffect,useState} from 'react'
import './Allquestions.css'

const Allquestions = () => {

    const [time, settime] = useState({
       days:"",
       hours:"",
       min:"",
       seconds:""
    })
   

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
        <div className="aq_box1">
        <div className="aq_box2">
         <img  style={{width:'100%'}}src="https://cdn.codechef.com/download/small-banner/OCT21C/1632665057.png"/>
         <h3 className="aq_heading" >Scorable Problems for Division 3</h3>

         <table id="aq_table">
  <tr>
    <th>Name</th>
    <th>Code</th>
    <th>Sucessfull submission</th>
    <th>Accuracy</th>
  </tr>
  <tr>
    <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
  <tr>
  <td className="fancy">Which Mixture</td>
    <td className="fancy">Mixture</td>
    <td>1904</td>
    <td className="fancy">65.17</td>
  </tr>
 
</table>
        
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
