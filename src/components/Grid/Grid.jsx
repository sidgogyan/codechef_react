import React from 'react'
import "./Grid.css"

const Grid = () => {
  return (
   <div style={{marginRight:"20px"}}>
     <div className="mygrid1">
    <div className="mygrid2">
    <div className="mygrid3">
    <div className="mygrid4">
    <div className="mygrid5" style={{backgroundImage: "url('https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png')", backgroundSize: "350px 200px", backgroundPosition: "right center"}}>
        <div className='desc'>
          Detailed explaination of 
        </div>

        <div className='title'>
          Graphs Algorithums
        </div>
    </div>
        
        </div>
        <div className="bot_base">
       

        <div style={{flex:'1'}}>
        <h1>80</h1>
          <h3>problems</h3>
        </div>

        <div style={{flex:'1'}}>
        <h1>6</h1>
          <h3>section</h3>
        </div>

        
        
        </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default Grid