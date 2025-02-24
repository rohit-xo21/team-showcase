import { useState } from 'react'

import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  
  const data = [
    {
      name: "John Doe",
      jobTitle: "Software Engineer"
    },
    {
      name: "Rohithraj K A",
      jobTitle: "Full-stack developer"
    }
  ]

  return (
    <>
      {data.map((person,i) => <TeamMemberCard person={person} key={i}/>)}
    </>
  )
}

export default App
