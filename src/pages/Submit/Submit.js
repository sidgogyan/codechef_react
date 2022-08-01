import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import "./Submit.css"
import axios from 'axios';
import AceEditor from "react-ace";
import { BASEDIR } from '../../constant/Links';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";



const Submit = () => {


let {name}=useParams(); 
const [defaultcode,setdefaultcode]=useState(localStorage.getItem(name)?localStorage.getItem(name):undefined)
const [code, setcode] = useState(defaultcode)
const [input, setinput] = useState(undefined)
const [result, setresult] = useState("")
const [isloading, setisloading] = useState(false)
const [post,setpost]=useState({})


useEffect(() => {

   const getpost=async()=>{
     const data=await axios.get(`${BASEDIR}/problem/${name}`)

     setpost(data.data.message)
     if(defaultcode===undefined){
      setcode(data.data.message.template_code)
     }
     
     
     
    }

    getpost();
   
    
    
  },[]);



const [output, setoutput] = useState({
  isoutput:false,
  value:""
})
  

    function onChange(newValue) {
        
        setcode(newValue)
       localStorage.setItem(name,newValue)
      //  console.log(localStorage.getItem(name))
      }
    
      function onChangeinput(newValue) {
        
        setinput(newValue)
      
      }

const submitcode=(async()=>{
  setisloading(true)
  const body={
    usercode:code,
    problemID:1,
  }
   const res=await axios.post(`${BASEDIR}/api/run_code/judge`,body)
   console.log(res.data)
   setisloading(false)
   setresult(res.data)
   window.scrollTo({
    top:100,
    behavior:'smooth'
    })
})

      const runcode=(async()=>{
       setoutput({
        isoutput:false,
        val:""
      })
      setisloading(true)
      setresult("")
        

      const body={
        usercode:code,
        input:input,
      }
       const res=await axios.post(`${BASEDIR}/api/run_code/`,body)
       

       setoutput({
         isoutput:true,
         val:res.data.val
       })

       console.log(res.data.val)
      
      //  if(res.data.val=="wrong"){
      //   setresult("wrong")
      //  }
      //  else{
      //   setresult("right")
      //  }

       setisloading(false)

     


      })
    return (
       <>
       <div className="question_box1">

       <div className="upperdiv1">
        <span className="heading">Problem Name: </span>
        <span className="fancy1">{post.problemName}</span>

        <span className="heading">Problem Code: </span>
        <span className="fancy1">{post.problemCode}</span>
       </div>
{/*###########################################################################################3*/}
{/* <div className="upperdiv2">

</div> */}
       
{result.status=='1' && <div className="upperdiv1" style={{border: "1px solid #71b968",backgroundColor: "#e4fae1"}}>
        <span className="heading" >Status: </span>
        <span style={{marginRight:"10px"}} >{result.message}</span>

        <span className="heading">Time: </span>
        <span style={{marginRight:"10px"}} >0.92 sec</span>

        <span className="heading">Solution:  </span>
        <span className="fancy1">529883456</span>
       </div>
}

  {result.status==='0' && <div className="upperdiv1" style={{border: "1px solid red",backgroundColor: "#fcf1f1"}}>
        <span className="heading" >Status: </span>
        <span style={{marginRight:"10px"}} >{result.message}</span>

        <span className="heading">Time: </span>
        <span style={{marginRight:"10px"}} >0.92 sec</span>

        <span className="heading">Solution:  </span>
        <span className="fancy1">529883456</span>
       </div>
  }
{/*###########################################################################################3*/}
       <AceEditor
    mode="java"
    theme="textmate"
    fontSize="14px"
    showPrintMargin={false}
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    value={code}
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
      <button className="mybtn" onClick={()=>submitcode()}>Submit</button>
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




{output.isoutput &&
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

  /></div>} 

       </div>

      
       </>
    )
}

export default Submit
