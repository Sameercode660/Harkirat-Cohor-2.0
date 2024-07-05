import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
import LandingPage from './components/LandingPage'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
let numberOfRendering = 0;

function App() {

  let increment = 1;
  // let [increment, setIncrement] = useState(1)
  numberOfRendering += 1;
  return (
    <>
     {/* <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<React.Suspense fallback={"loading..."}> <Dashboard></Dashboard> </React.Suspense>}></Route>
          <Route path='/landing' element={<React.Suspense fallback={"loading..."}> <LandingPage></LandingPage> </React.Suspense>}></Route>
        </Routes>
     </BrowserRouter> */}
    <div>
      <p>Component Rerender count: {numberOfRendering}</p>
      <span>{increment}</span>
      <button onClick={() => {
        // setIncrement(increment += 1)
        increment += 1;
        console.log(increment)
      }} >Increment</button>
    </div>

    </>
  )
}

export default App
