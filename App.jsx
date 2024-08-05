import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {

  
   let myjob={
       username:"AVENGERS",
       age:34 
   }
   let newarray =[1,2,3]
  return (
    <>
      <h1 class='bg-red-600 text p-5 rounded-xl mb-4'>AVENGERS SERIES</h1>
      <Card username="THOR"btntext= "click me"/>
      <Card username="CAPTAIN AMERICA"btntext='visite me'/>
    </>
  )
}
// devui.io yeha se component le skte h 
export default App
