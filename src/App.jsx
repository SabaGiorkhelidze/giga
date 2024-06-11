import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './Routes/Router'
import NavbarComponent from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>hello</h1> */}
      <NavbarComponent />
      <Router />
    </div>
  )
}

export default App
