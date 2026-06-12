import './App.css'
import Usercontextprovider from './Context/usercontexprovider'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {
  return (
    <Usercontextprovider>
      <div>
        <h1>Context API Demo</h1>
        <Login />
        <Profile />
      </div>
    </Usercontextprovider>
  )
}

export default App
