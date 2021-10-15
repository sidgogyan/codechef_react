import React ,{useState}from 'react'
import "./Submit.css"

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";


const Submit = () => {

 
const defaultcode=`import java.util.*;

public class Main{

    public static void main(String []args){

        //write your code here

    }
}`
  

    function onChange(newValue) {
        console.log("change", newValue);
      }




    

   

      
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
       
       
{/*###########################################################################################3*/}
       <AceEditor
    mode="java"
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
      <button className="mybtn" style={{marginRight:"20px"}}>Run</button>
      <button className="mybtn">Submit</button>
      </div>
  </div>


  {/*###########################################################################################3*/}


  <p style={{marginLeft:"5%",marginTop:"20px",color:"#666",marginBottom:"3px"}}>Custom Input</p>


  {/*###########################################################################################3*/}

  <AceEditor
    mode="markdown"
    theme="github"
    fontSize="12px"
    showPrintMargin={false}
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    defaultValue=""
    maxLines={7}
    minLines={7}
    showGutter={false}
    style={{width:"90%",marginLeft:"5%",border:"1px solid #d5d5d5"}}
  />


       </div>

      
       </>
    )
}

export default Submit
