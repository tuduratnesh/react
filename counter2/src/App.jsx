import { useState } from 'react' //hook :special methods which have specific job
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter]= useState(0)

  //let counter = 15
  const addValue = () => {
    if (counter <20){
    counter = counter+1
    setCounter(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0 ){
    setCounter(counter-1)
  }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue} disabled={counter>=20}>Add value</button>
      <br />
      <button onClick={removeValue} disabled={counter<=0}>Remove value {counter}</button>
      <br/>
      <button onClick={reset}>Reset</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
