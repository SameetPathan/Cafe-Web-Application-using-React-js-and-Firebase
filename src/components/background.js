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
      <div className="text-overlay" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", fontFamily:"cursive" }}>
            Good Coffee will always find the audience !
        </h1>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", fontFamily: "cursive" }}>
            We provide a variety of unique and best coffees.
        </h1>
    </div>
    
    
    </div>
  )
}

export default BackgroundC