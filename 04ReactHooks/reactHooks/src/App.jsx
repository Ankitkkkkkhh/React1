import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // let Counter=15

  let [Count,setCount]=useState(0)
  const advalue=()=>{
    // console.log("Clicked",Count);
    // Count= Count+1
    setCount(Count+1)
  }
  
  const RemoveVall=()=>{
    if (Count>0) {
      setCount(Count-1)
    }
  }

  return (
   <>
    <h1> Chai | aur | React</h1>
    <h2>Count Valur:{Count}</h2>

    <button onClick={advalue}>Add Value{Count}</button>
    <br/>
    <br/>
    <button onClick={RemoveVall}>Remove Value Value:{Count}</button>
    <p>Footer:{Count}</p>

   </>
  )
}

export default App
