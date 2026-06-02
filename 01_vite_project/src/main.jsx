import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hey from './1.jsx'

const anotherapp=(
    
    <a href="https://www.google.com" target='_blank'>google111</a>
  
)
function Lol(){
  return(
    <h1>
      hello ??
    </h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Hey />
      <h1>bfvjhbfvhfsvhsvhfs{anotherapp}</h1>
      <Lol />
      
    </>


  </StrictMode>,
)
