// Task 4: Dark Mode Toggle 
// Requirements: Create a Dark Mode / Light Mode switch.
//  Store current mode using useState().
//   Change page background and text color dynamically.
//    Display current mode on the screen.
//     Topics: useState, Dynamic Styling, Events

import React, { useState } from 'react'

const Toggle = () => {

  const [mode, setMode] = useState(false)

  const handleClick = () => {
    setMode(!mode)
  }

  const style = {
    backgroundColor: mode ? "black" : "white",
    color: mode ? "white" : "black",
    height: "100vh",
    padding: "20px"
  }

  return (
    <div style={style}>
      
      <h2>{mode ? "Dark Mode" : "Light Mode"}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ullam ut optio. Ipsam, quo debitis ipsa nihil id eveniet suscipit, nesciunt consectetur perspiciatis nemo corporis minus error reiciendis provident ad.</p>

      <button onClick={handleClick}>
        Toggle Mode
      </button>

    </div>
  )
}

export default Toggle