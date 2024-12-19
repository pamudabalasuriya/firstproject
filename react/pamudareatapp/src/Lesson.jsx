import React, { use, useEffect, useState } from 'react'

const Lesson = () => {
    useEffect(()=> {
        console.log("Component Renderd");
    },[]);

    const [color, setColor] = useState("Red");

    useEffect(()=> {
        console.log("Color Changed");
    }, [color]);

    
    const changeColor = ()=> {
        setColor("Green")
    }

  return (
    <div>Lesson
        <p>I Like {color}</p>
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Lesson