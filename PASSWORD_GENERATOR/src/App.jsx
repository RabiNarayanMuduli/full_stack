import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(3)
  const [password, setPassword] = useState("")

  // The different sets of characters we can use
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const num = "0123456789"
  const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-="
  const allChars = alpha + num + sym

  // One smart function to generate passwords based on the passed-in characters
  const generateCustomPassword = (charactersToUse) => {
    let newPassword = ""
    for (let i = 0; i < count; i++) {
      newPassword += charactersToUse[Math.floor(Math.random() * charactersToUse.length)]
    }
    setPassword(newPassword)
  }

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied!"); 
  }

  return (
    <>
      <div className="container flex items-center justify-center h-screen bg-black text-white">
        <div className="box flex flex-col items-center justify-center max-w-lg w-full rounded overflow-hidden shadow-lg bg-gray-200 p-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-6">Password Generator</h1>
          
          <div className="flex w-full mb-6">
            <input 
              type="text" 
              readOnly 
              className="border border-gray-300 px-4 py-2 rounded-l-lg text-black w-full outline-none" 
              value={password} 
              placeholder="Your password will appear here..."
            />
            <button onClick={copyPasswordToClipboard} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg font-bold transition-colors">Copy</button>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button onClick={() => generateCustomPassword(allChars)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold transition-colors">
              Generate Mixed Password
            </button>
            
            <div className="flex justify-between gap-2 mt-2">
              <button onClick={() => generateCustomPassword(alpha)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition-colors">Alphabets</button>
              <button onClick={() => generateCustomPassword(num)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition-colors">Numbers</button>
              <button onClick={() => generateCustomPassword(sym)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition-colors">Symbols</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
