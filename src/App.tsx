import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false);

  const showCard = () =>{
      setShow(p => !p)
  }

  return (
   <div>
    {show && <div>UHI</div>}
   <button onClick={showCard}>SHOW</button>
   </div>
  )
}

export default App
