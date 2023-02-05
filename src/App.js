
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i=0; i < 9; i++) {
      hills.push(
        <MoleContainer
        key={i}
        score={score}
        setScore={setScore} />
      )
    }

    return (
      <div style={{'display': 'flex' }}>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
        <h1> React-A-Mole </h1>
        {score}
        {createMoleHill()}
    </div>
  );
}

export default App;