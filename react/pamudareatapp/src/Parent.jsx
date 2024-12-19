import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <h1>Welcome to React!</h1>
      {/* Passing the 'name' prop to the Child component */}
      <Child name={"john"} age = {15} />
     
    </div>
  )
}

export default Parent