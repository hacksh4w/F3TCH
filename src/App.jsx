import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Upload from './components/Upload/Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Upload/>
    </div>
  )
}

export default App
