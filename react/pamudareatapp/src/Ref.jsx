import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [value, setValue] = useState(0)
    const count = useRef(0)

    useEffect (()=>{
        count.current = count.current + 1;
        console.log(count.current);
    })

  return (
    <div>
        <h1>Count APP</h1>
        <button onClick={()=>{
            setValue(value + 1)
        }}>+</button>
        <p>{value}</p>
        <button onClick={()=> {
            setValue(value - 1)
        }
        }>-</button>
        <p>Render Count : {count.current}</p>
    </div>
  )
}

export default Ref