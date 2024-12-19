import React from 'react'
import Candidate from './Candidate'

const Votes = () => {
  return (
    <div>
        <h1>Presidential Election 2024</h1>
        <Candidate 
            votes1={"5,634,915"}
            votes2={"4,363,035"}
            votes3={"2,299,767"}
            votes4={"5,000"}
            votes5={"2,000"}
            />
    </div>
  )
}

export default Votes