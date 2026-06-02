import { useState } from 'react'
import "./App.css"

function App1() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copymessage,setCopyMessage] = useState("")


  const generatePassword = () => {
    let characters = "";
    if(includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz"
    if(includeNumbers) characters += "0123456789"
    if(includeSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    let password = ""
    for(let i=0; i<length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]
    }
    setPassword(password)
  }

  const copyToClipboard = () =>{
    if(!password)return;
    navigator.clipboard.writeText(password)
    setCopyMessage("Password Copied to Clipboard!")
    setTimeout(()=>{
      setCopyMessage("")
    },2000)
  }


  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className="max-w-xl w-full">
        <h1 className='text-4xl font-bold mb-6'>Password Generator</h1>
        <div>
            <button onClick={generatePassword} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">Generate Password</button>
            <input type="text" readOnly className="border border-gray-300 px-4 py-2 rounded-l-lg text-black bg-amber-50 w-full outline-none" value={password} placeholder="Your password will appear here..."/>
            <button onClick={copyToClipboard} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg font-bold transition-colors">Copy</button>
        </div>
        <div>
            <input type="checkbox" id="includeUppercase" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} className="mr-2"/>
            <label htmlFor="includeUppercase">Include Uppercase</label>
            <input type="checkbox" id="includeLowercase" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} className="mr-2"/>
            <label htmlFor="includeLowercase">Include Lowercase</label>
            <input type="checkbox" id="includeNumbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="mr-2"/>
            <label htmlFor="includeNumbers">Include Numbers</label>
            <input type="checkbox" id="includeSymbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="mr-2"/>
            <label htmlFor="includeSymbols">Include Symbols</label>
            
        </div>  
        
      </div>
    </div>
  )
}

export default App1