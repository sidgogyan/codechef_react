import React ,{useState}from 'react'
import "./Submit.css"
import axios from 'axios';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-terminal";



const Submit = () => {


 
const defaultcode=`#cook Your cookies here`
const [code, setcode] = useState(defaultcode)
const [input, setinput] = useState("")
const [result, setresult] = useState("")
const [isloading, setisloading] = useState(false)
const [output, setoutput] = useState({
  isoutput:false,
  value:""
})
  

    function onChange(newValue) {
        
        setcode(newValue)
        console.log("change", code);
      }
    
      function onChangeinput(newValue) {
        
        setinput(newValue)
      
      }



      const runcode=(async()=>{

       console.log(code)
       setoutput({
        isoutput:false,
        val:""
      })
      setisloading(true)
      setresult("")
        

       const res=await axios.post("http://localhost:8000/hii/",{code,input})


       setoutput({
         isoutput:true,
         val:res.data.val
       })

       console.log(res.data.val)
      
       if(res.data.val=="wrong"){
        setresult("wrong")
       }
       else{
        setresult("right")
       }

  
       setisloading(false)

       window.scrollTo({
        top:100,
        behavior:'smooth'
        })


      })





    

   

      
    return (
       <>
       <div className="question_box1">

       <div className="upperdiv1">
        <span className="heading">Contest Code: </span>
        <span className="fancy1">Oct2021</span>

        <span className="heading">Problem Code: </span>
        <span className="fancy1">MAXXOR</span>
       </div>
{/*###########################################################################################3*/}
{/* <div className="upperdiv2">

</div> */}
       
{result==="right" && <div className="upperdiv1" style={{border: "1px solid #71b968",backgroundColor: "#e4fae1"}}>
        <span className="heading" >Status: </span>
        <span style={{marginRight:"10px"}} >Correct Answer</span>

        <span className="heading">Time: </span>
        <span style={{marginRight:"10px"}} >0.92 sec</span>

        <span className="heading">Solution:  </span>
        <span className="fancy1">529883456</span>
       </div>
}

  {result==="wrong" && <div className="upperdiv1" style={{border: "1px solid red",backgroundColor: "#fcf1f1"}}>
        <span className="heading" >Status: </span>
        <span style={{marginRight:"10px"}} >Wrong Answer</span>

        <span className="heading">Time: </span>
        <span style={{marginRight:"10px"}} >0.92 sec</span>

        <span className="heading">Solution:  </span>
        <span className="fancy1">529883456</span>
       </div>
  }
{/*###########################################################################################3*/}
       <AceEditor
    mode="python"
    theme="tomorrow"
    fontSize="14px"
    showPrintMargin={false}
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    className="editor"
    defaultValue={defaultcode}
    maxLines={24}
    minLines={24}
    style={{width:"90%",marginLeft:"5%",border:"1px solid #d5d5d5"}}
  />


{/*###########################################################################################3*/}
  <div className="buttons_div">
      <button className="mybtn">Open File</button>


    <div>
      <button className="mybtn" style={{marginRight:"20px"}} onClick={()=>runcode()}>Run</button>
      {isloading && <span>Loading</span>}
      <button className="mybtn">Submit</button>
      </div>
  </div>


  {/*###########################################################################################3*/}


  <p style={{marginLeft:"5%",marginTop:"20px",color:"#666",marginBottom:"3px"}}>Custom Input</p>


  {/*###########################################################################################3*/}

  <AceEditor
    mode="python"
    theme="github"
    fontSize="12px"
    showPrintMargin={false}
    onChange={onChangeinput}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    defaultValue=""
    maxLines={7}
    minLines={7}
    showGutter={false}
    style={{width:"90%",marginLeft:"5%",border:"1px solid #d5d5d5"}}
  />




{/* {output.isoutput &&
  <div>
  <p style={{marginLeft:"5%",marginTop:"20px",color:"#666",marginBottom:"3px"}}>Output Box</p>
  
<AceEditor
    mode="markdown"
    fontSize="12px"
    showPrintMargin={false}
    onChange={output.val}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    defaultValue={output.val}
    maxLines={7}
    minLines={7}
    showGutter={false}
    focus={false}
    style={{width:"90%",marginLeft:"5%",border:"1px solid #d5d5d5"}}
    readOnly={true}
    highlightActiveLine={false}

  /></div>} */}

       </div>

      
       </>
    )
}

export default Submit
