import React from 'react'

const Child = (props) => {
  return (
    <div>
        <p>get props from parent {props.name}</p>
        <p>age is : {props.age}</p>
    </div>
  )
}

export default Child