import React from 'react'

const Candidate = (props) => {
  return (
    <div>
        <p>Anura Kumara Dissanayake : {props.votes1}</p>
        <p>Sajith Premadasa : {props.votes2}</p>
        <p>Ranil Wicramasighe : {props.votes3}</p>
        <p>Baththaramulle Seelarathana : {props.votes4}</p>
        <p>Dilith Jayaweera : {props.votes5}</p>
    </div>
  )
}

export default Candidate