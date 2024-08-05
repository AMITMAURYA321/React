import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  HOOKS KO USE KESE KRTE H 
//  useState ye usllay  state ko change kr k liye responcible h
 let [Counter,setCounter] = useState(15) // usestate se do chije milte h array k formate m to hamesha iss trah se likhna h hamesa  const [] usestat(kuch bhi pass kr skte h )

// let Counter =10 
// UI CONTROLAR KO REACT CONTROL KRT HAI !! INTERVIWE QUESTION
const addValue=()=>{
 
  setCounter(Counter+1)
  
}

const deletevalue=()=>{
  setCounter(Counter-1)
}
  return (
    <>
     
      <h1>AVENGERS..!</h1>
      <h2>Counter value :{Counter}</h2>
      <button
      onClick={addValue}
      >Add valuse-{Counter}</button>
      <br />
      <button
      onClick={deletevalue}>Delete value-{Counter}</button>
  

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
// function App() {
//   //  HOOKS KO USE KESE KRTE H 
//   //  useState ye usllay  state ko change kr k liye responcible h
//    let [Counter,setCounter] = useState(15) // usestate se do chije milte h array k formate m to hamesha iss trah se likhna h hamesa  const [] usestat(kuch bhi pass kr skte h )
  
//   // let Counter =10 
//   // UI CONTROLAR KO REACT CONTROL KRT HAI !! INTERVIWE QUESTION
//   const addValue=()=>{
   
//     setCounter(Counter+1)
  // inerview aata h is code ko duplicat kr deta h 
  // setCounter(Counter+1)
  // setcounter((preCounter) => prevCounter + 1 )
  // (prevCounter) is liye likha h ki isse bta rahe ki isse prevouse valuse aati hai 
   // setcounter((preCounter) => prevCounter + 1 )
    // setcounter((preCounter) => prevCounter + 1 )
     // setcounter((preCounter) => prevCounter + 1 ) 

    // phir interviwe puchega ki bato bina run kare ki code ka output kta aayega
      // or kya concets h or kya addvaluse krne se kya hoga  
      // jb hum isko run krte h to addvaluse pr click krte h to 
      // one by one increase hoti h valuse  
//   }
  
//   const deletevalue=()=>{
//     setCounter(Counter-1)
//   }
//     return (
//       <>
       
//         <h1>AVENGERS..!</h1>
//         <h2>Counter value :{Counter}</h2>
//         <button
//         onClick={addValue}
//         >Add valuse-{Counter}</button>
//         <br />
//         <button
//         onClick={deletevalue}>Delete value-{Counter}</button>
    
  
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
        
//       </>
//     )
//   }
  
//   export default App
  