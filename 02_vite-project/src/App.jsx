import { useState } from 'react'
import './App.css'

function App() {
  //let counter=5;
  let [counter,set_xCounter]=useState(0)//here we like eclared a variabe and a function to update the variable and the initial value of the variable is 0.
  const add_value=()=>{
    if (counter < 5) {
      counter=counter+1;
      set_xCounter(counter);
      console.log(counter)
      console.log(Math.random()*10);
    }
  }


  const removeValue=()=>{
    if (counter > 0) {
      counter-=1; 
      set_xCounter(counter);
      console.log(counter)
      console.log(Math.random()*10);
    }
  }
  
  
    


  return (
    <>
    <h1>
      hello idiot
    </h1>
    <h2>counter value:{counter}</h2>

    
    <button onClick={add_value}>add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
    
      
    </>
  )
}

export default App
