import { useState } from 'react'
import imgOn from './assets/off.svg'
import imgOff from './assets/on.svg'
import Mute from './components/Mute-button.jsx'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(imgOn);

  function setPicture () {
    if (toggle === imgOn) {
      setToggle(imgOff);
    }
    else if (toggle === imgOff){
      setToggle(imgOn);
    }
  }

  return (
    <div>
      <Mute
      src={toggle}
      function={setPicture}
      />
    </div>
  )
}

export default App
