import React from 'react'
import '../Background.css'

function BackgroundC() {
  return (
    <div className="background-container">
      <img
      style={{ 
          width: '100%', 
          height:"730px",
          objectFit: 'cover' 
        }} 
        src="bg2.jpg"
        alt="Background Image"
        className="background-image"
      />
      <div className="text-overlay">
        <h1 style={{fontSize:"50px",fontWeight:"bold"}}>Coffee, Snacks and more..</h1>
      </div>
    </div>
  )
}

export default BackgroundC