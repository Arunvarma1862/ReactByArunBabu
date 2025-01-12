import React from 'react'
import { memo } from 'react'

function Card({state1}) {
    console.log("card rendered")
  return (
    <div s style={{
        background: state1 ? "green" : "red",
        width: "300px",
        height: "100px",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center", 
        padding: "1rem",
    }}>Card based on state1</div>
  )
}

export default memo(Card)