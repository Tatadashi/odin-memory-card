import '../styles/App.css'
import { useState } from 'react'
import Top from './topSection.jsx'


function App() {
  const [score, setScore] = useState([]);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Top score={score.length} highScore={highScore}/>
      <div>Main</div>
    </>
  )
}

export default App
