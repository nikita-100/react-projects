
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with nick!</h1>
      <Login />
      <Profile />
    </UserContextProvider> 
  
  )
}

export default App
