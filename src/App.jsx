import React, { useState } from 'react'
import Background from './components/Background/Background'

const App = () => {
  let heroData = [ 
    {text1:"Dive into ",text2:"What You Love"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give into",text2:"Your Passion"},
  ]
 
  const [heroCount, setheroCount] = useState(2)
  const [playStatus, setplayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
