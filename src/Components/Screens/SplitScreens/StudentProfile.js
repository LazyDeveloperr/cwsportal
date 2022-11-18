import React from 'react'
import "./StudentCss.css"
function StudentProfile() {
  return (
    <>
   <div className="justify-center items-center min-h-screen flex w-full" style={{  margin: 0, padding:0,boxSizing: "border-box",fontFamily: 'Poppins'}}>
   <div className="cardx bg-dark shadow-md text-white shadow-black" sx={{ backgroundImage:'url(../../../../public/images/neon.jpg)',backgroundSize:"cover",backgroundRepeat: "no-repeat", color:"#d7d7d7",  height:"340px"}}>
    <div className="pb"></div>
    <div className="info">
      <h1 style={{fontWeight: 500,fontSize: "23px"}}>Lazy Developer</h1>
      <h2 style={{ fontWeight: 500, fontSize: "15px",color: "darkgrey"}}>Senior UX/UI Designer</h2>
    </div>
    <div className="detail items-center justify-center text-center">
      <div className="flex">
      <div className="col">
        <h3 style={{fontWeight:500, fontSize: "18px"}}>1</h3>
        <h4 style={{fontWeight:500, fontSize: "14px", color:"darkgrey"}}>sem</h4>
      </div>
      <div className="col">
        <h3>Male</h3>
        <h4>Gender</h4>
      </div>
      <div className="col">
        <h3>16th May</h3>
        <h4>D.O.B</h4>
      </div>
      </div>
      <div className="flex flex-col px-20 mt-2 text-start">
        <h4 >Bio...</h4>
        <h3 className='text-orange-600'>“Truth can only be found in one place: the code.” ― Robert C. Martin</h3>

      </div>
      <div className="flex flex-col px-20 mt-3">
        <h5 className='fs-5'>My Achievements</h5>
        <div className="text-start pl-44 flex flex-col text-sm ml-2 " style={{color:"#45f3ff"}}>
        <text>✔ very weak in coding</text>
        <text>✔ worst skill</text>
        <text>✔ floap coader</text>
        <text>✔ really Lazy developer...</text>
        </div>
      </div>
    </div>
    
    <div className="items-stretch bottom-1 absolute w-full align-bottom">
    <div className="buttons">
      <button id="follow">Share profile </button>
      <button id="message">Log out</button>
    </div>
    </div>
  </div>
   </div>
    </>
  )
}

export default StudentProfile