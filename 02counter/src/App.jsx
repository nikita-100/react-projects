import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // let counter = 5

  const [counter,setCounter] = useState(15)

  const addValue = ()=>{
  // counter = counter + 1
  setCounter(counter+1)
  
  }
  

  function removeValue(){
    setCounter(counter-1)

  } 

  if(counter < 0){
    setCounter(0)
  }
  else if(counter > 20){
    setCounter(20)
  }


  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add</button>
    <button onClick={removeValue}>Delete</button>
    </>
  ) 
}

export default App
