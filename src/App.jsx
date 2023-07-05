import { useState } from 'react'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUser = (user) => {
    setUsersList((prevState) => [...prevState, user])
  }
  return (
    <div className='app'>
      <UserForm addUser={addUser} />
      <UsersList usersList={usersList} />
    </div>
  )
}

export default App
