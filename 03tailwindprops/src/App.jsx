import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username='chai aur code' text="welcome for chai"/>
    <Card username="Ratnesh" text="welcome for coding"/>
    <Card username="Tudu" />
    </>
  )
}

export default App
