import React from "react";

const EventHandling = () => {

  const handleEvent = (e: React.MouseEvent<HTMLDivElement>) =>{
          console.log("Mouse Entered Click" , e.currentTarget);
  }
  const handleClick = (e : React.MouseEvent<HTMLButtonElement>) =>{
       console.log('Click me ', e.currentTarget)
  }
  return (
    <div onMouseEnter={handleEvent}>
        <h1>Event Handling</h1>
        <button onClick={handleClick}>Click me </button>
    </div>
  )
}

export default EventHandling
