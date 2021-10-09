import React from 'react'
import './Topbar.css'

const Topbar = () => {
    return (
        <>
        <div className="topbar" >

           <img className="logoimage" src="https://cdn.codechef.com/sites/all/themes/abessive/cc-logo-sd.svg" alt="codechef is a compitative programming socity"/>
           
           <div className="rightdiv">
           
           <div className="box1">
           <input type="text" className="input" placeholder="Username or Email"></input>
           <input type="password" className="input" placeholder="Password"></input>
           <button type="submit" className="button">Login</button>
          

          <div className="vl"></div>
          <div className='google'></div>
          <div className='github'></div>
          <div className='facebook'></div>

          <div className="vl"></div>

          <button type="submit" className="button">New User</button>
           </div>
           
           </div>
        </div>
        </>
    )
}

export default Topbar
