import React,{useState,useEffect,useRef} from 'react'
import './Question.css'
const Question = () => {
    const [time, settime] = useState({
        days:"",
        hours:"",
        min:"",
        seconds:""
     })

    
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
            <div className="heading_content">
            
              <h1 className="heading_h1">Which Mixture</h1>
              <span style={{margin:"0 20px",height:'10px',width:'1px',backgroundColor:'#4a4a4a'}}></span>
              <span style={{color:'#4a4a4a',fontSize:'15px',marginRight:'400px'}}>Problem Code: <b>MIXTURE</b></span>
              <button type="submit"  className="button">Submit</button>
            </div>

            <div className="body_content">
            <div className="aq_box2">
            <div className="main_heading">Read problem statements in <span className="fancy">Bengali</span>,  <span className="fancy">Mandarin</span>,  <span className="fancy">Chinese</span>,<span className="fancy">Russian</span> and  <span className="fancy">Vietnamese</span> as well.</div>
            <div className="main_content">
            <p>
            Chef has A units of solid and B units of liquid. He combines them to create a mixture. What kind of mixture does Chef produce: a solution, a solid, or a liquid?
             </p>
            <p>
           A mixture is called : 
           </p>

            <ol style={{paddingLeft:"20px",marginBottom:"20px"}}>
                <li> A solution if A&gt;0 and B&gt;0,</li>
                <li> A solid if B=0, or</li>
                <li>  A liquid if A=0.</li>
            </ol>
            </div>

            <div className="main_content">
            <h2 className="heading_h2">Input Format</h2>

            <ul style={{paddingLeft:"20px",marginBottom:"20px"}}>
                <li>The first line contains T denoting the number of test cases. Then the test cases follow.</li>
                <li>Each test case contains two space-separated integers A and B on a single line.</li>
            </ul>
            </div>

            <div className="main_content">
            <h2 className="heading_h2">Output Format</h2>
             <p>For each test case, output on a single line the type of mixture Chef produces, whether it is a Solution, Solid, or Liquid. The output is case sensitive.</p>
            <ul style={{paddingLeft:"20px",marginBottom:"20px"}}></ul>
            </div>


            <div className="main_content">
            <h2 className="heading_h2">Constraints</h2>
            <ul style={{paddingLeft:"20px",marginBottom:"20px"}}>
                <li>A + B &gt; 0</li>
                <li>1 &le; T &le; 20</li>
                <li>0 &le; A,B &le; 100</li>
            </ul>
            </div>


            <div className="main_content">
            <h2 className="heading_h2">Subtasks</h2>
            <ul style={{paddingLeft:"20px",marginBottom:"20px"}}>
                <li><b>Subtask 1 (100 points):</b> Original constraints</li>
            </ul>
            </div>

            <div className="main_content">
            <h2 className="heading_h2">Sample Input 1</h2>
            <div style={{marginBottom:"20px"}}>
                <p>3</p>
                <p>10 5</p>
                <p>0 3</p>
                <p>3 0</p>
            </div>
            </div>


            <div className="main_content">
            <h2 className="heading_h2">Sample Output 1</h2>
            <div style={{marginBottom:"20px"}}>
                
                <p>Solution</p>
                <p>Liquid</p>
                <p>Solid</p>
            </div>
            </div>

            <div className="main_content">
            <h2 className="heading_h2">Explanation</h2>
            <div style={{marginBottom:"20px"}}>
                
                <p style={{marginBottom:'5px'}}><b>Test case 1:</b> Chef adds both solid and liquid to the mixture, hence the mixture is a solution.</p>
                <p style={{marginBottom:'5px'}}> <b>Test case 2:</b>Chef does not add solid to the mixture, hence the mixture is liquid.</p>
                <p style={{marginBottom:'5px'}}><b>Test case 3:</b> Chef does not add liquid to the mixture, hence the mixture is solid.</p>
            </div>
            </div>

            <button type="submit" className="button" style={{marginLeft:"38%",marginBottom:"20px"}}>Submit</button>
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
