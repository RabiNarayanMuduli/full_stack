import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add_value=()=>{
    setCount(count=> count+1)
  }
  const sub_value=()=>{
    setCount(count => count-1)
  }




  return(
    <>
    <div className='bg-green-400 text-black p-4 rounded-md '>TailWind test</div>
    <button onClick={add_value} className='bg-black text-white p-4 rounded-md '>click me</button>
    <button onClick={sub_value}className='bg-black text-white p-4 rounded-md '>click me</button>
    <p className='bg-green-400 text-black p-4 rounded-md '>counter value:{count}</p>
    <h2 className='bg-green-400 text-black p-4 rounded-md '>
      Previous Counter value is : {count-1}
    </h2>
    </>
  )
}

export default App
